import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MoviesComponent } from './movies/movies.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PeopleComponent } from './people/people.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';

/* Custom pipe from npm */
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule,
    MatPaginatorModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ AppComponent, MoviesComponent, VehiclesComponent, PeopleComponent, HeaderComponent, MainPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
