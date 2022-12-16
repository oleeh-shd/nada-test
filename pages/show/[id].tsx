import { GetStaticProps, NextPage } from 'next';
import { Show } from '../../src/api/show-requests/show-dto/show-dto';
import { getAllShow, getShowById } from '../../src/api/show-requests/shows-requests';
import { ShowPreview } from '../../src/components/show-preview/show-preview';
import { Title } from '../../src/components/title/title';

const Show: NextPage<{ show: Show }> = ({ show }) => {
  return (
    <>
      <Title />
      <ShowPreview
        name={show.name}
        image={show.image}
        rating={show.rating}
        summary={show.summary}
      />
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
  const { data } = await getShowById(Number(params?.id));

  return {
    props: { show: data },
  };
};

export default Show;
