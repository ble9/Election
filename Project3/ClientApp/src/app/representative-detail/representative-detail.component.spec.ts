import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeDetailComponent } from './representative-detail.component';

describe('RepresentativeDetailComponent', () => {
  let component: RepresentativeDetailComponent;
  let fixture: ComponentFixture<RepresentativeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentativeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
