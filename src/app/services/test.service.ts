import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quiz, QuizResult } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  quizResult: QuizResult = {
    name: 'Nicola',
    quizId: 1,
    id: 3,
  };
  http = inject(HttpClient);

  constructor() {}

  getQuizByCode(code: string) {
    return this.http.get<Quiz[]>(`http://localhost:3000/quizs?code=${code}`);
  }

  joinQuiz(quizResult: QuizResult) {
    return this.http.post<QuizResult>(
      `http://localhost:3000/quizResults?`,
      quizResult
    );
  }

  getQuizById(id: number) {
    return this.http.get<Quiz>(`http://localhost:3000/quizs?code=${id}`);
  }
}
