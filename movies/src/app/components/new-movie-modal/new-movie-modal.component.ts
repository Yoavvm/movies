import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.css']
})
export class NewMovieModalComponent implements OnInit {

    movieName:string = ''
    theaterId:number = 0
    movieDate:string = ''
    movieTime:string = ''
    movieLength:string = ''
    

  constructor() { }

  ngOnInit(): void {
  }

}
