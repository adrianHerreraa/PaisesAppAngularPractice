import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: String = 'https://restcountries.com/v2';
  //private apuURL: String = 'https://restcountries.com/v2/name/mexico';

  constructor( private http: HttpClient ) { }

  buscarPais( termino:String ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisWithKey( id: string ): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);

  }

}
