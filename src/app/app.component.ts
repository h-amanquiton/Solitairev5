import { Component } from '@angular/core';
import { CardCollectionService } from './card-collection.service';
import { foundationArr } from './cardCollection';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solitaire V5';

  constructor( private collectService: CardCollectionService) {

  }

  ngOnInit() {
    //this.collectService.generateDeck();
    //this.collectService.distributeCards();
    
    
    
  }
}

