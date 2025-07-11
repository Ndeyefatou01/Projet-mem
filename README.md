
## 📝 **Description du Projet – Eyroom**

**Eyroom** est une application web et mobile de gestion des salles de réunion, conçue pour simplifier la réservation, le suivi et l'accès sécurisé aux salles de réunion d'une entreprise.

Elle permet aux employés de planifier des réunions, réserver des salles, envoyer des invitations et ouvrir les portes grâce à un système de QR code connecté à une serrure intelligente. Chaque salle est également équipée d’un écran d’affichage en temps réel des réunions en cours et à venir.

---

## 🚀 Fonctionnalités principales

* 📅 **Planification des réunions**

  * Création, modification, suppression de réunions<qsezr=
  * Invitation de participants internes
  * Gestion des horaires et disponibilités en temps réel

* 🏢 **Réservation de salles**

  * Liste des salles disponibles avec équipements
  * Visualisation de la disponibilité en calendrier
  * Filtrage par capacité, localisation ou équipement

* 🔐 **Système de QR code et accès sécurisé**

  * QR code unique généré pour chaque réunion
  * Scan pour déverrouiller une serrure connectée
  * Historique des accès enregistrés

* 📺 **Affichage dynamique dans les salles**

  * Écran mural affichant les réunions du jour
  * Statut de la salle (occupée / libre)

* 🔔 **Notifications**

  * Rappels de réunions
  * Notifications push (mobile)
  * Emails d'invitation

---

## 🛠️ Technologies utilisées

| Côté                   | Stack                                           |
| ---------------------- | ----------------------------------------------- |
| **Frontend Web**       | Angular                                         |
| **Application Mobile** | Flutter                                         |
| **Backend API**        | Spring Boot (Java)                              |
| **Base de données**    | PostgreSQL                                      |
| **QR Code**            | ZXing ou autre lib QR compatible Angular & Java |
| **Affichage écran**    | PWA Angular embarqué                            |
| **Sécurité**           | Authentification OAuth2 + JWT, conformité RGPD  |

---

## 📦 Déploiement

* Backend : conteneurisable (Docker)
* Frontend : hébergement web (Firebase, Vercel ou VPS)
* Base de données : PostgreSQL (local ou cloud)
* API serrure connectée : à intégrer selon le fabricant

---

## 🧩 Objectif du projet

Améliorer l'organisation interne des entreprises en automatisant et sécurisant la gestion des réunions et l'accès aux espaces de travail, tout en offrant une interface fluide et intuitive aux utilisateurs.





----------------------------------------------------------------------------------------------------------------------------------

On passe à l’action. Comme on fait un projet **Angular + Spring Boot + Flutter**, il faut d'abord **structurer** et **séquencer** correctement les tâches pour éviter de s’emmêler.


## 🔰 Ordre de réalisation

### 🔹 **Étape 1 : Backend (Spring Boot) – API REST**

👉 C’est le **cœur du projet**. Toutes les applis (web, mobile, écran) s’y connectent.
On y définit :

* Modèle de données
* Authentification
* Gestion des utilisateurs / réunions / salles / QR codes
* Accès API sécurisé avec JWT

**➡️ Donc On commence le projet par ça.**

---

### 🔹 Étape 2 : Frontend Web (Angular)

Après avoir une API stable, on connecte l’interface Angular :

* Page d'accueil + Connexion / inscription
* Dashboard
* Calendrier des réunions
* Gestion des salles
* Scan QR code (pour debug ou admin)

---

### 🔹 Étape 3 : Application Mobile (Flutter)

Reprise des fonctionnalités principales :

* Réservations
* Scan QR code
* Notifications push

---

### 🔹 Étape 4 : Écran de salle (Angular PWA ou mini app)

Affichage autonome :

* Réunions du jour
* Salle libre ou occupée



----------------------------------------------------------------------------------------------------------------------------------

## 🛠️ On commence maintenant avec l'initialisation du projet : le frontend avec Angular et le Backend ia [Spring Initializr](https://start.spring.io)

## ⚙️ Initialisation du projet

### 📁 Arborescence

* `frontend/eyroom-frontend/` → Projet Angular
* `backend/` → Projet Spring Boot

---
## 🧱 Mise en place de l’environnement

### 1. Création du projet Angular

