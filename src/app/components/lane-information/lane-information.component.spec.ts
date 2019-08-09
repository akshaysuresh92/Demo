import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneInformationComponent } from './lane-information.component';

describe('LaneInformationComponent', () => {
  let component: LaneInformationComponent;
  let fixture: ComponentFixture<LaneInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
