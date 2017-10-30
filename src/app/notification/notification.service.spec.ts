import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';

import { Notification } from './model/notification.model';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a notification Subject', inject([NotificationService], (service: NotificationService) => {
    expect(service.notification).toBeTruthy();
  }));

  it('should have a publish method', inject([NotificationService], (service: NotificationService) => {
    expect(service.publish).toBeTruthy();
  }));

  it('should have an of method', inject([NotificationService], (service: NotificationService) => {
    expect(service.of).toBeTruthy();
  }));

  it('the publish method should invoke the next method of the notification Subject',
    inject([NotificationService], (service: NotificationService) => {

    const mockNotification = new Notification('info', 'head', 'body');
    const notificationPublish = {
      channel: 'web',
      data: mockNotification
    };

    spyOn(service.notification, 'next');
    service.publish(notificationPublish);

    expect(service.notification.next).toHaveBeenCalledWith(notificationPublish);
  }));
});
