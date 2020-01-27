import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:8080/persons/sign-up';

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    return this.http.post(this.url, user);
  }
}
