import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private backendService: BackendService) {
    console.log('posts');
    this.backendService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

}
