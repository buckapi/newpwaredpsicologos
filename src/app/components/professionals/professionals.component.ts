import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RealtimeProfesionalesService } from '../../services/realtime-profesionales.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professionals',
  imports: [CommonModule],
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.css'
})
export class ProfessionalsComponent {
  viewMode: 'grid' | 'list' = 'grid';

  constructor(
    public global: GlobalService,
    public professionalsService: RealtimeProfesionalesService
  ) { }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
}
