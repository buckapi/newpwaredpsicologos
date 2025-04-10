import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { RealtimeProfesionalesService } from '../../services/realtime-profesionales.service';
import { CommonModule } from '@angular/common';
import { RealtimeEspecialidadesService } from '../../services/realtime-especialidades.service';
import { RealtimeCorrientesService } from '../../services/realtime-corrientes.service';

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
    public professionalsService: RealtimeProfesionalesService,
    public especialidades: RealtimeEspecialidadesService,
    public corrientes: RealtimeCorrientesService
  ) { }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
}
