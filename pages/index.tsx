import { NextPage } from 'next';
import { Show } from '../src/api/shows-service/types/show-types';
import { Title } from '../src/components/title/title';
import { ShowList } from '../src/components/show-list/show-list';
import { ShowsService } from '../src/api/shows-service/shows-service';

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
    const { data } = await ShowsService.getAllShows();

    return {
      props: {
        showList: data.map((response) => response.show),
      },
    };
  } catch (error) {
    return {
      props: {
        showList: [
          {
            id: 1,
            name: 'test',
            summary:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
              'Labore atque natus ipsum architecto eum expedita possimus ad.' +
              'Voluptas expedita, accusamus inventore ratione accusantium quasi odit,' +
              'atque ex nemo eius molestias.',
          },
          {
            id: 2,
            name: 'test1',
            summary: 'Lorem ipsum dolor',
          },
        ],
      },
    };
  }
}

export default Home;
