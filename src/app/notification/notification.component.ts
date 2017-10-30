import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './model/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notifications: Array<Notification> = [];

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.subscribeToNotifications();
  }

  // subscribes to the values emitted by the of method in notificationService,
  // and adds the new notifications to the stack of notifications
  subscribeToNotifications = () => {
    this.notificationService.of()
    .subscribe(notification => {
      // using unshift here so that we can display the latest notifications on the top
      this.notifications.unshift(notification.data);
    });
  }

  // takes the item where the close button was clicked and sets its parent (the notification div) as display none
  closeItem = (ev) => {
    const div = ev.target.parentElement;
    div.style.opacity = '0';

    // setTimeout is used here for the animation
    setTimeout(function(){ div.style.display = 'none'; }, 600);
  }
}
