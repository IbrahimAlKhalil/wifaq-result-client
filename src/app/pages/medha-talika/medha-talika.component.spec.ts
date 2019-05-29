import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedhaTalikaComponent } from './medha-talika.component';

describe('MedhaTalikaComponent', () => {
  let component: MedhaTalikaComponent;
  let fixture: ComponentFixture<MedhaTalikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedhaTalikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedhaTalikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
