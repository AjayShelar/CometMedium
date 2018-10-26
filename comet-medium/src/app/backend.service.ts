import { Injectable } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { StateService } from "./state.service";
import { environment } from "../environments/environment";
import { catchError } from "rxjs/internal/operators/catchError";
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
}
