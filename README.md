<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

This repository contains a simple implementation of CRUD (Create, Read, Update, Delete) operations for managing users using NestJS. The API allows you to add, retrieve, update, and delete users with appropriate HTTP methods and status codes.

### Features
- **Add User**: Create a new user and store it in memory.
- **Get All Users**: Retrieve a list of all users.
- **Get Single User**: Retrieve a single user by their ID.
- **Update User**: Update an existing user's details by their ID.
- **Delete User**: Remove a user by their ID and return the remaining users.

### Endpoints

1. **Add User**
   - **Method**: `POST`
   - **URL**: `/users/v1/addUser`
   - **Body** (JSON):
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   - **Response**: 
     ```json
     {
       "usersData": [...]
     }
     ```

2. **Get All Users**
   - **Method**: `GET`
   - **URL**: `/users/v1/getUsers`
   - **Response**: 
     ```json
     {
       "usersData": [...]
     }
     ```

3. **Get Single User**
   - **Method**: `GET`
   - **URL**: `/users/v1/getUser/:id`
   - **Path Variable**: `id` (e.g., 1)
   - **Response**: 
     ```json
     {
       "user": {...}
     }
     ```

4. **Update User**
   - **Method**: `PUT`
   - **URL**: `/users/v1/updateUser/:id`
   - **Path Variable**: `id` (e.g., 1)
   - **Body** (JSON):
     ```json
     {
       "id": 1,
       "name": "John Smith",
       "email": "john.smith@example.com"
     }
     ```
   - **Response**: 
     ```json
     {
       "user": {...}
     }
     ```

5. **Delete User**
   - **Method**: `DELETE`
   - **URL**: `/users/v1/deleteUser/:id`
   - **Path Variable**: `id` (e.g., 1)
   - **Response**: 
     ```json
     {
       "message": "User deleted successfully",
       "newData": [...]
     }
     ```

### Installation

```bash
$ yarn install



Running the app
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod


Test
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov

Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

Stay in touch
Author - Muhammad Mutahir
Website - https://nestjs.com
Twitter - @nestframework
License
Nest is MIT licensed.