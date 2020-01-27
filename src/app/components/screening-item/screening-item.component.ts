import {Component, Input, OnInit} from '@angular/core';
import {TicketService} from 'src/app/services/ticket.service';
import {Movie, Screening} from 'src/app/interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screening-item',
  templateUrl: './screening-item.component.html',
  styleUrls: ['./screening-item.component.scss']
})
export class ScreeningItemComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(private ticketService: TicketService, private router: Router) {
  }

  ngOnInit() {
  }

  pickScreening(screening: Screening) {
    this.ticketService.setScreening(screening);
    this.router.navigateByUrl('/seats');
  }

}
