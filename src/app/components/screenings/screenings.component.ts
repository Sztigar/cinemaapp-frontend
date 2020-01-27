import {Component, OnInit} from '@angular/core';
import {Movie} from 'src/app/interfaces/interfaces';
import {Observable} from 'rxjs';
import {MoviesService} from 'src/app/services/movies.service';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.scss']
})
export class ScreeningsComponent implements OnInit {

  movies$: Observable<Array<Movie>>;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.movies$ = this.moviesService.getMovies();
  }

}
