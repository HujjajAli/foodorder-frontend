import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8089/food/api';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(api:string): Observable<any> {
    const url = `${baseUrl}/${api}`;
    console.log(url);
    return this.http.get(`${baseUrl}/${api}`);
  }
  get(id:number,api:string): Observable<any> {
    return this.http.get(`${baseUrl}/${api}/${id}`);
  }

  create(data: any):Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any):Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any):Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
