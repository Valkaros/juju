import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZapatosAbcComponent } from './ZapatosABC/zapatos-abc/zapatos-abc.component';
import { EstudiantesComponent } from './ZapatosABC/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './ZapatosABC/profesores/profesores.component';
import { PersonajesComponent } from './ZapatosABC/personajes/personajes.component';
import { FormularioComponent } from './ZapatosABC/estudiantes/formulario/formulario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ZapatosAbcComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    PersonajesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
