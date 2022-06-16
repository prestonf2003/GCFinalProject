import { Component, OnInit } from '@angular/core';
import {DnD} from '../dnd';
import {DndService} from '../dnd.service';


@Component({
  selector: 'app-showclass',
  templateUrl: './showclass.component.html',
  styleUrls: ['./showclass.component.css']
})
export class ShowclassComponent implements OnInit {
  search: string = "";

 name: DnD = new DnD("", 0, "", "", [], [], [], [], [], [], "");


  constructor(public dnd: DndService) {
    this.GetClassByName(this.search);
   }

  ngOnInit(): void {
  }
  GetClassByName(name: string): void{
    this.dnd.GetClassByName(name).subscribe((response) => {
     this.name = response;
      console.log(response);
    })

    
  }

}
