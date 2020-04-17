import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseguimientoComponent } from './addseguimiento.component';

describe('AddseguimientoComponent', () => {
  let component: AddseguimientoComponent;
  let fixture: ComponentFixture<AddseguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddseguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddseguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
