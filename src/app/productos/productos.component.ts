import { Component } from '@angular/core';
import { ProductoDto } from '../dto/ProductoDto';
import { ProductosService } from './productos.service';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  providers: [ProductosService]
})
export class ProductosComponent {
	public productos:Array<ProductoDto>;
	public producto:ProductoDto = new ProductoDto();
	public esVenta:boolean;

	constructor(
		private _productosService: ProductosService
	){
		this.esVenta = false;
	}

	ngOnInit(){
		this._productosService.consultarProductos().subscribe(
			result => {
				this.productos = result;

				if(!this.productos){
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	registrarVenta(producto){
		this.producto = new ProductoDto();
		this.producto.id = producto.id; 
		this.producto.nombre = producto.nombre; 
		this.producto.valor = producto.valor;

		this.esVenta = true;
	}

	cancelar(){
		this.producto = new ProductoDto();
		this.esVenta = false;
	}

	recibirDatos(event){
		this.esVenta = event.nombre;
		console.log(event.nombre);
	}
}