import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrPrivateComponent } from './public-or-private.component';

describe('PublicOrPrivateComponent', () => {
  let component: PublicOrPrivateComponent;
  let fixture: ComponentFixture<PublicOrPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOrPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOrPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
