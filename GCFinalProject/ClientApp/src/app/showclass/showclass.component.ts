import { Component, OnInit } from '@angular/core';
import {DnD} from '../dnd';
import {DndService} from '../dnd.service';




@Component({
  selector: 'app-showclass',
  templateUrl: './showclass.component.html',
  styleUrls: ['./showclass.component.css']
})
export class ShowclassComponent implements OnInit {
  search: string = "".toLowerCase();

 name: DnD = new DnD("", 0, "", "", [], [], [], [], [], [], "");
 characters: string[] = [];
 subclasses: string[] = [];
 subclass: string = "";
 Description: string = "";


  constructor(public dnd: DndService) {
    this.dnd.GetAll().subscribe((response) => {
      this.characters = response;
      console.log(this.characters);
    });
    this.dnd.GetSubclasses().subscribe((response) => {
      this.subclasses = response;
   });
  }
  ngOnInit(): void {
   // this.DifferentClass();
  }
  GetClassByName(name: string): void{
    this.dnd.GetClassByName(name).subscribe((response) => {
     this.name = response;
     
    })
  }
  //  DifferentClass(): string{
  //   switch(this.search){
  //     case "Bard":{
  //       this.subclass = this.subclasses[9];
  //       this.Description = " A magical musician who supports their allies and hinders their enemies with music.";
    
  //       break;
  //     }
  //     case "Barbarian": {
  //       this.subclass = this.subclasses[0];
  //       this.Description = "The straight forward heavy hitter. Uses large weapons to attack and is extremely durable.";
  //       break;
  //           }
  //     case "Cleric": {
  //       this.subclass = this.subclasses[8];
  //       this.Description = "The versitile healer that can also hold their own in a fight.";
  //       break;
  //     }
  //     case "Druid": {
  //       this.subclass = this.subclasses[7];
  //       this.Description = "An environmental caster who uses the land to help or harm. They also have the ability to shapeshift into animals for combat and mobility.";
  //     }
  //   }
  //   return this.subclass;
  //       return this.Description;
  //   }

  }



