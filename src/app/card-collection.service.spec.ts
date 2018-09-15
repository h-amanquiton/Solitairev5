import { TestBed, inject } from '@angular/core/testing';

import { CardCollectionService } from './card-collection.service';

describe('CardCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardCollectionService]
    });
  });

  it('should be created', inject([CardCollectionService], (service: CardCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
