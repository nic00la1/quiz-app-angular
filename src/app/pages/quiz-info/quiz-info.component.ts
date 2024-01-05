import { Component, OnInit, inject } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Quiz } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-info',
  standalone: true,
  imports: [],
  templateUrl: './quiz-info.component.html',
  styleUrl: './quiz-info.component.css',
})
export class QuizInfoComponent implements OnInit {
  testService = inject(TestService);
  quizInfo!: Quiz;
  router = inject(Router);

  ngOnInit(): void {
    let quizResult = this.testService.quizResult;
    if (!quizResult) {
      this.router.navigateByUrl('/');
      return;
    }
    let quizId = quizResult.quizId;
    this.testService.getQuizById(quizId).subscribe((quiz) => {
      this.quizInfo = quiz;
    });
  }
}
