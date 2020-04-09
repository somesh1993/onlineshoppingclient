import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ModifyCardComponent } from './modify-card/modify-card.component';

const routes: Routes = [
  { path: 'allCards', component: AllCardsComponent },
  { path: 'createCard', component: CreateCardComponent },
  { path: 'modifyCard/:id', component: ModifyCardComponent },
  { path: '**', redirectTo: 'allCards' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule { }
