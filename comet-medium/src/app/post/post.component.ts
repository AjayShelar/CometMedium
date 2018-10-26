import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit {
  post;
  constructor(public state: StateService) {
    this.post = this.state.getPost();
  }

  ngAfterViewInit() {
  }

}
