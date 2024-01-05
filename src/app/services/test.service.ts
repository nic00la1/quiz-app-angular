import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quiz } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  http = inject(HttpClient);

  constructor() {}

  getQuizByCode(code: string) {
    return this.http.get<Quiz[]>(`http://localhost:3000/quizs?code=${code}`);
  }
}
