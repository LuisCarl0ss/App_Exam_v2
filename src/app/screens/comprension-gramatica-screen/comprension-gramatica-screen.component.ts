import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-comprension-gramatica-screen',
  templateUrl: './comprension-gramatica-screen.component.html',
  styleUrls: ['./comprension-gramatica-screen.component.scss']
})
export class ComprensionGramaticaScreenComponent implements OnInit {

  currentQuestion: number = 1;
  totalQuestions: number = 3; 
  respuestasUsuario: string[] = []; // Almacena las respuestas seleccionadas por el usuario
  respuestasCorrectasGramatica: string[] = ["b", "a", "c"]; // Definición de respuestas correctas

  constructor(
    private router: Router,
    private examenService: ExamenService
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
  }

  regresarAudio() {
    this.router.navigate(['audio'])
  }

  // submitExam(): void {
  //   // logica para procesar las respuestas 
  //   alert("¡Examen enviado!");
  //   this.router.navigate(["score"])
  // }

  submitExam(): void {
    // Actualizar las respuestas en el servicio de examen
    this.examenService.actualizarRespuestas(this.respuestasUsuario, 'gramatica');
    // Aquí puedes calcular la calificación final basada en las respuestas del usuario

    let puntaje = 0;
    // Por ejemplo, puedes comparar las respuestas del usuario con las respuestas correctas y asignar puntos por cada respuesta correcta
    // Luego, puedes sumar los puntos totales para obtener la calificación final
    for (let i = 0; i < this.totalQuestions; i++) {
      if (this.respuestasUsuario[i] === this.respuestasCorrectasGramatica[i]) {
        // Aumentar el puntaje por cada respuesta correcta
        puntaje++;
      }
    }
    // Aquí puedes navegar a la pantalla que muestra la calificación final y pasar el puntaje como parámetro si es necesario
    this.router.navigate(["score", { puntaje: puntaje }]);
  }


}
