import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { httpInterceptorProviders } from './http-interceptors';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SuiModule } from 'ng2-semantic-ui';
import { AdminExamsComponent } from './admin-exams/admin-exams.component';
import { AdminExamComponent } from './admin-exam/admin-exam.component';
import { StudentExamComponent } from './student-exam/student-exam.component';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AdminExamsComponent,
    AdminExamComponent,
    StudentExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SuiModule,
    CodemirrorModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
