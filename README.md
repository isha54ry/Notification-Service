# Notification Service API

A simple Notification Service API built with Node.js to send and manage notifications. This project provides RESTful endpoints to create, fetch, and manage notifications.

---

## Features

- Create notifications
- Retrieve notifications by user or ID
- Mark notifications as read/unread
- Delete notifications
- Basic validation and error handling

---

## Tech Stack

- Node.js
- Express.js
- MongoDB

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm)
- [MongoDB](https://www.mongodb.com/)

---

## Getting Started

### Clone the repository

```bash
git clone (https://github.com/isha54ry/Notification-Service)
cd Notification-Service
````

### Install dependencies

```bash
npm install
```

---

## Configuration

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3002
MONGO_URI=mongodb://localhost:27017/notifications_db

## Running the Application

### Start MongoDB server (if running locally)

```bash
mongod
```

### Run server in development mode (with nodemon)

```bash
npm run dev
```

### Run server in production mode

```bash
npm start
```

Server runs on the port set in `.env` (default: 3002). Access API at `http://localhost:3002`.

---

## API Endpoints

| Method | Endpoint                      | Description                  |
| ------ | ----------------------------- | ---------------------------- |
| POST   | `/notifications`              | Create a new notification    |
| GET    | `/notifications/:id`          | Get notification by ID       |

---

## Useful Commands

* `npm install` — Install dependencies
* `npm run dev` — Run server with nodemon (auto reload)
* `npm start` — Run server normally
* `mongod` — Start local MongoDB server

---


## Troubleshooting

* Ensure MongoDB is running locally or update `MONGO_URI` accordingly.
* Verify `.env` variables are correctly set.
* Run MongoDB with admin privileges if permission issues occur.

---

## Contributions

Feel free to open issues or submit pull requests!

---


