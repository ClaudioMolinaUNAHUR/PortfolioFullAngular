import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { InfoPaginaService } from './info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string = '';
  cargando = true;
  productos: Array<Producto> = [];
  productoFiltrado: Producto[]=[];

  constructor(private http: HttpClient, private infoPagina: InfoPaginaService) { 
    this.url = infoPagina.url
    this.cargarProductos();
  }

  private cargarProductos(){
    return new Promise( (resolve, reject) => {
      this.http.get(this.url + '/productos_idx.json')
        .subscribe( (resp) =>{
            let respuesta = Object.values(resp)
            this.productos = respuesta
            this.cargando = false;          
        })
    })
  }

  getProducto(id:String){
    return this.http.get(`${this.url}/productos/${id}.json`);
  }

  buscarProducto(termino: string){
    if (this.productos.length === 0 ){
        this.cargarProductos().then(() =>{
            this.filtrarProductos(termino)
      });
    }else{
        this.filtrarProductos(termino)
    }   
  }

  private filtrarProductos(termino: string){
    const terminoLower = termino.toLowerCase();
    this.productoFiltrado = [];
    this.productos.forEach( prod =>{
      const {categoria, titulo} = prod
      if(categoria.indexOf(terminoLower) >= 0 || titulo.toLowerCase().indexOf(terminoLower) >= 0){
          this.productoFiltrado.push(prod)
      }
    })
  }
}
