import { Component, OnInit } from '@angular/core';
import { CartoonChar } from '../CartoonChar';
import { Character } from '../character';
import { ToonServiceService } from '../toon-service.service';
import { CharacterService } from '../character.service';
import { Favorite } from '../favorite';
import { DndService } from '../dnd.service';
import { CartoonCharComponent } from '../cartoon-char/cartoon-char.component';
import { ThisReceiver } from '@angular/compiler';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
})
export class BattleComponent implements OnInit {
  favorites: Favorite[] = [];
  searchedCharacters: Character[] = [];
  currentUser = this.charService.currentUser;
  name: string = '';
  newFavorite: Favorite = new Favorite(-1, 'user here', -1);
  userId: string = '';
  userHealth: number = 50;
  cartoonHealth: number = 50;
  attack_user: number = 0;
  attack_cartoon: number = 0;
  Victory: string = '';
  Shaggy: string[] = [
    'Shaggy Uses Slap',
    'Shaggy Uses Roundhouse',
    'Shaggy Goes Ultra Instinct',
  ];
  Spongebob: string[] = [
    'Spongebob uses Spatula Slap',
    'Spongebob uses Karate Chop',
    'Spongebob uses WUMBO COMBO',
  ];
  Scooby: string[] = [
    'Scooby uses Scooby Snack Throw',
    'Scooby uses Sandwhich Smack',
    'Scooby uses Jump Scare',
  ];
  CartoonPhrase: string = '';
  // currentToon = this.cartoonChar.cartSearch;
  // currentFavorite = this.cartoonChar.favSearch;
  favSearch: string = this.toonService.favSearch;
  cartSearch: string = this.toonService.cartSearch;
  constructor(
    public dndService: DndService,
    public charService: CharacterService,
    public toonService: ToonServiceService
  ) {
    this.charService.showAllCharacters().subscribe((result) => {
      this.searchedCharacters = result;
      console.log(this.searchedCharacters);
    });
    this.showAllFavorites();
  }
  showAllFavorites(): void {
    this.dndService.showFavorites().subscribe((allFavorites) => {
      this.favorites = allFavorites;
    });
  }
  GetCharacterByName(name: string) {
    let searchByFaves: any =
      document.getElementById('favSearchCheckBox') ?? false;
    this.charService.GetCharacterByName(name).subscribe((response) => {
      this.searchedCharacters = response;
      console.log(this.searchedCharacters);
      console.log(this.currentUser);

      if (!searchByFaves.checked) {
        this.searchForFavorites();
      }
    });
  }
  searchForFavorites(): void {
    let newSearched: Character[] = [];

    newSearched = this.searchedCharacters.filter((character) =>
      this.isFavorited(character.pkId)
    );
    console.log(newSearched);
    this.searchedCharacters = newSearched;
  }

  isFavorited(characterId: number): boolean {
    for (let i = 0; i < this.favorites.length; i++) {
      if (
        this.favorites[i].id == characterId &&
        this.favorites[i].userId === this.charService.currentUser
      ) {
        return true;
      }
    }
    return false;
  }
  createFavorite(characterId: number): void {
    this.newFavorite = new Favorite(
      undefined!,
      this.charService.currentUser,
      characterId
    );

    this.dndService.createFavorite(this.newFavorite).subscribe(() => {
      this.showAllFavorites();
    });
  }
  deleteFavorite(characterId: number): void {
    let foundFav: Favorite = this.favorites.find(
      (favorite) =>
        favorite.id === characterId &&
        favorite.userId === this.charService.currentUser
    )!;
    this.dndService.deleteFavorite(foundFav.pkId).subscribe(() => {
      this.favorites.splice(this.favorites.indexOf(foundFav), 1);
    });
  }
  getCartoonAttack() {
    return Math.floor(Math.random() * (20 - 1)) + 1;
  }
  getUserAttack() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async BattleItOut() {
    this.userHealth = 50;
    this.cartoonHealth = 60;
    let defeated: boolean = false;
    

    while (defeated === false) {
      let Cartoonattack = this.getCartoonAttack();
      this.attack_cartoon = Cartoonattack;
      if (this.cartSearch === 'Shaggy') {
        if (Cartoonattack <= 5) {
          this.CartoonPhrase = this.Shaggy[0];
        } else if (Cartoonattack <= 10 && Cartoonattack > 5) {
          this.CartoonPhrase = this.Shaggy[1];
        } else {
          this.CartoonPhrase = this.Shaggy[2];
        }
      }
      
 
      
      if (this.cartSearch === 'Scooby') {
        if (Cartoonattack <= 5) {
          this.CartoonPhrase = this.Scooby[0];
        } else if (Cartoonattack <= 10 && Cartoonattack > 5) {
          this.CartoonPhrase = this.Scooby[1];
        } else {
          this.CartoonPhrase = this.Scooby[2];
        }
      }
      if (this.cartSearch === 'Spongebob') {
        if (Cartoonattack <= 5) {
          this.CartoonPhrase = this.Spongebob[0];
        } else if (Cartoonattack <= 10 && Cartoonattack > 5) {
          this.CartoonPhrase = this.Spongebob[1];
        } else {
          this.CartoonPhrase = this.Spongebob[2];
        }
      }
      this.userHealth = this.userHealth - Cartoonattack;

      let Userattack = this.getUserAttack();
      this.attack_user = Userattack;

      this.cartoonHealth = this.cartoonHealth - Userattack;

      await this.delay(1000);
      if (this.userHealth <= 0) {
        if (this.userHealth < 0) {
          this.userHealth = 0;
        }
        this.Victory = 'You Got smacked by ' + this.cartSearch;
        defeated = true;
      }
      if (this.cartoonHealth <= 0) {
        if (this.cartoonHealth < 0) {
          this.cartoonHealth = 0;
        }
        this.Victory =
          'Congratulations!' + this.currentUser + 'You beat' + this.cartSearch;
        defeated = true;
      }
    }
  }

  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
    this.GetCharacterByName('');
    this.favSearch = this.toonService.favSearch;
    this.cartSearch = this.toonService.cartSearch;
  }
}
