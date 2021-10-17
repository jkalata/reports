import { FilterService } from './../../../../services/filter.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
        this.active = activeTags.includes(this.tag);
      })
    );
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
