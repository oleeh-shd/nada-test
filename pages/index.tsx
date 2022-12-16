import { NextPage } from 'next';
import { Show } from '../src/api/show-requests/show-dto/show-dto';
import { getAllShow } from '../src/api/show-requests/shows-requests';
import { HomeTitle } from '../src/components/home-title/home-title';
import { ShowList } from '../src/components/show-list/show-list';

const Home: NextPage<{ showList: Show[] }> = ({ showList }) => {
  return (
    <>
      <HomeTitle />
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
