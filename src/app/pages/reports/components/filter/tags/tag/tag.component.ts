import { FilterService } from './../../../../services/filter.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnDestroy {
  @Input() tag: string;

  private subSink = new SubSink();
  active: boolean;

  constructor(private filterService: FilterService) {
    this.subSink.add(
      this.filterService.getActiveTags().subscribe((activeTags) => {
        this.active = this.isActive(activeTags);
      })
    );
  }

  private isActive(activeTags: string[]): boolean {
    return this.tag === 'Wszystkie'
      ? activeTags.length === 0
      : activeTags.includes(this.tag);
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
