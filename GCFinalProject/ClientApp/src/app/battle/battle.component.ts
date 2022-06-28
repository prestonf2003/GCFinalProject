import { Component, OnInit } from '@angular/core';
import { CartoonChar } from '../CartoonChar';
import { Character } from '../character';
import { ToonServiceService } from '../toon-service.service';
import { CharacterService } from '../character.service';
import { Favorite } from '../favorite';
import { DndService } from '../dnd.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  favorites: Favorite[] = [];
  searchedCharacters: Character[] = [];
  currentUser = this.charService.currentUser;
  name: string = "";
  newFavorite: Favorite = new Favorite(-1, "user here", -1);
  userId: string = "";

  constructor( public dndService: DndService, public charService: CharacterService) { }
  showAllFavorites(): void {
    this.dndService.showFavorites().subscribe((allFavorites) => {
      this.favorites = allFavorites;
    });
    

  }
  GetCharacterByName(name: string) {
    let searchByFaves: any = document.getElementById("favSearchCheckBox") ?? false;
    this.charService.GetCharacterByName(name).subscribe((response) => {
      this.searchedCharacters = response;
      console.log(this.searchedCharacters);
      if (searchByFaves.checked) {
        this.searchForFavorites();

      }

    })
  }
  searchForFavorites(): void {
    let newSearched: Character[] = [];

    newSearched = this.searchedCharacters.filter(character =>
      this.isFavorited(character.pkId),

    );
    console.log(newSearched)
    this.searchedCharacters = newSearched;
  }
  
  
  isFavorited(characterId: number): boolean {
    for (let i = 0; i < this.favorites.length; i++) {
      if (this.favorites[i].id == characterId && this.favorites[i].userId === this.charService.currentUser) {
        return true;
      }
    }
    return false;
  }
  createFavorite(characterId: number): void {
    this.newFavorite = new Favorite(undefined!, this.charService.currentUser, characterId);

    this.dndService.createFavorite(this.newFavorite).subscribe(() => {
      this.showAllFavorites();
    });
  }
  deleteFavorite(characterId: number): void {
    let foundFav: Favorite = this.favorites.find(favorite => favorite.id === characterId && favorite.userId === this.charService.currentUser)!;
    this.dndService.deleteFavorite(foundFav.pkId).subscribe(() => {
      this.favorites.splice(this.favorites.indexOf(foundFav), 1);
    });
  }
  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
this.GetCharacterByName('')
  }

}


