import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HikeListeComponent} from '../components/hike-liste/hike-liste.component';
import {HikeDetailComponent} from '../components/hike-detail/hike-detail.component';
import {HikeEditComponent} from '../components/hike-edit/hike-edit.component';


export const ROUTES: Routes = [
  {path: '', redirectTo: 'hikes', pathMatch: 'full'},
  {path: 'hikes', component: HikeListeComponent},
  {path: 'hikes/hike-detail/:id', component: HikeDetailComponent},
  {path: 'hikes/hike-edit/:id', component: HikeEditComponent}
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
