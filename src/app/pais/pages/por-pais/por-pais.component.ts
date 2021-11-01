import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})

export class PorPaisComponent {

  termino: string = '';
  
  errorExist: boolean = false;
  
  paisesFromTable: Country[] = [];

  paisesSugerencias: Country[] = [];

  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;

    this.errorExist = false;
    this.termino = termino;
  
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paisesFromTable = paises;

        if (paises.length <= 0) {
          this.errorExist = true;
          this.paisesFromTable = [];
        }

        /*if(resp.status == 404){
          console.log('Parche de error por Kilian');
          this.errorExist = true;
        } */
      },
      (err) => {
        this.errorExist = true;
        this.paisesFromTable = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.errorExist = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService
      .buscarPais(termino)
      .subscribe(
        (paises) => {
          this.paisesSugerencias = paises.splice(0, 4)
        },
        (err) => {
          this.paisesSugerencias = [];
        },
      );
  }

  buscarSugerido( termino: string ){
    this.mostrarSugerencias = false;
    this.paisesSugerencias = [];
    this.buscar(termino);
  }

}
