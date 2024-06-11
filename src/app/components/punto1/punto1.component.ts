import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Producto } from '../../models/producto';
import { Carrito } from '../../models/carrito';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {

  carrito: Carrito = new Carrito();
  producto!: Producto;
  productos!: Array<Producto>;
  mensaje!: string;

  constructor() {
    this.productos = new Array<Producto>();
    this.productos.push(new Producto("GPU-GF", "GeForce RTX 4090: con arquitectura Ada Lovelace lanzada en 2022.", "assets/images/gpu1.png", 150000));
    this.productos.push(new Producto("GPU-RADEON", "Radeon RX 7900 XTX:tarjeta gráfica de escritorio con arquitectura RDNA 3 ", "assets/images/gpu2.png", 165000));
    this.productos.push(new Producto("MOUSE OPTICAL", "WIRELESS MOUSE 3 BLUETHOO 10 MTS Sonido envolvente , zona Gamer", "assets/images/mouse.png", 15000));
    this.productos.push(new Producto("MONITOR", "LG-32' PANTALLA CURVA", "assets/images/monitor.png", 198000));
    this.productos.push(new Producto("MOTHER BOAR", "AZUS ,KFJ-345", "assets/images/motherBoard.png", 550000));
    this.productos.push(new Producto("HARD DISK", "SSD 2TB 4.0", "assets/images/hardDisk.png", 47000));
    this.productos.push(new Producto("HEAD PHONES", "SAMSUMG-HIGTH QUALITY SOUND", "assets/images/headPhones.png", 30000));

  }
  public agregarCarrito(producto: Producto): void {
    if (!this.carrito.restringirProducto(producto)) {
      this.carrito.agregarProducto(producto);
      console.log(this.producto);
      console.log(this.carrito.productos);
      console.log(this.carrito.total);
      this.mensaje = "El Producto ha sido agregado al carrito";
    } else {
      this.mensaje = "¡No fué posible!, Este producto ya esta agregado al carrito";
    }

  }

  duplicar(producto:Producto){
    this.carrito.agregarProducto(producto);
  }

  eliminar(producto:Producto){
    this.carrito.productos.splice(this.carrito.productos.indexOf(producto),1);
    this.carrito.total -= producto.precio.valueOf();
    this.mensaje = "El Producto ha sido eliminado del carrito";
  }

}
