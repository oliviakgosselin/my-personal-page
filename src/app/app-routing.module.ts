import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-me',
    loadChildren: './modules/about-me/about-me.module#AboutMeModule'
  },
  {
    path: 'blog',
    loadChildren: './modules/blog/blog.module#BlogModule'
  },
  // {
  //   path: 'projects',
  //   loadChildren: './modules/projects/projects.module#ProjectsModule'
  // },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: '**',
    redirectTo: 'about-me',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
