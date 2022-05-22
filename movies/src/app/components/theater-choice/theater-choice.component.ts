import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TheatersService } from 'src/app/services/theaters.service';

@Component({
  selector: 'app-theater-choice',
  templateUrl: './theater-choice.component.html',
  styleUrls: ['./theater-choice.component.css']
})
export class TheaterChoiceComponent implements OnInit {

  constructor(public theaterService:TheatersService, private movieService:MoviesService) { }

  selectedTheater:number = 1;

  initMovies = () => {
    this.movieService.getAllMovies()
  }

  ngOnInit(): void {
    this.theaterService.getAllTheaters()
  }

}
