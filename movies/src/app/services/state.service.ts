import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  isModalOpen:boolean = false;
  constructor() { }
}
