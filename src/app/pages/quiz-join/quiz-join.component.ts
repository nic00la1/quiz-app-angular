import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quiz-join',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './quiz-join.component.html',
  styleUrl: './quiz-join.component.css',
})
export class QuizJoinComponent {}
