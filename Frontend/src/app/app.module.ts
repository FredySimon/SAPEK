import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
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

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
