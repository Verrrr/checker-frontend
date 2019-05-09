import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students/students.service';
import { NgForm } from '@angular/forms';
import { QuestionsService } from '../services/questions/questions.service';
import { TestCaseService } from '../services/test-case/test-case.service';
import { StdQtsCasesService } from '../services/std-qts-cases/std-qts-cases.service';

@Component({
  selector: 'app-admin-exam',
  templateUrl: './admin-exam.component.html',
  styleUrls: ['./admin-exam.component.css']
})
export class AdminExamComponent implements OnInit {
  exam_id: number;
  students: any;
  questions: any;
  code_file: any;

  isAddingStudent = false;
  isUpdatingStudent = false;
  isQtsModalAdding = false;
  isViewingTestCases = false;
  isAddingTestCases = false;

  selectedStudent: any;
  selectedQuestion: any;
  selectedTestCases: any;
  selectedIndex = 0;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private questionService: QuestionsService,
    private testCaseService: TestCaseService,
    private stdQtsCasesService: StdQtsCasesService
  ) { }

  ngOnInit() {
    this.exam_id = Number(this.route.snapshot.paramMap.get("exam_id"));
    this.getStudents();
    this.getQuestions();
  }

  viewTestCases(question, i) {
    this.selectedQuestion = question;
    this.selectedIndex = i;
    this.isViewingTestCases = true;
  }



  createTestCase(f) {
    console.log(f.value)
    this.testCaseService.createTestCase(this.selectedQuestion.qts_id, f.value.inputs, f.value.points, f.value.isHidden)
      .subscribe((response) => {
        this.isAddingTestCases = false;
        this.getQuestions();
        let students_cases = [];
        this.students.forEach(element => {
          students_cases.push([response.insertId, element.std_id]);
        });
        this.stdQtsCasesService.insertBulkStdCases(students_cases)
          .subscribe((response) => {
            console.log(response);
          }, err => console.log(err));
      }, err => console.error(err));
  }

  getQuestions() {
    this.questionService.getQuestions(this.exam_id).subscribe((questions) => {
      console.log(questions)
      this.questions = questions;
    }, (err) => console.error(err));
  }
  createQuestion(f) {
    this.questionService.createQuestion(f.value.name, f.value.description, f.value.difficulty, this.code_file, this.exam_id)
      .subscribe((response) => {
        console.log(response);
        this.isQtsModalAdding = false;
        this.getQuestions();
        let student_questions = [];
        this.students.forEach((element) => {
          student_questions.push([element.std_id, response.insertId]);
        });
        this.stdQtsCasesService.insertBulkStdQts(student_questions)
          .subscribe((response) => {
            console.log(response);
          }, err => console.error(err));
      }, err => console.error(err));

  }
  getFile(event) {
    console.log(event.target.files[0]);
    this.code_file = event.target.files[0];
  }


  getStudents() {
    this.studentService.getStudents(this.exam_id).subscribe((students) => {
      this.students = students;
    }, err => console.error(err));
  }

  showUpdateModal(student) {
    this.selectedStudent = student;
    this.isUpdatingStudent = true;
  }

  deleteStudent(std_id) {
    this.studentService.deleteStudent(std_id).subscribe((response) => {
      this.getStudents();
    }, err => console.error(err));
  }

  createStudent(f: NgForm) {
    this.studentService.createStudent(f.value, this.exam_id).subscribe((response) => {
      this.isAddingStudent = false;
      this.getStudents();
      let student_cases = [];
      let student_question = [];
      this.questions.forEach((element, index) => {
        student_question.push([response.insertId, element.qts_id]);
        element.test_cases.forEach((element2, index2) => {
          student_cases.push([element2.test_id, response.insertId]);
        });
      });

      this.stdQtsCasesService.insertBulkStdQtsCases(student_cases, student_question)
        .subscribe((response) => {
          console.log(response);
        }, err => console.error(err));


    }, (err) => console.error(err));
  }

  updateStudent(name, school, course, year, std_id) {
    this.studentService.updateStudent(name, school, course, year, std_id).subscribe((response) => {
      this.isUpdatingStudent = false;
      this.getStudents();
    }, err => console.error(err));
  }





  //Students









}
