import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl="http://localhost:8080";
  private workindaysurl="http://localhost:8080/workingdays/increasecount";
  constructor(private http:HttpClient) { }

  addStudent(student:FormData):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`,student);
  }

  getStudents():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }

  getByRollNumber(roll:string):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getByRoll/${roll}`)
  }

  deleteStudent(id:number):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }

  updateStudent(student:FormData):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update`,student);
  }

  getAttendance():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/attendance/get`)
  }

  updateAttendance(rollNumbers: string[]): Observable<any> {
    this.http.post(`${this.workindaysurl}`,null);
    return this.http.post(`${this.baseUrl}/attendance/updateAttendance`, rollNumbers);
  }
}
