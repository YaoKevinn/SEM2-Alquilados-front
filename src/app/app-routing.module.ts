import { OffersComponent } from './pages/offers/offers.component';
import { MyNeedsComponent } from './pages/my-needs/my-needs.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'my-needs', component: MyNeedsComponent },
  { path: 'offers', component: OffersComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
