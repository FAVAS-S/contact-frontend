import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontactComponent } from './allcontact.component';

describe('AllcontactComponent', () => {
  let component: AllcontactComponent;
  let fixture: ComponentFixture<AllcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcontactComponent]
    });
    fixture = TestBed.createComponent(AllcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
