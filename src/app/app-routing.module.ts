import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { OfferContactComponent } from './pages/offers/offer-contact/offer-contact.component';
import { NeedsDetailComponent } from './pages/my-needs/needs-detail/needs-detail.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { OffersComponent } from './pages/offers/offers.component';
import { MyNeedsComponent } from './pages/my-needs/my-needs.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeedsContactComponent } from './pages/my-needs/needs-contact/needs-contact.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'profile', component: PerfilComponent },
  { path: 'my-needs', component: MyNeedsComponent },
  { path: 'my-needs-detail', component: NeedsDetailComponent },
  { path: 'my-needs-contact', component: NeedsContactComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'offers-contact', component: OfferContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products-detail', component: ProductDetailComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
