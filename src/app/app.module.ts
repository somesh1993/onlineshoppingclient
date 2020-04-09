import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ModifyCardComponent } from './modify-card/modify-card.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { OnlineShoppingService } from './services/online-shopping.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomColorDirective } from './directives/custom-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AllCardsComponent,
    CreateCardComponent,
    ModifyCardComponent,
    CustomColorDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingRoutingModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [OnlineShoppingService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
