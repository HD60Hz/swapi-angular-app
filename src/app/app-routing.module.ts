import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'people', component: PeopleComponent },
  {path: 'vehicles', component: VehiclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }