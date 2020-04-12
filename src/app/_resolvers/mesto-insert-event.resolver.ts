import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Mesto } from '../_model/mesto';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MestoService } from '../_services/mesto.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MestoInsertResolver implements Resolve<Mesto[]>{
    constructor(private katService: MestoService, 
        private router: Router,
        private alertify: AlertifyService,
        private location: Location){}

        resolve(route: ActivatedRouteSnapshot): Observable<Mesto[]>{
            return this.katService.getAllMesta().pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving data');
                    this.router.navigate(['']);
                    return of(null);
                })
            );
        }
}