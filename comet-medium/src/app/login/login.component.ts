import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { BackendService } from "../backend.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  error = null;

  constructor(public backendService: BackendService, public router: Router) { }

  ngOnInit() {
  }
  submitForm() {
    this.backendService
      .login(this.form.value.username, this.form.value.password)
      .subscribe(
        data => {
          console.log("Data received");
          this.router.navigate(["posts"]);
        },
        err => {
          this.error = "Failed to login";
        }
      );
  }
}
