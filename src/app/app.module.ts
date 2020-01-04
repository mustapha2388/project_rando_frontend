import { HikeRepositoryService } from './services/hike-repository.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { HikeListeComponent } from './components/hike-liste/hike-liste.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HikeDetailComponent } from './components/hike-detail/hike-detail.component';
import { HikeEditComponent } from './components/hike-edit/hike-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HikeListeComponent,
    HikeDetailComponent,
    HikeEditComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HikeRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
