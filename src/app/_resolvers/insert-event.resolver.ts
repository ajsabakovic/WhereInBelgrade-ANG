import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Kategorija } from '../_model/kategorija';
import { KategorijaService } from '../_services/kategorija.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable()
export class InsertEventResolver implements Resolve<Kategorija[]>{
    constructor(private katService: KategorijaService, 
        private router: Router,
        private alertify: AlertifyService,
        private location: Location){}

        resolve(route: ActivatedRouteSnapshot): Observable<Kategorija[]>{
            return this.katService.getAllCategories().pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving data');
                    this.router.navigate(['']);
                    return of(null);
                })
            );
        }
}