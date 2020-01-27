import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

import * as moment from 'moment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(login: string, password: string) {
    return this.http
      .post('http://localhost:8080/login', {
        login,
        password
      })
      .pipe(tap(data => this.setSession(data)));
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('role');
  }

  public isAdmin() {
    if (localStorage.getItem('role') === 'ROLE_ADMIN') {
      return true;
    }
    return false;
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'seconds');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('role', authResult.role);
  }
}
