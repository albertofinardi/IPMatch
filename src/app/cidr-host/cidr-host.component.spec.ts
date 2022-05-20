import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidrHostComponent } from './cidr-host.component';

describe('CidrHostComponent', () => {
  let component: CidrHostComponent;
  let fixture: ComponentFixture<CidrHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidrHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidrHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
