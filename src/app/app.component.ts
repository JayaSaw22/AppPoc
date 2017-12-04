import { Component, OnInit, AfterViewInit } from '@angular/core';
import { data,columns,JsonHolderUsersColumn } from './app.data';
import * as $ from 'jquery';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';


constructor (private  dataService: DataService){
  
}
  ngAfterViewInit() {
    this.loadDataTable();
   
   
  }

  ngOnInit() {
  
  }

  loadDataTable() {
this.dataService.getData().subscribe((x: any) => {
  console.log(x);
  $('#test').DataTable({
    data: x,
    columns: JsonHolderUsersColumn
  });
});
}
}
