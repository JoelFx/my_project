import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //  this line imports the Angular storage module
    { provide: Storage, useFactory: provideStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// This provides Angular storage using Ionic's Storage module
export function provideStorage() {
  return localStorage; 
}

