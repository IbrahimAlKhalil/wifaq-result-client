import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedhaTalikaFormComponent } from './medha-talika-form.component';

describe('MedhaTalikaFormComponent', () => {
  let component: MedhaTalikaFormComponent;
  let fixture: ComponentFixture<MedhaTalikaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedhaTalikaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedhaTalikaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
