import { makeSelectPartnersData } from '../selectors';

describe('makeSelectPartnersData', () => {
  const partnersDataSelector = makeSelectPartnersData();
  it('should select the partners data', () => {
    const fixture = 'foo';
    const mockedState = {
      partners: {
        data: fixture,
      },
    };
    expect(partnersDataSelector(mockedState)).toEqual(fixture);
  });
});
