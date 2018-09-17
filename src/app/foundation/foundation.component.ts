import { Component, OnInit } from '@angular/core';

import { CardCollectionService } from '../card-collection.service';
import { foundationArr } from '../cardCollection';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {

  foundation = foundationArr;

  constructor(collectService: CardCollectionService) { }

  ngOnInit() {
  }

}
