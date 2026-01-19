import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  correoInstitucional: string;
  celular: string;
  pais: string;
  provincia: string;
  direccion: string;
  facultad: string;
  carrera: string;
  nivel: string;
  semestre: string;
  promedio: string;
  creditosAprobados: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = {
    nombres: 'Rodger',
    apellidos: 'Muñoz Molina',
    tipoDocumento: 'Cédula',
    numeroDocumento: '172733034',
    correoInstitucional: 'e172733034@live.uleam.edu.ec',
    celular: '+593 99 123 4567',
    pais: 'Ecuador',
    provincia: 'Manabí',
    direccion: 'Av. Principal #123',
    facultad: 'Facultad de Ciencias de la Vida y Tecnología',
    carrera: 'Ingeniería en Tecnologías de la Información',
    nivel: 'Pregrado',
    semestre: '5to',
    promedio: '8.7',
    creditosAprobados: '120'
  };

  userName = '';

  passActual = '';
  passNueva = '';
  passConfirm = '';

  fotoPreview: string | ArrayBuffer | null = null;
  fotoFile?: File;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data =
      localStorage.getItem('uleam_user') ||
      sessionStorage.getItem('uleam_user');

    if (data) {
      const user = JSON.parse(data);
      this.userName = user.nombre;
    } else {
      this.userName = `${this.usuario.nombres} ${this.usuario.apellidos}`;
    }
  }

  previewFoto(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.fotoFile = input.files[0];
    const reader = new FileReader();

    reader.onload = () => this.fotoPreview = reader.result;
    reader.readAsDataURL(this.fotoFile);
  }

  subirFoto(): void {
    if (!this.fotoFile) {
      alert('Seleccione una imagen');
      return;
    }
    alert('Foto actualizada (simulación)');
  }

  guardarPerfil(): void {
    if (this.passNueva && this.passNueva !== this.passConfirm) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Perfil actualizado');
    this.passActual = this.passNueva = this.passConfirm = '';
  }

  cerrarSesion(): void {
    if (!confirm('¿Cerrar sesión?')) return;
    localStorage.removeItem('uleam_user');
    sessionStorage.removeItem('uleam_user');
    this.router.navigate(['/login']);
  }
}
