import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuProfesorComponent } from '../../shared/menu-profesor/menu-profesor';

@Component({
  selector: 'app-aceptacion',
  standalone: true,
  imports: [MenuProfesorComponent],
  templateUrl: './aceptacion.component.html'
})
export class AceptacionComponent implements OnInit {

  solicitudesPendientes = 0;
  solicitudesAprobadas = 0;
  solicitudesRechazadas = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.validarAcceso();
    this.cargarResumen();
  }

  // ===============================
  // VALIDAR ACCESO ADMIN
  // ===============================
  validarAcceso(): void {
    const rol = localStorage.getItem('rol');

    if (rol !== 'admin') {
      this.router.navigate(['/inicio']);
    }
  }

  // ===============================
  // DATOS DE RESUMEN (TEMPORAL)
  // ===============================
  cargarResumen(): void {
    // 🔹 Simulación (luego conectas backend)
    this.solicitudesPendientes = 5;
    this.solicitudesAprobadas = 12;
    this.solicitudesRechazadas = 2;
  }

  // ===============================
  // NAVEGACIÓN
  // ===============================
  irASolicitudes(): void {
    this.router.navigate(['/solicitudes-profesor']);
  }

  irAHistorial(): void {
    this.router.navigate(['/historial-profesor']);
  }
}
