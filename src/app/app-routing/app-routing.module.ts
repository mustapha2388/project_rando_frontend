import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HikeListeComponent} from '../components/hike-liste/hike-liste.component';
import {HikeDetailComponent} from '../components/hike-detail/hike-detail.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'hikes', pathMatch: 'full'},
  {path: 'hikes', component: HikeListeComponent},
  {path: 'hike-detail', component: HikeDetailComponent}
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
