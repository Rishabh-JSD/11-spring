import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL ="http://localhost:8080/students/students";



  constructor(private httpClient: HttpClient,private http: HttpClient) { }

  getStudentList(): Observable<Student[]>{

    return this.httpClient.get<Student[]>(`${this.baseURL}`);

  }
  submitFormData(formData: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/students/addstudent'; // Replace with your API URL
    return this.http.post(apiUrl, formData);
  }
}

