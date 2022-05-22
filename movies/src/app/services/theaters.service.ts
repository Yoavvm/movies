import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ITheater from '../models/ITheater';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor(private http: HttpClient) { }

  theaters: ITheater[] = [];
  selectedTheater: number = 1;

  getAllTheaters = () => {
    const obserable = this.http.get<ITheater[]>('http://localhost:3001/theaters/')
    obserable.subscribe((response:ITheater[]) => {
      this.theaters = response;
    })
  }



}

