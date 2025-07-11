import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationEvenementComponent } from './planification-evenement.component';

describe('PlanificationEvenementComponent', () => {
  let component: PlanificationEvenementComponent;
  let fixture: ComponentFixture<PlanificationEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationEvenementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificationEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
