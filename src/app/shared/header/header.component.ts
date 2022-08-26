import { Component, OnInit } from '@angular/core';
import { infoPagina } from '../../interfaces/info-paginas.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoServicio:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
