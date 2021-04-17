import { ApiProperty } from "@nestjs/swagger"   // https://docs.nestjs.cn/7/openapi?id=%e8%a3%85%e9%a5%b0%e5%99%a8中查询变名的装饰器
import { modelOptions, prop, Ref } from "@typegoose/typegoose"
import { Episode } from "./episode.model"

@modelOptions({
    schemaOptions: {
        timestamps: true            // 给下面的模型加上创建时间和更新时间字段
    }
})
export class Course {
    @ApiProperty({ description: '课程名称'})          // 命名后就可以在接口文档中看到了。ApiModelProperty换名为ApiProperty
    @prop()         // 装饰属性,name才会保存到数据库
    name: string

    @ApiProperty({ description: '封面图'}) 
    @prop()
    cover: string

    @prop({ itemsRef: 'Episode'})     // arrayProp被弃用
    episodes: Ref<Episode>[]      // 关联外键
}