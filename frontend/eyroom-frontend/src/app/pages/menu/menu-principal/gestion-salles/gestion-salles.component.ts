import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface Salle {
  id: number;
  nom: string;
  capacite: number;
  equipements: string[];
  statut: 'libre' | 'occupee' | 'maintenance';
  prochaineCreneau?: string;
  etage: number;
  image?: string;
}

@Component({
  selector: 'app-gestion-salles',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './gestion-salles.component.html',
  styleUrl: './gestion-salles.component.css'
})
export class GestionSallesComponent implements OnInit {

  salles: Salle[] = [
    {
      id: 1,
      nom: 'Salle Atlantique',
      capacite: 12,
      equipements: ['Projecteur', 'Tableau blanc', 'Visioconférence'],
      statut: 'libre',
      prochaineCreneau: '14:00 - 15:30',
      etage: 1
    },
    {
      id: 2,
      nom: 'Salle Pacifique',
      capacite: 8,
      equipements: ['Écran TV', 'Tableau blanc'],
      statut: 'occupee',
      prochaineCreneau: 'Libre à 16:00',
      etage: 1
    },
    {
      id: 3,
      nom: 'Salle Méditerranée',
      capacite: 20,
      equipements: ['Projecteur', 'Système audio', 'Visioconférence', 'Tableau interactif'],
      statut: 'libre',
      prochaineCreneau: '15:00 - 16:00',
      etage: 2
    },
    {
      id: 4,
      nom: 'Salle Indien',
      capacite: 6,
      equipements: ['Écran TV', 'Tableau blanc'],
      statut: 'maintenance',
      prochaineCreneau: 'Disponible demain',
      etage: 2
    },
    {
      id: 5,
      nom: 'Salle Arctique',
      capacite: 15,
      equipements: ['Projecteur', 'Visioconférence', 'Tableau blanc'],
      statut: 'libre',
      prochaineCreneau: 'Libre toute la journée',
      etage: 3
    },
    {
      id: 6,
      nom: 'Salle Caraïbes',
      capacite: 10,
      equipements: ['Écran TV', 'Système audio', 'Tableau blanc'],
      statut: 'occupee',
      prochaineCreneau: 'Libre à 17:00',
      etage: 3
    }
  ];

  sallesFiltrees: Salle[] = [];
  filtreStatut: string = 'tous';
  filtreCapacite: string = 'tous';
  filtreEtage: string = 'tous';
  rechercheText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.sallesFiltrees = [...this.salles];
  }

  filtrerSalles(): void {
    this.sallesFiltrees = this.salles.filter(salle => {
      const matchStatut = this.filtreStatut === 'tous' || salle.statut === this.filtreStatut;
      const matchCapacite = this.filtreCapacite === 'tous' || 
        (this.filtreCapacite === 'petite' && salle.capacite <= 8) ||
        (this.filtreCapacite === 'moyenne' && salle.capacite > 8 && salle.capacite <= 15) ||
        (this.filtreCapacite === 'grande' && salle.capacite > 15);
      const matchEtage = this.filtreEtage === 'tous' || salle.etage.toString() === this.filtreEtage;
      const matchRecherche = salle.nom.toLowerCase().includes(this.rechercheText.toLowerCase());
      
      return matchStatut && matchCapacite && matchEtage && matchRecherche;
    });
  }

  getStatutClass(statut: string): string {
    switch(statut) {
      case 'libre': return 'statut-libre';
      case 'occupee': return 'statut-occupee';
      case 'maintenance': return 'statut-maintenance';
      default: return '';
    }
  }

  getStatutText(statut: string): string {
    switch(statut) {
      case 'libre': return 'Libre';
      case 'occupee': return 'Occupée';
      case 'maintenance': return 'Maintenance';
      default: return statut;
    }
  }

  reserverSalle(salle: Salle): void {
    if (salle.statut === 'libre') {
      console.log('Réserver la salle:', salle.nom);
      // Logique de réservation ici
    }
  }

  voirDetails(salle: Salle): void {
    console.log('Voir détails de:', salle.nom);
    // Logique pour afficher les détails
  }
}