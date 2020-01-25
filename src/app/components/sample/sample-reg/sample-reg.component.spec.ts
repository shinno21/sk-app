import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRegComponent } from './sample-reg.component';

describe('SampleRegComponent', () => {
  let component: SampleRegComponent;
  let fixture: ComponentFixture<SampleRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
