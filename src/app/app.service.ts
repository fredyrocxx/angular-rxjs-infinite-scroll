import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http :HttpClient) { }

  public getData(pageNumber: number, pageSize: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${pageSize}`);
  }
}
