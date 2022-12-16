import { GetStaticProps, NextPage } from 'next';
import { Show } from '../../src/api/show-requests/types/show-types';
import {
  getAllShow,
  getCastByShowId,
  getShowById,
} from '../../src/api/show-requests/shows-requests';
import { InfoSection } from '../../src/components/info-section/info-section';
import { ShowPreview } from '../../src/components/show-preview/show-preview';
import { Title } from '../../src/components/title/title';
import { Cast } from '../../src/api/show-requests/types/cast-types';

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
  const { data } = await getAllShow();

  const paths = data.map(({ show }) => ({
    params: { id: show.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: show } = await getShowById(Number(params?.id));
  const { data: cast } = await getCastByShowId(Number(params?.id));

  return {
    props: { show, cast },
  };
};

export default Show;
