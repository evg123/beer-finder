import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  errorFlag = false;
  errorMsg: string;
  userId: number;
  user: any;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  updated: boolean;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );

    this.userService.findUserById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
          this.userId = this.user._id;
          this.username = this.user.username;
          this.email = this.user.email ? this.user.email : '';
          this.firstName = this.user.firstName;
          this.lastName = this.user.lastName;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find user';
          this.errorFlag = true;
        }
      );

    this.updated = false;
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  update() {
    const updatedUser: any = {};
    updatedUser.firstName = this.loginForm.value.firstName;
    updatedUser.lastName = this.loginForm.value.lastName;
    updatedUser.email = this.loginForm.value.email;

    this.userService.updateUser(this.userId, updatedUser)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/user/' + this.userId]);
          this.updated = true;
        },
        (error: any) => {
          this.errorMsg = 'Failed to update user';
          this.errorFlag = true;
        }
      );
  }

  setUpdated(value: boolean) {
    this.updated = value;
  }

  deleteUser() {
    this.userService.deleteUser(this.userId)
      .subscribe((data: any) => {
        if (this.sharedService.user._id === this.userId) {
          this.userService.logout()
            .subscribe(
              (data2: any) => this.router.navigate(['/'])
            );
        } else {
          this.router.navigate(['/user/search']);
        }
      });
  }
}
