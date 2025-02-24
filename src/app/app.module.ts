import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance/attendance.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EditstudentComponent,
    AddstudentComponent,
    AttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
