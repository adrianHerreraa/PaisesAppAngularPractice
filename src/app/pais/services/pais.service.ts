import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: String = 'https://restcountries.com/v2';
  //private apuURL: String = 'https://restcountries.com/v2/name/mexico';

  constructor( private http: HttpClient ) { }

  buscarPais( termino:String ): Observable<any> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get(url);
  }

}
