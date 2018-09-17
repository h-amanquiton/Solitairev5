import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { tableauArr } from '../cardCollection';
import { Card } from '../card';

let draggedTargetId;
let draggedRow;
let draggedCol;
let dropZoneId;
let dropRow;
let dropCol;
let draggedCard: Card;
let x: Card[];



@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})



export class TableauComponent implements OnInit {

  tableau = tableauArr;

  allowdrop(event) {
    event.preventDefault();
  }

  drag(event) {
    draggedTargetId = event.target.id;
    draggedRow = document.getElementById(draggedTargetId).getAttribute('row-index');
    draggedCol = document.getElementById(draggedTargetId).getAttribute('col-index');
    //console.log(tableauArr[draggedRow][draggedCol]);
    draggedCard = tableauArr[draggedRow][draggedCol];
    //console.log(tableauArr[draggedCol].splice(draggedRow));
     x = tableauArr[draggedCol].splice(draggedRow)
  }

  drop(event: any) {
  //  event.preventDefault();
    tableauArr[dropCol].push(x.pop());
    
   // tableauArr[dropCol].push();
   // console.log(dropZoneId);

  }

  dragover(event) {
    event.preventDefault();
    dropZoneId = event.target.id;
    dropRow = document.getElementById(dropZoneId).getAttribute('row-index');
    console.log(dropRow);
    dropCol = document.getElementById(dropZoneId).getAttribute('col-index');
  }



  click(event) {
   // console.log(event.target.id)
  }
  


  constructor(collectService: CardCollectionService) { }

  ngOnInit() {
   
    
  }

}
