import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  progressBarShow = false;
  ownerForm: FormGroup;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  };

  public onLoginClick() {
    const val = this.ownerForm.value;
    if (val.login && val.password) {
      this.progressBarShow = true;
      this.authService.login(val.login, val.password).subscribe(
        () => {
          this.router.navigateByUrl('/');
        },
        error => (this.progressBarShow = false)
      );
    }
  }

}

