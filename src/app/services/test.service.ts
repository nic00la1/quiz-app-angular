import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  http = inject(HttpClient);

  constructor() {}

  getQuizByCode(code: string) {}
}
