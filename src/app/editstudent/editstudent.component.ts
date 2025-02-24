import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  fileSelected!: File;
  imagePreview: string | null = null;  // Store image preview
  studentForm!:FormGroup;
  constructor(private route: ActivatedRoute, private service: StudentService, private fb: FormBuilder, private router: Router) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rollNumber: ['', Validators.required],
      branch: ['', Validators.required],
      programName: ['', Validators.required],
      mockinterview: [''],
      hrInterview:[''],
      leetcodeurl: [''],
      github: [''],
      hackerrank:[''],
      codechef:[''],
      linkedin:['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getByRollNumber(id).subscribe((data) => {
        console.log(data)
        if (data) {
          // Set form values
          this.studentForm.patchValue({
            name: data.student.name,
            rollNumber: data.student.rollNumber,
            email: data.student.email,
            branch: data.student.branch,
            programName: data.student.programName,
            mockinterview: data.student.mockinterview,
            hrInterview: data.student.hrInterview,
            leetcodeurl: data.student.leetcodeurl,
            github: data.student.github,
            hackerrank:data.student.hackerrank,
            codechef:data.student.codechef,
            linkedin:data.student.linkedin
          });

          // Convert Base64 to image preview
          if (data.image) {
            this.imagePreview = `data:image/jpeg;base64,${data.image}`;
          }
        }
      });
    }
  }

  uploadImage(event: any) {
    this.fileSelected = event.target.files[0];

    // Show new image preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.fileSelected);
  }

  submitForm() {
    if (this.studentForm.valid) {
      const formData = new FormData();

      // Append form values
      Object.keys(this.studentForm.value).forEach((key) => {
        formData.append(key, this.studentForm.value[key]);
      });

      // Append the selected file (only if a new file is chosen)
      if (this.fileSelected) {
        formData.append('file', this.fileSelected);
      }

      this.service.updateStudent(formData).subscribe(
        (data) => {
          this.studentForm.reset();
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error)
          alert('Failed to update student!');
        }
      );
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}

