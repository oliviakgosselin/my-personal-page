import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
// import { GistModule } from '@sgbj/angular-gist';

@NgModule({
  // imports: [CommonModule, BlogRoutingModule, GistModule],
  imports: [CommonModule, BlogRoutingModule],
  declarations: [BlogComponent],
})
export class BlogModule {}
