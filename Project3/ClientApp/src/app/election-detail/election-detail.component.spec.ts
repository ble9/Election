import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionDetailComponent } from './election-detail.component';

describe('EpisodeDetailComponent', () => {
  let component: ElectionDetailComponent;
  let fixture: ComponentFixture<ElectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
