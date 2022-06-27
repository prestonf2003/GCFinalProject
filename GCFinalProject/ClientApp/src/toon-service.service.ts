import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { CartoonChar } from './app/CartoonChar'; 
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToonServiceService {
urlRoot: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;   
}
showAllCartoonCharacters(): Observable <CartoonChar[]> {
  return this.http.get<CartoonChar[]>(this.urlRoot + "toon/ShowAllCartoonCharacters");
 }
 updatCartoonCharacter(id: number, Cart:CartoonChar): Observable <CartoonChar> {
  return this.http.post<CartoonChar>(this.urlRoot + "toon/UpdateCartoonCharacter/" + id, Cart);
}
deleteCartoonCharacter(id: number): Observable <CartoonChar>{
  return this.http.delete<CartoonChar>(this.urlRoot + "toon/DeleteCartoonCharacter/DeleteCharacter/" + id);
}
createCartoonCharacter(Cart: CartoonChar): Observable <CartoonChar> {
  return this.http.put<CartoonChar>(this.urlRoot + "toon/CreateCartoonCharacter/", Cart);
}

}

