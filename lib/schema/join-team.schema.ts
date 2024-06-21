import mongoose, {Schema,Model}from "mongoose";

interface  JoinTeam extends Document{
     fullName:string,
     mobileNumber:string,
     email:string
}
export const joinTeamSchema:Schema=new Schema({
      fullName:{
        type:String,
        required:true
     },
      mobileNumber:{
        type:String,
        required:true
     },
      email:{
        type:String,
        required:true
     },
   
},{timestamps:true})

export const joinTeam:Model<JoinTeam>=mongoose.models.team||mongoose.model("team",joinTeamSchema)
