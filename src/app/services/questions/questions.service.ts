import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(exam_id) {
    return this.http.get(configs.ip + "/questions/" + exam_id);
  }

  updateQuestionCode(code, std_id, qts_id) {
    return this.http.patch(configs.ip + "/question/code/" + std_id + "/" + qts_id, { code });
  }

  createQuestion(name, description, difficulty, code, exam_id) {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("difficulty", difficulty);
    formData.append("code", code);
    formData.append("exam_id", exam_id);
    return this.http.post<any>(configs.ip + "/question", formData);
  }

  deleteQuestion(qst_id) {
    return this.http.delete(configs.ip + "/question");
  }


}
