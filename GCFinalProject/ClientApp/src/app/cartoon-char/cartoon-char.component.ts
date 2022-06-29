import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CartoonChar } from '../CartoonChar';
import { ToonServiceService } from '../toon-service.service';
import { Favorite } from '../favorite';
import { Character } from '../character';
import { DndService } from '../dnd.service';
@Component({
  selector: 'app-cartoon-char',
  templateUrl: './cartoon-char.component.html',
  styleUrls: ['./cartoon-char.component.css'],
})
export class CartoonCharComponent implements OnInit {
  currentUser = this.charService.currentUser;
  searchedToons: CartoonChar[] = [];
  userId: string = '';
  favorites: Favorite[] = [];
  searchedCharacters: Character[] = [];
  name: string = '';
  newFavorite: Favorite = new Favorite(-1, 'user here', -1);

  favSearch: string = ''.toLowerCase();
  cartSearch: string = ''.toLowerCase();

  constructor(
    public toonService: ToonServiceService,
    public charService: CharacterService,
    public dndService: DndService
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
  ngOnInit(): void {
    this.currentUser = this.charService.currentUser;
    this.userId = '';
    this.GetCharacterByName('');
  }
}
