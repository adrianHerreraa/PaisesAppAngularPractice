import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {

  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  regionActiva: string = '';
  paisesFromTable: Country[] = [];
  errorExist: boolean = false;

  constructor( private paisService: PaisService ) {}

  getActiveCssClass(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    this.regionActiva = region;
    
    this.paisService.getPaisPorRegion( region )
      .subscribe( (paises) => {
        this.errorExist = false;
        this.paisesFromTable = paises;
      }, (err) => {
        console.log("Error de consulta");
        this.errorExist = true;
      });
  }
}
