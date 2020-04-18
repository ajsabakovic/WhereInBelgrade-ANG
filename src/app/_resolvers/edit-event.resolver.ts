import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DogadjajService } from '../_services/dogadjaj.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Dogadjaj } from '../_model/dogadjaj';

@Injectable()
export class EditEventResolver implements Resolve<Dogadjaj[]> {
    constructor(private dogService: DogadjajService,
                private router: Router,
                private alertify: AlertifyService,
                private location: Location) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Dogadjaj[]> {
            return this.dogService.getEventsById(route.params['id']).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving data');
                    console.log('povukao je dogadjaj');
                    this.router.navigate(['']);
                    return of(null);
                })
            );
        }
}