import { tableauArr, deckArr, wasteArr, foundationArr} from './../cardCollection';
import { CardCollectionService } from './../card-collection.service';
import { Card } from './../card';

import { Component, OnInit } from '@angular/core';

let clear: boolean = false;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private cardcollect: CardCollectionService) { }

  ngOnInit() {
  }
   startGameNoShuff(event) {
    this.cardcollect.generateDeck();
    this.cardcollect.distributeCards();
   }

   gameReset(event) {
    if (!clear) {

      while(deckArr.length != 0) {
        deckArr.pop();
      }
 
      while(wasteArr.length != 0) {
        wasteArr.pop();
      }
 
      for (let x =0; x < 7; x++) {
        while(tableauArr[x].length != 0) {
          tableauArr[x].pop();
         
        }
 
       for (let y = 0; y < 4; y++) {
         while(foundationArr[y].length != 0) {
           foundationArr[y].pop();

           clear = true;
         }
       }
      }
    }

    if (clear) {
      this.cardcollect.generateDeck();
      clear = false;
    }

   }

   shuffle(event) {
     this.cardcollect.generateDeck();
     this.cardcollect.shuffleDeck();
     this.cardcollect.distributeCards();
   }


  }


