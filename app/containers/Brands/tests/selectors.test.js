import { makeSelectBrandsData } from '../selectors';

describe('makeSelectBrandsData', () => {
  const brandsDataSelector = makeSelectBrandsData();
  it('should select the brands data', () => {
    const fixture = 'foo';
    const mockedState = {
      brands: {
        data: fixture,
      },
    };
    expect(brandsDataSelector(mockedState)).toEqual(fixture);
  });
});
