import { NextPage } from 'next';
import { Show } from '../src/api/show-requests/types/show-types';
import { getAllShow } from '../src/api/show-requests/shows-requests';
import { Title } from '../src/components/title/title';
import { ShowList } from '../src/components/show-list/show-list';

const Home: NextPage<{ showList: Show[] }> = ({ showList }) => {
  return (
    <>
      <Title home />
      <ShowList showList={showList} />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const { data } = await getAllShow();

    return {
      props: {
        showList: data.map((response) => response.show),
      },
    };
  } catch (error) {
    return {
      props: {
        showList: {},
      },
    };
  }
}

export default Home;
