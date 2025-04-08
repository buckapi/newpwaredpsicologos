import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import Swal from 'sweetalert2';
import { AuthPocketbaseService } from '../../../services/auth-pocketbase.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;
  constructor (
    public global: GlobalService,
    public auth: AuthPocketbaseService
  ) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  
logoutUser() {
  Swal.fire({
    title: '¿Quieres cerrar sesión?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'Mantenerme aqui'
    
  }).then((result) => {
    if (result.isConfirmed) {
      this.auth.logoutUser(); // Call the original logout method
      Swal.fire(
        '¡Cerrado!',
        'Has cerrado sesión con éxito.',
        'success'
      );
    }
  });
}
}
