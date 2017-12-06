import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  userList: any[];
  query: string;
  admin = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedSvc: SharedService,
              private userSvc: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
        }
      );
    this.admin = this.sharedSvc.user.admin;
  }

  search() {
    this.userSvc.searchUsers(this.query)
      .subscribe(
        (data: any) => {
          this.userList = data;
        },
        (error: any) => {
          this.errorMsg = 'Search failed';
          this.errorFlag = true;
        }
      );
  }

  listAll() {
    this.userSvc.getAllUsers()
      .subscribe(
        (data: any) => {
          this.userList = data;
        },
        (error: any) => {
          this.errorMsg = 'Search failed';
          this.errorFlag = true;
        }
      );
  }
}
