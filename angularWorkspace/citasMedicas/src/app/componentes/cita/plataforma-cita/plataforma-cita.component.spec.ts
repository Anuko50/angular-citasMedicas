import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaCitaComponent } from './plataforma-cita.component';

describe('PlataformaCitaComponent', () => {
  let component: PlataformaCitaComponent;
  let fixture: ComponentFixture<PlataformaCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataformaCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
