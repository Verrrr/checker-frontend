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

  getStudentQuestions(std_id) {
    return this.http.get(configs.ip + "/student-questions/" + std_id);
  }

  getStudentTestCases(std_id, qts_id) {
    return this.http.get(configs.ip + "/student-test-cases/" + std_id + "/" + qts_id);
  }

  submitCode(question, std_id) {
    return this.http.patch(configs.ip + "/student-exam/submit/" + std_id, question);
  }
}
