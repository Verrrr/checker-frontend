import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from 'src/app/config/configs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  adminLogin(body: { any }) {

    return this.http.post<any>(configs.ip + "/admin/login", body);
  }
}
