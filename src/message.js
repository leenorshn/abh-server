const {Schema,model} =require("mongoose");

const MessageSchema=new Schema({
    name:String,
    message:String,
    phone:String
});
const Message=model("Message",MessageSchema);

module.exports=Message;