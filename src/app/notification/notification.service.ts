/*
  I chose to use Observables for this service to take advantage of its multicasting functionalities and
  possibilities to work with streams of data.
  Documentation for it can be found at http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html

  What could be used here in an actual application is the WebSocketSubject, where the user can set a
  URL of the socket and listen to its events. More documentation here:
  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket
*/

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Notification } from './model/notification.model';

interface NotificationMessage {
  channel: string; // channel is useful for knowing the origin of the notification ('web', 'mobile' for instance)
  data: Notification;
}

@Injectable()
export class NotificationService {

  /*
    Subject in rxJS is the equivalent to an EventEmitter, the equivalent to an EventEmitter, used to multicast a value or event to Observers
    Here we use it to multicast the notifications to the notification component.
  */
  public notification: Subject<NotificationMessage>;

  constructor() {
    // we instantiate this.notification so that the public publish method can use it anywhere in the app.
    this.notification = new Subject<NotificationMessage>();
  }

  // this method will call the .next property of the notification Subject,
  // which will send the notification parameter to anything that is subscribing to it around the app.
  public publish<T>(notification: NotificationMessage): void {
    this.notification.next(notification);
  }

  // of creates an Observable that emits the values you specify as arguments
  public of<T>(): Observable<NotificationMessage> {
    return this.notification;
  }
}
