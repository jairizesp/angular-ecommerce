import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ProductCheckoutComponent } from './components/pages/product-checkout/product-checkout.component';
import { NavBarComponent } from './components/layout-components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout-components/footer/footer.component';
import { SubNavBarComponent } from './components/layout-components/sub-nav-bar/sub-nav-bar.component';
import { PromoComponent } from './components/layout-components/promo/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    CartComponent,
    ProductDetailsComponent,
    ProductCheckoutComponent,
    NavBarComponent,
    FooterComponent,
    SubNavBarComponent,
    PromoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
