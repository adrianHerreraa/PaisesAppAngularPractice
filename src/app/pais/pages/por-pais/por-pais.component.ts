import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  errorExist: boolean = false;
  paisesFromTable: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar( termino: string ){
    this.errorExist = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paisesFromTable = paises;

        if(paises.length <= 0){
          this.errorExist = true;
        }

        /*if(resp.status == 404){
          console.log('Parche de error por Kilian');
          this.errorExist = true;
        } */
      }, (err) => {
        this.errorExist = true;
        this.paisesFromTable = [];
      });
  }

  sugerencias( event: string ){
    this.errorExist = false;
    //TODO: Crear sugerencias.
  }

}
