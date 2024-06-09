import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string[] =[
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
    'Black Widow',
    'Hawkeye',
    'Black Panther',
    'Wolverine',
    'Deadpool',
    'Antman',
    'Doctor Strange',
    'Mantis',
    'Loki',
    'Gamora',
    'Groot',
    'Rocket',
    'Mantis',
    'Loki',
  ];
  public deleteHeroe?: string;
  removeLastHero():void{
    this.deleteHeroe = this.heroName.pop();
  }
}
