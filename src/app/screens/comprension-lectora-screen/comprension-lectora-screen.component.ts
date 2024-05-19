import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-comprension-lectora-screen',
  templateUrl: './comprension-lectora-screen.component.html',
  styleUrls: ['./comprension-lectora-screen.component.scss']
})
export class ComprensionLectoraScreenComponent implements OnInit {

  currentQuestion: number = 1;
  totalQuestions: number = 6; 
  respuestasUsuario: string[] = []; // Almacena las respuestas seleccionadas por el usuario
  respuestasCorrectasLectura: string[] = ["b", "a", "c"]; // Definición de respuestas correctas


  constructor(
    private router: Router,
    private examenService: ExamenService // Inyecta el servicio ExamenService
  ) { }

  ngOnInit(): void {
    
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.totalQuestions) {
      this.currentQuestion++;
    }
  }

  prevQuestion(): void {
    if (this.currentQuestion > 1) {
      this.currentQuestion--;
    }
  }

  seleccionarRespuesta(respuesta: string): void {
    // Almacena la respuesta seleccionada por el usuario
    this.respuestasUsuario[this.currentQuestion - 1] = respuesta;
    // Actualiza las respuestas en el servicio de examen
    // this.examenService.actualizarRespuestas(this.respuestasUsuario, 'lectura');
  }
  
  irAudio() {
     // Actualizar las respuestas en el servicio de examen
     this.examenService.actualizarRespuestas(this.respuestasUsuario, 'lectura');
     // Aquí puedes calcular la calificación final basada en las respuestas del usuario
 
     let puntaje = 0;
     // Por ejemplo, puedes comparar las respuestas del usuario con las respuestas correctas y asignar puntos por cada respuesta correcta
     // Luego, puedes sumar los puntos totales para obtener la calificación final
     for (let i = 0; i < this.totalQuestions; i++) {
       if (this.respuestasUsuario[i] === this.respuestasCorrectasLectura[i]) {
         // Aumentar el puntaje por cada respuesta correcta
         puntaje++;
       }
     }

    this.router.navigate(["audio", { puntaje: puntaje }])
  }

}
