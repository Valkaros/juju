import { Component, OnInit, OnDestroy, } from '@angular/core';
import { producto } from '../../models/productos.models';
import { DataTablesModule } from "angular-datatables";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zapatos-abc',
  templateUrl: './zapatos-abc.component.html',
  styleUrls: ['./zapatos-abc.component.css']
})
export class ZapatosAbcComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;

  public dataSource = new Array<producto>();

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      }
    };
    this.http.get('https://localhost:44311/api/Productos')
    .subscribe((res: any) => {
      this.data = res;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
