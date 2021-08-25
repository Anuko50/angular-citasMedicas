import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaDiagnosticoComponent } from './plataforma-diagnostico.component';

describe('PlataformaDiagnosticoComponent', () => {
  let component: PlataformaDiagnosticoComponent;
  let fixture: ComponentFixture<PlataformaDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataformaDiagnosticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
