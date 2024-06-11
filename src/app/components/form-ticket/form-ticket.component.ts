import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { VentaTicketService } from '../../services/venta-ticket.service';

@Component({
  selector: 'app-form-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './form-ticket.component.html',
  styleUrl: './form-ticket.component.css'
})
export class FormTicketComponent implements OnInit {
  ticket!: Ticket;
  tipo = [['L', 'Local'], ['E', 'Extranjero']];
  accion!: string;
  verPrecioCobrado = false;

  constructor(private ventaTicketService: VentaTicketService, private router: Router, private activateRoute: ActivatedRoute) {
    this.ticket = new Ticket();
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if (params['id'] == 0) {
        this.accion = "add";
      } else {
        this.accion = "edit";
        this.cargarTicket(params['id']);
      }
    }
    )

  }

  addTicket(): void {
    this.ventaTicketService.addVenta(this.ticket);
    console.log(this.ticket);
    this.router.navigate(['/ventas']);
  }

  updateTicket(): void {
    this.ventaTicketService.updateTicket(this.ticket);
    console.log(this.ticket);
    this.router.navigate(['/ventas']);
  }

  cargarTicket(id: number): void {
    this.ticket = this.ventaTicketService.getTicket(id);

  }

  deleteTicket(id: number): void {
    this.ventaTicketService.deleteTicket(id);
    this.router.navigate(['/ventas']);
  }

  calcularDescuento() {
    this.verPrecioCobrado = (this.ticket.precioCobrado != 0 && this.ticket.tipoEspectador != "");
    if (this.ticket.tipoEspectador === 'L') {
      this.ticket.precioCobrado = this.ticket.precioReal * 0.8;
    } else {
      this.ticket.precioCobrado = this.ticket.precioReal; // Sin descuento
    }
  }


}
