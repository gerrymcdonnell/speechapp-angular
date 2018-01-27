import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomquestionComponent } from './randomquestion.component';

describe('RandomquestionComponent', () => {
  let component: RandomquestionComponent;
  let fixture: ComponentFixture<RandomquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
