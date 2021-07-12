import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put
  } from '@nestjs/common';
/**
 * controller就相当于是路由
 */
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';
export interface UserResponse<T = unknown>{
	code: number,
	data?: T,
	message: string
}
@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService
	){}
	@Get()
	index(): string { 
		return "jefefefefef"
	}
	@Get('users')
	async findAll(): Promise<UserResponse<User[]>> {
		return {
		  code: 200,
		  data: await this.userService.findAll(),
		  message: 'Success.'
		};
	  }
	// GET /user/:_id
	@Get(':_id')
	async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
	  return {
		code: 200,
		data: await this.userService.findOne(_id),
		message: 'Success.'
	  };
	}
  
	// POST /user
	@Post()
	async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
		console.log(1)
	  await this.userService.addOne(body);
	  return {
		code: 200,
		message: 'Success.'
	  };
	}
  
	// PUT /user/:_id
	@Put(':_id')
	async editOne(
	  @Param('_id') _id: string,
	  @Body() body: EditUserDTO
	): Promise<UserResponse> {
	  await this.userService.editOne(_id, body);
	  return {
		code: 200,
		message: 'Success.'
	  };
	}
  
	// DELETE /user/:_id
	@Delete(':_id')
	async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
	  await this.userService.deleteOne(_id);
	  return {
		code: 200,
		message: 'Success.'
	  };
	}

}
