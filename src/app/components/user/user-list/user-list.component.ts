import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  @Input() locationList: any[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userSvc: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
        }
      );
  }

}
