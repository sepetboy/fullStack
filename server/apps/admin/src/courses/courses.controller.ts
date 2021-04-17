import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Course } from 'libs/db/models/course.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Course
})
@Controller('course')
@ApiTags("课程")
export class CourseController {
    // ReturnModelType<typeof Course>是泛型，会类型提示
    constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>){}
}
