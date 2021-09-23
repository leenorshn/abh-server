const {Schema,model} =require("mongoose");

const CarSchema=new Schema({
    name:String,
    price:Number,
    imgUrl:String,
    inStock:Boolean,
    caracteristique:{
        marke:String,
        nChassis:String,
        color:String,
        nKm:String,
        modelProd:String,
        anneeFab:String
    },
    vendeur:{
        name:String,
        contact:String
    }
});
const Car=model("Car",CarSchema);

module.exports=Car;