import {HttpClient} from '@angular/common/http';
import {Person} from './../interfaces/interfaces';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(): Observable<Person> {
    return this.http.get<Person>('http://localhost:8080/person');
  }

  updateUser(person: Person) {
    return this.http.put('http://localhost:8080/persons' + person.login, person);
  }

  getUsers(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>('http://localhost:8080/persons');
  }

  deleteUser(person: Person) {
    return this.http.delete('http://localhost:8080/persons/' + person.login);
  }
}
