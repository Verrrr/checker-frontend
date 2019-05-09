import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';
@Injectable({
  providedIn: 'root'
})
export class StdQtsCasesService {

  constructor(private http: HttpClient) { }


  insertBulkStdQtsCases(student_cases, student_questions) {
    let body = {
      student_cases, student_questions
    }
    return this.http.post(configs.ip + "/std-qts-cases", body);
  }

  insertBulkStdQts(student_questions) {
    return this.http.post(configs.ip + "/std-qts", { student_questions });
  }

  insertBulkStdCases(student_cases) {
    return this.http.post(configs.ip + "/std-cases", { student_cases });
  }


  getStudentQuestionWithCases(std_id) {
    return this.http.get(configs.ip + "/std-qts-cases/" + std_id);
  }
}
