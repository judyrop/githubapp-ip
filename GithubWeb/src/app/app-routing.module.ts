import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubFormComponent } from './github-form/github-form.component';

const routes: Routes = [

{ path: '', redirectTo:"/github", pathMatch:"full"},
  { path: 'github', component:GithubFormComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
