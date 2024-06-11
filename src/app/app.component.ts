import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { MatIconModule } from '@angular/material/icon';
import { Punto2Component } from './components/punto2/punto2.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLink,HeaderComponent,FooterComponent,Punto1Component,
    MatIconModule,Punto2Component,FormTicketComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase-martes';
}
