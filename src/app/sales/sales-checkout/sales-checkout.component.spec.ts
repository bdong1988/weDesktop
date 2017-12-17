import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCheckoutComponent } from './sales-checkout.component';

describe('SalesCheckoutComponent', () => {
  let component: SalesCheckoutComponent;
  let fixture: ComponentFixture<SalesCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
