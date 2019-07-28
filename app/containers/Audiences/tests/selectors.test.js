import { makeSelectAudienceData } from '../selectors';

describe('makeSelectAudienceData', () => {
  const audiencesDataSelector = makeSelectAudienceData();
  it('should select the audiences data', () => {
    const fixture = 'foo';
    const mockedState = {
      audiences: {
        data: fixture,
      },
    };
    expect(audiencesDataSelector(mockedState)).toEqual(fixture);
  });
});
