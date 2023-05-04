import { CONECCION } from "./conected";

export class User {
    name = "";
    apellido = "";
    email = "";
    conectado = CONECCION.DESCONECTADO;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}