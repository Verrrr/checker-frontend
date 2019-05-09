import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../services/exams/exams.service';
import { NgForm } from '@angular/forms';
import * as date_fns from 'date-fns';
@Component({
  selector: 'app-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrls: ['./admin-exams.component.css']
})
export class AdminExamsComponent implements OnInit {
  exams: any;
  selectedExam: any;

  isCreating = false;
  isUpdating = false;
  constructor(private examsService: ExamsService) { }

  ngOnInit() {
    this.getExams();
  }

  getExams() {
    this.examsService.getExams().subscribe((exams) => {
      this.exams = exams;
    }, err => console.error(err));
  }

  updateExam(name, date, time_from, time_to, exam_id) {
    let body = { name, date, time_from, time_to }
    this.examsService.updateExam(body, exam_id).subscribe((response) => {
      this.isUpdating = false;
      this.getExams();

    }, (err) => console.error(err));
  }

  showUpdateModal(exam) {
    this.selectedExam = exam;
    this.isUpdating = true;
  }

  deleteExam(exam_id) {
    this.examsService.deleteExam(exam_id).subscribe((response) => {
      this.getExams();
    }, (err) => console.error(err));
  }

  createExam(f: NgForm) {
    f.value.date = date_fns.format(f.value.date, "MMMM D YYYY")
    f.value.time_from = date_fns.format(f.value.time_from, "hh:mm A")
    f.value.time_to = date_fns.format(f.value.time_to, "hh:mm A")
    this.examsService.createExam(f.value).subscribe((response) => {
      this.isCreating = false;
      this.getExams();
    }, (err) => console.error(err));
  }




}
