import { Card } from '../model/Card';
import { CardService } from '../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  ficha: Card = new Card();
  submitted = false;

  constructor(private cardService: CardService) {}

  ngOnInit() {}

  newCustomer(): void {
    this.submitted = false;
    this.ficha = new Card();
  }

  save() {
    this.cardService
      .createFicha(this.ficha)
      .subscribe(data => console.log(data), error => console.log(error));
    this.ficha = new Card();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
