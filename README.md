# Challenge

## Initial comments

I chose to create a separate component for the mock notifications functionality, so that the user can literally take the NotificationComponent clean and put it in their project.

The notification folder also contains the NotificationService, which can be adapted by the user to their project (using websockets for instance).

The main focus was encapsulating all the notification subscriber functionality into one folder, and allowing outside components to publish notifications independently.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

Hope you like it!

## Setup

Run `npm install` to get the dependencies for this project.

## Development server

Run `ng serve` for a dev server if you have @angular/cli globally installed. Otherwise, run `npm run start`.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project if you have @angular/cli globally installed. Otherwise, run `npm run build`. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) if you have @angular/cli globally installed. Otherwise, run `npm run test`

## Generating docs

Run `npm run docs` to generate the documentation for the project, using compodoc. It will generate a /documentation folder, which will be served by the npm module http-server on port 8080. Navigate to `http://localhost:8080/`

## Comments regarding the design (topic 2.3.1)

The design chosen for this project was a simple notification box on the bottom right of the screen, which has an internal scroll in case the number of notifications exceeds the height of the screen. The mockup can be found in the mockup.png image, generated using MockFlow
