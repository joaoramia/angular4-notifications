// the closeItem method in the NotificationComponent is testable with the UI only,
// so for that method automated tests would be best (with protractor for instance)

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs/Rx';

import { NotificationComponent } from './notification.component';

import { NotificationService } from './notification.service';

import { Notification } from './model/notification.model';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationComponent
      ],
      providers: [
        NotificationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a subscribeToNotifications method', () => {
    expect(component.subscribeToNotifications).toBeTruthy();
  });

  it('should have a closeItem method', () => {
    expect(component.closeItem).toBeTruthy();
  });

  it('subscribeToNotifications should be invoked on ngOninit', () => {

    spyOn(component, 'subscribeToNotifications');
    component.ngOnInit();

    expect(component.subscribeToNotifications).toHaveBeenCalled();
  });
});
