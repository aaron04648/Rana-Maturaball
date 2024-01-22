import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { SponsorenModule } from './components/sponsoren/sponsoren.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, SponsorenModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
