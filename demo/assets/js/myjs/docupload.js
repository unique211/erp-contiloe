  $(document).ready(function() {
  
  function uploadfile(id,hiddenid,msgid){
        console.log(id+'-'+hiddenid+'-'+msgid);
       
        $('#'+id).ajaxfileupload({
          //'action' : 'callAction',
          
          'action' : baseurl+'settings/doc_upload',
          params:{id:id},
          'onStart': function() {$('#'+msgid).html("<font color='red'><i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>Please wait file is uploading.....</font>"); },
          'onComplete' : function(response) {
          console.log(response);
         
              if(response==''){
                  $('#'+msgid).html("<font color='red'>"+"Error in file upload"+"</font>");
              }else{
                  
                   $('#'+hiddenid).val(response);
                   $('#'+msgid).html("<font id='doc_image_name' color='green'>"+response+"</font><button class='delete_doc btn btn-sm  btn-xs  btn-danger' id="+response+'###'+hiddenid+'###'+msgid+" name="+response+'-'+hiddenid+'-'+msgid+"><i class='fa fa-trash'></i></button>");
                  
    
            } 
    
            }
        });
    }

    /* Delete Document start */
	$(document).on('click','.delete_doc',function(e){
		e.preventDefault();
		var doc=$(this).attr('id');
		doc=doc.split('###');
		
	//	var vendor_id=$('#vendorid').val();
	//	alert('Document:'+doc+' Id:'+vendor_id);
	swal({
            title: "Are you sure to delete ?",
            text: "You will not be able to recover this file !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it !!",
            closeOnConfirm: false
        },
        function(){	
			$.ajax({
                type : "POST",
				url  : baseurl+"settings/doc_delete",
                dataType : "JSON",
                data : { 
							doc:doc[0],
						},
                success: function(data){
					if(data == '1'){
						$('#'+doc[1]).val('');
						$('#'+doc[2]).html('');
			            swal("Deleted !!", "Hey, your File has been deleted !!", "success");
						
					}
                }
            });
            return false;
			
        });
	
	});
  });