```bash
cd frontend
ng new eyroom-frontend
```
 Le projet Angular est maintenant dans ## "projet-eyroom/frontend/eyroom-frontend"

### 2. Création du backend avec Spring Initializr

Site : [https://start.spring.io](https://start.spring.io)

**Configuration :**

* Project : Maven
* Language : Java
* Spring Boot : 3.x
* Group : com.eyroom
* Artifact : backend
* Dependencies : Spring Web, Spring Data JPA, H2 Database, Lombok

👉 Clique sur "Generate", et décompresse le .zip dans le dossier eyroom/backend 


## Lancement du projet

    On veut pouvoir lancer simultanément le frontend Angular et le backend Spring Boot avec la commande `npm run dev`.

### Ce qu'on doit faire étape par étape :

### 1. Installer `concurrently` dans le dossier `projet-eyroom/frontend/eyroom-frontend` :

```bash
cd projet-eyroom/frontend/eyroom-frontend
npm install concurrently --save-dev
```

### 2. Modifier ton `package.json`

Dans ton fichier `package.json`, il faut **ajouter les scripts backend et dev** dans la section `"scripts"`.

À partir de ton `package.json` actuel, remplace la partie `"scripts"` par :

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test",
  "backend": "cd ../../backend && ./mvnw spring-boot:run",
  "dev": "concurrently \"npm start\" \"npm run backend\""
}
```

### 3. Lancer les deux serveurs en même temps

Dans le même dossier `eyroom-frontend`, lance :

```bash
npm run dev
```

---

### En résumé

* `npm run start` → lance seulement le frontend Angular.
* `npm run backend` → lance seulement le backend Spring Boot.
* `npm run dev` → lance les deux en même temps grâce à `concurrently`.

---


## 👥 Mise en place du formulaire d'inscription et de connexion (avec backend PostgreSQL)

### 🔹 Backend – Spring Boot

* Création de l’entité `Utilisateur`
* DTO `RegisterRequest`
* Repository `UserRepository`
* Service `UserService`
* Contrôleur `AuthController`

**Endpoints :**

* `POST /api/auth/register` → Ajoute un utilisateur
* `POST /api/auth/login` → Vérifie email + mot de passe

### 🔹 Base de données PostgreSQL

Configuration dans `application.properties` :

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/eyroomdb
spring.datasource.username=postgres
spring.datasource.password=***
spring.jpa.hibernate.ddl-auto=update
```

Hibernate se charge de créer les tables.

### 🔹 Frontend – Angular

**Composants :**

* `login.component.ts` (standalone)
* `register.component.ts` (standalone)

**Routing – `app.routes.ts` :**

```ts
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
{ path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
{ path: 'accueil', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] }
```

**Service – `auth.service.ts` :**

* `register(utilisateur)` → `/api/auth/register`
* `login(credentials)` → `/api/auth/login`

**Redirections :**

* Après inscription → `/login`
* Après connexion → `/accueil`

**Sécurité :**

* Stockage de l’`email` dans `localStorage`
* Guard `AuthGuard` avec méthode `isLoggedIn()`

**Tests réussis :**

* 🔐 Connexion utilisateur : ✅
* 📝 Inscription utilisateur : ✅
* 🔄 Redirection après succès : ✅
* ✅ Test Postman : fonctionnement OK

> 📸 **Captures d’écran à inclure ici :**
>
> * Formulaire d’inscription rempli
> * Formulaire de connexion
> * Console backend : `Utilisateur enregistré`
> * Aperçu de la base PostgreSQL avec utilisateurs
> * Redirection vers /accueil après login

---

**Prochaine étape** : Construction du **Dashboard** et du **calendrier des réunions** etc.

Voici les **commandes mises à jour** pour générer tous tes composants avec une structure propre :

## ✅ Structure de génération : à exécuter depuis src/app/pages/menu

### 🔹 1. MENU PRINCIPAL

```bash
ng generate component menu-principal/dashboard --standalone
ng generate component menu-principal/calendrier --standalone
ng generate component menu-principal/gestion-salles --standalone
ng generate component menu-principal/notifications --standalone
```

---

### 🔹 2. ORGANISATION

```bash
ng generate component organisation/contacts --standalone
ng generate component organisation/equipes --standalone
ng generate component organisation/mes-reunions --standalone
ng generate component organisation/rapports-reunion --standalone
```

