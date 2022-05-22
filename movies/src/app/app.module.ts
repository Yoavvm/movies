import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterChoiceComponent } from './components/theater-choice/theater-choice.component';
import { MovieChoiceComponent } from './components/movie-choice/movie-choice.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NewMovieModalComponent } from './components/new-movie-modal/new-movie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterChoiceComponent,
    MovieChoiceComponent,
    MovieCardComponent,
    NewMovieModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
