import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuProfesorComponent } from '../../shared/menu-profesor/menu-profesor';

interface SolicitudProfesor {
  id: number;
  codigo: string;
  nombre: string;
  carrera: string;
  tipoBeca: string;
  promedio: number;
  estado: 'Pendiente' | 'Aprobada' | 'Rechazada';
}

@Component({
  selector: 'app-solicitudes-profesor',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuProfesorComponent],
  templateUrl: './solicitudes-profesor.html'
})
export class ListaSolicitudesProfesorComponent implements OnInit {

  solicitudes: SolicitudProfesor[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.validarRol();
    this.cargarSolicitudes();
  }

  // ===============================
  // VALIDAR ACCESO PROFESOR
  // ===============================
  validarRol(): void {
    const rol = localStorage.getItem('rol');

    if (rol !== 'admin') {
      this.router.navigate(['/inicio']);
    }
  }

  // ===============================
  // CARGAR SOLICITUDES (SIMULADO)
  // ===============================
  cargarSolicitudes(): void {
    this.solicitudes = [
      {
        id: 1,
        codigo: 'SOL-P-001',
        nombre: 'Carlos Mendoza',
        carrera: 'Ingeniería en Sistemas',
        tipoBeca: 'Excelencia Académica',
        promedio: 9.1,
        estado: 'Pendiente'
      },
      {
        id: 2,
        codigo: 'SOL-P-002',
        nombre: 'Ana Zambrano',
        carrera: 'Ingeniería Industrial',
        tipoBeca: 'Socioeconómica',
        promedio: 8.4,
        estado: 'Aprobada'
      }
    ];
  }

  // ===============================
  // CLASE CSS SEGÚN ESTADO
  // ===============================
  estadoClase(estado: string): string {
    switch (estado) {
      case 'Aprobada':
        return 'badge-approved';
      case 'Rechazada':
        return 'badge-rejected';
      default:
        return 'badge-pending';
    }
  }

  // ===============================
  // VER DETALLE
  // ===============================
  verDetalle(id: number): void {
    this.router.navigate(['/detalle-solicitud-profesor', id]);
  }
}
