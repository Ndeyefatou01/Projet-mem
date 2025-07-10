import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; motDePasse: string }): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/login', credentials);
  }

  register(utilisateur: {
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
  }): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/register', utilisateur);
  }

  // Ajout de la méthode isLoggedIn()
  isLoggedIn(): boolean {
    // Par exemple, on vérifie la présence d'un token dans localStorage
    return !!localStorage.getItem('token');
  }
}
