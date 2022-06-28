import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { CartoonChar } from './CartoonChar'; 
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToonServiceService {
  urlRoot: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'); // We don't need headers or requestOption, but it makes console less bad.
  requestOptions: Object = {
    headers: this.headers,
    responseType: 'text'
  };
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;   
}
showAllCartoonCharacters(): Observable <CartoonChar[]> {
  return this.http.get<CartoonChar[]>(this.urlRoot + "cartoon/ShowAllCartoonCharacters");
 }
 updatCartoonCharacter(id: number, Cart:CartoonChar): Observable <CartoonChar> {
  return this.http.post<CartoonChar>(this.urlRoot + "cartoon/UpdateCartoonCharacter/" + id, Cart);
}
deleteCartoonCharacter(id: number): Observable <CartoonChar>{
  return this.http.delete<CartoonChar>(this.urlRoot + "cartoon/DeleteCartoonCharacter/DeleteCharacter/" + id);
}
createCartoonCharacter(Cart: CartoonChar): Observable <CartoonChar> {
  return this.http.put<CartoonChar>(this.urlRoot + "cartoon/CreateCartoonCharacter/", Cart);
}

}

