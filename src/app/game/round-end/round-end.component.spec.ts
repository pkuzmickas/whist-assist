import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundEndComponent } from './round-end.component';

describe('RoundEndComponent', () => {
  let component: RoundEndComponent;
  let fixture: ComponentFixture<RoundEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
