import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppContentAreaComponent } from './app-content-area/app-content-area.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppToolbarComponent,
    AppContentAreaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
