import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { wasteArr } from '../cardCollection';
import { MoveService } from '../move.service';


@Component({
  selector: 'app-waste',
  templateUrl: './waste.component.html',
  styleUrls: ['./waste.component.css']
})
export class WasteComponent implements OnInit {

  waste = wasteArr;

  constructor(
    private collectService: CardCollectionService,
    private moveservice: MoveService
    ) { }

  ngOnInit() {
  }

}
