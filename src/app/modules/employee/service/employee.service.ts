import { URLS } from './../../shared/constants/urls';
import { ApiService } from './../../../Services/apiService';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private employeeListSubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    readonly employeeList$ = this.employeeListSubject$.asObservable();

    constructor(
        private _apiService: ApiService
    ) { }


    public getAllEmployeesList() {
        return this._apiService.get(URLS.GET_ALL_EMPLOYEES).pipe(map(res => {
            this.employeeListSubject$.next(res.data);
            return res.data
        }), catchError(error => {
            console.log('Caught in CatchError. Returning 0')
            return of(0);
        })).subscribe();
    }

}