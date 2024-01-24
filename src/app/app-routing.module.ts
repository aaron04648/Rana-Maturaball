import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';

import { TicketsComponent } from './components/tickets/tickets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'tickets',
    component: TicketsComponent,
  },

  {
    path: 'gallery',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
