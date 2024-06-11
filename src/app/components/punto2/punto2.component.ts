import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Partida } from '../../models/partida';
import { NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {

  finalizar = false;
  difuminado: boolean = true;
  partida: Partida = new Partida("Pro");
  opciones = [['vocales', '../../../assets/images/numeros/num1.jpeg'], ['consonantes', '../../../assets/images/numeros/num2.jpeg'],
  ['letras', '../../../assets/images/numeros/num3.jpeg'], ['sílabas', '../../../assets/images/numeros/num4.jpeg']];
  palabraActual!: string;
  mensaje = "";
  respuesta!: number;
  iteracion: number = 0;
  opcion!: string;
  posibilidades!: Array<number>;

  iniciar() {
    this.iteracion++;
    this.difuminado = !this.difuminado;
    this.palabraActual = this.partida.seleccionarPalabra();
  }

  tomarOpcion(o: string) {
    this.opcion = o;
    this.posibilidades = this.partida.obtenerPosiblesRespuestas(this.opcion, this.palabraActual);
  }

  puntuar(resp: number): void {
    if (this.partida.contar(this.opcion, this.palabraActual) == resp) {
      this.partida.aciertos++;
      this.mensaje = "  ¡ Felicidades Haz acertado  !";
    }
    else {
      this.partida.errores++;
      this.mensaje = " ¡  Lo siento, Haz fallado !";
    }
    if (this.iteracion >7) {
      this.finalizar = true;
      this.mensaje=this.mensaje + "  --- Es el Final ---- "
    }
  }

  continuar(): void {

    if (!this.finalizar) {
      this.palabraActual = this.partida.seleccionarPalabra();
      this.mensaje = "";
      this.respuesta = 0;
      this.opcion = "";
      this.iteracion++;
      this.opciones = this.partida.shuffleArray(this.opciones);
    }

  }

  reiniciar(){
    this.iteracion=0;
    this.finalizar=false;
    this.difuminado=true;
    this.palabraActual="";
    this.mensaje="";
    this.respuesta=0;
    this.opcion="";
    this.partida = new Partida("Pro Gamer");
  }

}