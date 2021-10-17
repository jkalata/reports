import { take } from 'rxjs/operators';
import { FilterService } from './../../../services/filter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  tags: string[];
  constructor(private filterService: FilterService) {
    this.tags = this.filterService.getAvailableTags();
  }

  resetTags(): void {
    this.filterService.resetActiveTags();
  }

  toggleTag(tag: string): void {
    this.filterService
      .getActiveTags()
      .pipe(take(1))
      .subscribe((activeTags) => {
        activeTags.includes(tag)
          ? this.filterService.removeActiveTag(tag)
          : this.filterService.addActiveTag(tag);
      });
  }
}
