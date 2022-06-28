import { Component, OnInit } from '@angular/core';

import { CartoonChar } from '../CartoonChar';
import { ToonServiceService } from '../toon-service.service';
@Component({
  selector: 'app-cartoon-char',
  templateUrl: './cartoon-char.component.html',
  styleUrls: ['./cartoon-char.component.css']
})
export class CartoonCharComponent implements OnInit {
  searchedToons:CartoonChar[]= [];

  constructor(public toonService: ToonServiceService) 
  {
    this.toonService.showAllCartoonCharacters().subscribe((result) => {
      this.searchedToons = result;
      console.log(this.searchedToons);
    });
    //this.showAllCartoonCharacters();
  }

  ngOnInit(): void {
  }

}
