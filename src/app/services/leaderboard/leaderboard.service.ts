import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';
@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }


  getLeaderboard(exam_id) {
    return this.http.get(configs.ip + "/leaderboard/" + exam_id);
  }
}
