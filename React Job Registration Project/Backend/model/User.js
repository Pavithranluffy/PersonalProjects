//This line imports the Mongoose library into your file

const mongoose =  require('mongoose');

mongoose.connect("mongodb+srv://pavi:1234@cluster0.sba4m.mongodb.net/User").then(()=>{
    console.log("Mango DB is Connected")
}).catch(()=>{
    console.log("Error Occured While Connecting the Mongo DB")
})


//Next you need to create a Scheme ,Schema means defining the structure of the documents 
const Usershema = new mongoose.Schema({
    name:String,
    phoneno:Number,
    companyname:String,
    companymail:String,
    verifyemail:String,
    verifyphoneno:Number,
})


//next You need to export this schema as model so you can use this schema 

module.exports = mongoose.model('User',Usershema);




//mongoose.model('User ', userSchema): This creates a Mongoose model named User  based on the userSchema.
//  The model represents the users collection in your MongoDB database (Mongoose automatically pluralizes the model name).