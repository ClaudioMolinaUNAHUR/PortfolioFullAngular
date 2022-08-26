import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-paginas.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-paginas.json')
      .subscribe( (resp:infoPagina) => {
          this.cargada = true;
          this.info = resp;
          console.log(this.info);
      })
  }
}
