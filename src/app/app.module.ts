import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// fontawesome for the icons in the notification module
// it has also been included in the angular-cli.json file inside 'styles'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { MockNotificationsComponent } from './mock-notifications/mock-notifications.component';

import { NotificationService } from './notification/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    MockNotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    // added here so it can be used by both the NotificationComponent and MockNotificationsComponent
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
