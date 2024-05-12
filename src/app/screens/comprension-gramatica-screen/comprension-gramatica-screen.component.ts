import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprension-gramatica-screen',
  templateUrl: './comprension-gramatica-screen.component.html',
  styleUrls: ['./comprension-gramatica-screen.component.scss']
})
export class ComprensionGramaticaScreenComponent implements OnInit {

  currentQuestion: number = 1;
  totalQuestions: number = 3; // Cambia esto al total real de preguntas

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Lógica adicional de inicialización si es necesario
  }

  // public submitExam() {

  // }

  // public regresarAudio() {
  //   this.router.navigate(["audio"])
  // }

  // public irHome() {
  //   this.router.navigate(["home"])
  // }

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

  submitExam(): void {
    // Lógica para procesar las respuestas aquí
    alert("¡Examen enviado!");
    this.router.navigate(["home"])
  }

}
