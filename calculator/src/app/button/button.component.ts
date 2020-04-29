import { Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
 
  constructor(
    private calculatorService: CalculatorService 
    ) {}


  ngOnInit(): void {
  }
  onButtonClick(){
    console.log(this.label);
    this.calculatorService.onNumberClick(Number(this.label));
  }

}
