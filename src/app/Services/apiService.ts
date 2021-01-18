import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    headers = new HttpHeaders();
    constructor(
        public http: HttpClient
    ) { }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(environment.API_URL + `${path}`, { params });
    }

    put(path: string, params: HttpParams = new HttpParams(), body: object = {}): Observable<any> {
        return this.http.put(
            environment.API_URL + `${path}`,
            JSON.stringify(body), { headers: this.headers, params });
    }

    post(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.post(
            environment.API_URL + `${path}`,
            JSON.stringify(body), { headers: this.headers, params });
    }

    delete(path): Observable<any> {
        return this.http.delete(
            environment.API_URL + `${path}`);
    }

    patch(path: string, body: object = {}): Observable<any> {
        return this.http.patch(
            environment.API_URL + `${path}`,
            JSON.stringify(body), { headers: this.headers });
    }

}
