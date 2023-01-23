import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesAceptadasComponent } from './comprobantes-aceptadas.component';

describe('ComprobantesAceptadasComponent', () => {
  let component: ComprobantesAceptadasComponent;
  let fixture: ComponentFixture<ComprobantesAceptadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantesAceptadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobantesAceptadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
