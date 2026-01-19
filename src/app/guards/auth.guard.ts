import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const usuarioActivo = localStorage.getItem('usuarioActivo');
  const rol = localStorage.getItem('rol');

  // ❌ NO hay sesión → login
  if (!usuarioActivo || !rol) {
    router.navigate(['/login']);
    return false;
  }

  // ✅ Sesión válida
  return true;
};
