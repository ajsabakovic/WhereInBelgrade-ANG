import { Injectable } from '@angular/core';
import { PaginatedResult } from '../_model/pagination';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Dogadjaj } from '../_model/dogadjaj';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LikeEventService } from '../_services/like-event.service';


@Injectable()
export class LikedEventsResolver implements Resolve<Dogadjaj[]>{
    page = 1;
    itemsPerPage = 6;
    constructor(private likedEventService: LikeEventService, 
        private alertify: AlertifyService,
        private authService: AuthService, 
        private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Dogadjaj[]>{
        return this.likedEventService.getAllLikedEvents(this.authService.decodedToken.nameid, this.page, this.itemsPerPage)
        .pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['']);
                return of(null);
            })
        )
    }
}
