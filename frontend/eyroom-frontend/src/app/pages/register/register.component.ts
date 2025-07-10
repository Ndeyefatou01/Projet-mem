import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.motDePasse !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    const utilisateur = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      motDePasse: this.motDePasse
    };

    console.log('Utilisateur à inscrire :', utilisateur);

    this.authService.register(utilisateur).subscribe({
      next: () => {
        alert('Inscription réussie');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        alert('Erreur lors de l\'inscription');
        console.error('Erreur backend :', err);
      }
    });
  }

  goToConnexion() {
    this.router.navigate(['/login']);
  }
}
