export interface Country {
  id: string;
  iso2Code: string;
  name: string;
  region: Adminregion;
  adminregion: Adminregion;
  incomeLevel: Adminregion;
  lendingType: Adminregion;
  capitalCity: string;
  longitude: string;
  latitude: string;
}

export interface CountryFlag {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
}

export interface Adminregion {
  id: string;
  iso2code: string;
  value: string;
}
