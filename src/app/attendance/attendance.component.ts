import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  records:Student[]=[];
  selectedRoll:string[]=[];
  filteredData:Student[]=[];
  noOf=0;
  constructor(private service:StudentService) {

  }

  

  ngOnInit() {
    this.service.getStudents().subscribe((data)=>{
      this.records=data;
      this.filteredData=data;
    })
  }

  
  toggleSelection(rollNumber: string | undefined) {
    if (rollNumber) {
      const index = this.selectedRoll.indexOf(rollNumber);
      if (index === -1) {
        this.selectedRoll.push(rollNumber); // Add if not present
      } else {
        this.selectedRoll.splice(index, 1); // Remove if already selected
      }
    }
  }

  submitted() {

    this.service.updateAttendance(this.selectedRoll).subscribe((data)=>{
      this.selectedRoll=[];
      alert(data.message)
    },err=> {
      console.log(err)
    })
  }


  selectedFilter: string | null = null; 

filterByProgram(program: string) {
  if (this.selectedFilter === program) {
    
    this.filteredData = [...this.records];
    this.selectedFilter = null; 
  } else {
   
    this.filteredData = this.records.filter(student =>
      student.programName?.toLowerCase().includes(program.toLowerCase())
    );
    this.selectedFilter = program; 
  }
}



  genai() {

  }

  aws() {

  }

}
