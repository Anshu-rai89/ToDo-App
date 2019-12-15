// this will be use to create data base schemas

const mongoose=require('mongoose');

const list_schema=new mongoose.Schema(
    {
        description:
        {
            type:String,
            required:true
        },
        category:
        {
            type:String,
            required:true
        },
        date:
        {
            type:String,
            required:true
        }
    }
);

// defining the name of database
var List=mongoose.model('List',list_schema);
module.exports=List;