import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { tableauArr } from '../cardCollection';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  tableau = tableauArr;

  drag(e) {
  
  }
  


  constructor(collectService: CardCollectionService) { }

  ngOnInit() {
   
    
  }

}
