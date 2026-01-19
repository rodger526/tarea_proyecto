import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudBeca } from './solicitud-beca';

describe('SolicitudBeca', () => {
  let component: SolicitudBeca;
  let fixture: ComponentFixture<SolicitudBeca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudBeca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudBeca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
