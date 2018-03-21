import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { VentaDto } from '../../dto/VentaDto';
import { URLS } from '../../utils/Utils';

@Injectable()
export class ConsultarVentasService{
	public url:string;

	constructor(private _http: HttpClient){
		this.url = URLS.CONSULTAR_VENTAS;
	}

	consultarVentas():Observable<any>{
        return this._http.get(this.url);
	}
}