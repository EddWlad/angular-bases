import { Component, OnInit } from '@angular/core'; //!comando para realizar el componente a-

@Component({
  selector: 'app-counter',
  template: `
    <h3>Couter:{{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter =10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset(value:number = 10):void{
    this.counter = value;
  }
}
