import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ArchivosSolicitud {
  certificadoMatricula: File | null;
  hojaMatriculado: File | null;
}

@Component({
  selector: 'app-solicitud-beca',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './solicitud-beca.component.html'
})
export class SolicitudBecaComponent {

  archivosSubidos: ArchivosSolicitud = {
    certificadoMatricula: null,
    hojaMatriculado: null
  };

  constructor(private router: Router) {}

  subirArchivo(tipo: 'certificado' | 'hoja', event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.size > 5 * 1024 * 1024) {
      alert('El archivo no debe superar los 5MB');
      input.value = '';
      return;
    }

    if (tipo === 'certificado') {
      this.archivosSubidos.certificadoMatricula = file;
    } else {
      this.archivosSubidos.hojaMatriculado = file;
    }

    alert(`Archivo subido correctamente: ${file.name}`);
  }

  enviarSolicitud(): void {
    if (!this.archivosSubidos.certificadoMatricula || !this.archivosSubidos.hojaMatriculado) {
      alert('Debe subir todos los documentos requeridos');
      return;
    }

    if (!confirm('¿Está seguro que desea enviar la solicitud?')) return;

    const codigo = 'SOL-2025-' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    alert(`Solicitud enviada correctamente\nCódigo: ${codigo}`);

    this.router.navigate(['/solicitudes']);
  }

  cancelar(): void {
    if (confirm('¿Desea cancelar la solicitud?')) {
      this.router.navigate(['/becas']);
    }
  }

  irABecas(): void {
    this.router.navigate(['/becas']);
  }

  irAPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  cerrarSesion(): void {
    if (!confirm('¿Desea cerrar sesión?')) return;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
