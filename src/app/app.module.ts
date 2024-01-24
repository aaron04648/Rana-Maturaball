import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { TicketsModule } from './components/tickets/tickets.module';
import { FooterModule } from './layouts/footer/footer.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FooterModule,
    TicketsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
