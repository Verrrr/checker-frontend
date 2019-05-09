import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';
@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private http: HttpClient) { }


  getExams() {
    return this.http.get(configs.ip + "/exams");
  }

  createExam(exam: { any }) {
    return this.http.post(configs.ip + "/exams", exam);
  }

  updateExam(exam: { name: string, date: string, time_from: string, time_to: string }, exam_id) {
    return this.http.patch(configs.ip + "/exams/" + exam_id, exam);
  }

  deleteExam(exam_id) {
    return this.http.delete(configs.ip + "/exams/" + exam_id);
  }
}
