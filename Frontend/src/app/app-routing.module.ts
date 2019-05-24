import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { PersonaComponent } from './components/persona/persona.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { CursoComponent } from './components/curso/curso.component';
import { RedComponent } from './components/red/red.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'persona', component: PersonaComponent},
  { path: 'familia', component: FamiliaComponent},
  { path: 'unidad', component: UnidadComponent},
  { path: 'carrera', component: CarreraComponent},
  { path: 'instructor', component: InstructorComponent},
  { path: 'curso', component: CursoComponent},
  { path: 'red', component: RedComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
