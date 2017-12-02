import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  @Input() showProfile: boolean;

  errorFlag = false;
  errorMsg = '';

  profileLink: string;
  tags: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    let userId;

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          userId = params['userId'];
        }
      );

    const user = this.sharedService.user;
    console.log(user);
    if (user) {
      this.profileLink = '/user/' + user._id;
      if (user.admin) {
        this.tags += '*ADMIN*';
      }
    } else {
      this.profileLink = '/login';
    }
  }

}
