import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCartComponent } from './organization-cart.component';

describe('OrganizationCartComponent', () => {
  let component: OrganizationCartComponent;
  let fixture: ComponentFixture<OrganizationCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
