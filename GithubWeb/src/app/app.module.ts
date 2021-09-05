import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data-service/data.service';
import { FormsModule } from '@angular/forms';
import { GithubFormComponent } from './github-form/github-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { DateCountPipe } from './date-count.pipe'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    GithubFormComponent,
    HomeFormComponent,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
