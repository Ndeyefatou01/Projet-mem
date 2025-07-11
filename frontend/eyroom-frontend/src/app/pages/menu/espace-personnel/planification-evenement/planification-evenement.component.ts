import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Participant {
  id: string;
  name: string;
  email: string;
}

interface Room {
  id: string;
  name: string;
  capacity: number;
  location: string;
  equipment: string[];
}

@Component({
  selector: 'app-planification-evenement',
  standalone: true, // Ajouté pour être autonome
  imports: [FormsModule], // Ajouté pour que [(ngModel)] fonctionne
  templateUrl: './planification-evenement.component.html',
  styleUrls: ['./planification-evenement.component.css']
})
export class PlanificationEvenementComponent {
  // Champs du formulaire
  title = '';
  description = '';
  startDate = '';
  startTime = '';
  endDate = '';
  endTime = '';
  roomId = '';

  isEditMode = false;
  isLoading = false;
  showParticipantSearch = false;

  availableRooms: Room[] = [
    {
      id: '1',
      name: 'Salle Conférence A',
      capacity: 12,
      location: 'Étage 1',
      equipment: ['Projecteur', 'Wifi']
    },
    {
      id: '2',
      name: 'Salle Réunion B',
      capacity: 8,
      location: 'Étage 2',
      equipment: ['Tableau blanc']
    }
  ];

  allEmployees: Participant[] = [
    { id: '1', name: 'Alice Dupont', email: 'alice@example.com' },
    { id: '2', name: 'Bob Martin', email: 'bob@example.com' },
    { id: '3', name: 'Claire Petit', email: 'claire@example.com' }
  ];

  selectedParticipants: Participant[] = [];
  searchQuery = '';
  filteredEmployees: Participant[] = [...this.allEmployees];

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      alert(this.isEditMode ? 'Réunion mise à jour' : 'Réunion créée');
      this.resetForm();
    }, 1000);
  }

  onCancel() {
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.startDate = '';
    this.startTime = '';
    this.endDate = '';
    this.endTime = '';
    this.roomId = '';
    this.selectedParticipants = [];
    this.searchQuery = '';
    this.filteredEmployees = [...this.allEmployees];
    this.showParticipantSearch = false;
    this.isEditMode = false;
  }

  toggleParticipantSearch() {
    this.showParticipantSearch = !this.showParticipantSearch;
    if (this.showParticipantSearch) {
      this.onSearchParticipants();
    }
  }

  onSearchParticipants() {
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      this.filteredEmployees = this.allEmployees.filter(e =>
        (e.name.toLowerCase().includes(query) || e.email.toLowerCase().includes(query)) &&
        !this.selectedParticipants.some(p => p.id === e.id)
      );
    } else {
      this.filteredEmployees = this.allEmployees.filter(e =>
        !this.selectedParticipants.some(p => p.id === e.id)
      );
    }
  }

  addParticipant(emp: Participant) {
    this.selectedParticipants.push(emp);
    this.filteredEmployees = this.filteredEmployees.filter(e => e.id !== emp.id);
    this.searchQuery = '';
  }

  removeParticipant(id: string) {
    this.selectedParticipants = this.selectedParticipants.filter(p => p.id !== id);
    const emp = this.allEmployees.find(e => e.id === id);
    if (emp && !this.filteredEmployees.some(e => e.id === id)) {
      this.filteredEmployees.push(emp);
    }
  }

  getRoomName(id: string): string {
    const r = this.availableRooms.find(room => room.id === id);
    return r ? r.name : '';
  }

  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
