import { Component, OnInit } from '@angular/core';
import { ourFile } from '../heroes-crisis';
import { myHero } from '../heroes-crisis';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes = ourFile;
  selectedHero?: myHero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: myHero) {
    this.selectedHero = value;
    alert(`View ${ this.selectedHero.name } details`);
  }

}
