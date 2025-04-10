import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { GlobalService } from './services/global.service';
import { DetailProfessionalComponent } from './components/detail-professional/detail-professional.component';
import { HomeComponent as DashboardHomeComponent } from './components/dashboardProfessional/home/home.component';
import { AuthPocketbaseService } from './services/auth-pocketbase.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfessionalsComponent,
    ContactComponent,
    DetailProfessionalComponent,
    DashboardHomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'redpsicologos';
  constructor(
    public global: GlobalService,
    public auth: AuthPocketbaseService
  ) {
    
  }
  ngOnInit() {
    // Verificar autenticación al iniciar la aplicación
    if (localStorage.getItem('isLoggedin')) {
      this.auth.permision();
    }
  }
}
