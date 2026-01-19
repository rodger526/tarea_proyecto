import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfesor } from './menu-profesor';

describe('MenuProfesor', () => {
  let component: MenuProfesor;
  let fixture: ComponentFixture<MenuProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuProfesor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
