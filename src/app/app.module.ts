import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafletMapExampleComponent } from './components/leaflet-map-example/leaflet-map-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletMapExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
