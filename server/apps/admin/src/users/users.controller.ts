import { Controller, Inject } from '@nestjs/common';
import { User } from 'libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: User         // http://localhost:3000/users
})
@Controller('users')
@ApiTags("用户")           // ApiUseTags换名为ApiTags
export class UsersController {
    constructor(@InjectModel(User) private readonly model) { //注入模型

    }
}

