import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { wasteArr } from '../cardCollection';


@Component({
  selector: 'app-waste',
  templateUrl: './waste.component.html',
  styleUrls: ['./waste.component.css']
})
export class WasteComponent implements OnInit {

  waste = wasteArr;

  constructor(collectService: CardCollectionService) { }

  ngOnInit() {
  }

}
