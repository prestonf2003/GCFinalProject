import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { User } from '../user';
import { CharacterService } from '../character.service';
import { DndService } from '../dnd.service';
import { Router } from '@angular/router';
import { Favorite } from '../favorite';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {
  currentUser = this.charService.currentUser;
  allCharacters: Character[] = [];
  favorites: Favorite[] = [];
  searchedCharacters: Character[] = [];
  newFavorite: Favorite = new Favorite(-1, "user here", -1);
  Class: string = '';
  Subclass: string = '';
  strength: number = 0;
  dexterity: number = 0;
  constitution: number = 0;
  intelligence: number = 0;
  wisdom: number = 0;
  charisma: number = 0;
  name: string = "";
  pog: number[] = [];
  favorited: Character[] = [];

  userId: string = '';

  constructor(public charService: CharacterService, public dndService: DndService, private router: Router) 
  {
    this.charService.showAllCharacters().subscribe((result) => {
      this.searchedCharacters = result;
      console.log(this.searchedCharacters);
    });
    this.showAllFavorites();
  }
  createCharacter(): void {
    let newCharacter: Character = new Character(
      undefined!,
      this.Class,
      this.Subclass,
      this.strength,
      this.dexterity,
      this.constitution,
      this.intelligence,
      this.wisdom,
      this.charisma,
      
    );

    this.charService.createCharacter(newCharacter).subscribe();
  }
  createUser(): void {
    let newUser: User = new User(undefined!, this.userId);
    this.charService.createUser(newUser).subscribe();
  }
  showAllFavorites(): void {
    this.dndService.showFavorites().subscribe((allFavorites) => {
      this.favorites = allFavorites;
    });
  }
  createFavorite(characterId: number): void{
    this.newFavorite = new Favorite(undefined!, this.charService.currentUser, characterId);

    this.dndService.createFavorite(this.newFavorite).subscribe(() => {
      this.showAllFavorites();
    });
  }
  deleteFavorite(characterId: number): void{
    let foundFav: Favorite = this.favorites.find(favorite => favorite.id === characterId && favorite.userId === this.charService.currentUser)!;
    this.dndService.deleteFavorite(foundFav.pkId).subscribe(() => {
      this.favorites.splice(this.favorites.indexOf(foundFav), 1);
    });
  }
  isFavorited(characterId: number): boolean{
    for (let i = 0; i < this.favorites.length; i++){
      if(this.favorites[i].id == characterId && this.favorites[i].userId === this.charService.currentUser){
        return true;
      }
    }
return false;
  }

  searchForFavorites(): void {
    let newSearched: Character[] = [];

    newSearched = this.searchedCharacters.filter(character => 
      this.isFavorited(character.pkId),
      
    );
    console.log(newSearched)
    this.searchedCharacters = newSearched;
  }
  GetCharacterByName(name: string){
   let searchByFaves: any = document.getElementById("favSearchCheckBox") ?? false;
   this.charService.GetCharacterByName(name).subscribe((response) => {
    this.searchedCharacters = response;
    console.log(name);
    if(searchByFaves.checked){
      this.searchForFavorites();

    }
   })
  }
  



  login(): void {
    this.charService.login(this.userId);

  }

  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
  }
}
