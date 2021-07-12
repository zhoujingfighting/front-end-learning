import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDTO, EditUserDTO } from './user.dto';
/**
 * provider 我们可以简单地从字面意思来理解，就是服务的提供者。
怎么去理解这个服务提供者呢？举个例子，我们的 controller 接收到了一个用户的查询请求，
我们不能直接在 controller 中去查询数据库并返回，而是要将查询请求交给 provider 来处理，
这里我们创建了一个 UserService，就是用来提供数据库操作服务的。
 */
@Injectable()
export class UserService {
	constructor(
		@InjectModel('Users') private readonly userModel: Model<User>
		){}
		//查询所有用户
		async findAll(): Promise<User []>{
			return await this.userModel.find()
		}
		//查找单个用户
		async findOne(_id: string): Promise<User>{
			return await this.userModel.findById(_id)
		}
		//添加单个用户
		async addOne(body: CreateUserDTO): Promise<void>{
			await this.userModel.create(body)
		}
		//编辑单个用户
		async editOne(_id: string, body: EditUserDTO): Promise<void>{
			await this.userModel.findByIdAndUpdate(_id ,body)
		}
		//删await
		async deleteOne(_id: string): Promise<void>{
			await this.userModel.findByIdAndDelete(_id)
		}
}
/**
 * 异步操作，所以引入async/await
 */