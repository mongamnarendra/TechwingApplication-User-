import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private baseUrl= "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getByRollNumber(rollnumber:string):Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getByRoll/${rollnumber}`)
  }
}
