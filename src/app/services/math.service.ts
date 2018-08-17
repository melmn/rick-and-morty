import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  addThreeNumbers(first: number, second: number, third: number): number {
    let answer: number;
    answer = first + second + third;
    return answer;
  }

  multiplyTwoNumbers(firstArgument: number, secondArgument: number): number {
    let myAnswer: number;
    myAnswer = firstArgument * secondArgument;
    return myAnswer;
  }
}
