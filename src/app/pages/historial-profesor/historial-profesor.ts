import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-historial-profesor',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './historial-profesor.html'
})
export class HistorialProfesorComponent {

  historial = [
    {
      codigo: 'SOL-001',
      accion: 'Revisión inicial',
      estudiante: 'Juan Pérez',
      tipoBeca: 'Beca Académica',
      estado: 'Pendiente',
      observacion: 'Documentos completos',
      fecha: '2026-01-15'
    },
    {
      codigo: 'SOL-002',
      accion: 'Aprobación',
      estudiante: 'María López',
      tipoBeca: 'Beca Deportiva',
      estado: 'Aprobada',
      observacion: 'Cumple con los requisitos',
      fecha: '2026-01-14'
    },
    {
      codigo: 'SOL-003',
      accion: 'Rechazo',
      estudiante: 'Carlos Sánchez',
      tipoBeca: 'Beca Socioeconómica',
      estado: 'Rechazada',
      observacion: 'Falta documentación',
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
