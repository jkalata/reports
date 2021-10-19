import { FilterService } from './../../../services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.scss'],
})
export class SelectYearComponent implements OnInit {
  years: number[];

  constructor(private filterService: FilterService) {
    this.years = this.filterService.getAvailableYears();
  }

  ngOnInit(): void {
    this.filterService.setActiveYearFilter(this.years[0]);
  }

  changeYearFilter(event) {
    this.filterService.setActiveYearFilter(Number(event.target.value));
  }
}
