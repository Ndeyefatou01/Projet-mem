import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReunionsComponent } from './mes-reunions.component';

describe('MesReunionsComponent', () => {
  let component: MesReunionsComponent;
  let fixture: ComponentFixture<MesReunionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesReunionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesReunionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
