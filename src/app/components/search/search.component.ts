import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText: string = '';

  @Output() searchEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  performSearch() {
    this.searchEmitter.emit(this.searchText);
  }

}
