import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  user: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userSvc: UserService) { }

  ngOnInit() {
    let userId;

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          userId = params['userId'];
        }
      );

    this.userSvc.findUserById(userId)
      .subscribe(
        (data: any) => {
          this.user = data;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find location';
          this.errorFlag = true;
        }
      );
  }
}
