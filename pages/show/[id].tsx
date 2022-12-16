import { GetStaticProps, NextPage } from 'next';
import { Show } from '../../src/api/show-requests/show-dto/show-dto';
import { getAllShow, getShowById } from '../../src/api/show-requests/shows-requests';

const Show: NextPage<{ show: Show }> = ({ show }) => {
  return <div>Show: {show.name}</div>;
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
