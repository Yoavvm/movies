import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-choice',
  templateUrl: './movie-choice.component.html',
  styleUrls: ['./movie-choice.component.css']
})
export class MovieChoiceComponent implements OnInit {

  constructor(public movieService:MoviesService) { }

  
  ngOnInit(): void {
  }

}
