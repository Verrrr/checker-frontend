import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }



  getStudents(exam_id) {
    return this.http.get(configs.ip + "/students/" + exam_id);
  }

  getStudent(std_id) {
    return this.http.get<any>(configs.ip + "/student/" + std_id);
  }

  createStudent(student, exam_id) {
    student["exam_id"] = exam_id;
    return this.http.post<any>(configs.ip + "/student", student);
  }

  updateStudent(name, school, course, year, std_id) {
    let student = {
      name, school, course, year
    }
    return this.http.patch(configs.ip + "/student/" + std_id, student);
  }
  deleteStudent(std_id) {
    return this.http.delete(configs.ip + "/student/" + std_id);
  }
}
