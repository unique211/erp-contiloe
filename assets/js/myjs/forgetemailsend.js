$(document).ready(function(){
var id='';
$('#emailmsg').hide();
 /*---For Checking Email Address Is Exist Or Not---*/  
    $(document).on("blur","#email",function(e){
        e.preventDefault();
  var Email=$('#email').val();

        $.ajax({
          
            type : "POST",
            url  : baseurl+"settings/Check_EmailAddresss",
            dataType : "JSON",
            async : false,
            data : {           
                email:Email,
                   
                    },
            success: function(result){
              if(result=="1000"){
               
                    $('#emailmsg').show();
              /*  swal({
                    title: "Entered Email id not Registered !!!",
                    type: "warning",
                   confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Close",
                   
                });*/
                $('#send').Attr('disabled',disabled);
              }else{
                $('#emailmsg').hide();
                 id=result[0].id;
                 console.log(id);
                 $('#send').removeAttr('disabled');
              }
                
            }
        });  
    });
    $(document).on("click","#send",function(e){
        e.preventDefault();
        var Email=$('#email').val();
        $.ajax({
          
            type : "POST",
            url  : baseurl+"settings/SendEmailforgetpassword",
            dataType : "JSON",
            async : false,
            data : {           
                email:Email,
                id:id,
                    },
            success: function(data){
                if(data==1){
                    successTost("Email Send Successfully");
                }else{
                    successTost("Email  Not Send Successfully");
                }
            }
        });


    });

});