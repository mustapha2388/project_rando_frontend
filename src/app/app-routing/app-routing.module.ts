import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HikeListeComponent} from '../components/hike-liste/hike-liste.component';


export const ROUTES: Routes = [
  {path: 'hikes', component: HikeListeComponent},
  {path: '', redirectTo: 'hikes', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],

  exports : [RouterModule]
})
export class AppRoutingModule { }
