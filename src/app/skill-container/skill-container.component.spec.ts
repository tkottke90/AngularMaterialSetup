import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillContainerComponent } from './skill-container.component';

describe('SkillContainerComponent', () => {
  let component: SkillContainerComponent;
  let fixture: ComponentFixture<SkillContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
