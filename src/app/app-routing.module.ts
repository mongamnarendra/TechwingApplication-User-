import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"edit/:id",
    component:EditstudentComponent
  },
  {
    path:"add",
    component:AddstudentComponent
  },
  {
    path:"attendance",
    component:AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
