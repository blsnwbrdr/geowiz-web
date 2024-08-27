export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  cca2: string;
  capital: string[];
  latlng: number[];
  flag: string;
}
