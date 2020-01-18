import { Injectable } from '@angular/core';
import { Post, Posts } from 'src/app/entities/sample'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BASE_URI } from 'src/app/consts';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getPosts(title: string): Observable<Posts> {
    let uri: string = BASE_URI + '/post/';
    if (title) {
      uri = uri + "?title=" + title;
    }
    return this.http.get<Posts>(uri);
  }
}
