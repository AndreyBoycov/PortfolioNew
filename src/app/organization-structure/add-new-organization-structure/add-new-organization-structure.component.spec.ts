import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOrganizationStructureComponent } from './add-new-organization-structure.component';

describe('AddNewOrganizationStructureComponent', () => {
  let component: AddNewOrganizationStructureComponent;
  let fixture: ComponentFixture<AddNewOrganizationStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewOrganizationStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOrganizationStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
