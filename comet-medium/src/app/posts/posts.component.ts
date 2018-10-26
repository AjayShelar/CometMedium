import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private backendService: BackendService, public router: Router, public state: StateService) {
    console.log('posts');
    this.backendService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  openPost(post) {
    this.state.setPost(post);
    this.router.navigate(["post"]);

  }

  ngOnInit() {
  }

}
