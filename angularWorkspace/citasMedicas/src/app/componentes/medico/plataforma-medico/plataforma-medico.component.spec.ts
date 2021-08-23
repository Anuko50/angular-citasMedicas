import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaMedicoComponent } from './plataforma-medico.component';

describe('PlataformaMedicoComponent', () => {
  let component: PlataformaMedicoComponent;
  let fixture: ComponentFixture<PlataformaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataformaMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
