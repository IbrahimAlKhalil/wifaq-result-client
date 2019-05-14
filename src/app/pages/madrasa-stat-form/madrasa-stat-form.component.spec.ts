import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaStatFormComponent } from './madrasa-stat-form.component';

describe('MadrasaStatFormComponent', () => {
  let component: MadrasaStatFormComponent;
  let fixture: ComponentFixture<MadrasaStatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadrasaStatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadrasaStatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
