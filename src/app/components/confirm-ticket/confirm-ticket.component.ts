import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {Screening, SeatDto} from '../../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-ticket',
  templateUrl: './confirm-ticket.component.html',
  styleUrls: ['./confirm-ticket.component.scss']
})

export class ConfirmTicketComponent implements OnInit {


  price = 14;
  progressBarShow = false;
  screening: Screening;
  seat: SeatDto;


  constructor(private ticketService: TicketService, private router: Router) {
  }


  ngOnInit() {
    this.screening = this.ticketService.screening;
    this.seat = this.ticketService.seat;

  }


  onConfirmClick() {
    this.ticketService.price = this.price;
    this.router.navigateByUrl('/payment');
  }

}
