import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  term:any;
  records:Student[]=[];
  filteredData:any[]=[];
  constructor(private service:StudentService,private router:Router) {
    
  }
  
  ngOnInit():void {
     this.service.getStudents().subscribe((data)=> {
      this.records=data;
      this.filteredData=data;
     });
  }


  edit(rollNumber:string | undefined) {
    this.router.navigate(["/edit",rollNumber])
  }

  addStudent() {
    this.router.navigate(["add"])
  }

  deleteStudent(id:number) {
    
    this.service.deleteStudent(id).subscribe((data) => {
  
    })
    window.location.reload();
    
  }

  attendance() {
    this.router.navigate(["/attendance"]);
  }

  searchStudent(event: any) {
    console.log(event)
    const input = (event.target).value.toLowerCase();
    this.filteredData = this.records.filter(student =>
      student.rollNumber?.toLowerCase().includes(input)
    
    );
  }
  
}
