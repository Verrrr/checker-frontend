import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any;
  isCreating = false;
  isUpdating = false;
  selectedUser: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    }, err => console.error(err));
  }

  deleteUser(user_id) {
    this.userService.deleteUser(user_id).subscribe((response) => {
      console.log(response);
      this.getUsers();
    }, err => console.error(err));
  }

  createUser(f: NgForm) {
    console.log(f)
    this.userService.createUser(f.value).subscribe((response) => {
      this.getUsers();
    }, err => console.error(err));
  }

  updateUser(firstname, lastname, role, username, password, user_id) {
    if (password != "") {
      let body = {
        firstname,
        lastname,
        role,
        username,
        password
      }
      this.userService.updateUser(body, user_id).subscribe((response) => {
        this.getUsers();
      }, err => console.error(err));

    } else {
      alert("Please fill the password");
    }
  }

  openUpdateModal(user) {
    this.selectedUser = user;
    this.isUpdating = true;
  }

}
