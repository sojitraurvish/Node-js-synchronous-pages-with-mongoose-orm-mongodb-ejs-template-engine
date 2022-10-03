const mongoose=require("mongoose");

const adminsSchema=mongoose.Schema;

const admins=new adminsSchema({
    // title:String 
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("admins",admins);

// const ObjectId=require("mongodb").ObjectId;

// const getDB=require("../util/database").getDb;

// module.exports=class Admin{

//     constructor(){

//     }

//     static login(email)
//     {
//         const db=getDB();
//         return db
//             .collection("admins")
//             .find({email:email})
//             .next()
//     }
// }