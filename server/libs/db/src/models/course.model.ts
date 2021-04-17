import { ApiProperty } from "@nestjs/swagger"   // https://docs.nestjs.cn/7/openapi?id=%e8%a3%85%e9%a5%b0%e5%99%a8中查询变名的装饰器
import { modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({
    schemaOptions: {
        timestamps: true            // 给下面的模型加上创建时间和更新时间字段
    }
})
export class Course {
    @ApiProperty({ description: '用户名', example: 'user1'})          // 命名后就可以在接口文档中看到了。ApiModelProperty换名为ApiProperty
    @prop()         // 装饰属性
    username: string

    @ApiProperty({ description: '密码', example: "pass1"}) 
    @prop()
    password: string
}