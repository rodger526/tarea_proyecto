import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface BecaActual {
  nombre: string;
  estado: 'APROBADA' | 'EN REVISIÓN';
  periodo: string;
  monto: string;
  periodoAcademico: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule   // ✅ NECESARIO PARA routerLink
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit {

  usuarioSesion = 'Estudiante ULEAM';

  estadisticas = {
    becasPostuladas: 2,
    valorBecasObtenidas: 900,
    promedioActual: 8.7
  };

  becasActuales: BecaActual[] = [
    {
      nombre: 'Beca de Inclusión Social',
      estado: 'APROBADA',
      periodo: 'Octubre 2024',
      monto: '$600',
      periodoAcademico: '2024 - 2025'
    },
    {
      nombre: 'Beca de Desarrollo Estudiantil',
      estado: 'EN REVISIÓN',
      periodo: '2025',
      monto: '$300',
      periodoAcademico: '2025 - 2026'
    }
  ];

  mostrarCards = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarCards = true;
    }, 150);
  }

  verSolicitudes(): void {
    this.router.navigate(['/solicitudes']);
  }

  anadirSolicitud(): void {
    this.router.navigate(['/solicitud-beca']);
  }

  actualizarPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
