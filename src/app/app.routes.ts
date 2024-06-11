import { Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { HomeComponent } from './components/home/home.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { VentasComponent } from './components/ventas/ventas.component';

export const routes: Routes = [
    { path: 'punto1', component: Punto1Component},
    { path: 'punto2', component: Punto2Component}, 
    { path: 'home', component: HomeComponent}, 
    { path: 'form-ticket/:id', component: FormTicketComponent},  
    { path: 'ventas', component: VentasComponent},  
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
