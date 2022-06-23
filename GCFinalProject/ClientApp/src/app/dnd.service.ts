import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DnD } from './dnd';
import { Favorite } from './favorite';
import { Result } from './classes';
import {Spells} from './spells';

@Injectable({
  providedIn: 'root'
})
export class DndService {
  urlRoot: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'); // We don't need headers or requestOption, but it makes console less bad.
  requestOptions: Object = {
    headers: this.headers,
    responseType: 'text'
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
  }
  GetClassByName(name: string): Observable<DnD> {
    return this.http.get<DnD>(this.urlRoot + "dnd/GetClassByName/" + name);
  }
  GetAll(): Observable<string[]>{
    return this.http.get<string[]>(this.urlRoot + "dnd/GetAll/");

  }
  getSpells(): Observable<string[]>{
    return this.http.get<string[]>(this.urlRoot + "dnd/GetSpells/");
  }
  SearchSpells(name: string): Observable<string[]>{
    return this.http.get<string[]>(this.urlRoot + "dnd/SearchSpells/" + name);
  }
  GetSubclasses(): Observable<string[]>{
    return this.http.get<string[]>(this.urlRoot + "dnd/Getsubclasses/");
  }
  showFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.urlRoot + "favorite/ShowAllFavorites");
  }

  createFavorite(f: Favorite): Observable<Favorite> {
    return this.http.put<Favorite>(this.urlRoot + "favorite/CreateNewFavorite/", f, this.requestOptions);
  }

  deleteFavorite(id: number): Observable<Favorite> {
    return this.http.delete<Favorite>(this.urlRoot + "favorite/DeleteFavorite/" + id, this.requestOptions);
  }

}
