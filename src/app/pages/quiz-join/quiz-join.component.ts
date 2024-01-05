import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-quiz-join',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './quiz-join.component.html',
  styleUrl: './quiz-join.component.css',
})
export class QuizJoinComponent {
  code!: string;
  name!: string;
  testService = inject(TestService);

  join() {
    if (this.code && this.name) {
      this.testService.getQuizByCode(this.code).subscribe((result) => {
        console.log(result);
      });
    } else {
      alert('Please enter a code and a name');
    }
  }
}
