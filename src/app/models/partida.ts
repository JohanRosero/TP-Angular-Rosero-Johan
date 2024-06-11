export class Partida {

    private _jugador: string = "GamerPro";
    private _palabras = ['elefante', 'casa', 'parque', 'murcielago', 'mesa', 'cocina', 'argentina', 'computador', 'gato', 'jugar', 'cuaderno', 'libros', 'teléfono', 'herramientas', 'tobogan'];
    private _aciertos = 0;
    private _errores = 0;
    private _posiblesRespuestas!: Array<number>;
    private _mensaje = "";
    private _respuesta!: number;
    private _opcion!: string;
    private _palabra!: string;

    constructor(jugador: string) {
        this._jugador = jugador;
    }
    public get palabra(): string {
        return this._palabra;
    }
    public set palabra(value: string) {
        this._palabra = value;
    }

    public get jugador(): string {
        return this._jugador;
    }
    public set jugador(value: string) {
        this._jugador = value;
    }
    public get palabras() {
        return this._palabras;
    }
    public set palabras(value) {
        this._palabras = value;
    }
    public get aciertos() {
        return this._aciertos;
    }
    public set aciertos(value) {
        this._aciertos = value;
    }
    public get errores() {
        return this._errores;
    }
    public set errores(value) {
        this._errores = value;
    }
    public get posiblesRespuestas(): Array<number> {
        return this._posiblesRespuestas;
    }
    public set posiblesRespuestas(value: Array<number>) {
        this._posiblesRespuestas = value;
    }
    public get mensaje() {
        return this._mensaje;
    }
    public set mensaje(value) {
        this._mensaje = value;
    }
    public get respuesta(): number {
        return this._respuesta;
    }
    public set respuesta(value: number) {
        this._respuesta = value;
    }

    /**
     * jugarPalabra permite iniciar el juego de una palabra.
     */
    public obtenerPosiblesRespuestas(op: string, palabra: string): Array<number> {

        this._respuesta = this.contar(op, palabra);
        this._posiblesRespuestas = new Array<number>;
        this._posiblesRespuestas.push(this._respuesta);
        while (this._posiblesRespuestas.length < 4) {
            let x = Math.floor(Math.random() * 20);
            if (!this.posiblesRespuestas.includes(x)) {
                this.posiblesRespuestas.push(x);
            }
        }
        return this.shuffleArray(this.posiblesRespuestas);
    }

    /**
     * Dado un vector cualquiera cambia de posicion aleatoriamente sus elementos.
     * @param array Cualquier tipo de Vector
     * @returns El mismo vector ordenado aleatoriamente.
     */
    public shuffleArray<T>(array: T[]): T[] {
        let currentIndex = array.length;
        let temporaryValue: T;
        let randomIndex: number;

        // Mientras queden elementos para mezclar...
        while (0 !== currentIndex) {

            // Selecciona un elemento sin mezclar...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // Y lo intercambia con el elemento actual
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    /**
     * Realiza sobre "palabra" la operacion contar solicitada en el parametro opcion.
     * @param opcion eleccion del jugador [vocales,consonantes,letras,Sílabas]
     * @param palabra palabra que se evalua.
     * @returns respuesta correcta segun eleccion y palabra.
     * @example let res =   partida.contar("vocales","alma");
     * expect { res=2 }
     */
    contar(opcion: string, palabra: string) {

        switch (opcion) {
            case 'vocales':
                return this.contarVocales(palabra);
            case 'consonantes':
                return this.contarConsonantes(palabra);
            case 'letras':
                return palabra.length;
            case 'silabas':
                return this.contarSilabas(palabra);
            default: return 0;
        }
    }

    contarVocales(palabra: string) {
        return (palabra.match(/[aeiouáéíóú]/gi) || []).length;
    }

    contarConsonantes(palabra: string) {
        return (palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    }

    contarSilabas(palabra: string): number {
        palabra = palabra.toLowerCase();
        if (palabra.length <= 3) { return 1; }
        palabra = palabra.replace(/(?:[^laeiouyáéíóúü]es|ed|[^laeiouyáéíóúü]e)$/, '');
        palabra = palabra.replace(/^y/, '');
        let silabas = palabra.match(/[aeiouyáéíóúü]{1,2}/g);
        return silabas ? silabas.length : 0;
    }



    seleccionarPalabra(): string {
        let x = this._palabras[Math.floor(Math.random() * this.palabras.length)];
        let index = this._palabras.indexOf(x); // Encuentra el índice del elemento que quieres eliminar
        if (index > -1) {
            this._palabras.splice(index, 1); // Elimina el elemento
        }
        return x;
    }

}
