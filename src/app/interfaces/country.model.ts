export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: Object;
  };
  cca2: string;
  capital: Array<string>;
  latlng: Array<number>;
  flag: any;
}
