import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-solicitud-profesor',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './detalle-solicitudes-profesor.html'
})
export class DetalleSolicitudProfesorComponent {

  profesorNombre = 'Ing. Uleam';

  observacion = '';

  solicitud = {
    nombre: 'Rodger Muñoz Molina',
    cedula: '172733034',
    carrera: 'Ingeniería en Tecnologías de la Información',
    semestre: '5to',
    tipoBeca: 'Beca Socioeconómica',
    monto: '$600 / mes',
    motivo: 'El estudiante presenta dificultades económicas comprobables.'
  };

  constructor(private router: Router) {}

  aprobar(): void {
    alert(
      'Solicitud APROBADA ✅\nObservación: ' + (this.observacion || 'Sin observaciones')
    );
    this.router.navigate(['/solicitudes-profesor']);
  }

  rechazar(): void {
    if (!this.observacion) {
      alert('Debe ingresar una observación para rechazar');
      return;
    }

    alert(
      'Solicitud RECHAZADA ❌\nObservación: ' + this.observacion
    );
    this.router.navigate(['/solicitudes-profesor']);
  }

  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
