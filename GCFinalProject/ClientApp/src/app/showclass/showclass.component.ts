import { Component, OnInit } from '@angular/core';
import {DnD} from '../dnd';
import {DndService} from '../dnd.service';
import {Result} from '../classes';


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
  }
  GetClassByName(name: string): void{
    this.dnd.GetClassByName(name).subscribe((response) => {
     this.name = response;
     
    })


    
  }


}
