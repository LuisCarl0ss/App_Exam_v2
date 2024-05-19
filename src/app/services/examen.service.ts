import { Injectable } from '@angular/core';
import { RespuestasExamen } from './respuestas-examen.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  respuestasExamen: RespuestasExamen = {
    lectura: [],
    audio: [],
    gramatica: []
  };

  constructor() {}

  actualizarRespuestas(respuestas: string[], seccion: string): void {
    this.respuestasExamen[seccion] = respuestas;
  }

  obtenerRespuestas(): RespuestasExamen {
    return this.respuestasExamen;
  }
}
