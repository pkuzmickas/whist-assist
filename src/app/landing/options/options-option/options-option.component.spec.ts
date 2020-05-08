import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsOptionComponent } from './options-option.component';

describe('OptionsOptionComponent', () => {
  let component: OptionsOptionComponent;
  let fixture: ComponentFixture<OptionsOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
