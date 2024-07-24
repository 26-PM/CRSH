# CRSH Application

## CRSH - CReateSHow

## Overview

CRSH is a robust and user-friendly application built with Mongoose and Express.js. This application enables the creation and real-time visibility of users, ensuring a seamless and interactive user management experience.

## Features

- **User Creation**: Easily create new users with a simple and intuitive form.
- **Real-Time Updates**: Newly created users are immediately visible without the need for a page refresh.
- **Scalable Architecture**: Built using Express.js and Mongoose, ensuring scalability and maintainability.
- **RESTful API**: Exposes a set of RESTful endpoints for interacting with user data.
- **Data Persistence**: Utilizes MongoDB for storing and retrieving user data efficiently.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/crsh.git
   cd crsh
2. **Install dependencies**:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

makefile
Copy code
PORT=3000
MONGODB_URI=your_mongodb_connection_string
Start the application:

bash
Copy code
npm start
The application will be running at http://localhost:3000.

## API Endpoints

GET /users: Retrieve all users.
POST /users: Create a new user.
GET /users/
: Retrieve a user by ID.
PUT /users/
: Update a user by ID.
DELETE /users/
: Delete a user by ID.
Usage

## Create a User:

Send a POST request to /users with the user details in the request body.
The new user will be created and immediately visible in the list of users.
View Users:

Send a GET request to /users to retrieve the list of all users.
Newly created users appear instantly without requiring a page refresh.
Technologies Used

Express.js: A fast and minimalist web framework for Node.js.
Mongoose: An elegant MongoDB object modeling tool for Node.js.
MongoDB: A NoSQL database for storing user data.
Contributing

## We welcome contributions to the CRSH project! If you have suggestions for new features or improvements, please submit an issue or a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for more details.

# Contact

For any questions or suggestions, please feel free to reach out:

## Email: pm26new@gmail.com
## GitHub: 26-pm







