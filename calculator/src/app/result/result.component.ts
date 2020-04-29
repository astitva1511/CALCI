import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  outputLabel: string  = '0';
  constructor(
    private calculatorService : CalculatorService
  ) { 
    this.calculatorService.changeObservable.subscribe(res =>{
      console.log(res);
      this.outputLabel = res;
    });
  }

  ngOnInit(): void {
  }

}
