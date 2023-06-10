import { Injectable } from '@angular/core';
import { HttpService } from '../util/http.service';
import { catchError, map, throwError } from 'rxjs';

const api = "product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpService) { }

  getAllProducts(){
    return this.httpService.getAll(api).pipe(
      map((data: any[]) => {
        return data;
      }), catchError( error => {
        console.log(error);
        return throwError( 'Something went wrong!' );
      })
    );
  }

  getProductsBySearch(search:string){
    let apiPAth = `${api}/search/${search}`
    return this.httpService.getAll(apiPAth).pipe(
      map((data: any[]) => {
        return data;
      }), catchError( error => {
        console.log(error);
        return throwError( 'Something went wrong!' );
      })
    );
  }
}
