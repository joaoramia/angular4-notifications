import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { Notification } from '../notification/model/notification.model';

@Component({
  selector: 'app-mock-notifications',
  templateUrl: './mock-notifications.component.html',
  styleUrls: ['./mock-notifications.component.scss']
})
export class MockNotificationsComponent implements OnInit {
  public notification = new Notification('info', '', '');
  public missingBody: boolean;
  public missingHead: boolean;

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  submitNotification = () => {
    // if input fields are not valid, do not publish notification and leave method
    if (!this.validateInputs()) {
      return;
    }

    // we create a new Notification so that we don't just reference the same one, but actually instantiate a new one
    this.notificationService.publish({
      channel: 'web',
      data: new Notification(
        this.notification.type,
        this.notification.head,
        this.notification.body
      )
    });
  }

  // checks if input fields are valid. If so, return true, else, return false and give error messages
  validateInputs = () => {
    let result = true;

    // first reset values:
    this.missingHead = false;
    this.missingBody = false;

    // then check if inputs are valid
    if (!this.notification.body) {
      this.missingBody = true;
      result = false;
    }

    if (!this.notification.head) {
      this.missingHead = true;
      result = false;
    }

    return result;
  }
}
