import {Component, OnInit} from '@angular/core';
import {SeatDto} from 'src/app/interfaces/interfaces';
import {TicketService} from 'src/app/services/ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {


  seats = new Map<number, Array<SeatDto>>();
  seatChosen: SeatDto;

  constructor(private ticketService: TicketService, private router: Router) {
  }

  ngOnInit() {
    this.ticketService.getTakenSeats()
      .subscribe(data => {
        this.seats = data;
      });
  }

  onClick(seat: SeatDto) {
    console.log(seat);
    if (seat.taken === true) {
      return;
    }
    if (seat.taken === false) {
      if (this.seatChosen) {
        this.seatChosen.taken = false;
      }
      this.seatChosen = seat;
      seat.taken = null;
      return;
    }
    if (seat.taken === null) {
      seat.taken = false;
      this.seatChosen = null;
      return;
    }
  }

  onConfirm() {
    this.ticketService.setSeat(this.seatChosen);
    this.router.navigateByUrl('/confirm');
  }

}
