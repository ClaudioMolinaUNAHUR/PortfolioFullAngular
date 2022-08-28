import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from '../interfaces/producto.interface';
import { infoPagina } from '../interfaces/info-paginas.interface';
import { InfoPaginaService } from './info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string = '';
  cargando = true;
  productos: Array<Producto> = [];

  constructor(private http: HttpClient, private infoPagina: InfoPaginaService) { 
    this.url = infoPagina.url
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get(this.url + 'productos_idx.json')
      .subscribe( (resp: Producto) =>{
          let respuesta = Object.values(resp)
          this.productos = respuesta
          console.log(respuesta);
          this.cargando = false;          
        })
  }
}
