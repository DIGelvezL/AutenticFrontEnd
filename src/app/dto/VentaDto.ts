import { UsuarioDto } from './UsuarioDto';
import { ProductoDto } from './ProductoDto';

export class VentaDto{
	public id;
	public cantidad;
	public idPreventa;
	public idFactura;
	public lugarDespacho;
	public fechaVenta;
	public usuario:UsuarioDto;
	public producto:ProductoDto

	constructor(){
		this.id = null;
		this.cantidad = null;
		this.idPreventa = null;
		this.idFactura = null;
		this.lugarDespacho = null;
		this.fechaVenta = null;
		this.usuario = null;
		this.producto = null;
	}
}