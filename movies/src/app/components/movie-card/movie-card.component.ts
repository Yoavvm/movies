import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

  @Input()
  data: IMovie;


  deleteMovie = (movieId: number) => {
    this.movieService.deleteMovie(movieId)
  }

  constructor(private movieService:MoviesService) {}

  ngOnInit(): void {
  }

}
