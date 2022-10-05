import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient ,
    ) { }
    private heroesUrl = 'http://localhost:2022/profolio/detail';  // URL to web api

  getProducts(): Observable<any> {
    return this.http.get<any>(this.heroesUrl)
  }

  
}
