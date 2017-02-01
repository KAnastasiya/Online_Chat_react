# Online chat

Service for communication between users of site and administrators of this site, based on React + Redux.


## Features

1. Send user's messages.
2. Receive administrator's messages.
3. Receive informations about administrator (photo, name....)
4. Receive contacts, that user already entered.
5. Send changes in user's contacts.


## Installation

1. Download source code.
2. Run `npm install` in catalog with source code (to get the project's dependencies).


## Getting started

1. Run local-server with client-side part of service.
*Run `npm run dev` in catalog with source code (to produce development version and run a watcher at localhost:8080)*.
2. Run mock-server with server-side part of service.
*Run `node server.js` in catalog `<catalog with source code>/server` (to run a server at localhost:3000)*.
3. Open url `http://localhost:8080` in your browser.


## Build

- `npm run build` - produces production version (with minification).


## Utils

- `npm run lint` - linting JavaScript with [ESLint](http://eslint.org/).


## Demo

If you want see, how service look like at client-side, click [this link] (https://kanastasiya.github.io/Online_Chat_react/)
