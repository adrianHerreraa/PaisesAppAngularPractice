import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  errorExist: boolean = false;
  termino: string = "";
  paisesList: Country[] = []

  constructor( private PaisService: PaisService ) { }

  buscarCapital(event: string){
    this.errorExist = false;
    this.termino = event;

    this.PaisService.buscarCapital(this.termino)
    .subscribe( (paises) => {
      
      this.paisesList = paises;

    }, (err) => {
        this.errorExist = true;
        this.paisesList = [];
    });

  }

  sugerencias(event: string){

  }

}
