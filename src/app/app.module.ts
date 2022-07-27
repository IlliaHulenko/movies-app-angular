import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    MoviesHomeComponent,
    AddMoviesComponent,
    ButtonComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
