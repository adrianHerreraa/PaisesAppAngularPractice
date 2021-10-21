import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  errorExist: boolean = false;

  constructor( private paisService: PaisService ){}


  buscar() {
    console.log(this.termino);
    this.errorExist = false;

    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        console.log(paises);
        //this.paises = paises;
        console.log(paises);
      }, (err) => {
        this.errorExist = true;
        console.log(err);
        //this.paises   = [];
      });

  }

  /*buscar(){
    this.errorExist = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( resp => {
        console.log(resp);
      }, err => {
        this.errorExist = true;
      });
  } */

}
