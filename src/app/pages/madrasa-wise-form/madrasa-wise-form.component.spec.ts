import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaWiseFormComponent } from './madrasa-wise-form.component';

describe('MadrasaWiseFormComponent', () => {
  let component: MadrasaWiseFormComponent;
  let fixture: ComponentFixture<MadrasaWiseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadrasaWiseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadrasaWiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
