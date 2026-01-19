import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './solicitudes.component.html'
})
export class SolicitudesComponent {

  constructor(private router: Router) {}

  // ===============================
  // LOGOUT
  // ===============================
  logout(): void {
    const confirmar = confirm('¿Está seguro que desea cerrar sesión?');
    if (!confirmar) return;

    localStorage.removeItem('uleam_user');
    sessionStorage.removeItem('uleam_user');

    this.router.navigate(['/login']);
  }

  // ===============================
  // NAVEGACIÓN
  // ===============================
  irInicio(): void {
    this.router.navigate(['/inicio']);
  }

  irPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  irBecas(): void {
    this.router.navigate(['/becas']);
  }

  irSolicitudBeca(): void {
    this.router.navigate(['/solicitud-beca']);
  }
}
