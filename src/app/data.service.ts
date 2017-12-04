import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http :HttpClient) { }

getData(){
  return this.http.get("https://jsonplaceholder.typicode.com/users");
}

// getData(){
//    return this.http.get("localhost:3000/table/tabledata");
//   }
}
