import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private token;
  private data;
  public post;
  constructor(public router: Router,
    public httpClient: HttpClient) {
    const obj = JSON.parse(localStorage.getItem("laData"));
    // console.log(obj);
    if (obj != null && "key" in obj) {
      this.token = obj["key"];
      this.data = obj;
    }
  }

  setData(data: any) {
    this.token = data["key"];
    localStorage.setItem("laData", JSON.stringify(data));

  }
  setPost(post) {
    this.post = post;

  }
  getToken(): string {
    return this.token;
  }
  getPost() {
    return this.post;
  }
  logout() {
    localStorage.clear();
    this.data = null;
    this.router.navigate(["/login"]);
  }
}
