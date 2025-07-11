import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

// Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent)
  },

// Accueil  
  {
    path: 'accueil',
    loadComponent: () =>
      import('./pages/accueil/accueil.component').then(m => m.AccueilComponent)
  },

  // 🔹 Autres composants à générer

 // ----------- MENU PRINCIPAL -----------
  // 🔹 Dashboard sera une vraie page analytique (KPI, graphiques...)
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/menu/menu-principal/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },

  { path: 'calendrier', 
    loadComponent: () => import('./pages/menu/menu-principal/calendrier/calendrier.component').then(m => m.CalendrierComponent)  
  },


  { path: 'gestion-salles', 
    loadComponent: () => import('./pages/menu/menu-principal/gestion-salles/gestion-salles.component').then(m => m.GestionSallesComponent) 
  },


  { path: 'notifications', 
    loadComponent: () => import('./pages/menu/menu-principal/notifications/notifications.component').then(m => m.NotificationsComponent) 
  },


// ----------- ORGANISATION -----------  
  { path: 'contacts', loadComponent: () => import('./pages/menu/organisation/contacts/contacts.component').then(m => m.ContactsComponent) },

  { path: 'equipes', 
    loadComponent: () => import('./pages/menu/organisation/equipes/equipes.component').then(m => m.EquipesComponent) 
  },

  { path: 'mes-reunions', 
    loadComponent: () => import('./pages/menu/organisation/mes-reunions/mes-reunions.component').then(m => m.MesReunionsComponent) 
  },

  { path: 'rapports-reunion', 
    loadComponent: () => import('./pages/menu/organisation/rapports-reunion/rapports-reunion.component').then(m => m.RapportsReunionComponent) 
  },


  
// ----------- ESPACE PERSONNEL -----------
  { path: 'notes', loadComponent: () => import('./pages/menu/espace-personnel/notes/notes.component').then(m => m.NotesComponent) },

  { path: 'todo-list', loadComponent: () => import('./pages/menu/espace-personnel/todo-list/todo-list.component').then(m => m.TodoListComponent) },

  { path: 'planification-evenement', 
    loadComponent: () => import('./pages/menu/espace-personnel/planification-evenement/planification-evenement.component').then(m => m.PlanificationEvenementComponent) 
  },


  
// ----------- GÉNÉRAL -----------
  { path: 'parametres', 
    loadComponent: () => import('./pages/menu/general/parametres/parametres.component').then(m => m.ParametresComponent) 
  },

  { path: 'aide-support', 
    loadComponent: () => import('./pages/menu/general/aide-support/aide-support.component').then(m => m.AideSupportComponent) 
  
  },
  
  { path: 'corbeille', 
    loadComponent: () => import('./pages/menu/general/corbeille/corbeille.component').then(m => m.CorbeilleComponent) 

  },
  
  { path: 'apps', 
    loadComponent: () => import('./pages/menu/general/apps/apps.component').then(m => m.AppsComponent) 

  }
];
