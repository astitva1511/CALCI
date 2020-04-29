import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  value:number;
  changeSubject:Subject<string> =new Subject();
  changeObservable: Observable<string> = this.changeSubject.asObservable();

  constructor() {
    this.value =0 ;
   }
   onNumberClick(num: number){
     this.value = (this.value*10) +num;
     this.changeSubject.next(this.value.toString());
     console.log(this.value);
   }

}
