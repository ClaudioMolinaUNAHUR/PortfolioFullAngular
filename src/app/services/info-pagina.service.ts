import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-paginas.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina = {};
  cargada = false;
  equipo: any[] = [];
  url:string = "https://angular-html-ed787-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-paginas.json')
      .subscribe( (resp:infoPagina) => {
          this.cargada = true;
          this.info = resp;
          // console.log(this.info);
      })
  }

  private cargarEquipo(){
    this.http.get(this.url + '/equipo'+'.json')
      .subscribe( resp =>{
        let personas = Object.values(resp)
        for(let persona of personas){
          this.equipo.push(persona);
        }
        // console.log(this.equipo);
      })

  }
}
