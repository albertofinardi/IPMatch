import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidrToMaskComponent } from './cidr-to-mask.component';

describe('CidrToMaskComponent', () => {
  let component: CidrToMaskComponent;
  let fixture: ComponentFixture<CidrToMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidrToMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidrToMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
