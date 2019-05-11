import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminExamsComponent } from './admin-exams/admin-exams.component';
import { AdminExamComponent } from './admin-exam/admin-exam.component';
import { StudentExamComponent } from './student-exam/student-exam.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'exams',
        component: AdminExamsComponent,
      },
      {
        path: 'exam/:exam_id',
        component: AdminExamComponent
      },
      {
        path: 'leaderboard/:exam_id',
        component: LeaderboardComponent
      }
    ]
  },
  {
    path: 'student-exam/:std_id',
    component: StudentExamComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: '404'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
