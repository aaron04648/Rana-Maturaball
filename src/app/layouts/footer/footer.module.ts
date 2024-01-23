import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
