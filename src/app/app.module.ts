import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list/site-list.component';
import { AddSiteComponent } from './add-site/add-site.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteListComponent,
    AddSiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
