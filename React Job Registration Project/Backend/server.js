//To user node mailer First Install Nodemailer through the npm
   //---npm install nodemailer ---node mailer is a populare node js library

///Import Node mailer 

//In Node.js, the syntax for importing modules differs from other programming languages, 
//and it can be a bit confusing if you're coming from a different background. Let's clarify the differences:

//Node.js uses the CommonJS module system, which employs require() to import modules.


//In Node.js, when you use the require() function to import a module, you are actually retrieving the module's exported content,
// which can be a function, an object, a class, or any other value. Assigning the result of require()


//For Run the server on Browser


//Import a Mangoose User Model
const User = require('./model/User')


const express  = require('express');
const bodyParser = require('body-parser'); // Add this middleware
const app = express();
const cors = require('cors');
app.use(cors()); // Allow all origins by default

app.use(bodyParser.json()); // Parse incoming requests with JSON payload
const port = 4000;

const nodemailer =  require('nodemailer');
const { getLogger } = require('nodemailer/lib/shared');
const { createRoutesFromChildren } = require('react-router-dom');

//Next Step is to Create a Transporter
//Which act as a communication between application and email service provide (like gmail,yahoo)
//It includes all Configuration Details to connect to Email service provider


//configure Your Transporter


const transporter  =  nodemailer.createTransport({
    secure:true,
    host:'smtp.gmail.com',//It is Google smtp server to send mail
    port:465,
    auth:{
        user:'pavithranrajendran2002@gmail.com',
        pass:'xvtg zpdu vefh ogjr'
    }

})
// Generate a 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
}

//To Store OTP

let otpstorage = {}

//Now Using Transporter Send Message 

function sendOTP(email){
    if (!email) {
        console.error('No recipient email provided');
        return;
    }
   //When ever the sendOTP Function is called ,Generate the OTP and store it in a var
   const otp = generateOTP();
   otpstorage[email] = otp ; //Store the otp against the mail


   transporter.sendMail({
    to:email,
    subject:"Your OTP Code",
    html:`<p>You OTP Code is <b>${otp}</b></p>`

   },
(err,info)=>{
    if(err){
       console.log('Error Occured'+err.message);
       
    }
    else{
        console.log("Message Sent Succesfully"+info.response);
        
    }
})

   
}
//In an Express.js application, app.post is used to define a route that listens for HTTP POST requests. 
app.post('/send-otp',(req,res)=>{
    console.log('Received request body:', req.body);
    const {companymail} = req.body;
    console.log('Email received:', companymail);
    if (!companymail) {
        return res.status(400).json({ message: "Email is required" });
    } //Storing email
    sendOTP(companymail);
    res.status(200).json({message:"Message Sent Succesfully"})

})


//To verify the OTP

app.post('/verify-otp',async (req,res)=>{
    
    const{email , otp,FormData} = req.body ;
    console.log("The Verification Email is " +email);
    console.log("The Code is"+otp);
    
    
    if(otpstorage[email] && otpstorage[email] === parseInt(otp)){
        //Otp is Correct
        //So we are Deleting the OTP in Storage
        delete otpstorage[email];
        res.status(200).json({message:"OTP Verified Sucessfulyy"})
        const newuser = new User(FormData);
        await newuser.save();
        console.log("OTP Verified Sucessfulyy");

        
    }
    else{
        res.status(400).json({message:"Invalid OTP"});
        console.log("Invalid OTP");
        
    }
})


//Start the server

app.listen(port,()=>{
    console.log(`Server is Listening on the ${port} `);
    
})


// sendmail("ramanidharan1412@gmail.com","This is Subject","This is Test Message");


