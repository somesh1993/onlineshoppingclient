import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnlineShoppingService } from '../services/online-shopping.service';
import { ShoppingCardDto } from '../data-transfer-objects/shopping-card.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-modify-card',
    templateUrl: './modify-card.component.html',
    styleUrls: ['./modify-card.component.scss']
})
export class ModifyCardComponent implements OnInit {

    public modifyCardFormGroup: FormGroup;
    public isSuccessful: boolean;
    public errorMessage: string;
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private onlineShoppingService: OnlineShoppingService
    ) { }

    ngOnInit() {
        const id: string = this.route.snapshot.paramMap.get('id');
        this.buildFormGroup();
        this.onlineShoppingService.getCard(id).subscribe((card: ShoppingCardDto[]) => {
            this.modifyCardFormGroup.get('bankName').setValue(card[0].BankName);
            this.modifyCardFormGroup.get('firstName').setValue(card[0].FirstName);
            this.modifyCardFormGroup.get('lastName').setValue(card[0].LastName);
            this.modifyCardFormGroup.get('cardNumber').setValue(card[0].CardNumber);
            this.modifyCardFormGroup.get('date').setValue(card[0].ValidDate);
            this.modifyCardFormGroup.get('price').setValue(card[0].Price);
        });
        this.modifyCardFormGroup.valueChanges.pipe().subscribe(() => {
            this.isSuccessful = false;
            this.errorMessage = '';
        });
    }

    public modifyDetails(): void {
        const cardDetails: ShoppingCardDto = new ShoppingCardDto();
        cardDetails.BankName = this.modifyCardFormGroup.get('bankName').value;
        cardDetails.FirstName = this.modifyCardFormGroup.get('firstName').value;
        cardDetails.LastName = this.modifyCardFormGroup.get('lastName').value;
        cardDetails.CardNumber = this.modifyCardFormGroup.get('cardNumber').value;
        cardDetails.ValidDate = this.modifyCardFormGroup.get('date').value;
        cardDetails.Price = this.modifyCardFormGroup.get('price').value;
        if (this.modifyCardFormGroup.valid) {
            this.onlineShoppingService.modifyCard(cardDetails).subscribe((response: string) => {
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
        this.modifyCardFormGroup = this.formBuilder.group({
            bankName: ['', Validators.required], firstName: ['', Validators.required], lastName: ['', Validators.required],
            cardNumber: ['', Validators.required], date: ['', Validators.required], price: ['', Validators.required]
        });
    }

}
