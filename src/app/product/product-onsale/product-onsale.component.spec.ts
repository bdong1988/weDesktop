import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnsaleComponent } from './product-onsale.component';

describe('ProductOnsaleComponent', () => {
  let component: ProductOnsaleComponent;
  let fixture: ComponentFixture<ProductOnsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOnsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
