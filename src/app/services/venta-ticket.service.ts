import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class VentaTicketService {

  ventasTicket!: Array<any>;

  constructor() {

    this.ventasTicket = new Array<Ticket>();
    this.ventasTicket = [
      {
        id: 1,
        dni: "12345678",
        precioReal: 50000,
        tipoEspectador: "L",
        precioCobrado: 40000,
        fechaCobro: new Date().toISOString()
      },
      {
        id: 2,
        dni: "4567890",
        precioReal: 50000,
        tipoEspectador: "E",
        precioCobrado: 50000,
        fechaCobro: new Date().toISOString()
      },
      {
        id: 3,
        dni: Math.floor(Math.random() * 100000000).toString(),
        precioReal: 48000,
        tipoEspectador: "E",
        precioCobrado: 48000,
        fechaCobro: new Date().toISOString()
      },
      {
        id: 4,
        dni: Math.floor(Math.random() * 100000000).toString(),
        precioReal: 12000,
        tipoEspectador: "L",
        precioCobrado: 9600,
        fechaCobro: new Date().toISOString()
      },
      {
        id: 5,
        dni: Math.floor(Math.random() * 100000000).toString(),
        precioReal: 45000,
        tipoEspectador: "L",
        precioCobrado: 36000,
        fechaCobro: new Date().toISOString()
      },
      {
        id: 6,
        dni: Math.floor(Math.random() * 100000000).toString(),
        precioReal: 14400,
        tipoEspectador: "L",
        precioCobrado: 12000,
        fechaCobro: new Date().toISOString()
      },
      {
        id: 7,
        dni: Math.floor(Math.random() * 100000000).toString(),
        precioReal:21000,
        tipoEspectador: "E",
        precioCobrado: 21000,
        fechaCobro: new Date().toISOString()
      }
    ]
  }

  getVentas() {
    return this.ventasTicket;
  }

  addVenta(ticket: Ticket): void {
    ticket.id = this.getId();
    this.ventasTicket.push(ticket);
  }

  getId(): number {
    let id: number = 0;
    for (const element of this.ventasTicket) {
      if (id < element.id) {
        id = element.id;
      }
    }
    return id + 1;
  }

  getTicket(id: number): Ticket {
    let ticket = new Ticket();
    for (const element of this.ventasTicket) {
      if (element.id == id) {
        ticket = element;
      }
    }
    return ticket;
  }

  updateTicket(ticket: Ticket): void {
    const index = this.ventasTicket.findIndex(x => x.id === ticket.id);
    if (index !== -1) {
      this.ventasTicket[index] = ticket;
    }
  }

  deleteTicket(id: number): void {
    const index = this.ventasTicket.findIndex(x => x.id === id);
    if (index!== -1) {
      this.ventasTicket.splice(index, 1);
    }
  }
}