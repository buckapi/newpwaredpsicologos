import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthPocketbaseService } from '../../services/auth-pocketbase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loading: boolean = false;
  loginForm: FormGroup;
  passwordVisible: boolean = false; 
  errorMessage: string | null = null;
  showPassword: boolean = false;
  constructor(
    public global: GlobalService,
    public fb: FormBuilder,
    public auth: AuthPocketbaseService
  ) 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onLogin() {

    this.global.loading = true; // Start loading
    

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.auth.loginUser(email, password).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso', response);
          localStorage.setItem('isLoggedin', 'true');
          this.auth.setUser(response.user);
          this.auth.permision();
        },
        error: (error) => {
          this.global.loading = false; // Stop loading

          console.error('Error en el inicio de sesión:', error);
          this.errorMessage = 'Credenciales incorrectas, intenta de nuevo.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa los campos correctamente.';
    }
  }

  // Métodos de acceso a los controles para mostrar los mensajes de error
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
