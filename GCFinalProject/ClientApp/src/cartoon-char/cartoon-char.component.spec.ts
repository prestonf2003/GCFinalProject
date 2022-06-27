import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CartoonCharComponent } from './cartoon-char.component';

describe('CartoonCharComponent', () => {
  let component: CartoonCharComponent;
  let fixture: ComponentFixture<CartoonCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoonCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
