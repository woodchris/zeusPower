import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { WeatherResponse } from './weather';
import { APIURL } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders(
            {'Content-Type': 'application/json'}
        )
    }

    private weatherUrl = 'https://api.darksky.net/forecast/12487fe938f913d660ef84bce5a62f3f/37.8267,-122.4233';

    getLocals(): Observable<WeatherResponse> {
        return this.http.get<WeatherResponse>(this.weatherUrl, this.httpOptions)
        .pipe(
            catchError(this.handleError<WeatherResponse>('get weather'))
        )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: T): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed`);
            return of(result as T); 
        }
    }
}