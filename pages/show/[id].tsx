import { GetStaticProps, NextPage } from 'next';
import { Show } from '../../src/api/shows-service/types/show-types';
import { InfoSection } from '../../src/components/info-section/info-section';
import { ShowPreview } from '../../src/components/show-preview/show-preview';
import { Title } from '../../src/components/title/title';
import { ShowsService } from '../../src/api/shows-service/shows-service';
import { normalizeInfo, ShowInfo } from '../../src/utils/normalize-info';
import { nomalizeCast } from '../../src/utils/normalize-cast';

const Show: NextPage<{ show: Show; showInfo: ShowInfo[]; cast: ShowInfo[] }> = ({
  show,
  showInfo,
  cast,
}) => {
  return (
    <>
      <Title />
      <ShowPreview
        name={show.name}
        image={show.image}
        rating={show.rating}
        summary={show.summary}
      />
      <InfoSection show={show} cast={cast} showInfo={showInfo} />
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await ShowsService.getAllShows();

  const paths = data.map(({ show }) => ({
    params: { id: show.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: show } = await ShowsService.getShowById(Number(params?.id));
    const { data: cast } = await ShowsService.getCastByShowId(Number(params?.id));

    const normalizedInfo = normalizeInfo(show);
    const normalizedCast = nomalizeCast(cast);

    return {
      props: { show, showInfo: normalizedInfo, cast: normalizedCast },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Show;
