import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from 'src/app/services/register.service';
import {Person} from 'src/app/interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  private ownerForm: FormGroup;
  private maxDate = new Date();
  private progressBarShow = false;

  constructor(public registerService: RegisterService, public router: Router) {
  }


  ngOnInit() {

    this.ownerForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl('')
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
        surname: val.lastname,
        birthday: val.birthday,
      };

      this.registerService
        .register(person)
        .subscribe(
          data => this.router.navigateByUrl('/login'),
          error => {
            this.progressBarShow = false;
          }
        );
    }
  }
}
