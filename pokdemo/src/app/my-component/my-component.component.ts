import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string ;
  pokemons: Array<string> = [];
  constructor() {
     this.id = 'thrth';
     this.pokemons = ['bk0h','koko','tera','bakus','bista','jonga'];
  }
  ngOnInit() {
  }

  selectId(id : string) { this.id = id; console.log("error"); }

}
