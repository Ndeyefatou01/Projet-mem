import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },

  // Accueil
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.component').then(m => m.AccueilComponent)
  },

  // ----------- MENU PRINCIPAL -----------
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/menu/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'calendrier',
    loadComponent: () => import('./pages/menu/calendrier/calendrier.component').then(m => m.CalendrierComponent)
  },
  {
    path: 'gestion-salles',
    loadComponent: () => import('./pages/menu/gestion-salles/gestion-salles.component').then(m => m.GestionSallesComponent)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./pages/menu/notifications/notifications.component').then(m => m.NotificationsComponent)
  },

  // ----------- ORGANISATION -----------
  {
    path: 'contacts',
    loadComponent: () => import('./pages/menu/contacts/contacts.component').then(m => m.ContactsComponent)
  },
  {
    path: 'equipes',
    loadComponent: () => import('./pages/menu/equipes/equipes.component').then(m => m.EquipesComponent)
  },
  {
    path: 'mes-reunions',
    loadComponent: () => import('./pages/menu/mes-reunions/mes-reunions.component').then(m => m.MesReunionsComponent)
  },
  {
    path: 'rapports-reunion',
    loadComponent: () => import('./pages/menu/rapports-reunion/rapports-reunion.component').then(m => m.RapportsReunionComponent)
  },

  // ----------- ESPACE PERSONNEL -----------
  {
    path: 'notes',
    loadComponent: () => import('./pages/menu/notes/notes.component').then(m => m.NotesComponent)
  },
  {
    path: 'todo-list',
    loadComponent: () => import('./pages/menu/todo-list/todo-list.component').then(m => m.TodoListComponent)
  },
  {
    path: 'planification-evenement',
    loadComponent: () => import('./pages/menu/planification-evenement/planification-evenement.component').then(m => m.PlanificationEvenementComponent)
  },

  // ----------- GÉNÉRAL -----------
  {
    path: 'parametres',
    loadComponent: () => import('./pages/menu/parametres/parametres.component').then(m => m.ParametresComponent)
  },
  {
    path: 'aide-support',
    loadComponent: () => import('./pages/menu/aide-support/aide-support.component').then(m => m.AideSupportComponent)
  },
  {
    path: 'corbeille',
    loadComponent: () => import('./pages/menu/corbeille/corbeille.component').then(m => m.CorbeilleComponent)
  },
  {
    path: 'apps',
    loadComponent: () => import('./pages/menu/apps/apps.component').then(m => m.AppsComponent)
  }
];
