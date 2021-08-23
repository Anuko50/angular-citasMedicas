import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaPacienteComponent } from './plataforma-paciente.component';

describe('PlataformaPacienteComponent', () => {
  let component: PlataformaPacienteComponent;
  let fixture: ComponentFixture<PlataformaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataformaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
