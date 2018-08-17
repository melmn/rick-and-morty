import { Component, OnInit } from '@angular/core';
import { MathService } from '../services/math.service';
import { Bicycle } from '../interfaces/bicycle';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  pumpkin: number = 2;

  constructor(private mathService: MathService) {
  }

  ngOnInit() {
  }

  logToTheConsole(): void {
    let sum: number;
    let product: number;
    let difference: number;
    let sumOfThreeNumbers: number;
    let melissaBike: Bicycle;
    let patrickBike: Bicycle;
    melissaBike = new Bicycle();
    patrickBike = new Bicycle();
    sum = this.addTwoNumbers(500, 9);
    product = this.mathService.multiplyTwoNumbers(2, 6);
    difference = this.subtractTwoNumbers(10, 6);
    sumOfThreeNumbers = this.mathService.addThreeNumbers(1, 2, 3);
    console.log("sum equals: " + sum);
    console.log("product equals: " + product);
    console.log("difference equals: " + difference);
    console.log("sum of three numbers equals: " + sumOfThreeNumbers);
    console.log("Melissa's bike starting gear: " + melissaBike.gear);
    console.log("Patrick's bike starting gear: " + patrickBike.gear);
    melissaBike.shiftGearUp();
    patrickBike.shiftGearUp();
    patrickBike.shiftGearUp();
    console.log("Melissa's bike after gear shift: " + melissaBike.gear);
    console.log("Patrick's bike after gear shift: " + patrickBike.gear);
    console.log("My bike's name: " + melissaBike.name);
    console.log("My bike's type: " + melissaBike.type);

  }

  addTwoNumbers(firstArgument: number, secondArgument: number): number {
    let myAnswer: number;
    myAnswer = firstArgument + secondArgument + this.pumpkin;
    return myAnswer;
  }

  subtractTwoNumbers(firstArgument: number, secondArgument: number): number {
    let myAnswer: number;
    myAnswer = firstArgument - secondArgument - this.pumpkin;
    return myAnswer;
  }

}
