import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-profesor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-profesor.html'
})
export class MenuProfesorComponent implements OnInit {

  nombreProfesor: string = 'Profesor';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarProfesor();
  }

  // ===============================
  // CARGAR DATOS DEL PROFESOR
  // ===============================
  cargarProfesor(): void {
    const usuario =
      localStorage.getItem('usuarioActivo') ||
      sessionStorage.getItem('usuarioActivo');

    const rol = localStorage.getItem('rol');

    if (usuario && rol === 'admin') {
      this.nombreProfesor = usuario;
    } else {
      // Seguridad adicional
      this.router.navigate(['/login']);
    }
  }

  // ===============================
  // CERRAR SESIÓN
  // ===============================
  cerrarSesion(): void {
    const confirmar = confirm(
      '¿Está seguro que desea cerrar sesión?'
    );

    if (!confirmar) return;

    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/login']);
  }
}
