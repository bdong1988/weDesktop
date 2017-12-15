import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatsComponent } from './sales-stats.component';

describe('SalesStatsComponent', () => {
  let component: SalesStatsComponent;
  let fixture: ComponentFixture<SalesStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
