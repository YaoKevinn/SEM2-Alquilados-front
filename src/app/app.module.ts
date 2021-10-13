import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PublicationCardComponent } from './components/publication-card/publication-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MyNeedsComponent } from './pages/my-needs/my-needs.component';
import { OffersComponent } from './pages/offers/offers.component';

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
    FooterComponent,
    AlertDialogComponent,
    SignUpComponent,
    NavbarComponent,
    ProfilePageComponent,
    MyNeedsComponent,
    OffersComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
