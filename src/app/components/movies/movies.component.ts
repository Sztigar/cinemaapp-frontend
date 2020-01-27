import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from 'src/app/interfaces/interfaces';
import {MoviesService} from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Array<Movie>>;

  constructor(public movieService: MoviesService) {
  }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

}
