import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { VentaDto } from '../../dto/VentaDto';
import { URLS } from '../../utils/Utils';

@Injectable()
export class RegistrarVentaService{
	public url:string;

	constructor(private _http: HttpClient){}

	registrarVenta(venta: VentaDto):Observable<any>{
		let json = JSON.stringify(venta);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/json');
         
        return this._http.post(URLS.REGISTRAR_VENTA, json, {headers: headers});
	}
}