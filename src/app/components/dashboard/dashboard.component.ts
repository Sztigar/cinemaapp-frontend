import {Component, OnInit} from '@angular/core';
import {Tickets} from '../../interfaces/interfaces';
import {TicketService} from '../../services/ticket.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  tickets$: Observable<Array<Tickets>>;


  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.tickets$ = this.ticketService.getTickets();
  }
}
