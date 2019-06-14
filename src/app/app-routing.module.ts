import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-me',
    loadChildren: './about-me/about-me.module#AboutMeModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  // {
  //   path: 'projects',
  //   loadChildren: './projects/projects.module#ProjectsModule'
  // },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
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
