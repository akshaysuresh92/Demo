import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public searchText: string = '';
  constructor() { }

  ngOnInit() {
  }

  performSearch(value) {
    this.searchText =  value;
  }

}
