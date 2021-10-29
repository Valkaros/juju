import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;
  formulario: FormGroup;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fnaci: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      depar: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      telc: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      nombreM: new FormControl('', Validators.required),
      ocuM: new FormControl('', Validators.required),
      telM: new FormControl('', Validators.required),
      nombreP: new FormControl('', Validators.required),
      ocuP: new FormControl('', Validators.required),
      telP: new FormControl('', Validators.required),
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

  save() {
    let formulario = {
      nombre: this.formulario.controls['nombre'].value,
      apellido: this.formulario.controls['apellido'].value,
      fnaci: this.formulario.controls['fnaci'].value,
      edad: this.formulario.controls['edad'].value,
      ciudad: this.formulario.controls['ciudad'].value,
      depar: this.formulario.controls['depar'].value,
      pais: this.formulario.controls['nombre'].value,
      telc: this.formulario.controls['apellido'].value,
      direccion: this.formulario.controls['fnaci'].value,
      nombreM: this.formulario.controls['edad'].value,
      ocuM: this.formulario.controls['ciudad'].value,
      telM: this.formulario.controls['depar'].value,
      nombreP: this.formulario.controls['edad'].value,
      ocuP: this.formulario.controls['ciudad'].value,
      telP: this.formulario.controls['depar'].value
    }
    localStorage.setItem("Formulario", JSON.stringify(formulario));
    this.formulario.reset();
  }
}
