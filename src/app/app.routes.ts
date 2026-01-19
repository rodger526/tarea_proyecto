import { Routes } from '@angular/router';

// ======================
// 🔓 PÚBLICAS
// ======================
import { LoginComponent } from './pages/login/login';
import { RegistroComponent } from './pages/registro/registro';

// ======================
// 🎓 ESTUDIANTE
// ======================
import { InicioComponent } from './pages/inicio/inicio';
import { PerfilComponent } from './pages/perfil/perfil';
import { BecasComponent } from './pages/becas/becas';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes';
import { SolicitudBecaComponent } from './pages/solicitud-beca/solicitud-beca';

// ======================
// 👨‍🏫 PROFESOR
// ======================
import { DashboardProfesorComponent } from './pages/dashboard-profesor/dashboard-profesor';
import { ListaSolicitudesProfesorComponent } from './pages/solicitudes-profesor/solicitudes-profesor';
import { DetalleSolicitudProfesorComponent } from './pages/detalle-solicitudes-profesor/detalle-solicitudes-profesor';
import { HistorialProfesorComponent } from './pages/historial-profesor/historial-profesor';
import { AceptacionComponent } from './pages/aceptacion/aceptacion';

// ======================
// 🛡️ GUARDS
// ======================
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [

  // ======================
  // 🔓 PÚBLICAS
  // ======================
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  // ======================
  // 🎓 ESTUDIANTE
  // ======================
  {
    path: 'estudiante',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'becas', component: BecasComponent },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'solicitud-beca', component: SolicitudBecaComponent }
    ]
  },

  // ======================
  // 👨‍🏫 PROFESOR
  // ======================
  {
    path: 'profesor',
    canActivate: [authGuard, adminGuard],
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: DashboardProfesorComponent },
      { path: 'solicitudes', component: ListaSolicitudesProfesorComponent },
      { path: 'detalle/:id', component: DetalleSolicitudProfesorComponent },
      { path: 'aceptacion', component: AceptacionComponent },
      { path: 'historial', component: HistorialProfesorComponent }
    ]
  },

  // ======================
  // ❌ NO EXISTE
  // ======================
  { path: '**', redirectTo: 'login' }
];
