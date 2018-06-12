import { CountryModule } from './country.module';

describe('CountryModule', () => {
  let countryModule: CountryModule;

  beforeEach(() => {
    countryModule = new CountryModule();
  });

  it('should create an instance', () => {
    expect(countryModule).toBeTruthy();
  });
});
