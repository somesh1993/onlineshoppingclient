import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { OnlineShoppingService } from './online-shopping.service';

describe('ChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
      providers: [OnlineShoppingService, HttpClient]
  }));

  it('should be created', () => {
    const service: OnlineShoppingService = TestBed.get(OnlineShoppingService);
    expect(service).toBeTruthy();
  });
});
