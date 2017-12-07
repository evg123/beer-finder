import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  userId: number;
  user: any;
  editPermission = false;
  canLogout = false;
  canThank = false;
  showThankers = false;
  isOwner = false;

  constructor(private router: Router,
              private sharedSvc: SharedService,
              private activatedRoute: ActivatedRoute,
              private userSvc: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          if (this.sharedSvc.user._id === this.userId) {
            this.canLogout = true;
            this.editPermission = true;
          }
          if (this.sharedSvc.user.admin) {
            this.editPermission = true;
          }
          if (this.sharedSvc.user._id && this.sharedSvc.user._id !== this.userId) {
            this.canThank = true;
          }
          if (this.sharedSvc.user.locations) {
            this.isOwner = true;
          }

          this.readUserData();
        }
      );
  }

  readUserData() {
    this.userSvc.findUserById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find user';
          this.errorFlag = true;
        }
      );
  }

  logout() {
    this.userSvc.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  thank() {
    this.userSvc.thank(this.sharedSvc.user._id, this.userId)
      .subscribe(
        (data: any) => this.readUserData()
      );
  }

  toggleThankers() {
    this.showThankers = !this.showThankers;
  }
}
