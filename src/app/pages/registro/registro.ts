import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

/* ========= INTERFAZ DEL FORMULARIO ========= */
interface RegistroForm {

  /* ===== DATOS PERSONALES ===== */
  nombres: string;
  apellidos: string;
  tipoDoc: string;
  numeroDoc: string;
  genero: string;
  fechaNacimiento: string;
  estadoCivil: string;

  /* ===== CONTACTO ===== */
  correoInst: string;
  clave: string;
  celular: number;

  /* ===== UBICACIÓN ===== */
  pais: string;
  provincia: string;
  ciudad: string;
  direccion: string;

  /* ===== ACADÉMICOS ===== */
  carrera: string;
  semestre: number;
  promedioAcademico: number;

  /* ===== SOCIOECONÓMICOS ===== */
  tipoVivienda: string;
  viviendaPropia: string;
  ingresoFamiliar: number;
  numeroDependientes: number;
  ocupacionPadre: string;
  ocupacionMadre: string;
  poseeDiscapacidad: string;
  porcentajeDiscapacidad: number;
  recibeOtraBeca: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.html'
})
export class RegistroComponent {

  /* ===== LISTA DE SEMESTRES ===== */
  semestres: number[] = [1,2,3,4,5,6,7,8,9,10];

  /* ===== MODELO DEL FORMULARIO ===== */
  formData: RegistroForm = {
    nombres: '',
    apellidos: '',
    tipoDoc: '',
    numeroDoc: '',
    genero: '',
    fechaNacimiento: '',
    estadoCivil: '',

    correoInst: '',
    clave: '',
    celular: 0,

    pais: 'Ecuador',
    provincia: '',
    ciudad: '',
    direccion: '',

    carrera: '',
    semestre: 0,
    promedioAcademico: 0,

    tipoVivienda: '',
    viviendaPropia: '',
    ingresoFamiliar: 0,
    numeroDependientes: 0,
    ocupacionPadre: '',
    ocupacionMadre: '',
    poseeDiscapacidad: '',
    porcentajeDiscapacidad: 0,
    recibeOtraBeca: ''
  };

  constructor(private router: Router) {}

  /* ========= REGISTRAR ESTUDIANTE ========= */
  registrar(): void {

    if (!this.formularioValido()) {
      alert('Por favor complete correctamente todos los campos obligatorios.');
      return;
    }

    /* ===== USUARIO PARA LOGIN ===== */
    const usuarioLogin = {
      email: this.formData.correoInst,
      password: this.formData.clave
    };

    const usuarios = JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    );

    /* ===== VALIDAR CORREO ÚNICO ===== */
    const existe = usuarios.some(
      (u: any) => u.email === usuarioLogin.email
    );

    if (existe) {
      alert('Este correo ya se encuentra registrado.');
      return;
    }

    /* ===== GUARDAR USUARIO ===== */
    usuarios.push(usuarioLogin);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    /* ===== GUARDAR FORMULARIO DE BECA ===== */
    localStorage.setItem(
      'registro_beca_' + usuarioLogin.email,
      JSON.stringify(this.formData)
    );

    alert('Registro exitoso. Ahora puede iniciar sesión.');
    this.router.navigate(['/login']);
  }

  /* ========= VALIDACIÓN GENERAL ========= */
  formularioValido(): boolean {
    return (
      this.formData.nombres.trim() !== '' &&
      this.formData.apellidos.trim() !== '' &&
      this.formData.tipoDoc !== '' &&
      this.formData.numeroDoc.trim() !== '' &&
      this.formData.correoInst.trim() !== '' &&
      this.formData.clave.trim() !== '' &&
      this.formData.celular > 0 &&
      this.formData.carrera !== '' &&
      this.formData.semestre > 0
    );
  }

  /* ========= CANCELAR REGISTRO ========= */
  cancelar(): void {
    const confirmar = confirm('¿Desea cancelar el registro?');
    if (confirmar) {
      this.router.navigate(['/login']);
    }
  }
}
