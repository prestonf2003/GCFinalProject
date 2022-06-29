import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { DndService } from '../dnd.service';

@Component({
  selector: 'app-view-preset',
  templateUrl: './view-preset.component.html',
  styleUrls: ['./view-preset.component.css']
})
export class ViewPresetComponent implements OnInit {

  constructor(public dnd: DndService, public charService: CharacterService, private router: Router) {
    this.dnd.GetAll().subscribe((response) => {
      this.characters = response;
      console.log(this.characters);
    });
    this.dnd.GetSubclasses().subscribe((response) => {
      this.subclasses = response;
   });
   }
  userId: string = "";
  focusCharacter = this.charService.character;
  currentUser: string = this.charService.currentUser;
  class: string = "";
subclass: string = "";
strength: number = 0;
dexterity: number = 0;
constitution: number = 0;
intelligence: number = 0;
wisdom: number = 0;
charisma: number = 0;
characters: string[] = [];
subclasses: string[] = [];

  ngOnInit(): void {
    this.currentUser= this.charService.currentUser;
    this.userId = "";
  }
  updateCharacter(id: number, character: Character){
    character.class = this.class;
    character.subclass = this.subclass;
    character.strength = this.strength;
    character.dexterity = this.dexterity;
    character.intelligence = this.intelligence;
    character.constitution = this.constitution;
    character.wisdom = this.wisdom;
    character.charisma = this.charisma;

    this.charService.updateCharacter(id, character).subscribe();
    this.router.navigateByUrl(``);
  }

}
