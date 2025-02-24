import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  record: any; 
  tr!:number;
  hr!:number;
  attendancePercentage: number = 0;
  constructor(private route:ActivatedRoute,private service:StudentServiceService) {

  }

  
// Receive student record as input


  ngOnInit() {
    const rollnumber = this.route.snapshot.paramMap.get("rollnumber");
    if(rollnumber) {
      this.service.getByRollNumber(rollnumber).subscribe((data)=>{
        this.record=data;
        this.tr=(this.record.student.mockinterview /10)*100;
        this.hr=(this.record.student.hrInterview/10)*100;
        if (this.record.workingdays > 0) {
          this.attendancePercentage = Math.round(
              (this.record.student.attendanceDetails.attended / this.record.workingdays) * 100
              
          );
      }
      // document.documentElement.style.setProperty('--percentage', this.attendancePercentage.toString());
      },err=>{
        console.log(err)
        alert("adc")
      })
    }
  
  }

  
}
