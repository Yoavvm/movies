import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  constructor(public stateService: StateService) {}

  openNewMovieModal = () => {
    this.stateService.isModalOpen = true;
  }


}
