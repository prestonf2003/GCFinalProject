import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DnD } from './dnd';

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

  constructor(private http: HttpClient, @Inject('BASE_URL')  baseUrl: string) {
    this.urlRoot = baseUrl;
   }
   GetClassByName(name: string): Observable<DnD> {
    return this.http.get<DnD>(this.urlRoot + "dnd/GetClassByName/" + name);
}
}
