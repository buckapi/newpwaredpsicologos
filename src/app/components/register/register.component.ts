import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthPocketbaseService } from '../../services/auth-pocketbase.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null;
  loading = false;
  passwordVisible = false;
  cpasswordVisible = false;
constructor(
  public global: GlobalService,
  private fb: FormBuilder,
  private auth: AuthPocketbaseService
) {
  this.registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    cpassword: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  });

}
togglePasswordVisibility(field: 'password' | 'cpassword') {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.cpasswordVisible = !this.cpasswordVisible;
    }
  }
specialistRegister() {
    if (this.registerForm.valid) {
      this.loading = true;
      const formValues = this.registerForm.value;
      const username = formValues.email.split('@')[0];

      if (formValues.password !== formValues.cpassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        this.loading = false;
        return;
      }

      this.auth.registerUser(
        formValues.email,
        formValues.password,
        'especialista',
        formValues.name,
        username,
        ''
      ).subscribe(
        (response) => {
          this.loading = false;
          this.loginAfterRegistration(formValues.email, formValues.password);
        },
        (error) => {
          this.loading = false;
          this.errorMessage = 'Error al registrar usuario: ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'Por favor complete todos los campos requeridos';
    }
  }
loginAfterRegistration(email: string, password: string) {

this.auth.loginUser(email, password).subscribe({
  next: (response) => {
    console.log('Inicio de sesión exitoso', response);
    localStorage.setItem('isLoggedin', 'true');
    this.auth.setUser(response.user);
    this.global.setRoute('dashboard-professional/home');
    this.auth.permision();
  },
  error: (error) => {
    console.error('Error en el inicio de sesión:', error);
    this.errorMessage = 'Credenciales incorrectas, intenta de nuevo.';
  }
});

}
}
