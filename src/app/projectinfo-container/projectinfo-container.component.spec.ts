import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectinfoContainerComponent } from './projectinfo-container.component';

describe('ProjectinfoContainerComponent', () => {
  let component: ProjectinfoContainerComponent;
  let fixture: ComponentFixture<ProjectinfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectinfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectinfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
