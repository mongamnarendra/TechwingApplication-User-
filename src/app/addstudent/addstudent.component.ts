import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  studentForm!: FormGroup;
  
  fileSelected!:File;

  constructor(private fb:FormBuilder,private service:StudentService,private router:Router) {
    this.studentForm=this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rollNumber: ['', Validators.required],
      branch: ['', Validators.required],
      programName: ['', Validators.required],
      mockinterview: [''],
      hrInterview: [''],
      leetcodeurl: [''],
      github: [''],
      hackerrank:[''],
      codechef:[''],
      linkedin:['']
    });
  }

  uploadImage(event:any) {
    this.fileSelected=event.target.files[0];

  }
  
  submitForm() {
    
    if (this.studentForm.valid) {
      const formData = new FormData();
  
      // Append form values
      Object.keys(this.studentForm.value).forEach(key => {
        formData.append(key, this.studentForm.value[key]);
      });
  
      // Append the selected file
      if (this.fileSelected) {
        formData.append('file', this.fileSelected);
      }
  
      this.service.addStudent(formData).subscribe(
        (data) => {
          this.studentForm.reset();
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error)
          alert('Failed to add student!');
        }
      );
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}