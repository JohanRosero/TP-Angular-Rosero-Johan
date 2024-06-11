import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { VentaTicketService } from '../../services/venta-ticket.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent implements OnInit {

  ventas!: Array<Ticket>;
  auxiliar!: Array<Ticket>;
  total!: number;


  ngOnInit(): void {
  }

  constructor(private ventaTicketService: VentaTicketService, private router: Router) {
    this.ventas = ventaTicketService.getVentas();
    this.auxiliar = this.ventas;
    this.total=this.auxiliar.reduce((x,ob) => x+ob.precioCobrado,0)
  }
  
  addTicket(): void {
    this.router.navigate(['form-ticket', 0]);
  }
  
  update(id: number): void {
    console.log(id);
    this.router.navigate(['form-ticket', id])
  }
  
  delete(id: number): void {
    console.log(id);
    this.ventaTicketService.deleteTicket(id);
    this.ventas = this.ventaTicketService.getVentas();
    this.auxiliar = this.ventas;
  }
  ver(tipo: string) {
    if (tipo == "local") {
      this.auxiliar = this.ventas;
      this.auxiliar = this.ventas.filter(x => x.tipoEspectador == "L");
      this.total=this.auxiliar.reduce((x,ob) => x+ob.precioCobrado,0)
    } else if (tipo == "extranjero") {
      this.auxiliar = this.ventas;
      this.auxiliar = this.ventas.filter(x => x.tipoEspectador == "E");
      this.total=this.auxiliar.reduce((x,ob) => x+ob.precioCobrado,0)
    }else{
      this.auxiliar = this.ventas;
    }
  }


}

