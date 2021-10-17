import { FilterService } from './../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  textFilter: string;

  constructor(private filterService: FilterService) {}

  changeTextFilter() {
    this.filterService.setActiveTextFilter(this.textFilter);
  }
}
