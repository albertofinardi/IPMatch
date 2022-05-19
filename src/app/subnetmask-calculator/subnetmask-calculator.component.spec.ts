import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetmaskCalculatorComponent } from './subnetmask-calculator.component';

describe('SubnetmaskCalculatorComponent', () => {
  let component: SubnetmaskCalculatorComponent;
  let fixture: ComponentFixture<SubnetmaskCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnetmaskCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetmaskCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
