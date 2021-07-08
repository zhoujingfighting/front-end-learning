// class Hello {
// 	firstName: string
// 	lastName: string
// 	constructor(firstName: string, lastName: string){
// 		this.firstName = firstName
// 		this.lastName  = lastName
// 	}
// 	greeter(){
// 		return "欢迎来到typescript的世界， hello" + this.firstName + " " + this.lastName
// 	}
// }
// var user = new Hello("zhou" ,"jielun")

import http from 'http'
http 
	.createServer( (request,response) => {
		response.end('hello world')
	})
	.listen(3001,() => console.log('server started'))