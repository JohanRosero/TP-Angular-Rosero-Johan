export class Producto {
    private _nombre: String;
    private _descripcion: String;
    private _imagen: String;
    private _precio: Number;
    
    constructor(nombre: string, descripcion: string, imagen: string, precio: number) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._imagen = imagen;
        this._precio = precio;
    }
    
    public get descripcion(): String {
        return this._descripcion;
    }
    public set descripcion(value: String) {
        this._descripcion = value;
    }
    public get imagen(): String {
        return this._imagen;
    }
    public set imagen(value: String) {
        this._imagen = value;
    }
    public get precio(): Number {
        return this._precio;
    }
    public set precio(value: Number) {
        this._precio = value;
    }
    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }


}
