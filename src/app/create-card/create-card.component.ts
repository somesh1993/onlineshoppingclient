import { Component, OnInit } from '@angular/core';
import { OnlineShoppingService } from '../services/online-shopping.service';
import { ShoppingCardDto } from '../data-transfer-objects/shopping-card.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  public createCardFormGroup: FormGroup;
  public isSuccessful: boolean;
  public errorMessage: string;
  constructor(private formBuilder: FormBuilder, private onlineShoppingService: OnlineShoppingService
  ) { }

  ngOnInit() {
    this.buildFormGroup();
    this.createCardFormGroup.valueChanges.pipe().subscribe(() => {
      this.isSuccessful = false;
      this.errorMessage = '';
    });
  }

  public createCard(): void {
    const cardDetails: ShoppingCardDto = new ShoppingCardDto();
    cardDetails.BankName = this.createCardFormGroup.get('bankName').value;
    cardDetails.FirstName = this.createCardFormGroup.get('firstName').value;
    cardDetails.LastName = this.createCardFormGroup.get('lastName').value;
    cardDetails.CardNumber = this.createCardFormGroup.get('cardNumber').value;
    cardDetails.ValidDate = this.createCardFormGroup.get('date').value;
    cardDetails.Price = this.createCardFormGroup.get('price').value;
    if (this.createCardFormGroup.valid) {
      this.onlineShoppingService.createCard(cardDetails).subscribe((response: string) => {
        if (response) {
          this.isSuccessful = false;
          this.errorMessage = response;
        } else {
          this.isSuccessful = true;
          this.errorMessage = '';
        }
      });
    }
  }

  public buildFormGroup(): void {
    this.createCardFormGroup = this.formBuilder.group({
      bankName: ['', Validators.required], firstName: ['', Validators.required],
      lastName: ['', Validators.required], cardNumber: ['', Validators.required],
      date: ['', Validators.required], price: ['', Validators.required]
    });
  }

}
