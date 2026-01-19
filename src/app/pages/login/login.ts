import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';

  emailError = '';
  passwordError = '';

  private emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private router: Router) {}

  validarEmail(): boolean {
    if (!this.email.trim()) {
      this.emailError = 'El correo es obligatorio';
      return false;
    }
    if (!this.emailRegex.test(this.email)) {
      this.emailError = 'Correo inválido';
      return false;
    }
    this.emailError = '';
    return true;
  }

  validarPassword(): boolean {
    if (!this.password) {
      this.passwordError = 'La contraseña es obligatoria';
      return false;
    }
    if (this.password.length < 6) {
      this.passwordError = 'Mínimo 6 caracteres';
      return false;
    }
    this.passwordError = '';
    return true;
  }

  formularioValido(): boolean {
    return this.validarEmail() && this.validarPassword();
  }

  // 🔐 LOGIN CON ROLES
  login(): void {

    if (!this.formularioValido()) {
      return;
    }

    // 👨‍🏫 PROFESOR / ADMIN
    if (this.email === 'ing@uleam.com' && this.password === '123456') {
      localStorage.setItem('usuarioActivo', this.email);
      localStorage.setItem('rol', 'admin');

      // ✅ RUTA CORRECTA
      this.router.navigate(['/profesor/inicio']);
      return;
    }

    // 👨‍🎓 ESTUDIANTE
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioValido = usuarios.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (!usuarioValido) {
      alert('Correo o contraseña incorrectos');
      return;
    }

    localStorage.setItem('usuarioActivo', usuarioValido.email);
    localStorage.setItem('rol', 'estudiante');

    // ✅ RUTA CORRECTA
    this.router.navigate(['/estudiante/inicio']);
  }

  recuperarPassword(): void {
    alert('Función no disponible sin base de datos');
  }
}
