import mongoose, {Schema,Model}from "mongoose";

interface Image extends Document{
     imageUrl:string
}
export const youtbeSchema:Schema=new Schema({
      youtubeLink:{
        type:String,
        required:true
     },
      description:{
        type:String,
        required:true
     },

},{timestamps:true})

export const youtube:Model<Image>=mongoose.models.youtube||mongoose.model("youtube",youtbeSchema)
