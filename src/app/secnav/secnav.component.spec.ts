import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecnavComponent } from './secnav.component';

describe('SecnavComponent', () => {
  let component: SecnavComponent;
  let fixture: ComponentFixture<SecnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecnavComponent]
    });
    fixture = TestBed.createComponent(SecnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
