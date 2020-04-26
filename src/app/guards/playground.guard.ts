import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { StateService} from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundGuard implements CanActivate {

  constructor(
    private stateService: StateService,
    private router: Router,
    ) {}
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.stateService.getState() === 'playground') {
        return true;
      } else {
        this.router.navigate([this.stateService.getState()]);
        return true;
      }
    }
}
