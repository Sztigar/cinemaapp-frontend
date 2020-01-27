import {Component, OnInit} from '@angular/core';
import {Person} from '../../interfaces/interfaces';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private ownerForm: FormGroup;
  private maxDate = new Date();
  private progressBarShow = false;
  private person: Person;

  constructor(public userService: UserService, public router: Router) {
  }


  ngOnInit() {

    this.userService.getUser().subscribe(data => this.person = data);

    this.ownerForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  };

  public onRegisterClick() {
    if (this.ownerForm.valid && this.ownerForm.dirty) {
      this.progressBarShow = true;
      const val = this.ownerForm.value;
      const person: Person = {
        login: val.login,
        password: val.password,
        email: val.email,
        firstname: val.firstname,
        surname: val.lastname
      };


    }
  }
}
