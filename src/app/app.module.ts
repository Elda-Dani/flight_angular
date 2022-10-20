import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddflightComponent } from './addflight/addflight.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewallflightComponent } from './viewallflight/viewallflight.component';
import { SeachflightComponent } from './seachflight/seachflight.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes:Routes=[
  {
    path:"",component:AddflightComponent
  },
  {
    path:"view",component:ViewallflightComponent
  },
  {
    path:"search",component:SeachflightComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    ViewallflightComponent,
    SeachflightComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
