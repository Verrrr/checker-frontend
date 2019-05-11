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
  selectedQuestionIndex = 0;
  isViewingTestCases = false;
  currentTestCases: any;
  currentQuestion: any;
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
    this.stdQtsCasesService.getStudentQuestions(std_id)
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

  viewTestCases(qst_id) {
    this.stdQtsCasesService.getStudentTestCases(this.std_id, qst_id)
      .subscribe((test_cases) => {

        this.currentTestCases = test_cases;
        this.isViewingTestCases = true;
      }, (err) => console.error(err));
  }

  submit(question) {
    this.stdQtsCasesService.submitCode(question, this.std_id)
      .subscribe((response) => {
        this.getStdQtsCases(this.std_id);
        this.viewTestCases(question.qts_id);
      }, err => console.error(err));
  }



}
