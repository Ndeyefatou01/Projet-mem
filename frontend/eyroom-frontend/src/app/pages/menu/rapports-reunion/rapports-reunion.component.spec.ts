import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportsReunionComponent } from './rapports-reunion.component';

describe('RapportsReunionComponent', () => {
  let component: RapportsReunionComponent;
  let fixture: ComponentFixture<RapportsReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportsReunionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportsReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
