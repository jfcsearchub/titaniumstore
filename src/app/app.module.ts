import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsAlertComponent } from './products-alert/products-alert.component';
import { MembersComponent } from './members/members.component';
import { MembersListComponent } from './members/members.list/members-list.component';
import { PasteursComponent } from './pasteurs/pasteurs.component';
import { BaptemesComponent } from './baptemes/baptemes.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { AddMemberComponent } from './members/add-member/add-member.component';
import { UpdateMemberComponent } from './members/update-member/update-member.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'membres', component: MembersComponent },
      { path: 'addmember', component: AddMemberComponent },
      { path: 'updatemember', component: UpdateMemberComponent },
      { path: 'members/:memberId', component: MemberDetailsComponent },
      { path: 'liste-membres', component: MembersListComponent },
      { path: 'pasteurs', component: PasteursComponent },
      { path: 'baptemes', component: BaptemesComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MembersComponent,
    MembersListComponent,
    ProductsAlertComponent,
    PasteursComponent,
    BaptemesComponent,
    FooterComponent,
    ProductDetailsComponent,
    MemberDetailsComponent,
    AddMemberComponent,
    UpdateMemberComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
