import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }



  getUsers() {
    return this.http.get(configs.ip + "/users");
  }

  createUser(user: { any }) {
    return this.http.post(configs.ip + "/users", user);
  }

  updateUser(user: { firstname: string, lastname: string, role: string, username: string, password: string }, user_id) {
    return this.http.patch(configs.ip + "/users/" + user_id, user);
  }

  deleteUser(user_id) {
    return this.http.delete(configs.ip + "/users/" + user_id);
  }

}
