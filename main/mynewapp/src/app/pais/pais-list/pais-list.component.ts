import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais-service.service';
import { PaisDetail } from '../pais-detail';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  selected: boolean = false
  selectedPais!:PaisDetail
  paises: Array<PaisDetail> = [];
  constructor(private paisService: PaisService) {}

  getPaises() {
    this.paisService.getPaises().subscribe((apiData) => {
      this.paises = apiData;
    });
  }
  onSelected(pais: PaisDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getPaises();
  }

}
