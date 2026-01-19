import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Beca {
  nombre: string;
  descripcion: string;
  periodo: string;
  modalidad: string;
  monto: string;
  periodoAcademico: string;
  categoria: 'pregrado' | 'posgrado';
}

@Component({
  selector: 'app-becas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.css']
})
export class BecasComponent {

  filtroActual: 'todas' | 'pregrado' | 'posgrado' = 'todas';

  becasDisponibles: Beca[] = [
    {
      nombre: 'Ayuda socioeconomica',
      descripcion: 'La ayuda se entrega para grupos de estudiantes que requieren apoyo económico',
      periodo: '2 AC',
      modalidad: 'Presencial',
      monto: '$600/mes',
      periodoAcademico: '2-AC (Anual)',
      categoria: 'pregrado'
    },
    {
      nombre: 'Beca de Excelencia Académica',
      descripcion: 'Apoyo económico para estudiantes con promedio superior a 9.0',
      periodo: '1 AC',
      modalidad: 'Presencial',
      monto: '$800/mes',
      periodoAcademico: '1-AC (Semestral)',
      categoria: 'pregrado'
    },
    {
      nombre: 'Beca de Investigación',
      descripcion: 'Financiamiento para proyectos de investigación científica',
      periodo: '2 AC',
      modalidad: 'Híbrida',
      monto: '$700/mes',
      periodoAcademico: '2-AC (Anual)',
      categoria: 'posgrado'
    },
    {
      nombre: 'Ayuda de Movilidad',
      descripcion: 'Apoyo para estudiantes con dificultades de transporte',
      periodo: '1 AC',
      modalidad: 'Presencial',
      monto: '$300/mes',
      periodoAcademico: '1-AC (Semestral)',
      categoria: 'pregrado'
    },
    {
      nombre: 'Beca Deportiva',
      descripcion: 'Para estudiantes destacados en actividades deportivas',
      periodo: '2 AC',
      modalidad: 'Presencial',
      monto: '$500/mes',
      periodoAcademico: '2-AC (Anual)',
      categoria: 'pregrado'
    },
    {
      nombre: 'Beca de Posgrado Internacional',
      descripcion: 'Apoyo para estudios de maestría y doctorado',
      periodo: '4 AC',
      modalidad: 'Virtual',
      monto: '$1000/mes',
      periodoAcademico: '4-AC (2 Años)',
      categoria: 'posgrado'
    }
  ];

  constructor(private router: Router) {}

  get becasFiltradas(): Beca[] {
    if (this.filtroActual === 'todas') {
      return this.becasDisponibles;
    }
    return this.becasDisponibles.filter(
      beca => beca.categoria === this.filtroActual
    );
  }

  cambiarFiltro(filtro: 'todas' | 'pregrado' | 'posgrado'): void {
    this.filtroActual = filtro;
  }

  aplicar(beca: Beca): void {
    this.router.navigate(['/solicitud-beca'], {
      queryParams: {
        nombre: beca.nombre,
        monto: beca.monto,
        periodo: beca.periodoAcademico
      }
    });
  }

  irASolicitud(): void {
    this.router.navigate(['/solicitud-beca']);
  }

  irAPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  cerrarSesion(): void {
    if (confirm('¿Está seguro que desea cerrar sesión?')) {
      this.router.navigate(['/login']);
    }
  }
}
