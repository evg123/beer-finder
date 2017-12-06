import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (route.data.roles.indexOf('user') !== -1) {
      const userId = route.params.userId;
      return this.userService.canAccessUser(userId);
    } else if (route.data.roles.indexOf('owner') !== -1) {
      const locId = route.params.locId;
      return this.userService.canAccessLocation(locId);
    }
    this.router.navigate(['/login']);
    return false;
  }

}
