import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;
  lista: any[] = ["Slytherin", "Gryffindor", "Ravenclaw", "Hufflepuff"];
  hogwarts: FormGroup;
  casa: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.hogwarts = new FormGroup({
      myselect: new FormControl('')
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      }
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  serch() {
    this.casa = this.hogwarts.controls['myselect'].value;
    debugger;
    this.http.get('http://hp-api.herokuapp.com/api/characters/house/' + this.casa)
    .subscribe((res: any) => {
      this.data = res;
      this.dtTrigger.next();
    });
  }
}
