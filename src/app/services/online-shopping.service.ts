import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShoppingCardDto } from '../data-transfer-objects/shopping-card.dto';

@Injectable()
export class OnlineShoppingService {

  constructor(private http: HttpClient) { }

  public getCard(id: string): Observable<ShoppingCardDto[]> {
    const params: HttpParams = new HttpParams().set('id', id);
    return this.http.get<ShoppingCardDto[]>('http://localhost:64849/api/OnlineShoppingCards/Get', { params });
  }

  public createCard(item: ShoppingCardDto): Observable<null> {
    return this.http.post<null>('http://localhost:64849/api/OnlineShoppingCards/Post', item);
  }

  public modifyCard(item: ShoppingCardDto): Observable<null> {
    return this.http.put<null>('http://localhost:64849/api/OnlineShoppingCards/Put', item);
  }

  public deleteCard(id: string): Observable<null> {
    const params: HttpParams = new HttpParams().set('id', id);
    return this.http.delete<null>('http://localhost:64849/api/OnlineShoppingCards/Delete', { params });
  }

  public searchCards(id: string): Observable<ShoppingCardDto[]> {
    const params: HttpParams = new HttpParams().set('id', id);
    return this.http.get<ShoppingCardDto[]>('http://localhost:64849/api/OnlineShoppingCards/Search', { params });
  }
}
