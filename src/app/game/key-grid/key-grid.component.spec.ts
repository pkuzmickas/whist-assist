import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyGridComponent } from './key-grid.component';

describe('KeyGridComponent', () => {
  let component: KeyGridComponent;
  let fixture: ComponentFixture<KeyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
