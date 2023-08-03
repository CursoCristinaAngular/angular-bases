import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public heroesNames:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Daredevil'];

  public deleteHero?:string;

  borrarHeroeUltimo():void{
    this.deleteHero = this.heroesNames.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
