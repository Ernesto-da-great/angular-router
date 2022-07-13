import { Component, OnInit } from '@angular/core';
import { crisisFile } from '../heroes-crisis';
import { Crisis } from '../heroes-crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crisis = crisisFile;
  selectedCrisis?: Crisis;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(crisis: Crisis) {
    this.selectedCrisis = crisis;
  }

}
