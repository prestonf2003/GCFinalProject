import { Component, OnInit } from '@angular/core';
import {Character} from '../character';
import {User} from '../user';
import {CharacterService} from '../character.service';
import { DndService } from '../dnd.service';
import {Router} from '@angular/router'
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
currentUser = this.charService.currentUser;

Class: string = "";
Subclass: string = "";
strength: number = 0;
dexterity: number = 0;
constitution: number = 0;
intelligence: number = 0;
wisdom: number = 0;
charisma: number = 0;
id: number = 0;

newUser: User = new User(0, "");
  constructor(public charService: CharacterService, public dndService: DndService, private router: Router) { 
    this.showAllCharacters();

  }
  showAllCharacters(): void{
    this.charService.showAllCharacters().subscribe();
  }
  createCharacter(): void {
    let newCharacter: Character = new Character(undefined!, this.Class, this.Subclass, this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma, this.id);

    this.charService.createCharacter(newCharacter).subscribe();
  }

  ngOnInit(): void {
  }

}
