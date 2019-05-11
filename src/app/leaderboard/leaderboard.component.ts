import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../services/leaderboard/leaderboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  isLoading = true;
  exam_id: any;
  leaderboard: any;
  constructor(private leaderboardService: LeaderboardService, private route: ActivatedRoute) {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit() {
    this.exam_id = this.route.snapshot.paramMap.get("exam_id");
    this.getLeaderboard(this.exam_id);
  }

  getLeaderboard(exam_id) {
    this.leaderboardService.getLeaderboard(exam_id)
      .subscribe((leaderboard) => {
        this.leaderboard = leaderboard;
        console.log(this.leaderboard)
      }, (err) => console.error(err));
  }

}
