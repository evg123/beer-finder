import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn = false;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit() {
    this.updateOnUser();
    this.sharedSvc.loggedIn
      .subscribe(
        (value: any) => {
          this.updateOnUser();
        }
      );
  }

  updateOnUser() {
    this.loggedIn = this.sharedSvc.user;
  }
}
