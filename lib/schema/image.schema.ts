import mongoose, {Schema,Model}from "mongoose";

interface Image extends Document{
     imageUrl:string
}
export const imageSchema:Schema=new Schema({
     imageUrl:{
        type:String,
        required:true
     },
   
},{timestamps:true})

export const image:Model<Image>=mongoose.models.image||mongoose.model("image",imageSchema)
