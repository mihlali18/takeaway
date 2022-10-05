import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
