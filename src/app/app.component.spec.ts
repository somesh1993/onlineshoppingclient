import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelService } from './services/channel.service';
import { ChannelServiceSpy } from './services/channel.service.spy';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let channelService: ChannelService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BrowserModule, HttpClientModule],
      providers: [ChannelService,
        { provide: ChannelService, useClass: ChannelServiceSpy }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    channelService = TestBed.get(ChannelService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load channel data', () => {
    component.loadOnlineCourseData();
    expect(component.channelData.length).toBeGreaterThan(0);
  });
});
