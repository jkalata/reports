import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFooterComponent } from './report-footer.component';

describe('ReportFooterComponent', () => {
  let component: ReportFooterComponent;
  let fixture: ComponentFixture<ReportFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
