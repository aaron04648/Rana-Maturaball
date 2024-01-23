import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { SponsorenModule } from './components/sponsoren/sponsoren.module';
import { FooterModule } from './layouts/footer/footer.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SponsorenModule,
    HomeModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
