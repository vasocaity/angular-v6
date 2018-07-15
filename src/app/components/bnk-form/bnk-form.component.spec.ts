import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkFormComponent } from './bnk-form.component';

describe('BnkFormComponent', () => {
  let component: BnkFormComponent;
  let fixture: ComponentFixture<BnkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
