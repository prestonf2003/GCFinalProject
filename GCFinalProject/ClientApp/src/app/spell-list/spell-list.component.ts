import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { DndService } from '../dnd.service';
import {Spells} from '../spells';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
currentUser = this.charService.currentUser;
searchedSpells: string[] = [];
name: string = "";
desc: string = "";
userId: string = "";

  constructor(public dnd: DndService, public charService: CharacterService, private router: Router) { 
    this.dnd.getSpells().subscribe((result) => {
      this.searchedSpells = result;
    });
  }
  SearchSpells(name: string){
    this.dnd.SearchSpells(name).subscribe((response) => {
      this.searchedSpells = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
  }

}
