import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-profesor',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './dashboard-profesor.html'
})
export class DashboardProfesorComponent {

  // 🔢 Cards del dashboard
  total = 12;
  aprobadas = 6;
  rechazadas = 2;
  pendientes = 4;

  // 📋 Últimas solicitudes (DEBE coincidir con el HTML)
  ultimasSolicitudes = [
    {
      codigo: 'SOL-001',
      estudiante: 'Juan Pérez',
      tipoBeca: 'Beca Académica',
      estado: 'Pendiente',
      fecha: '2026-01-15'
    },
    {
      codigo: 'SOL-002',
      estudiante: 'María López',
      tipoBeca: 'Beca Deportiva',
      estado: 'Aprobada',
      fecha: '2026-01-14'
    },
    {
      codigo: 'SOL-003',
      estudiante: 'Carlos Sánchez',
      tipoBeca: 'Beca Socioeconómica',
      estado: 'Rechazada',
      fecha: '2026-01-12'
    }
  ];

  constructor(private router: Router) {}

  // 🚪 Cerrar sesión
  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/inicio']);
  }

}
