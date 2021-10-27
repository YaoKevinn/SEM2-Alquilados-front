import { PerfilComponent } from './pages/perfil/perfil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PublicationCardComponent } from './components/publication-card/publication-card.component';
import { NeedCardComponent } from './components/need-card/need-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyNeedsComponent } from './pages/my-needs/my-needs.component';
import { OffersComponent } from './pages/offers/offers.component';
import { QualificationDialogComponent } from './components/qualification-dialog/qualification-dialog.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { NeedsDetailComponent } from './pages/my-needs/needs-detail/needs-detail.component';
import { ConfirmOfferDialogComponent } from './pages/my-needs/confirm-offer-dialog/confirm-offer-dialog.component';
import { NeedsContactComponent } from './pages/my-needs/needs-contact/needs-contact.component';
import { OfferCardComponent } from './pages/offers/offer-card/offer-card.component';
import { OfferContactComponent } from './pages/offers/offer-contact/offer-contact.component';
import { OfferSuccessDialogComponent } from './pages/offers/offer-success-dialog/offer-success-dialog.component';
import { AddFriendDialogComponent } from './components/add-friend-dialog/add-friend-dialog.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent,
    PublicationCardComponent,
    NeedCardComponent,
    FooterComponent,
    AlertDialogComponent,
    SignUpComponent,
    NavbarComponent,
    MyNeedsComponent,
    OffersComponent,
    QualificationDialogComponent,
    FriendListComponent,
    ProfileDialogComponent,
    PerfilComponent,
    NeedsDetailComponent,
    ConfirmOfferDialogComponent,
    NeedsContactComponent,
    OfferCardComponent,
    OfferContactComponent,
    OfferSuccessDialogComponent,
    AddFriendDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
