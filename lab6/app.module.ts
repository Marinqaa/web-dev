// app.module.ts
import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideRouter, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AboutComponent} from "./about/about.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";
import { routes } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  declarations: [],
  bootstrap: [],
})
export class AppModule { }
