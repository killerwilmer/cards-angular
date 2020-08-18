import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../model/Card';
import { CardService } from '../card.service';
import { FichasListComponent } from '../fichas-list/fichas-list.component';

@Component({
  selector: 'app-ficha-details',
  templateUrl: './ficha-details.component.html',
  styleUrls: ['./ficha-details.component.css']
})
export class FichaDetailsComponent implements OnInit {
  @Input() ficha: Card;

  constructor(
    private cardService: CardService,
    private listComponent: FichasListComponent
  ) {}

  ngOnInit() {}

  deleteFicha() {
    this.cardService.deleteFicha(this.ficha.id).subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }
}
