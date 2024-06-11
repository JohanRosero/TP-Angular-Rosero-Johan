import { Producto } from "./producto";

export class Carrito {

    private _productos: Array<Producto> = [];
    private _total: number = 0;

    public get productos(): Array<Producto> {
        return this._productos;
    }
    public set productos(value: Array<Producto>) {
        this._productos = value;
    }
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }

    constructor() {
        this._productos = new Array<Producto>();
        this._total = 0;
    }

    public agregarProducto(producto: Producto): void{
            this._productos.push(producto);
            this._total += producto.precio.valueOf();
    }

    public restringirProducto(producto: Producto): boolean {
        let e: boolean = false;
        this.productos.forEach(element => {
            if (element.nombre == producto.nombre) {
                e = true;
            }
        });
        return e;
    }

}
