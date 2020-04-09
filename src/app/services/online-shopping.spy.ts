import { Observable, of } from 'rxjs';
import { ShoppingCardDto } from '../data-transfer-objects/shopping-card.dto';

export class OnlineShoppingServiceSpy {

    /** This method is being used to get data from server file */
    public getAllCards(): Observable<ShoppingCardDto[]> {
        const data: ShoppingCardDto = new ShoppingCardDto();
        return of([data]);
    }

}
