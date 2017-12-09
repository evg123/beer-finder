import {Component, Input, OnInit} from '@angular/core';
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
  tags = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.update();

    this.sharedService.loggedIn
      .subscribe(
        (value: any) => {
          this.update();
        }
      );
  }

  update() {
    const user = this.sharedService.user;
    if (user) {
      this.profileLink = '/user/' + user._id;
      this.tags = user.username;
      if (user.admin) {
        this.tags += ' *ADMIN*';
      }
    } else {
      // not logged in
      this.profileLink = '/login';
    }
  }
}
