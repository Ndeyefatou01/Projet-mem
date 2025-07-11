import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Meeting {
  id: string;
  subject: string;
  date: Date;
  startTime: string;
  endTime: string;
  room: string;
  participants: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  qrCode: string;
  organizer: string;
}

@Component({
  selector: 'app-mes-reunions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mes-reunions.component.html',
  styleUrls: ['./mes-reunions.component.scss']
})
export class MesReunionsComponent implements OnInit {
  meetings: Meeting[] = [];
  filteredMeetings: Meeting[] = [];
  activeFilter: string = 'all';
  searchTerm: string = '';
  showQRModal: boolean = false;
  selectedMeeting?: Meeting;

  labels: { [key: string]: string } = {
    upcoming: 'À venir',
    ongoing: 'En cours',
    completed: 'Terminée',
    cancelled: 'Annulée'
  };

  ngOnInit() {
    this.loadMeetings();
  }

  loadMeetings() {
    this.meetings = [
      {
        id: '1',
        subject: 'Réunion équipe marketing',
        date: new Date('2025-03-12'),
        startTime: '09:00',
        endTime: '10:30',
        room: 'Salle A',
        participants: ['Alice', 'Bob'],
        status: 'upcoming',
        qrCode: '',
        organizer: 'Alice'
      },
      {
        id: '2',
        subject: 'Stand-up quotidien',
        date: new Date('2025-03-11'),
        startTime: '10:00',
        endTime: '10:30',
        room: 'Salle B',
        participants: ['Claire'],
        status: 'ongoing',
        qrCode: '',
        organizer: 'Claire'
      }
    ];
    this.filterMeetings();
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
    this.filterMeetings();
  }

  filterMeetings() {
    let filtered = this.meetings;

    if (this.activeFilter !== 'all') {
      filtered = filtered.filter(m => m.status === this.activeFilter);
    }

    if (this.searchTerm) {
      filtered = filtered.filter(m =>
        m.subject.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredMeetings = filtered;
  }

  formatDate(date?: Date): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('fr-FR').format(date);
  }

  getStatusLabel(status: string): string {
    return this.labels[status] || status;
  }

  getEmptyStateMessage(): string {
    return 'Aucune réunion trouvée.';
  }

  createMeeting() {}
  editMeeting(m: Meeting) {}
  viewDetails(m: Meeting) {}
  cancelMeeting(m: Meeting) {
    m.status = 'cancelled';
    this.filterMeetings();
  }
  showQRCode(m: Meeting) {
    this.selectedMeeting = m;
    this.showQRModal = true;
  }
  closeQRModal() {
    this.showQRModal = false;
    this.selectedMeeting = undefined;
  }
  downloadQR() {}
  shareQR() {}
}
