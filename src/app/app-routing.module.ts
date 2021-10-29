import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './ZapatosABC/estudiantes/estudiantes.component';
import { FormularioComponent } from './ZapatosABC/estudiantes/formulario/formulario.component';
import { PersonajesComponent } from './ZapatosABC/personajes/personajes.component';
import { ProfesoresComponent } from './ZapatosABC/profesores/profesores.component';
import { ZapatosAbcComponent } from './ZapatosABC/zapatos-abc/zapatos-abc.component';

const routes: Routes = [
  {
    path: '',
    component: ZapatosAbcComponent,
    children: [
      {
        path: 'personajes',
        component: PersonajesComponent
      },
      {
        path: 'estudiantes',
        component: EstudiantesComponent
      },
      {
        path: 'profesores',
        component: ProfesoresComponent
      },
    ]
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
