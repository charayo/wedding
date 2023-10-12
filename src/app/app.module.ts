import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecnavComponent } from './secnav/secnav.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LovestoryComponent } from './lovestory/lovestory.component';
import { LocationComponent } from './location/location.component';
import { InvitationComponent } from './invitation/invitation.component';
import { QnaComponent } from './qna/qna.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GiftComponent } from './gift/gift.component';

@NgModule({
  declarations: [
    AppComponent,
    SecnavComponent,
    CountdownComponent,
    LovestoryComponent,
    LocationComponent,
    InvitationComponent,
    QnaComponent,
    RsvpComponent,
    GiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
