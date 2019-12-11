$(document).ready(function() {
   
    
    $('#passwordcrf').hide();

    $(document).on("blur",".conpassword",function(e){
        e.preventDefault();
        var password=$('#password').val();
        var conformpassword=$('#conformpassword').val();
    if(password==conformpassword){
        $('#savepassword').removeAttr('disabled');
        $('#passwordcrf').hide();
    }else{
       /* swal({
            title: "Enter Password And Confirm Password Not Matched!!!",
            type: "warning",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Close",
            
        });*/
        $('#passwordcrf').show();
        $('#savepassword').Attr('disabled',disabled);
    }
});
$(document).on("click","#savepassword",function(e){
    e.preventDefault();
    var password=$('#password').val();
    var conformpassword=$('#conformpassword').val();
    var table_name='user_master';
    console.log(password+""+table_name+userid);
    $.ajax({
          
        type : "POST",
        url  : baseurl+"settings/changepassword",
        dataType : "JSON",
        async : false,
        data : {           
            password:password,
            userid:userid,
            table_name:table_name,
                },
        success: function(result){
            if(result==true){
                successTost("Change Password SuccessFully !!!");
                    
            }else{
                errorTost('  Cannot Change Password !!!');
            }
        }
    });


});

});