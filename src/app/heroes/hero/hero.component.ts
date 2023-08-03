import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public name: string = 'Ironman';
  public name1: string = 'Ironman';
  public name2:string= 'Spiderman'
  public age:number = 45;
  public age1:number = 45;
  public age2:number = 25;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    if(this.name == this.name1){
      this.name = this.name2;
    }else{
      this.name = this.name1;
    }

  }

  changeAge():void{
    if(this.age == this.age1){
      this.age = this.age2;
    }else{
      this.age = this.age1;
    }
  }

  resetForm():void{
    this.name = this.name1;
    this.age = this.age1;
    //CUIDADO CON EL SIGUIENTE CÓDIGO
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }

  // changeHero():void{
  //   this.name = 'Spiderman';

  // }

  // changeAge():void{
  //   this.age = 25;
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
