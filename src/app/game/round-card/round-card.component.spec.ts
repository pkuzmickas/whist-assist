import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundCardComponent } from './round-card.component';

describe('RoundCardComponent', () => {
  let component: RoundCardComponent;
  let fixture: ComponentFixture<RoundCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
