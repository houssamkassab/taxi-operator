import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CabModel} from '../models/cab.model';

@Injectable({
  providedIn: 'root'
})

export class CabService{

  cabApiUrl ='https://61161ff58f38520017a386e7.mockapi.io/api/v1/customer';

  constructor(private _http: HttpClient){}

  getAllCabs(): Observable<CabModel[]>{
    return this._http.get<CabModel[]>(`${this.cabApiUrl}`);
  }
}
