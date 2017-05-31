import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDevComponent } from './pro-dev.component';

describe('ProDevComponent', () => {
  let component: ProDevComponent;
  let fixture: ComponentFixture<ProDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