### 🔹 3. ESPACE PERSONNEL

```bash
ng generate component espace-personnel/notes --standalone
ng generate component espace-personnel/todo-list --standalone
ng generate component espace-personnel/planification-evenement --standalone
```

### 🔹 4. GÉNÉRAL

```bash
ng generate component general/parametres --standalone
ng generate component general/aide-support --standalone
ng generate component general/corbeille --standalone
ng generate component general/apps --standalone

```


## 📁 Arborescence finale attendue

src/
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── accueil/
│   │   └── menu/
│   │       ├── menu-principal/
│   │       │   ├── dashboard/
│   │       │   ├── calendrier/
│   │       │   ├── gestion-salles/
│   │       │   └── notifications/
│   │       ├── organisation/
│   │       │   ├── contacts/
│   │       │   ├── equipes/
│   │       │   ├── mes-reunions/
│   │       │   └── rapports-reunion/
│   │       ├── espace-personnel/
│   │       │   ├── notes/
│   │       │   ├── todo-list/
│   │       │   └── planification-evenement/
│   │       └── general/
│   │           ├── parametres/
│   │           ├── aide-support/
│   │           ├── corbeille/
│   │           └── apps/


Voici le code complet du fichier `app.routes.ts` à jour avec **toutes les routes** correspondant aux composants générés :

---

### ✅ `src/app/app.routes.ts`

```ts
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
```

---

💡 **Conseil :** après avoir copié ce fichier, tu peux directement relier les liens de ton menu latéral avec `routerLink="/dashboard"`, `routerLink="/calendrier"`, etc.

Voici comment modifier ta sidebar HTML pour intégrer tous les liens de navigation Angular avec routerLink, en respectant les chemins que tu viens de créer.

<div class="dashboard-container">
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="logo-section">
      <i class="bi bi-app-indicator logo-icon"></i>
      <span class="logo-text">Eyroom</span>
    </div>

    <nav class="menu">
      <h3>MENU PRINCIPAL</h3>
      <ul>
        <li><a routerLink="/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</a></li>
        <li><a routerLink="/calendrier"><i class="bi bi-calendar-week"></i> Calendrier</a></li>
        <li><a routerLink="/gestion-salles"><i class="bi bi-door-open"></i> Gestion des Salles</a></li>
        <li><a routerLink="/notifications"><i class="bi bi-bell"></i> Notifications</a></li>
      </ul>

      <h3>ORGANISATION</h3>
      <ul>
        <li><a routerLink="/contacts"><i class="bi bi-person-lines-fill"></i> Contacts</a></li>
        <li><a routerLink="/equipes"><i class="bi bi-people-fill"></i> Équipes</a></li>
        <li><a routerLink="/mes-reunions"><i class="bi bi-briefcase"></i> Mes réunions</a></li>
        <li><a routerLink="/rapports-reunion"><i class="bi bi-file-earmark-text"></i> Rapports</a></li>
      </ul>

      <h3>ESPACE PERSONNEL</h3>
      <ul>
        <li><a routerLink="/notes"><i class="bi bi-stickies"></i> Notes</a></li>
        <li><a routerLink="/todo-list"><i class="bi bi-check2-square"></i> To-do List</a></li>
        <li><a routerLink="/planification-evenement"><i class="bi bi-calendar-plus"></i> Planification</a></li>
      </ul>

      <h3>GÉNÉRAL</h3>
      <ul>
        <li><a routerLink="/parametres"><i class="bi bi-gear"></i> Paramètres</a></li>
        <li><a routerLink="/aide-support"><i class="bi bi-question-circle"></i> Aide et support</a></li>
        <li><a routerLink="/corbeille"><i class="bi bi-trash"></i> Corbeille</a></li>
        <li><a routerLink="/apps"><i class="bi bi-grid-3x3-gap"></i> Apps</a></li>
      </ul>

      <div class="user-section">
        <img src="https://i.pravatar.cc/40?img=7" alt="Utilisateur" />
        <span>Basile SIOTENE</span>
      </div>
    </nav>
  </aside>




###  Teste chaque route manuellement
Dans le navigateur :

http://localhost:4200/dashboard

http://localhost:4200/notes

etc.