import { normalizeInfo } from './normalize-info';
import {
  mockData,
  mockDataWithNullStatus,
  mockDataWithNullGenres,
  mockDataWithNullNetwork,
} from './mock-data';

describe('test normalize function', () => {
  it('should return result with full data', () => {
    const data = normalizeInfo(mockData);
    const expectedOutput = [
      {
        key: 'genres',
        value: 'Drama Science-Fiction Thriller',
      },
      {
        key: 'status',
        value: 'Ended',
      },
      {
        key: 'schedule',
        value: 'Thu',
      },
      {
        key: 'Streamed on',
        value: 'CBS',
      },
    ];

    expect(data).toEqual(expectedOutput);
  });

  it('should return result with null genres', () => {
    const data = normalizeInfo(mockDataWithNullGenres);
    const expectedOutput = [
      {
        key: 'genres',
        value: null,
      },
      {
        key: 'status',
        value: 'Ended',
      },
      {
        key: 'schedule',
        value: 'Thu',
      },
      {
        key: 'Streamed on',
        value: 'CBS',
      },
    ];

    expect(data).toEqual(expectedOutput);
  });

  it('should return result with null status', () => {
    const data = normalizeInfo(mockDataWithNullStatus);
    const expectedOutput = [
      {
        key: 'genres',
        value: 'Drama Science-Fiction Thriller',
      },
      {
        key: 'status',
        value: null,
      },
      {
        key: 'schedule',
        value: 'Thu',
      },
      {
        key: 'Streamed on',
        value: 'CBS',
      },
    ];

    expect(data).toEqual(expectedOutput);
  });

  it('should return result with null network', () => {
    const data = normalizeInfo(mockDataWithNullNetwork);
    const expectedOutput = [
      {
        key: 'genres',
        value: 'Drama Science-Fiction Thriller',
      },
      {
        key: 'status',
        value: 'Ended',
      },
      {
        key: 'schedule',
        value: 'Thu',
      },
      {
        key: 'Streamed on',
        value: null,
      },
    ];

    expect(data).toEqual(expectedOutput);
  });
});
