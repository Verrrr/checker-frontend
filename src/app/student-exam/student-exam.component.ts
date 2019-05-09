import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StdQtsCasesService } from '../services/std-qts-cases/std-qts-cases.service';
import { QuestionsService } from '../services/questions/questions.service';

@Component({
  selector: 'app-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.css']
})
export class StudentExamComponent implements OnInit {
  std_id: any;
  questions: any;
  constructor(
    private route: ActivatedRoute,
    private stdQtsCasesService: StdQtsCasesService,
    private questionService: QuestionsService

  ) { }

  ngOnInit() {
    this.std_id = this.route.snapshot.paramMap.get("std_id");
    this.getStdQtsCases(this.std_id);

  }
  getStdQtsCases(std_id) {
    this.stdQtsCasesService.getStudentQuestionWithCases(std_id)
      .subscribe((questions) => {
        this.questions = questions;
      }, err => console.log(err));
  }

  save(question) {
    this.questionService.updateQuestionCode(question.code, this.std_id, question.qts_id)
      .subscribe((response) => {
        console.log(response);
      }, err => console.log(err));
  }



}
