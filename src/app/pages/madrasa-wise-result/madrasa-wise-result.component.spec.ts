import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaWiseResultComponent } from './madrasa-wise-result.component';

describe('MadrasaWiseResultComponent', () => {
  let component: MadrasaWiseResultComponent;
  let fixture: ComponentFixture<MadrasaWiseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadrasaWiseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadrasaWiseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
