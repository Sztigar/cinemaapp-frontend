import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Screening, SeatDto} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  url = 'http://localhost:8080/seats/';

  constructor(private http: HttpClient) {
  }

  getScreenings(): Observable<Array<Screening>> {
    return this.http.get<Array<Screening>>(this.url);
  }

  getScreeningSeats(id: number): Observable<Array<SeatDto>> {
    return this.http.get<Array<SeatDto>>(this.url + id + '/seats');
  }
}
