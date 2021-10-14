import {Component, OnInit} from '@angular/core';
import {QuizService} from "../service/quiz.service";
import {QuizRepresentationInterface} from "../service/quiz-representation.interface";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) {
  }

  quizRepresentation?: QuizRepresentationInterface;
  selectedAnswerIndex: number = -1;

  ngOnInit(): void {
    console.log('Quiz successfully initialized');
    this.render();
  }

  private render(): void {
    this.quizRepresentation = this.quizService.getQuizRepresentation();
    console.log('Quiz render successful');
    console.log(this.quizRepresentation);
  }

  handleNext(event: any) {
    this.quizService.handleAction('Next', {selectedAnswerIndex:this.selectedAnswerIndex}, (error, result) => {
      this.render()
    })
    console.log("Next question called")
  }

  handleReset(event: any) {
    this.quizService.handleAction('Reset', undefined, (error, result) => {
      this.render()
    })
    console.log("Quiz reset via button")
  }

  onAnswerSelect(selectedAnswerIndex: number) {
    this.selectedAnswerIndex = selectedAnswerIndex;
  }

}