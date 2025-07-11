import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideSupportComponent } from './aide-support.component';

describe('AideSupportComponent', () => {
  let component: AideSupportComponent;
  let fixture: ComponentFixture<AideSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AideSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AideSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
