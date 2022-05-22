import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';
import { TheatersService } from './theaters.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private theaterService: TheatersService) {}

  movies: IMovie[] = [];

  getAllMovies = () => {
    const observable = this.http.get<IMovie[]>(`http://localhost:3001/movies/${this.theaterService.selectedTheater}`)
    observable.subscribe((response:IMovie[]) => {
      try {
        console.log(response)
        this.movies = response;
        
      } catch (error) {
        
      }
    })
  }

  deleteMovie = (id:number) => {
    const observable = this.http.delete(`http://localhost:3001/movies/${id}`)
    observable.subscribe((response) => {
      console.log(response)
      this.getAllMovies();
    })
  }

  
  addMovie = () => {
    const observable = this.http.post(`http://localhost:3001/movies/`, {})
    observable.subscribe((response) => {
      console.log(response)
      this.getAllMovies();
    })
  }

}
