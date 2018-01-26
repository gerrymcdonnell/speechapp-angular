import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesIndexComponent } from './quizzes-index.component';

describe('QuizzesIndexComponent', () => {
  let component: QuizzesIndexComponent;
  let fixture: ComponentFixture<QuizzesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
