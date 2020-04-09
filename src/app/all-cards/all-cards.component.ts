import { Component, OnInit } from '@angular/core';
import { OnlineShoppingService } from '../services/online-shopping.service';
import { ShoppingCardDto } from '../data-transfer-objects/shopping-card.dto';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {

  public searchCardFormGroup: FormGroup;
  public onlineShoppingCards: ShoppingCardDto[] = [];

  constructor(private onlineShoppingService: OnlineShoppingService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildFormGroup();
    this.getAllCards();
    this.searchCardFormGroup.valueChanges.pipe().subscribe(() => {
      this.onlineShoppingService.searchCards(this.searchCardFormGroup.get('cardNumber').value).subscribe((cards: ShoppingCardDto[]) => {
        this.onlineShoppingCards = cards;
      });
    });
  }

  public deleteCard(cardNumber: string): void {
    this.onlineShoppingService.deleteCard(cardNumber).subscribe(() => {
      this.getAllCards();
    });
  }

  private getAllCards(): void {
    this.onlineShoppingService.getCard('').subscribe((cards: ShoppingCardDto[]) => {
      this.onlineShoppingCards = cards;
    }, () => {});
  }

  private buildFormGroup(): void {
    this.searchCardFormGroup = this.formBuilder.group({
      cardNumber: ['']
    });
  }

}
