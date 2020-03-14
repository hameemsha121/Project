import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockpriceComponent } from './manage-stockprice.component';

describe('ManageStockpriceComponent', () => {
  let component: ManageStockpriceComponent;
  let fixture: ComponentFixture<ManageStockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
