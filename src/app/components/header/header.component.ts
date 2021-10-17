import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Observable} from 'rxjs';
import {CustomerModel} from '../../models/customer-model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  customersList$ :Observable<any>;
  allCustomers: CustomerModel[] =[];
  displayedColumns: string[] = ['id', 'name', 'address'];

  dataSource;
  isLoadingData: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _customerService: CustomerService){

  }

  ngOnInit() {

    this.getCustomers();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getCustomers(): void{
    this.isLoadingData = true;

    this._customerService.getAllCustomers().subscribe((res: CustomerModel[])=>{
      this.allCustomers = res;

      this.dataSource = new MatTableDataSource(res);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });


      this.isLoadingData = false;
    },()=>{
      this.isLoadingData = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
