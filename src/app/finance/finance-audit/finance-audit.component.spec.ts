import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAuditComponent } from './finance-audit.component';

describe('FinanceAuditComponent', () => {
  let component: FinanceAuditComponent;
  let fixture: ComponentFixture<FinanceAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
