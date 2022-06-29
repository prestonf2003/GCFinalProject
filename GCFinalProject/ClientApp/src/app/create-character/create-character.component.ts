import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { DndService } from '../dnd.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
userId: string = "";
currentUser = this.charService.currentUser;
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

  constructor(public dnd: DndService,public charService: CharacterService, private router: Router) { 
    this.dnd.GetAll().subscribe((response) => {
      this.characters = response;
      console.log(this.characters);
    });
    this.dnd.GetSubclasses().subscribe((response) => {
      this.subclasses = response;
   });

  }
createNewCharacter(): void{
  let newCharacter: Character = new Character(undefined!, this.class, this.subclass, this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma);
this.charService.createCharacter(newCharacter).subscribe(() => this.router.navigateByUrl(``));
}

login(): void {
  this.charService.login(this.userId);

}

  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
  }

}
