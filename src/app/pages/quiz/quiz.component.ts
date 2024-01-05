import { Component, OnInit, inject } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Question, Quiz } from '../../types';
import { QuizResult } from '../../types'; // Import the QuizResult type
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatButtonModule, MatRadioModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  testService = inject(TestService);
  router = inject(Router);
  questions: Question[] = [];
  quizInfo!: Quiz;
  quizResult!: QuizResult;
  currentQuestionNo: number = 0;

  ngOnInit(): void {
    this.quizResult = this.testService.quizResult;
    if (!this.quizResult) {
      this.router.navigateByUrl('/');
      return;
    }
    this.testService.getQuestions().subscribe((results) => {
      this.questions = results;
    });
    this.testService.getQuizById(this.quizResult.quizId).subscribe((result) => {
      this.quizInfo = result;
    });
  }

  get currentQuestion() {
    let qustionId = this.quizInfo.questions[this.currentQuestionNo];
    return this.questions.find((x) => x.id == qustionId);
  }
}
