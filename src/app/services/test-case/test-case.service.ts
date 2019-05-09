import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';
@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  constructor(private http: HttpClient) { }

  // getTestCases(qst_id){
  //   this.http.get()
  // }


  createTestCase(qts_id, inputs, points, isHidden) {
    let body = {
      qts_id, inputs, points, isHidden
    }
    return this.http.post<any>(configs.ip + "/test-case", body);
  }

  getTestCases(qts_id) {
    return this.http.get(configs.ip + "/test-case/" + qts_id);
  }

  deleteTestCase(test_id) {
    return this.http.delete(configs.ip + "/test-case/" + test_id);
  }

  updateTestCase(inputs, points, isHidden, test_id) {
    let body = { inputs, points, isHidden }
    return this.http.patch(configs.ip + "/test-case/" + test_id, body);
  }
}
