import {Component, Input, OnInit} from '@angular/core';
import {Movie} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() {
  }

  ngOnInit() {
  }

}
