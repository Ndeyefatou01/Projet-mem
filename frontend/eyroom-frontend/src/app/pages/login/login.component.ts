import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  motDePasse = '';

  constructor(private authService: AuthService, private router: Router) {}

  goToInscription() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    const email = this.email.trim();
    const motDePasse = this.motDePasse.trim();

    if (!email || !motDePasse) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const credentials = { email, motDePasse };

    this.authService.login(credentials).subscribe({
      next: (res: any) => {
        console.log('Réponse du backend :', res);

        // Optionnel : stocker un token si fourni par le backend
        if (res.token) {
          localStorage.setItem('token', res.token);
        }

        localStorage.setItem('userEmail', email);
        this.router.navigate(['/dashboard']); // Redirection vers le dashboard
      },
      error: (err) => {
        alert('Email ou mot de passe incorrect');
        console.error('Erreur API :', err);
      }
    });
  }
}





//import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';
//import { CommonModule } from '@angular/common';
//import { FormsModul//e } from '@angular/forms';

//@Component({
//  selector: 'app-connexion',
//  standalone: true,
//  imports: [CommonModule, FormsModule],
//  templateUrl: './login.component.html',
//  styleUrls: ['./login.component.css']
//})
//export class LoginComponent {
 // email = '';
 // motDePasse = '';

 // constructor(private authService: AuthService, private router: Router) {}

 // goToInscription() {
 //   this.router.navigate(['/register']);
//  }

  //onSubmit() {
  //  const email = this.email.trim();
  //  const motDePasse = this.motDePasse.trim();

  //  if (!email || !motDePasse) {
  //    alert('Veuillez remplir tous les champs.');
  //    return;
 //   }
//
 //   const credentials = { email, motDePasse };
 //   console.log('Tentative de connexion avec :', credentials);

//    this.authService.login(credentials).subscribe({
 //     next: (res: any) => {
 //       console.log('Réponse du backend :', res);

 //       if (res.message === 'Connexion réussie') {
 //         localStorage.setItem('userEmail', email);
 //         this.router.navigate(['/acceuil']);
  //      } else {
   //       alert('Email ou mot de passe incorrect');
  //      }
  //    },
 //     error: (err) => {
   //     alert('Erreur lors de la connexion');
 //       console.error('Erreur API :', err);
//      }
 //   });
 // }
//}


