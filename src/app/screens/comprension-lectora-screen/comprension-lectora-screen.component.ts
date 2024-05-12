import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprension-lectora-screen',
  templateUrl: './comprension-lectora-screen.component.html',
  styleUrls: ['./comprension-lectora-screen.component.scss']
})
export class ComprensionLectoraScreenComponent implements OnInit {

  currentQuestion: number = 1;
  totalQuestions: number = 3; // Cambia esto al total real de preguntas

  constructor(
    private router: Router,
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

  submitExam(): void {
    // Lógica para procesar las respuestas aquí
    this.router.navigate(["audio"])
  }
  
  public irAudio() {
    this.router.navigate(["audio"])
  }

}
