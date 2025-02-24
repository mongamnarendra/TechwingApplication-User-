import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
