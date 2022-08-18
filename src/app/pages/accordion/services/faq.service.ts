import {Injectable} from '@angular/core';
import {map, Observable, pluck, share} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Country, CountryFlag} from '@accordion/interfaces/country.interface';

const FOLDER: string = 'assets/data/'

@Injectable()
export class FaqService {


  countryFlag$ = this.httpClient.get<CountryFlag[]>(FOLDER + 'country-flag.json')
    .pipe(
      share()
    )

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Get Country's
   */
  getCountry(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(FOLDER + 'country.json')
  }

  /**
   * Get Flag Country by Code
   * @param code Code Country
   */
  getFlagByCodeCountry(code: string) {

    // Fn Filter by Code
    const flagByCode = (flags: CountryFlag[]) =>
      flags.find(flag => flag.code === code) ?? {image: ''}

    return this.countryFlag$
      .pipe(
        map<CountryFlag[], Pick<CountryFlag, 'image'>>(flagByCode),
        pluck('image')
      )
  }

}
