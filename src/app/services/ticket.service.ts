import {Ticket, Tickets} from './../interfaces/interfaces';
import {SeatDto} from 'src/app/interfaces/interfaces';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Screening} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  url = 'http://localhost:8080/screenings';
  screening: Screening;
  seat: SeatDto;
  price: number;

  constructor(private http: HttpClient) {
  }

  setScreening(screening: Screening) {
    this.screening = screening;
  }

  setSeat(seat: SeatDto) {
    this.seat = seat;
  }

  getTakenSeats(): Observable<Map<number, Array<SeatDto>>> {
    return this.http.get<Map<number, Array<SeatDto>>>('http://localhost:8080/screenings/' + this.screening.idScreening + '/seats');
  }

  getTickets(): Observable<Array<Tickets>> {
    return this.http.get<Array<Tickets>>('http://localhost:8080/tickets');
  }

  buyTicket(ticket: Ticket): Observable<any> {
    return this.http.post<any>('http://localhost:8080/tickets', ticket);
  }

  deleteTicket(ticket: Tickets) {
    return this.http.delete('http://localhost:8080/tickets/' + ticket.idTicket);
  }
}
