import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient ) {}

  /* Nombre de la cuidad */
  getWeather( city: string ): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', environment.apiKey );

    return this.http.get<Weather>(environment.apiUrl + 'weather', { params: options });
  }

}
