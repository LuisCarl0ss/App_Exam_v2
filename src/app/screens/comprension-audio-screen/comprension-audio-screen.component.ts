import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprension-audio-screen',
  templateUrl: './comprension-audio-screen.component.html',
  styleUrls: ['./comprension-audio-screen.component.scss']
})
export class ComprensionAudioScreenComponent implements OnInit {

  currentQuestion: number = 1;
  totalQuestions: number = 3; // Cambia esto al total real de preguntas

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  public irGramatica() {
    this.router.navigate(["gramatica"])
  }

  public regresarLectora() {
    this.router.navigate(["lectora"])
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

  submitExam(): void {
    // Lógica para procesar las respuestas aquí
    this.router.navigate(["gramatica"])
  }

}
