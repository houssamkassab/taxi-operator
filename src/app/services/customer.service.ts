import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerModel} from '../models/customer-model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService{

  customerApiUrl ='https://61161ff58f38520017a386e7.mockapi.io/api/v1/customer';

  allCustomers: CustomerModel[];

  constructor(private _http: HttpClient){}

  getAllCustomers(): Observable<CustomerModel[]>{
    return this._http.get<CustomerModel[]>(`${this.customerApiUrl}`);
  }

  getAllCustomersForCRUD() : void{
    this._http.get<CustomerModel[]>(`${this.customerApiUrl}`).subscribe((res: CustomerModel[])=>{
      this.allCustomers = res;
    });
  }
}
