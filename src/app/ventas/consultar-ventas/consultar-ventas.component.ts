import { Component, Input } from '@angular/core';
import { VentaDto } from '../../dto/VentaDto';
import { UsuarioDto } from '../../dto/UsuarioDto';
import { ProductoDto } from '../../dto/ProductoDto';
import { ConsultarVentasService } from './consultar-ventas.service';

@Component({
  selector: 'consultar-ventas',
  templateUrl: './consultar-ventas.component.html',
  providers: [ConsultarVentasService]
})
export class ConsultarVentasComponent {
	public ventas:Array<VentaDto>;
	public mostrarVentas:boolean;

	constructor(
		private _consultarVentasService: ConsultarVentasService,
	){
		this.mostrarVentas = false;
	}

	consultarVentas(){
		this._consultarVentasService.consultarVentas().subscribe(
			result => {
				this.ventas = result;

				if(this.ventas){
					if(this.ventas.length > 0){
						this.mostrarVentas = true;	
					}else{
						this.mostrarVentas = false;
						alert("No existen registros");
					}
                }else{
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}