import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { VentaDto } from '../../dto/VentaDto';
import { UsuarioDto } from '../../dto/UsuarioDto';
import { ProductoDto } from '../../dto/ProductoDto';
import { RegistrarVentaService } from './registrar-ventas.service';

@Component({
  selector: 'registrar-ventas',
  templateUrl: './registrar-ventas.component.html',
  providers: [RegistrarVentaService]
})
export class RegistrarVentasComponent {
	public venta:VentaDto = new VentaDto();;
	public usuario:UsuarioDto;
	@Input('productoSeleccionado') productoSeleccionado:ProductoDto;
	public ventaList:Array<VentaDto>;
	@Output() desde_el_hijo = new EventEmitter();

	constructor(
		private _registrarVentaService: RegistrarVentaService,
		private route: ActivatedRoute,
        private router: Router
	){
		this.usuario = new UsuarioDto();
	}

	registrarVenta(){
    	this.venta.fechaVenta = new Date();
    	this.venta.lugarDespacho = "Medellin";
    	this.venta.usuario = this.usuario;
    	this.venta.producto = this.productoSeleccionado;

    	this.guardarVenta(this.venta);
	}

	guardarVenta(venta){
		this._registrarVentaService.registrarVenta(venta).subscribe(
			result => {
				if(result.respuestaDto && result.respuestaDto.codigo == 0){
					this.router.navigate(['consultar-ventas']); 
					alert("Se guardó la venta correctamente.");     
                }else{
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	volver(event){
		this.desde_el_hijo.emit({nombre: false});
	}
}