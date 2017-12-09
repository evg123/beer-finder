import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  errorFlag = false;
  errorMsg = '';
  user: any;
  googleLoginUrl = environment.serverBaseUrl + '/google/login';

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() { }

  login() {
    // fetching data from loginForm
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.userService.login(username, password)
      .subscribe(
        (data: any) => {
          if (!data) {
            this.errorMsg = 'Invalid username or password';
            this.errorFlag = true;
            return;
          }
          this.user = this.sharedService.user;
          this.router.navigate(['/user/' + this.user._id]);
        },
        (error: any) => {
          this.errorMsg = 'Login failed';
          this.errorFlag = true;
        }
      );
  }

}
