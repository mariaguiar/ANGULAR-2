import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { PorcentajePipe } from './pipes/porcentaje.pipe';
import { GradosPipe } from './pipes/grados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    PorcentajePipe,
    GradosPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
