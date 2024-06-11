export class Ticket {

    id!: number;
    dni: string = "";
    precioReal: number = 50000;
    tipoEspectador="L";
    precioCobrado: number= 0;
    fechaCobro!: string;

    constructor(){
        this.precioCobrado=this.descuento();
    }

    public getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
    getDni(): string {
        return this.dni;
    }
    getPrecioReal(): number {
        return this.precioReal;
    }
    getTipoEspectador(): string {
        return this.tipoEspectador;
    }
    getPrecioCobrado(): number {
        return this.precioCobrado;
    }
    getFechaCobro(): string {
        return this.fechaCobro;
    }
    setDni(dni: string): void {
        this.dni = dni;
    }
    setPrecioReal(precioReal: number): void {
        this.precioReal = precioReal;
    }
    setTipoEspectador(tipoEspectador: string): void {
        this.tipoEspectador = tipoEspectador;
    }
    setPrecioCobrado(precioCobrado: number): void {
        this.precioCobrado = precioCobrado;
    }
    setFechaCobro(fechaCobro: string): void {
        this.fechaCobro = fechaCobro;
    }
    toString(): string {
        return this.dni + " " + this.precioReal + " " + this.tipoEspectador + " " + this.precioCobrado + " " + this.fechaCobro;
    }

    descuento() {
        if (this.tipoEspectador == "L") {
            this.precioReal = this.precioReal * 0.8;
        }
        return this.precioReal;
    }

}
