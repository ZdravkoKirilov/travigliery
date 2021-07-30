import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';

import { BookingListComponent } from './components/booking-list/booking-list.component';
import { AuthenticatedHeaderComponent } from './components/authenticated-header/authenticated-header.component';
import { LogoComponent } from './components/logo/logo.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { MaterialModule } from './material.module';
import { IconsModule } from '@root/icons';

@NgModule({
  declarations: [
    BookingListComponent,
    AuthenticatedHeaderComponent,
    LogoComponent,
    PublicHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    InlineSVGModule,
    MaterialModule,
    IconsModule,
  ],
  exports: [
    CommonModule,
    BookingListComponent,
    AuthenticatedHeaderComponent,
    PublicHeaderComponent,
    InlineSVGModule,
  ],
})
export class SharedModule {}