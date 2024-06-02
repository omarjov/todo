# Project

In this folder we have 2 projects, the `Todo Microfrontend` and the `MFE Container`. The `Todo Microfrontend` is a React microfrontend (MFE) component that encapsulates a fully functional todo list application. It is designed to demonstrate maintainable React application design, code organization, testing, and TypeScript usage. The `MFE Container` is a React microfrontend (MFE) container that is designed to demonstrate how to consume and orchestrate multiple microfrontends.

## Setup

Make sure you use node version 20 or higher.

To start the `MFE Container`:
1. Open a terminal and navigate to the `mfe-container` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open a browser and navigate to `http://localhost:3004`. Here you will see the `MFE Container` with the `Todo Microfrontend` embedded, make sure to have the `Todo Microfrontend` running in isolation as well to see the full application in action.

To start the `Todo Microfrontend`:
1. Open a terminal and navigate to the `todo-mfe` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open a browser and navigate to `http://localhost:3001`. Here you will see the `Todo Microfrontend` running in isolation.
