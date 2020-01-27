import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Movie} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Array<Movie>;

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('http://localhost:8080/movies');
  }

  deleteMovie(movie: Movie) {
    return this.http.delete('http://localhost:8080/movies/' + movie.idMovie);
  }
}
