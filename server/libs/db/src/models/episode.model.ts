import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Episode {
    @prop()
    name: string

    @prop()
    file: string        // 视频、音频、图片，上传的文件
}