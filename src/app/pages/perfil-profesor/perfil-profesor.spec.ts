import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfesor } from './perfil-profesor';

describe('PerfilProfesor', () => {
  let component: PerfilProfesor;
  let fixture: ComponentFixture<PerfilProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilProfesor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
