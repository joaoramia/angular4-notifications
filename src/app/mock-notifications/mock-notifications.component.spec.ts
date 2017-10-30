// submitNotification method uses the private notificationService property of the MockNotificationsComponent,
// thus, it should be tested using automated tests with tools like protractor

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockNotificationsComponent } from './mock-notifications.component';

import { NotificationService } from '../notification/notification.service';

import { FormsModule } from '@angular/forms';

describe('MockNotificationsComponent', () => {
  let component: MockNotificationsComponent;
  let fixture: ComponentFixture<MockNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockNotificationsComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        NotificationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a submitNotification method', () => {
    expect(component.submitNotification).toBeTruthy();
  });

  it('should have a validateInputs method', () => {
    expect(component.validateInputs).toBeTruthy();
  });

  it('the submitNotification should invoke the validateInputs method', () => {
    spyOn(component, 'validateInputs');
    component.submitNotification();
    expect(component.validateInputs).toHaveBeenCalled();
  });

  it('the validateInputs method should return false if one of the properties of the notification is falsy', () => {
    component.notification.body = '';
    component.validateInputs();
    expect(component.validateInputs()).toBe(false);
  });

  it('the validateInputs method should set the missingBody property to true if it is an empty string', () => {
    component.notification.body = '';
    component.validateInputs();
    expect(component.missingBody).toBe(true);
  });

  it('the validateInputs method should set the missingHead property to true if it is an empty string', () => {
    component.notification.head = '';
    component.validateInputs();
    expect(component.missingHead).toBe(true);
  });
});
