{
   let id=$('#item2');
   console.log(id);
   
    $( function() {
        $( "#date_picker" ).datepicker();
      } );


      // function to set background colour  of caategory 

   /*  let val= $('#item2').val();
     console.log('value of category is ',val);
       if(val=='work')
       {
        $('#item2').css("background-color", "red");
       }

         console.log(val);

         */
      // jquery code to delete list which is checked
      $("#del").on("click",function(){
  $("input:checkbox").each(function() {
      if ($(this).is(":checked")) {
        $(this).parent().remove();
          let id=($(this).val());
          $.ajax(
              {
                  method:'get',
                  url:`/delete-contact/?id=${id}`,
                  success:function(data)
                  {
                      console.log(data);
                     // $(this).parent().remove();
                  },error:function(err)
                  {
                      console.log(err);
                  }
                  
                
              }
          );
        // $(this).parent().remove();
          //var v=$(this).val();
          

      }
  });
});

 
      
}