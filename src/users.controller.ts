import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  let usersData = [];
  
  @Controller('/users')
  export class UsersController {
    // Add user API
    @Post('/v1/addUser')
    @HttpCode(HttpStatus.CREATED)
    addUser(@Body() reqBody: any) {
      usersData.push(reqBody);
      console.log('usersData', usersData);
      return {
        usersData,
      };
    }
  
    // Get users API
    @Get('/v1/getUsers')
    @HttpCode(HttpStatus.OK)
    getUsers() {
      return { usersData };
    }
  
    // Get single User API
    @Get('/v1/getUser/:id')
    @HttpCode(HttpStatus.OK)
    getUser(@Param('id') id: any) {
      let user = usersData.find((users) => users.id == Number(id));
      console.log('user', user);
      return { user };
    }
  
    // User update API
    @Put('/v1/updateUser/:id')
    @HttpCode(HttpStatus.OK)
    updateUser(@Param('id') id: number, @Body() reqBody: any) {
      console.log('id', id);
      let findUserIndex = usersData.findIndex((user) => user.id == Number(id));
      if (findUserIndex >= 0) {
        usersData[findUserIndex] = reqBody;
        return { user: usersData[findUserIndex] };
      }
      return { message: 'User not found' };
    }
  
    // Delete User API
    @Delete('/v1/deleteUser/:id')
    @HttpCode(HttpStatus.OK)
    deleteUser(@Param('id') id: number) {
      const userId = Number(id);
      console.log('id', userId);
      usersData = usersData.filter((user) => user.id !== userId);
      console.log('remaining users', usersData); // Log remaining users for debugging
      return { message: 'User deleted successfully', newData: usersData };
    }
  }
  