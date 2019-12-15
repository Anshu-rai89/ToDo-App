const express=require('express');
const port =8000;
const db=require('./config/mongoose');
const List=require('./models/model.js');




// initilizing our app
const app=express();


// setting our view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// using middle wares
app.use(express.urlencoded());
app.use(express.static('assets'));



// our home controller

app.get('/', function(req, res){
    List.find({},function(err,lists)
    {
        if(err) { console.log("error infetching "); return;}

        return res.render('home',{
            title: "To Do List",
            list: lists
    });
   
});
});

// controller to tackle form 
app.post('/create-list',function(req,res)
{
   // we will read form data here 
  List.create(

      {
        description:req.body.desc,
        category:req.body.category,
        date:req.body.date
      },function(err,newList)
      {
          if(err)  
          {console.log("error in creating database") ;return;}
          console.log("**** ",newList);
          return res.redirect('back');
      }
  );
});



// firing our server here
app.listen(port,function(err)
{
    if(err)  console.log("Error");
    console.log("Server is running");
})