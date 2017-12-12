import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypnoblobsComponent } from './hypnoblobs.component';

describe('HypnoblobsComponent', () => {
  let component: HypnoblobsComponent;
  let fixture: ComponentFixture<HypnoblobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypnoblobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypnoblobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
