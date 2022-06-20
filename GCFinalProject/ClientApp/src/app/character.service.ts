import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user';
import { Character } from './character';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
urlRoot: string;
currentUser: string = "";
headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'); // We don't need headers or requestOption, but it makes console less bad.
requestOptions: Object = {
  headers: this.headers,
  responseType: 'text'
};
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
   }
   showAllCharacters(): Observable <Character[]> {
    return this.http.get<Character[]>(this.urlRoot + "character/ShowAllCharacters");
   }
   getCharacterById(id: number): Observable <Character> {
    return this.http.get<Character>(this.urlRoot + "character/GetCharacterById/" + id);
   }
   createCharacter(c: Character): Observable <Character> {
    return this.http.put<Character>(this.urlRoot + "character/CreateCharacter/", c, this.requestOptions);
}
  updateCharacter(id: number, c: Character): Observable <Character> {
    return this.http.post<Character>(this.urlRoot + "character/UpdateCharacter/" + id, c , this.requestOptions);
}
  deleteCharacter(id: number): Observable <Character>{
    return this.http.delete<Character>(this.urlRoot + "character/DeleteCharacter/" + id, this.requestOptions);
  }
  showAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlRoot + "user/ShowAllUsers");
  }
  createUser(u: User): Observable<User>{
    return this.http.put<User>(this.urlRoot + "user/CreateUser", u, this.requestOptions);
  }
  updateUser(id: number, u: User): Observable<User>{
    return this.http.post<User>(this.urlRoot + "user/UpdateUser" + id, u, this.requestOptions);
  }
  deleteUser(id: number): Observable <User> {
    return this.http.delete<User>(this.urlRoot + "user/DeleteUser" + id, this.requestOptions);
  }
  login(userId: string): void {
    userId = userId.toLocaleLowerCase();
    this.currentUser = userId[0].toUpperCase() + userId.slice(1);
  }

}