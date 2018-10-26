import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "posts", component: PostsComponent },
  { path: "post", component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
