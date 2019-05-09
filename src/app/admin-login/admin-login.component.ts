import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (f.valid) {
      this.authService.adminLogin(f.value).subscribe((response) => {
        localStorage.setItem("token", "Bearer " + response.token);
        this.router.navigate(["/admin/dashboard"]);
      }, (err) => console.error(err));
    } else {
      alert("Fill all inputs");
    }
  }

}
