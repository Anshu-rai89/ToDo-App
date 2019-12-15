// aquire database

const mongoose=require('mongoose');

// connect it with database


const uri = "mongodb+srv://Anshu-rai89:Anshu%401998@cluster0-8amks.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true });

// aquire the connection 

const db=mongoose.connection;

// check for error

db.on('error',console.error.bind(console,'error binding'));

// if succucful

db.once('open',function()
{
    console.log("Db is running ");
});