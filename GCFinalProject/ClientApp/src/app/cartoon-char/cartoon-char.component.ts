import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CartoonChar } from '../CartoonChar';
import { ToonServiceService } from '../toon-service.service';
@Component({
  selector: 'app-cartoon-char',
  templateUrl: './cartoon-char.component.html',
  styleUrls: ['./cartoon-char.component.css']
})
export class CartoonCharComponent implements OnInit {
  currentUser = this.charService.currentUser;
  searchedToons:CartoonChar[]= [];
  userId: string = "";

  search: string = "".toLowerCase();

  constructor(public toonService: ToonServiceService, public charService: CharacterService) 
  {
    this.toonService.showAllCartoonCharacters().subscribe((result) => {
      this.searchedToons = result;
      console.log(this.searchedToons);
    });
    //this.showAllCartoonCharacters();
  }

  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
  }

}
