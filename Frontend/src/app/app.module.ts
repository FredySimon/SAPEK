import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UnidadComponent } from './components/unidad/unidad.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { CursoComponent } from './components/curso/curso.component';
import { RedComponent } from './components/red/red.component';
import { CursoPipe } from './pipes/curso.pipe';
import { AsignacionCarrerasComponent } from './components/asignacion-carreras/asignacion-carreras.component';
import { InstructorPipe } from './pipes/instructor.pipe';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarreraPipe } from './pipes/carrera.pipe';
import { RedPipe } from './pipes/red.pipe';
import { AsignacionRedComponent } from './components/asignacion-red/asignacion-red.component';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    NavBarComponent,
    NotFoundComponent,
    FamiliaComponent,
    FilterPipe,
    UnidadComponent,
    CarreraComponent,
    InstructorComponent,
    CursoComponent,
    RedComponent,
    CursoPipe,
    AsignacionCarrerasComponent,
    InstructorPipe,
    CarreraPipe,
    RedPipe,
    AsignacionRedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    ButtonsModule.forRoot(),
    SortableModule.forRoot(),
    TooltipModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
