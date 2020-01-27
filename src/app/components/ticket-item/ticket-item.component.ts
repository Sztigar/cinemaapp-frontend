import {Component, Input, OnInit} from '@angular/core';
import {Tickets} from '../../interfaces/interfaces';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {

  @Input()
  ticket: Tickets;

  constructor() {
  }

  ngOnInit() {
  }

}
