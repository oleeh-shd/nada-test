import { nomalizeCast } from './normalize-cast';
import { mockData, mockDataWithNull } from './mock-data';

describe('test normalize function', () => {
  it('should return result with full data', () => {
    const data = nomalizeCast(mockData);
    const expectedOutput = [
      {
        key: 'Charlie Stayt',
        value: 'Presenter',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/18/45448.jpg',
      },
    ];

    expect(data).toEqual(expectedOutput);
  });

  it('should return result with partial data', () => {
    const data = nomalizeCast(mockDataWithNull);
    const expectedOutput = [
      {
        key: 'Charlie Stayt',
        value: null,
        image: null,
      },
    ];

    expect(data).toEqual(expectedOutput);
  });
});
