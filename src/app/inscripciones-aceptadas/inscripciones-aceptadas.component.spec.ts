import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesAceptadasComponent } from './inscripciones-aceptadas.component';

describe('InscripcionesAceptadasComponent', () => {
  let component: InscripcionesAceptadasComponent;
  let fixture: ComponentFixture<InscripcionesAceptadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesAceptadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesAceptadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
