import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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

  join() {
    if (this.code && this.name) {
      console.log(this.code, this.name);
    } else {
      alert('Please enter a code and a name');
    }
  }
}
