import { HttpParams } from '@angular/common/http';
import { ApiService } from './../../../Services/apiService';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { URLS } from '../../shared/constants/urls';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private projectlistSubject$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    readonly projectList$ = this.projectlistSubject$.asObservable();

    constructor(
        private _apiService: ApiService
    ) { }

    public getAllProjectList() {
        return this._apiService.get(URLS.GET_ALL_PROJECTS).pipe(map(res => {
            this.projectlistSubject$.next(res);
            return res
        }), catchError(error => {
            console.log('Caught in CatchError. Returning 0')
            return of(0);
        })).subscribe();
    }

    public getEmployeeProjects(params: HttpParams) {
        return this._apiService.get(URLS.GET_ALL_EMP_PROJECT, params).pipe(map(res => {
            return res
        }), catchError(error => {
            console.log('Caught in CatchError. Returning 0')
            return of(0);
        }))
    }

}