import { GetStaticProps, NextPage } from 'next';
import { Show } from '../../src/api/shows-service/types/show-types';
import { InfoSection } from '../../src/components/info-section/info-section';
import { ShowPreview } from '../../src/components/show-preview/show-preview';
import { Title } from '../../src/components/title/title';
import { Cast } from '../../src/api/shows-service/types/cast-types';
import { ShowsService } from '../../src/api/shows-service/shows-service';

const Show: NextPage<{ show: Show; cast: Cast[] }> = ({ show, cast }) => {
  return (
    <>
      <Title />
      <ShowPreview
        name={show.name}
        image={show.image}
        rating={show.rating}
        summary={show.summary}
      />
      <InfoSection show={show} cast={cast} />
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
  const { data: show } = await ShowsService.getShowById(Number(params?.id));
  const { data: cast } = await ShowsService.getCastByShowId(Number(params?.id));

  return {
    props: { show, cast },
  };
};

export default Show;
