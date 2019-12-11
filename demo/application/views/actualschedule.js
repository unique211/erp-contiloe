$(document).ready(function() {
    var  aid="";
    var actalid="";
    var unit_id="";
    var unit_name="";
    $('#wait').hide();
    $("#shift_time").prop('disabled', true);
    $("#projected_footage").prop('disabled', true);
    $("#shift_timeto").prop('disabled', true);
   // $( "#shift_timeto" ).datepicker( "option", "disabled", true );
    $("#location").prop('disabled', true);
    $("#no_camera").prop('disabled', true);
    $("#special_requirement").prop('disabled', true);
   
    $('.scenedetails').hide();
    $('.peopleattend').hide();
    $('.actualexpense').hide();
   var date="";
   var project="";
   var unit="";
  
   var table_name="actualschedual";
   /*$(document).on("change",".project_name",function(e){
    e.preventDefault();
   
}); */
    $(document).on("blur","#date",function(e){
        e.preventDefault();
        var date=$("#date").val();
        //$('#monthdata').val(month);
        $("#datedata").html('Date :   ' + date+"  ");
       // checkdata();
    });  
    
    $(document).on("blur","#unit_no",function(e){
        e.preventDefault();
        var unit_no=$("#unit_no").val();
        //$('#monthdata').val(month);
        $("#unitdata").html('Unit No :   ' + unit_no+"  ");
        //checkdata();
                
    });  
    $(document).on("click","#fetchdata",function(e){
        e.preventDefault();
        unit=$('#unit_no').val();
        date=$('#date').val();
        project=$('#project').val();
        var tdateAr = date.split('/');
        date = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
       if(unit !="" && date!="" && project !=""){

    $.ajax({
      
        type : "POST",
        url  : baseurl+"settings/checkdataexist",
        dataType : "JSON",
        async : false,
        data : {           
                table_name:"actualschedual",
                date2:date,
                projectid:project,
                forunitno:unit,
                },
        success: function(result){
            
                if(result==true){
                    getdata();
                }else{
             
                   swal({
                        title: "Data Already Exists ?",
                        text: "Please Enter Another data  !!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    });
                  
               
                }
               
        }
    });
       
       
     

   
    }else if(unit=="" && date=="" && project==null){
        swal({
            title: "Please Enter Data ?",
            text: "Unitno and Date and Project  is require  !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
      //  errorTost('Unitno and Date and Project  is require !!!');
    }else if(project=="" && unit==""){
        swal({
            title: "Please Enter Data ?",
            text: "Unitno and Project  is require  !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       // errorTost('Unitno and Project  is require !!!');
    }
       else if(unit==""){
        swal({
            title: "Please Enter Data ?",
            text: "Unitno  is require  !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
          // errorTost('Unitno  is require !!!');
       }else if(date==""){
        swal({
            title: "Please Enter Data ?",
            text: "Date is  require   !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       // errorTost('Date is  require !!!');
       }else if(project==null){
        swal({
            title: "Please Enter Data ?",
            text: "Project is  require   !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       // errorTost('Project is  require !!!');
       }
    
        
                
    });
    function getdata(){
       
        $.ajax({
            type : "POST",
            url  : baseurl+"settings/getactualschedual",
            dataType : "JSON",
            async : false,
            data : {
                date:date,
                project:project,
                unit:unit,
           table_name:'artist_schedule',
                    },
            success: function(data){
            console.log(data);
            
         if(data=='100'){
            $('#project').val('').trigger('change');
            $('#unit_no').val('');
                swal({
                    title: "Planned schedule is not available for this Date/Project/Unit !!!",
                    text: "",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });  
            }
           else  if(data.length>0){
              
                        $('#location').val(data[0].location);
                        $('#shift_time').val(data[0].shiftfrom);
                        $('#projected_footage').val(data[0].profotage);
                        $('#shift_timeto').val(data[0].shiftto);
                        $('#no_camera').val(data[0].camera);
                        $('#special_requirement').val(data[0].requirement)
          
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/getactualschedual",
        dataType : "JSON",
        async : false,
        data : {
            date:date,
            project:project,
            unit:unit,
       table_name:'scenewisedetails',
                },
        success: function(data){
        console.log(data);
       
        if(data.length>0){
          
            console.log(data);
           
            var row_id=0;

            for(var i=0; i<data.length; i++){
                row_id=row_id +1;
                //var dataarray = data[i].name.split(",");
				
                var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                '<td style="display:none;" >'+row_id+'</td>'+
                '<td  id="screenno_'+row_id+'">'+data[i].scenno+'</td>'+
                '<td  id="description_'+row_id+'">'+data[i].description+'</td>'+
                '<td  id="effect_'+row_id+'">'+data[i].effect+'</td>'+
                '<td id="sublocation_'+row_id+'">'+data[i].sublocation+'</td>'+
                '<td  style="display:none;" id="artistname_'+row_id+'">'+data[i].charecterid+'</td>'+
                '<td  id="charectername_'+row_id+'">'+data[i].charectername+'</td>'+
                '<td  id="fotage_'+row_id+'">'+data[i].planfotage+'</td>'+
               // '<td  id="actualfotage_'+row_id+'">	<div class="bfh-timepicker actual_to" id="actualfotagedata_'+row_id+'" data-align="right" value="0" width="10%"></div></td>'+
                 //'<td  id="actualfotage_'+row_id+'"><input type="text" id="actualfotagedata_'+row_id+'" value="0" width="10%"></td>'+
                //'<td  id="remark_'+row_id+'"><input type="text" id="remarkdata_'+row_id+'"  width="10%"></td>'+

                '<td  id="actualfotage_'+row_id+'"></td>'+
                '<td  id="sceremark_'+row_id+'"></td>'+
                '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                '</tr>';			
                $("#scenebody").append(html);
              
        }
        $('#screen_row_id').val(row_id);
                   
 }
}
});
$.ajax({
    type : "POST",
    url  : baseurl+"settings/getactualschedual",
    dataType : "JSON",
    async : false,
    data : {
        date:date,
        project:project,
        unit:unit,
   table_name:'callsheet',
            },
    success: function(data){
    console.log(data);
   
    if(data.length>0){
      
        console.log(data);
        var row_id=0;
         for(var i=0; i<data.length; i++){
                        row_id=row_id +1;


                        var html = '<tr>'+
                        '<td style="display:none;" >'+row_id+'</td>'+
                       '<td style="display:none;" id="peopletypeid_'+row_id+'" >'+data[i].peopletypeid+'</td>'+
                        '<td width="10%" id="peopletype_'+row_id+'">'+data[i].peopletype+'</td>'+
                        '<td style="display:none;" id="charecter_'+row_id+'">'+data[i].characterid+'</td>'+
                        '<td size="10%"  id="charectername_'+row_id+'">'+data[i].charectre+'</td>'+
                        '<td style="display:none;" id="people_'+row_id+'">'+data[i].peopleid+'</td>'+
                        '<td  id="peoplename_'+row_id+'">'+data[i].peoplename+'</td>'+
                        '<td   id="shifttime_'+row_id+'">'+data[i].fromshift+'</td>'+
                        '<td  id="shifttotime_'+row_id+'">'+data[i].toshift+'</td>'+
                        '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="actualshiftfromtime_'+row_id+'" size="20%" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                        '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control actualtime" id="actualshifttotime_'+row_id+'" size="20%" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                        '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="actalduration_'+row_id+'"  size="20%" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                        '<td  id="extrahour_'+row_id+'"><input type="text" id="extratime_'+row_id+'"  size="5%"></td>'+
                        '<td  id="callremark"><textarea  size="10%" id="actualremarkdata_'+row_id+'"></textarea></td>'+
                      
                        // '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="10%"><option selected disabled value="" width="20%">Select</option> </select></td>'+
                       
                        '</tr>';




                       /* var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                        '<td style="display:none;" >'+row_id+'</td>'+
                        '<td style="display:none;" id="peopletypeid_'+row_id+'" >'+data[i].peopletypeid+'</td>'+
                        '<td  id="peopletype_'+row_id+'">'+data[i].peopletype+'</td>'+
                        '<td style="display:none;" id="charecter_'+row_id+'">'+data[i].characterid+'</td>'+
                        '<td  id="charectername_'+row_id+'">'+data[i].charectre+'</td>'+
                        '<td style="display:none;" id="people_'+row_id+'">'+data[i].peopleid+'</td>'+
                        '<td  id="peoplename_'+row_id+'">'+data[i].peoplename+'</td>'+
                        '<td  id="shifttime_'+row_id+'">'+data[i].fromshift+'</td>'+
                        '<td  id="shifttotime_'+row_id+'">'+data[i].toshift+'</td>'+
                       // '<td  id="actualshiftti_'+row_id+'"><div class="bfh-timepicker actualshift"  id="actualshifttime_'+row_id+'" data-align="right" value='+data[i].actualfromtime+'  width="10%"></div></td>'+
                       /* '<td  id="actualshiftti_'+row_id+'"><input class="actualshift" type="text" id="actualshifttime_'+row_id+'"   size="10%"></td>'+
                       //'<td  id="actualshifttot_'+row_id+'"><div class="bfh-timepicker actualshiftto"  id="actualshifttotime_'+row_id+'" data-align="right" value='+data[i].actualtotime+'  width="10%"></div></td>'+
                       '<td  id="actualshifttot_'+row_id+'"><input  class="actualshiftto" type="text" id="actualshifttotime_'+row_id+'"  size="10%"></td>'+
                        '<td  id="duration_'+row_id+'"><input type="text" id="durationtime_'+row_id+'"  size="10%"></td>'+
                        '<td  id="extrahour_'+row_id+'"><input type="text" id="extratime_'+row_id+'"  size="10%"></td>'+
                        '<td  id="remarkd_'+row_id+'"><input type="text" id="premarkdata_'+row_id+'"  size="10%"></td>'+*/

                       /* '<td id="actualshiftti_'+row_id+'"></td>'+
                        '<td  id="actualshifttot_'+row_id+'"></td>'+
                        '<td  id="durationtime_'+row_id+'"></td>'+
                        '<td  id="extrahour_'+row_id+'"></td>'+
                        '<td  id="premarkdata_'+row_id+'"></td>'+
                        '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                      //  '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                        '</tr>';*/			
                 $("#peoplebody").append(html);
                 $('#schedulesheet_row_id').val(row_id); 
              
    }
             
}
settimeincallfrom();
addTimes();
}
});


$.ajax({
    type : "POST",
    url  : baseurl+"settings/getactualschedual",
    dataType : "JSON",
    async : false,
    data : {
            date:date,
            project:project,
            unit:unit,
            table_name:'plannedexpenses',
           
            },
    success: function(data)
    {
        console.log(data);
       
        var sr=0;
        var tamt=0;
        var totalamt=0;
        $("#expensive").html(''); 
        if(data.length>0){
        for(i=0; i<data.length; i++){
           sr=sr+1;
            tamt=parseInt(data[i].qty)*parseInt(data[i].rate);
            totalamt=parseInt(data[i].qty)*parseInt(data[i].rate)+parseInt(totalamt);
            markup = '<tr>'+
            '<td  style="display:none; id="sr_'+data[i].id+'">'+sr+'</td>'+
            '<td  id="expensive_data'+sr+'" style="display:none;">'+data[i].expensiveid+'</td>'+
            '<td  id="expensubaccid'+sr+'"  style="display:none;">'+data[i].subaccountid+'</td>'+
            '<td   id="suppliername_"><select   class="form-control input-sm suppliernm" id="supplierdata_'+sr+'" name="supplier" value="" width="20%" ><option selected disabled value="">Select</option> </select></td>'+
            '<td   id="expensivename_'+data[i].id+'">'+data[i].expenname+'</td>'+
            '<td   id="expenssubaccname_'+data[i].id+'">'+data[i].subaccname+'</td>'+
            '<td  id="narro_"><input type="text" id="narroation_'+sr+'"  size="15%" value='+data[i].narration+' ></td>'+
            '<td   id="planamt_"><lable  id="planamount_'+sr+'" size="5%">'+tamt+'</lable></td>'+
            '<td   id="tqty_"><input type="text" style="text-align: right;" class="qtydata" id="qty_'+sr+'"size="5%"  value='+data[i].qty+' ></td>'+
            '<td   id="trate_"><input type="text"  style="text-align: right;" class="ratedata" id="rate_'+sr+'" value='+data[i].rate+' size="5%"></td>'+
            '<td style="display:none;" id="unitid_'+sr+'">'+data[i].unit+'</td>'+
            '<td  id="unitname_'+sr+'">'+data[i].unitname+'</td>'+
            // '<td   id="getused_"><select   class="form-control input-sm unit" id="unitdata_'+sr+'" name="unit" value='+data[i].unit+' width="20%"><option selected disabled value="">Select</option> </select></td>'+
            '<td   id="paymentmode_'+sr+'">'+data[i].paymenttype+'</td>'+
            '<td   id="tamount_"><input type="number" style="text-align: right;" id="amount'+sr+'" value='+tamt+' size="5%"></td>'+
           
            '<td  id="treference_"><input type="text" id="refenceno'+sr+'" value="0" size="5%"></td>'+
           // '<td><button  class="doc_edit_data2 btn btn-xs btn-primary"   id="'+sr+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data2 btn btn-xs btn-danger"   id="'+sr+'"  ><i class="fa fa-trash"></i></button>'+
            '</tr>';
           
        
            $("#expensive").append(markup);
            $('#row_update').val(sr);	 
            $('#planamounttotal').val(totalamt);
            /*$('.unit').val(unit).trigger('change');
             $('.suppliernm').val(suppler).trigger('change');*/

        }

        $('#row_update').val(sr);	
        $('#totalactualexpenses').text(totalamt);
        getMasterSelect("unitofmeasurement",".unit"," status = '1'");
        getMasterSelect("suppiler_master",".suppliernm"," status = '1'");

    }
    }
    
    
});
$("#shift_time").prop('disabled', false);
$("#projected_footage").prop('disabled', false);
$("#shift_timeto").prop('disabled', false);
$("#location").prop('disabled', false);
$("#no_camera").prop('disabled', false);
$("#special_requirement").prop('disabled',false);
amtdata(); 
}
}
});


    }
    $(document).on("change",".suppliernm",function(e){
           e.preventDefault();
            var supplier=$(this).val();
            var id= $(this).attr('id');
            id=id.split('_');
            var sid=id[1];
        
      // var  rate=$('#rate_'+id[1]).val();
      
       var l1 = $('table#expensivemaster').find('tbody').find('tr');
       var r = l1.length+1;
       
       var  accountid= $(l1[sid-1]).find('td:eq(1)').html();
       var  subaccount= $(l1[sid-1]).find('td:eq(2)').html();
      
         
       $.ajax({
        type : "POST",
        url  : baseurl+"settings/getchecksuppliernm",
        dataType : "JSON",
        async : false,
        data : {
            
                    table_name:'suppiler_master',
                    project:project,
                    supplier:supplier,
                    accountid:accountid,
                    subaccount:subaccount,
                },
        success: function(data){
            //var data1=eval(data);
        var total=0;
              //  alert(data);
                console.log(data);
                if(data != ''){
                    $('#rate_'+sid).val(data[0].rate);
                 var qtyed= $('#qty_'+sid).val();
                    total=parseFloat(qtyed) * parseFloat(data[0].rate);
                    total=total.toFixed(2);
                    $('#amount'+sid).val(total);
                }else{
                   // $('#rate_'+sid).val('0');
                }
            amtdata();    
       }
});

 });

    getMasterSelect("unitofmeasurement",".unit"," status = '1'");
    getMasterSelect("suppiler_master",".suppliernm"," status = '1'");
    function getMasterSelect(table_name,selecter,where){
        
                 $.ajax({
                    type : "POST",
                    url  : baseurl+"settings/get_master_where",
                    data:{table_name:table_name,
                            where:where,},
                    dataType : "JSON",
                    async : false,
                    success: function(data){
                            console.log(data);
                      var  html = '';
                        var name = '';
    //					if(table_name=="victim_age"){
    //					html += '<option selected  value="" >Select Victim Age</option>';
    //						}else{
                        html += '<option selected disabled value="" >Select</option>';
    //						}
                        for(i=0; i<data.length; i++){
                            var id = '';
                               if(table_name=="suppiler_master"){
                                name = data[i].companyname;								
                                id = data[i].id;
                               }else{
                                  name = data[i].name;								
                                id = data[i].id;
                               }
                        
                       
                                        html += '<option value="'+id+'" >'+name+'</option>';
                                    
                        }
                        $(selecter).html(html);
                    }
                });
               
    }

    /*---------Add Data  In Scenwise Table----------------------*/
    $(document).on("submit","#scenewise_form",function(e){
        e.preventDefault();
        var sceno= $('#scene_no').val();
        var description= $('#scene_description').val();
        var effect = $('#effect').val();
        var sub_location= $('#sub_location').val();
       
        var plannesfotage= $('#plannes_footage').val();
        var actualfotage= $('#actual_footage').val();
        var sremark= $('#remarks').val();
     
        var footage= $('#footage').val();
        var charectername=new Array();
       var charecterid=new Array();
       var artistid=new Array();
      
        var charecter=[];
              var selectedArray = new Array();
           var selObj = document.getElementById('charectername'); 
            var i;
            var count = 0;
            for (i=0; i<selObj.options.length; i++) { 
                if (selObj.options[i].selected) {
                    charectername[count] = " "+selObj.options[i].text+" ";
                    //charecter[count] = selObj.options[i].val+",";
                    count++; 
                }
            }
           
            var artistid= $('#charectername').val();
            charecterid=artistid.join(",");
           // var charecter= $('#charectername').val();
         
           
         
        /*$("#charectername option:selected").each(function () {
            var $this = $(this);
            if ($this.length) {
                charectername = $this.text();
             
            }
         });*/
      
        
        var row_id = $('#screen_row_id').val();
        row_id = parseInt(row_id)+parseInt(1);
        var save_update = $('#screen_save_update').val();	
      //  if(save_update!=""){
           // charecterid=charecter.join(",");
       // }
               
        if(save_update!=""){
          
        $("#screenno_"+save_update).html(sceno);
        $("#description_"+save_update).html(description);
        $("#effect_"+save_update).html(effect);
        $("#sublocation_"+save_update).html(sub_location);
        $("#artistname_"+save_update).html(charecterid);
        $("#charectername_"+save_update).html(charectername);
        $("#fotage_"+save_update).html(plannesfotage);
        $("#sceremark_"+save_update).html(sremark);
        $("#actualfotage_"+save_update).html(actualfotage);
        $('#screen_save_update').val('');
          
       
    }
    else{
        var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                '<td style="display:none;" >'+row_id+'</td>'+
                '<td  id="screenno_'+row_id+'">'+sceno+'</td>'+
                '<td  style="width:30%;" id="description_'+row_id+'">'+description+'</td>'+
                '<td  id="effect_'+row_id+'">'+effect+'</td>'+
                '<td  width="10%" id="sublocation_'+row_id+'">'+sub_location+'</td>'+
                '<td style="display:none;"  id="artistname_'+row_id+'">'+charecterid+'</td>'+
                '<td  id="charectername_'+row_id+'">'+charectername+'</td>'+
                '<td  width="10%" id="fotage_'+row_id+'"  width="10%">'+plannesfotage+'</td>'+
                //'<td  id="actualfotage_'+row_id+'">	<div class="bfh-timepicker " id="actualfotagedata_'+row_id+'" data-align="right" value='+actualfotage+' width="10%"></div></td>'+
               // '<td  id="actualfotage_'+row_id+'"><input type="text" id="actualfotagedata_'+row_id+'" value='+actualfotage+' width="10%"></td>'+
                //'<td  id="remark_'+row_id+'"><input type="text" id="remarkdata_'+row_id+'" value='+sremark+' width="10%"></td>'+
                '<td width="10%" id="actualfotage_'+row_id+'" width="10%">'+actualfotage+'</td>'+
                '<td  id="sceremark_'+row_id+'">'+sremark+'</td>'+
                '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                '</tr>';			
                $("#scenebody").append(html);
        
        
             $('#screen_row_id').val(row_id);					
            $('#screen_save_update').val('');
    }
    $('#scenemodel_link').trigger('click');
    $('#scene_no').val('');
    $('#scene_description').val('');
    $('#effect').val('');
    $('#sub_location').val('');
    $('#charectername').val('');
    $('#plannes_footage').val('');
    $('#actual_footage').val('');
    $('#remarks').val('');
    $("#charectername").val('').multiselect('rebuild').trigger('change');
    $('#scenewise_details').modal('hide');
  
    });


    /*--------------------edit For Scene Wise Details Form -------*/
    $(document).on('click','.doc_edit_data',function(e){
        e.preventDefault();		
        $('#scenewise_details').modal('show');  
        var row = $(this).attr('id');
        var scene_no=   $("#screenno_"+row).html();
        var description = $("#description_"+row).html();
        var effect= $("#effect_"+row).html();
        var sub_location = $("#sublocation_"+row).html();
        var artist_name =$("#artistname_"+row).html();
        var fotage =$("#fotage_"+row).html();
        var actualfotage =$("#actualfotage_"+row).html();
        var remark =$("#sceremark_"+row).html();
           console.log('actual fotage'+actualfotage+"remark"+remark);
        $('#scene_no').val(scene_no);
        $('#scene_description').val(description);
        $('#effect').val(effect);
        $('#sub_location').val(sub_location);
       // $('#artist_name').val(artist_name);
        $('#footage').val(fotage);
             var dataarray = artist_name.split(",");
            $("#charectername").val(dataarray).multiselect('rebuild').trigger('change');
            $('#scene_no').val(scene_no);
            $('#scene_description').val(description);
            $('#effect').val(effect);
            $('#sub_location').val(sub_location);
          //  $('#charectername').val(artist_name);
            $('#plannes_footage').val(fotage);
            $('#actual_footage').val(actualfotage);
            $('#remarks').val(remark);
            $('#screen_save_update').val(row);
          
        //$('#regional_row_id').val(row);		
        
    
    });

    /*------------------Delete For Scene Wise Details Form -------*/
    $(document).on('click','.regional_delete_data',function(e){
        e.preventDefault();	
                var save_update = $(this).attr('id');			
    
                    if(save_update!=""){
                        $("#"+save_update).remove();		
                        $('#doc_save_update').val('');										
    
                    }
                });	


    /*--------------- form clear-------- */
    /*--------Get Charecter Name IN dropDown--------------------*/
    $(document).on("change",".project_name",function(e){
        e.preventDefault();
            proid=$(this).val();
            project=proid;
            var where= "peopletype='1'";

            $.ajax({
                type : "POST",
                url  : baseurl+"settings/get_aritistdata",
                dataType : "JSON",
                async : false,
                data : {
                    
                        table_name:'character_master',
                        where:where,
                        proid:proid,
                        },
                success: function(data){
                    var data1=eval(data);
                        console.log("artistdarta"+data);
        
                       if(data.length>0){
            html = '';
                        var name = '';
        //					if(table_name=="victim_age"){
        //					html += '<option selected  value="" >Select Victim Age</option>';
        //						}else{
                      //  html += '<option selected disabled value="" >Select</option>';
        //						}
                        for(i=0; i<data.length; i++){
                        var id = '';
                                name = data[i].name;								
                                id = data[i].id;
                       
                        html += '<option value="'+id+'">'+name+'</option>';
                        }
                        $('.charectername').html(html);
                        $('.charectername').multiselect('rebuild');
                    }
                
        
        
                }
            });
            var project_name=$("#project option:selected").text();
            $("#projectdata").html('Project Name :   ' + project_name+"   ");
          //  checkdata();
    });
/*---get Charecter Name in Drop Down---------------*/
    $(document).on("change",".people",function(e){
        e.preventDefault();
            var id1=$(this).val();
            var name=$(this).attr('name');
          var where="peopletype="+id1;
        
            $.ajax({
                type : "POST",
                url  : baseurl+"settings/get_aritistdata",
                dataType : "JSON",
                async : false,
                data : {
                    
                        table_name:'character_master',
                        where:where,
                        },
                success: function(data){
                    var data1=eval(data);
                        console.log("artistdarta"+data);
      
                       if(data.length>0){
            html = '';
                        var name = '';
        //					if(table_name=="victim_age"){
        //					html += '<option selected  value="" >Select Victim Age</option>';
        //						}else{
                        html += '<option selected disabled value="" >Select</option>';
        //						}
                        for(i=0; i<data.length; i++){
                        var id = '';
                                name = data[i].name;								
                                id = data[i].id;
                        
                        html += '<option value="'+id+'">'+name+'</option>';
                        }
                        $('#role').html(html);
                    }
                
        
        
                }
            });
    });

    /*--------get People Dropdown data--------------*/
    $(document).on("change",".role",function(e){
        e.preventDefault();
            var id1=$(this).val();
            var name=$(this).attr('name');
          var where='role_id='+id1+' and proid='+project;
      
            $.ajax({
                type : "POST",
                url  : baseurl+"settings/get_peopledata",
                dataType : "JSON",
                async : false,
                data : {
                    
                        table_name:'lis_artist',
                        where:where,
                        },
                success: function(data){
                    var data1=eval(data);
                        console.log("artistdarta"+data);
                        html = '';
                       if(data.length>0){
           
                        var name = '';
        //					if(table_name=="victim_age"){
        //					html += '<option selected  value="" >Select Victim Age</option>';
        //						}else{
                        html += '<option selected disabled value="" >Select</option>';
        //						}
                        for(i=0; i<data.length; i++){
                        var id = '';
                                name = data[i].peoplename;								
                                id = data[i].pid;
                        //alert(name);	
                        html += '<option value="'+id+'">'+name+'</option>';
                        }
                        
                    }
                    $('#people').html(html);
        
        
                }
            });
    });

    /*----------------------Artist Schedule/Call sheet --------------------*/

$(document).on("submit","#peopleattend_form",function(e){
    e.preventDefault();

    var peopletypeid= $('#people_type').val();
    var peopletype=$("#people_type option:selected").text();
    var character= $('#role').val();
    var charactername=$("#role option:selected").text();
   
    var people= $('#people').val();
    var peoplename=$("#people option:selected").text();
    var shifttime= $('#Scheduled_from').val();
    var shifttotime= $('#Scheduled_to').val();
    var actualfrom= $('#Actual_from').val();
    var actualto= $('#actual_to').val();
    var durationdata= $('#durationdata').val();
    var extratime= $('#extra_hour').val();
    var remarks= $('#remark').val();
   
   
   
   
    var row_id = $('#schedulesheet_row_id').val();
    row_id = parseInt(row_id)+parseInt(1);
    var save_update = $('#schedulesheet_save_update').val();	
    
    if(save_update!=""){
      
    $("#peopletypeid_"+save_update).html(peopletypeid);
    $("#character_"+save_update).html(character);
    $("#peopletype_"+save_update).html(peopletype);
    $("#charectername_"+save_update).html(charactername);
    $("#people_"+save_update).html(people);
    $("#peoplename_"+save_update).html(peoplename);
    $("#shifttime_"+save_update).html(shifttime);
    $("#shifttotime_"+save_update).html(shifttotime);
    $("#actualshiftti_"+save_update).html(actualfrom);
    $("#actualshifttot_"+save_update).html(actualto);
    $("#durationtime_"+save_update).html(durationdata);
    $("#extrahour_"+save_update).html(extratime);
    $("#premarkdata_"+save_update).html(remarks);
    $('#schedulesheet_save_update').val('');
      
   
}
else{
   
    var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
    '<td style="display:none;" >'+row_id+'</td>'+
    '<td style="display:none;" id="peopletypeid_'+row_id+'" >'+peopletypeid+'</td>'+
    '<td  id="peopletype_'+row_id+'">'+peopletype+'</td>'+
    '<td style="display:none;" id="charecter_'+row_id+'">'+character+'</td>'+
    '<td  id="charectername_'+row_id+'">'+charactername+'</td>'+
    '<td style="display:none;" id="people_'+row_id+'">'+people+'</td>'+
    '<td  id="peoplename_'+row_id+'">'+peoplename+'</td>'+
    '<td  id="shifttime_'+row_id+'">'+shifttime+'</td>'+
    '<td  id="shifttotime_'+row_id+'">'+shifttotime+'</td>'+
    //'<td  id="actualshiftti_'+row_id+'"><div class="bfh-timepicker actualshift"  id="actualshifttime_'+row_id+'" data-align="right" value='+actualfrom+'  width="10%"></div></td>'+
    //'<td  id="actualshifttot_'+row_id+'"><div class="bfh-timepicker actualshiftto"  id="actualshifttotime_'+row_id+'" data-align="right" value='+actualto+'  width="10%"></div></td>'+
   /* '<td  id="actualshiftti_'+row_id+'"><input class="actualshift" type="text" id="actualshifttime_'+row_id+'" value='+actualfrom+'   size="10%"></td>'+
     '<td  id="actualshifttot_'+row_id+'"><input  class="actualshiftto" type="text" id="actualshifttotime_'+row_id+'" value='+actualto+'  size="10%"></td>'+
    '<td  id="duration_'+row_id+'"><input type="text" id="durationtime_'+row_id+'" value='+durationdata+' size="10%"></td>'+
    '<td  id="extrahour_'+row_id+'"><input type="text" id="extratime_'+row_id+'" value='+extratime+' size="10%"></td>'+
    '<td  id="remarkd_'+row_id+'"><input type="text" id="premarkdata_'+row_id+'" value='+remarks+' size="10%"></td>'+*/
    '<td id="actualshiftti_'+row_id+'">'+actualfrom+'</td>'+
    '<td  id="actualshifttot_'+row_id+'">'+actualto+'</td>'+
    '<td  id="durationtime_'+row_id+'">'+durationdata+'</td>'+
    '<td  id="extrahour_'+row_id+'">'+extratime+'</td>'+
    '<td  id="premarkdata_'+row_id+'">'+remarks+'</td>'+
    '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
  //  '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
    '</tr>';			
$("#peoplebody").append(html);
     
         $('#schedulesheet_row_id').val(row_id);					
        $('#schedulesheet_save_update').val('');
}
$('#peopleattendance').modal('hide'); 
$('#people').val('');
$('#people_type').val('');
$('#role').val();
$('#Scheduled_from').val('');
$('#Scheduled_to').val('');
$('#Actual_from').val('');
$('#actual_to').val('');
$('#durationdata').val('');
$('#extra_hour').val('');
$('#remark').val('');



});
/*-----------get duration time-----------*/
$(document).on("blur","#actual_to",function(e){
    e.preventDefault();
    var shifttime= $('#Actual_from').val();
    var shifttotime= $('#actual_to').val();
    var shifttotime= $('#actual_to').val();
    var working= $('#workinghour').val();  
   
    var startdate = [];
    //startdate="00:00"
    startdate = shifttime.split(":");     
    var Enddate = [];
   // Enddate="00:00";
    var workingh=working.split(":");
     Enddate = shifttotime.split(":");         
      
        var workinghour=[];
        workinghour="00:00";
        different = [];
       // different="00:00";
        different[0]=parseFloat(Enddate[0])-parseFloat(startdate[0]);
        different[1]=parseFloat(Enddate[1])-parseFloat(startdate[1]);
        
      
       workinghour[0]=parseFloat(different[0])-parseFloat(workingh[0]);
       workinghour[1]=parseFloat(different[1])-parseFloat(workingh[1]);
       
     
        $('#durationdata').val(different[0]+":"+different[1]);
       if(workinghour[0]>"00"){
        $('#extra_hour').val(workinghour[0]+":"+workinghour[1]);
       }else{
        $('#extra_hour').val('0');
       }
});
/*-----------Blur event of Duration -------------*/
/*-----------get duration time-----------*/
$(document).on("blur","#durationdata",function(e){
    e.preventDefault();
    var shifttime= $('#durationdata').val();
    var working= $('#workinghour').val();  
    var startdate = [];
    var workingh = [];
    startdate="00:00";
    startdate = shifttime.split(":");     
    workinghour="00:00";
    var workinghour=[];
     workingh=working.split(":");
    
    
        
      
       workinghour[0]=parseFloat(startdate[0])-parseFloat(workingh[0]);
       workinghour[1]=parseFloat(startdate[1])-parseFloat(workingh[1]);
       
     
       // $('#durationdata').val(different[0]+":"+different[1]);
       if(workinghour>"00:00"){
        $('#extra_hour').val(workinghour[0]+":"+workinghour[1]);
       }else{
        $('#extra_hour').val('0');
       }
});

/*-----------------get duration of time-----------------*/
$(document).on("blur",".actualshiftto",function(e){
    e.preventDefault();
   
    var id=$(this).attr('id');
    id=id.split('_');
    var peopleid= $('#people_'+id[1]).val();
    
 
  var  shifttime= $(this).val();
  var shifttotime= $('#actualshifttotime_'+id[1]).val();
    
  
  
   
  
    var startdate = [];
    startdate = shifttime.split(":");     
    var Enddate = [];
   
         Enddate = shifttotime.split(":");         
      
        var workinghour=[];
        different = [];
        different[0]=parseFloat(Enddate[0])-parseFloat(startdate[0]);
        different[1]=parseFloat(Enddate[1])-parseFloat(startdate[1]);
        
      
     //  workinghour[0]=parseFloat(different[0])-parseFloat(workingh[0]);
       //workinghour[1]=parseFloat(different[1])-parseFloat(workingh[1]);
        $('#durationtime_'+id[1]).val(different[0]+":"+different[1]);
       
      //  $('#extratime_'+sr).val(workinghour[0]+":"+workinghour[1]);

      

});
/*--------------------- Edit Artist Schedule/Call sheet --------------------*/
$(document).on('click','.doc_edit_data1',function(e){
    e.preventDefault();		
    $('#peopleattendance').modal('show');       
    var row = $(this).attr('id');
    
    var peopletypeid=   $("#peopletypeid_"+row).html();
    var charecter =   $("#charecter_"+row).html();
    var people = $("#people_"+row).html();
    var shifttime=   $("#shifttime_"+row).html();
    var shifttotime =   $("#shifttotime_"+row).html();
    var  actaltime = $("#actualshiftti_"+row).html();
     var actualto =   $("#actualshifttot_"+row).html();
     var extratime=   $("#extrahour_"+row).html();
     var duration=   $("#durationtime_"+row).html();
     var remarks=   $("#premarkdata_"+row).html();
    
    

    $('#people_type').val(peopletypeid).trigger('change');
    $('#role').val(charecter).trigger('change');
     $('#people').val(people).trigger('change');
    $('#Scheduled_from').val(shifttime);
     $('#Scheduled_to').val(shifttotime);
     $('#Actual_from').val(actaltime);
     $('#actual_to').val(actualto);
     $('#durationdata').val(duration);
     $('#extra_hour').val(extratime);
      $('#remark').val(remarks);
      
    $('#schedulesheet_save_update').val(row);
    		
    

});

/*------------------------ delete data  Artist Schedule/Call sheet --------------------*/

$(document).on('click','.regional_delete_data1',function(e){
    e.preventDefault();	
            var save_update = $(this).attr('id');			

                if(save_update!=""){
                    $("#"+save_update).remove();		
                    $('#schedulesheet_save_update').val('');										

                }
            });	

/*------------change event of expense type------------------*/
$(document).on("change","#expense_type",function(e){
e.preventDefault();
var  expenseid=$(this).val();
var where='expenses_master.id='+expenseid;
$.ajax({
    type : "POST",
    url  : baseurl+"settings/get_unit_model",
    dataType : "JSON",
    async : false,
    data : {
     
    table_name:'expenses_master',
    where:where,
            },
    success: function(data){
        if(data.length>0){
    unit_id=data[0].unit;
    unit_name=data[0].unitname;    
  $('#unit').val(data[0].unitname); 
  $('#unit').attr('name',data[0].unit); 
        }else{
              
        }
    }
});
});
/*----------Actual Expensave---------*/
$(document).on("submit","#actualexpe_form",function(e){
    e.preventDefault();

  
     var expensivetype= $('#expense_type').val();
    var expesivename=$("#expense_type option:selected").text();
    var expensivesub_ac= $('#expense_sub_ac').val();
    var expesivesub_acname=$("#expense_sub_ac option:selected").text();
    var narroation= $('#Narration').val();
    var planamount= '0';
     var qty= $('#qty').val();
    var rate= $('#rate').val();
  //  var unit= $('#unit').val();
    var unitname= $('#uom').val();
    var amunt= $('#amountdata').val();
    var suppler= $('#suppliername').val();
    var reference= $('#Rerefence_No').val();
    var paymenttype=  $("input[name='payment_type']:checked").val();
    var suppliername=[];
    var supplierid = [];
   
 
   
   
    var sr = $('#row_update').val();
    sr = parseInt(sr)+parseInt(1);
    var save_update = $('#expensivesave_update').val();
    where='';	
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/get_master_where",
        data:{table_name:'suppiler_master',
                where:where,},
        dataType : "JSON",
        async : false,
        success: function(data){
                console.log(data);
          var  html = '';
          
//					if(table_name=="victim_age"){
//					html += '<option selected  value="" >Select Victim Age</option>';
//						}else{
        //    html += '<option selected disabled value="" >Select</option>';
//						}
            for(i=0; i<data.length; i++){
         
                suppliername[i] = data[i].companyname;;								
                supplierid[i] = data[i].id;
                            
            }
            //$(selecter).html(html);
        }
    });
    // var dlt = 0;
    // var r1 = $('table#expensivemaster').find('tbody').find('tr');
    // var r = r1.length;
    // var row=0;
     // for (var i = 0; i < r; i++) {
        // row=row+1;
        // var exaccount = $(r1[i]).find('td:eq(1)').html();
        // var exsubac = $(r1[i]).find('td:eq(2)').html();
        // var supplerid=$('#supplierdata_'+row).val();
     // if (save_update == "") {
            // if (exaccount == expensivetype && exsubac == expensivesub_ac && supplerid==suppler ) {
              // //  dlt = parseInt(dlt) + parseInt(1);
            // } 
        // }
    // }
    // if(amunt =='0' || amunt ==""){
        // dlt = parseInt(dlt) + parseInt(2);  
    // }
    // if (dlt > 0) {
        // if(dlt==1){
         // errorTost("Selected Supplier Name or Expense Account or Expense Sub Account  Already Entered !!!");
        // }else{
         // errorTost("Amount Should not be Zero or Empty !!!"); 
        // }
         // var dlt = 0;

     // }
  // else  if(save_update!=""){
  if(save_update!=""){
      
    $("#expensive_data_"+save_update).html(expensivetype);
    $("#expensivename_"+save_update).html(expesivename);
    $("#expensubaccid"+save_update).html(expensivesub_ac);
    $("#expenssubaccname_"+save_update).html(expesivesub_acname);
    $("#narroation_"+save_update).val(narroation);
    $("#planamount_"+save_update).text(planamount);
    $("#qty_"+save_update).val(qty);
    $("#rate_"+save_update).val(rate);
   // $("#unit_"+save_update).val(unit_id);
    $("#unitname_"+save_update).html(unit_name);
    $("#amount"+save_update).val(amunt);
    $("#supplier_"+save_update).val(suppler);
    $("#refenceno"+save_update).val(reference);
    $("#paymentmode_"+save_update).html(paymenttype);
   $('#expensivesave_update').val('');
      
   
}
else{   
    
   
   var markup = '<tr  id="sr_'+sr+'">'+
    '<td  style="display:none;" id="sr_'+sr+'">'+sr+'</td>'+
    '<td  id="expensive_data'+sr+'"  style="display:none;">'+expensivetype+'</td>'+
    '<td  id="expensubaccid'+sr+'"  style="display:none;">'+expensivesub_ac+'</td>'+
    '<td   id="suppliername_'+sr+'"><select   class="form-control input-sm suppliernm" id="supplierdata_'+sr+'" name="supplier"  width="20%"><option selected disabled value="">Select</option> </select></td>'+
    '<td   id="expensivename_'+sr+'">'+expesivename+'</td>'+
    '<td   id="expenssubaccname_'+sr+'">'+expesivesub_acname+'</td>'+
    '<td  width="15%;"  id="narro_"><input type="text" id="narroation_'+sr+'"  size="15%" value='+narroation+'></td>'+
    '<td   width="10%" id="planamt_"><lable  id="planamount_'+sr+'" size="5%">'+0+'</lable></td>'+
    '<td   id="tqty_"><input type="text" style="text-align: right;" class="qtydata" id="qty_'+sr+'" value='+qty+' size="5%"></td>'+
    '<td   id="trate_"><input type="text"  style="text-align: right;" class="ratedata" id="rate_'+sr+'" value='+rate+' size="5%"></td>'+
    '<td style="display:none;" id="unitid_'+sr+'"></td>'+
    '<td  id="unitname_'+sr+'">'+unitname+'</td>'+
    //'<td   id="getused_"><select   class="form-control input-sm unit" id="unitdata_'+sr+'" name="unit" value='+unit+' width="20%"><option selected disabled value="">Select</option> </select></td>'+
    '<td   id="paymentmode_'+sr+'">'+paymenttype+'</td>'+
    '<td   id="tamount_"><input type="number" style="text-align:right;width:105%;" id="amount'+sr+'" value='+amunt+'></td>'+
    '<td  id="treference_"><input type="text" id="refenceno'+sr+'" style="width:55%;" value='+reference+'  ></td>'+
   // '<td><button  class="doc_edit_data2 btn btn-xs btn-primary"   id="'+sr+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data2 btn btn-xs btn-danger"   id="'+sr+'"  ><i class="fa fa-trash"></i></button>'+
    '</tr>';
   
    $("#expensive").append(markup); 
   
    var mark='';
    for (var k = 0; k < suppliername.length; ++k) {
        
         mark += '<option value="'+supplierid[k]+'" name="'+suppliername[k]+'">'+suppliername[k]+'</option>';
     } $("#supplierdata_"+sr).html(mark);
    
   
    $('#supplierdata_'+sr).val(suppler).trigger('change');
     
         $('#row_update').val(sr);					
        $('#expensivesave_update').val('');
       
}
$('#suppliername').val('').trigger('change');
 $('#expense_type').val('').trigger('change');
$('#expense_sub_ac').val('').trigger('change');
$('#Narration').val('');
$('#qty').val('');
 $('#rate').val('');
 $('#uom').val('');

 $('#amountdata').val('');
 
 $('#Rerefence_No').val('');

$('#case').prop('checked', false);
$('#cheque').prop('checked', false); 
$('#Actual_expense1').modal('hide'); 
amtdata();
});
/*--------------------- Edit Actual Expensave --------------------*/
$(document).on('click','.doc_edit_data2',function(e){
    e.preventDefault();		
    $('#Actual_expense').modal('show');     
    var row = $(this).attr('id');
    
    var expensive=   $("#expensive_data"+row).html();
    var expensive_sub_ac=   $("#expensubaccid"+row).html();
    var narroation =   $("#narroation_"+row).val();
    var planamt = $("#planamount_"+row).text();
    var qty=   $("#qty_"+row).val();
    var rate =   $("#rate_"+row).val();
    var  unit = $("#unitname_"+row).html();
     var amt =   $("#amount"+row).val();
     var supplier=   $("#supplierdata_"+row).val();
     var reference=   $("#refenceno"+row).val();
     var paymenttype =$("#payment_type"+row).html();
  
    if(paymenttype=="Case"){
        $('#case').prop('checked', true);
    }else{
        $('#cheque').prop('checked', true); 
    }
    
     $('#expense_type').val(expensive).trigger('change');
     $('#expense_type').val(expensive).trigger('change');
    $('#Narration').val(narroation);
    $('#planned_amount').val(planamt);
    $('#qty').val(qty);
   $('#rate').val(rate);
  // $('#unit').val(unit).trigger('change');
    $('#amountdata').val(amt);
    $('#supplier_name').val(supplier).trigger('change');
    $('#Rerefence_No').val(reference);
    $('#expensivesave_update').val(row);
    		
    

});

/*------------------------ delete data  Artist Schedule/Call sheet --------------------*/

$(document).on('click','.regional_delete_data2',function(e){
    e.preventDefault();	
            var save_update = $(this).attr('id');			

                if(save_update!=""){
                    $("#"+save_update).remove();		
                    $('#schedulesheet_save_update').val('');										

                }
            });	

            /*---------------blur Event of rate-----------------*/
            /*---Blur Event Of Time Picker------------------*/
$(document).on("blur","#qty",function(e){
    e.preventDefault();
    var qty= $('#qty').val();
    var rate= $('#rate').val();
 
      var   total=parseFloat(qty)*parseFloat(rate);
       $('#amountdata').val(total);
});
$(document).on("blur","#rate",function(e){
    e.preventDefault();
    var qty= $('#qty').val();
    var rate= $('#rate').val();
 
      var   total=parseFloat(qty)*parseFloat(rate);
       $('#amountdata').val(total);
});

/*-------Submite of actual Form-------------------*/
$(document).on("submit","#actualform_form",function(e){
    e.preventDefault();
    var date = $('#date').val();
    var project = $('#project').val();
    var unit=$('#unit_no').val();
    var location = $('#location').val();
    var projectft= $('#projected_footage').val();
    var shift=$('#shift_time').val();
    var shiftto=$('#shift_timeto').val();
    
    var camera=$('#no_camera').val();
    var requriment=$('#special_requirement').val();
    var tdateAr = date.split('/');
    var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
   
    var id = $('#save_updatedata').val();

    if(date ==null && project==null && unit==null){
        swal({
            title: "Please Select Data",
            text: "Please Select Date And Project And For Unit No  !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
      
    }else if(project==null && date==null){
        swal({
            title: "Please Select Data",
            text: "Please Select Project && Date !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       
    }else if(project==null && unit==null){
        swal({
            title: "Please Select Data",
            text: "Please Select Project && For Unit No !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
        
    }else if(date==null && unit==null){
        swal({
            title: "Please Select Data",
            text: "Please Select Date && For Unit No!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       
    }else if(date==null){
        swal({
            title: "Please Select Data",
            text: "Please Select Date!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       
    }else if(project==null){
        swal({
            title: "Please Select Data",
            text: "Please Select Project!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
        
    }else if(unit==null){
        swal({
            title: "Please Select Data",
            text: "Please Select For Unit No!!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
       
    }else{

   
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/save_settings",
        dataType : "JSON",
        async : false,
        data : {
                id:id,
                date:date2,
                project:project,
                location:location,
                projectft:projectft,
                shift:shift,
                shiftto:shiftto,
                unit:unit,
                camera:camera,
                requriment:requriment,
                table_name:table_name,
                },
        success: function(data){
         
            actalid = data;
            if (data != true) {
                
              
               
                $('#save_updatedata').val(data);
                if (data != 0) {
                  
                    if (id != "") {
                        //proid=id;

                        successTost("Data Update Successfully");



                    } else {
                        successTost("Data Save Successfully");							
                    }

                } else {
                    errorTost("Data Cannot Save");
                }
            }
          /*  if(data>0){
            actalid=data;

            successTost("Data Save Successfully");
           }else if(id !=""){

            successTost("Data Update Successfully");
           }*/

           $('.schedule_expenses').show();
           $('.peopleattend').hide();
           $('.actualexpense').hide();
           $('.scenedetails').show();
           $('.panel-tab a[href="#scene_details"]').tab('show');

        }

    });
    settimeincallfrom();
}
 });
                
/*--------------Click Event Of scenesave---------*/
$(document).on("click","#scenesave",function(e){
    e.preventDefault();
    var r1 = $('table#scenewise_table').find('tbody').find('tr');
    var r = r1.length;
    var sr=0;
    var tr="";
 
   var uid = $('#save_updatedata').val();
   if(uid!=""){
    actalid=uid;
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/delete_master",
        dataType : "JSON",
        async : false,
        data : {
                id:actalid,
                table_name:'actualscenedetails',
            
                },
        success: function(data){
            
        }
    });
}

    for(var i=0;i<r;i++)
    {
     sr=sr+1;
    
        var t = document.getElementById('scenewise_table');
        var  sceno= $(r1[i]).find('td:eq(1)').html();
        var description= $(r1[i]).find('td:eq(2)').html();
        var effect = $(r1[i]).find('td:eq(3)').html();
        var sub_location= $(r1[i]).find('td:eq(4)').html();
        var artist_name= $(r1[i]).find('td:eq(5)').html();
        var footage= $(r1[i]).find('td:eq(7)').html();
        var actalfotage= $(r1[i]).find('td:eq(8)').html();
        var remark=$(r1[i]).find('td:eq(9)').html();
       
        $.ajax({
            type : "POST",
            url  : baseurl+"settings/save_settings",
            dataType : "JSON",
            async : false,
            data : {
             aid:actalid,
             sceno:sceno,
             description:description,
             effect:effect,
             sub_location:sub_location,
             artist_name:artist_name,
             footage:footage,
             actalfotage:actalfotage,
             remark:remark,
           table_name:'actualscenedetails',
                    },
            success: function(data){

            // successTost("Data save Successfully");
          //   myDeleteFunction();
           
         }
     });
    }
    $('.schedule_expenses').show();
    $('.scenedetails').show();
    $('.actualexpense').hide();
    $('.peopleattend').show();
     $('.panel-tab a[href="#people_attendance"]').tab('show');	
});
/*--------------Click Event Of scenesave---------*/
$(document).on("click","#peoplesave",function(e){
    e.preventDefault();
    var l1 = $('table#peopleattand').find('tbody').find('tr');
    var r = l1.length;
    var sr=0;
    var tr="";
    
var uid = $('#save_updatedata').val();
   if(uid!=""){
    actalid=uid;
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/delete_master",
        dataType : "JSON",
        async : false,
        data : {
                id:actalid,
                table_name:'peopleattdance',
            
                },
        success: function(data){
            
        }
    });
}

    for(var j=0;j<r;j++)
    {
     sr=sr+1;
      
        var t = document.getElementById('schedule');
        var  peopletype= $(l1[j]).find('td:eq(1)').html();
        var charecter= $(l1[j]).find('td:eq(3)').html();
        var peopleid= $(l1[j]).find('td:eq(5)').html();
        var shfifrom= $(l1[j]).find('td:eq(7)').html();
        var shiftto= $(l1[j]).find('td:eq(8)').html();
        var actalshift=  $("#actualshiftfromtime_"+sr).val();
        var actualshiftto=   $("#actualshifttotime_"+sr).val();
        var duration= $("#actalduration_"+sr).val();
        var extratime= $("#extratime_"+sr).val();
        var remark=  $("#actualremarkdata_"+sr).val();
    
        $.ajax({
            type : "POST",
            url  : baseurl+"settings/save_settings",
            dataType : "JSON",
            async : false,
            data : {
             aid:actalid,
             peopletype:peopletype,
             charecter:charecter,
             peopleid:peopleid,
             shfifrom:shfifrom,
             shiftto:shiftto,
             actalshift:actalshift,
             actualshiftto:actualshiftto,
             duration:duration,
             extratime:extratime,
             remark:remark,

           table_name:'peopleattdance',
                    },
            success: function(data){
                    
           // successTost("Data save Successfully");
          //   myDeleteFunction();
           
         }
     });
    }
    $('.schedule_expenses').show();
    $('.scenedetails').show();
    $('.peopleattend').show();
    $('.actualexpense').show();
   	$('.panel-tab a[href="#Actual_expenses"]').tab('show');	
});
/*-------------Click event of Actual Expense---------------*/
$(document).on("click","#actualsave",function(e){
    e.preventDefault();

$('#wait').show();
    var l1 = $('table#expensivemaster').find('tbody').find('tr');
    var s = l1.length;
   
    var uid = $('#save_updatedata').val();
   if(uid!=""){
    actalid=uid;
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/delete_master",
        dataType : "JSON",
        async : false,
        data : {
                id:actalid,
                table_name:'actualexpense',
            
                },
        success: function(data){
            
        }
    });
}

   var sr=0;
    for(var j=0;j<s;j++)
    {
        sr=j+1;
     
       
        var t = document.getElementById('schedule');
        var  accountid= $(l1[j]).find('td:eq(1)').html();
        var  subaccount= $(l1[j]).find('td:eq(2)').html();
        var  paymentmode= $(l1[j]).find('td:eq(12)').html();
     
        var narroation= $("#narroation_"+sr).val();
        var  planamut= $("#planamount_"+sr).text();
        var  qty = $("#qty_"+sr).val();
         var rate = $("#rate_"+sr).val();
         var  unit = $(l1[j]).find('td:eq(7)').html();
         var  supplier = $("#supplierdata_"+sr).val();
           var  refenceno = $("#refenceno"+sr).val();
     
   
        $.ajax({
            type : "POST",
            url  : baseurl+"settings/save_settings",
            dataType : "JSON",
            async : false,
            data : {
             aid:actalid,
             accountid:accountid,
             subaccount:subaccount,
             narroation:narroation,
             planamut:planamut,
             qty:qty,
             rate:rate,
             unit:unit,
             supplier:supplier,
             refenceno:refenceno,
             paymentmode:paymentmode,
            table_name:'actualexpense',
                    },
            success: function(data){

            //successTost("Data save Successfully");
          //   myDeleteFunction();
           
         }
     });	
        
    }
    $('#wait').hide();
    successTost("Data Save Successfully");
  
    $('.schedule_expenses').show();
    $('.peopleattend').show();
    $('.scenedetails').show();
       $('.actualexpense').show();	
       $('.panel-tab a[href="#Actual_expenses"]').tab('show');	

    form_clear();
    $('#scenebody').html('');	
    $('#peoplebody').html('');	
    $('#expensive').html('');	
  
   $('.closehideshow').trigger('click');
   show_master();
   form_clear();
   
});
/*----------close hide show---------------*/
$(document).on('click','.closehideshow',function(){
    form_clear();
   
    var l1 = $('table#expensivemaster').find('tbody').find('tr');
    var s = l1.length;
    var sr=0;
    for(var j=0;j<s;j++){
        sr=j+1;
    
        $("#narroation_"+sr).val('');
          $("#qty_"+sr).val('');
          $("#rate_"+sr).val('');
         $("#unitdata_"+sr).val('').trigger('change');
          $("#amount"+sr).val('');
          $("#supplierdata_"+sr).val('');
          $("#refenceno"+sr).val('');
    }
    $('#scenebody').html('');	
    $('#peoplebody').html('');	
    $('#expensive').html('');
    $("#shift_time").prop('disabled', true);
    $("#projected_footage").prop('disabled', true);
    $("#shift_timeto").prop('disabled', true);
   // $( "#shift_timeto" ).datepicker( "option", "disabled", true );
    $("#location").prop('disabled', true);
    $("#no_camera").prop('disabled', true);
    $("#special_requirement").prop('disabled', true);
    $('.schedule_expenses').show(); 
    $('.panel-tab a[href="#schedule_expenses"]').tab('show');
    $('.scenedetails').hide();
    $('.peopleattend').hide();
    $('.actualexpense').hide();  
    $('#fetchdata').show();

   $('#unitdata').html('');
   $('#projectdata').html('');
   $('#datedata').html('');
   $('#Actualfotagetotal').val('');
   
    });
function form_clear(){
   // $('#date').val('');
    $('#project').val('').trigger('change');
    $('#unit_no').val('');
    $('#location').val('');
    $('#projected_footage').val('');
    $('#shift_time').val('');
    $('#shift_timeto').val('');
    $('#no_camera').val('');
    $('#special_requirement').val('');
    $('#expensive').html('');
    $('#peoplebody').html('');
    $('#scenebody').html('');
    $('#save_updatedata').val('');
   $('#projectdata').html('');
    
}
show_master();
function show_master(){
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/get_master_where",
        dataType : "JSON",
        async : false,
        data : {
         
        table_name:'actualschedual',
                },
        success: function(data){
            console.log(data);
                        
            var html = '';
                html += '<table id="myTable" class="table table-striped">'+
                        '<thead>'+
                        '<tr>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;"> Date</th>'+
                        '<th style="display:none;">Project Id</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Project Name</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">For Unit No</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Location</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Projected Footage</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Shift time from</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Shift time to</th>'+
                      
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">No.of Camera</th>'+
                        '<th style="display:none;">Requirement</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>'+
                        '</tr>'+
                        '</thead>'+
                        '<tbody>';

           for(i=0; i<data.length; i++){
                var sr = i+1;
              
                if(data[i].date!="0000-00-00"){

                    var tdateAr = data[i].date.split('-');
                    date= tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];
                    
                }

            
                html += '<tr>'+
                        '<td id="date_'+data[i].id+'">'+date+'</td>'+
                        '<td  style="display:none;" id="projectid_'+data[i].id+'">'+data[i].projectid+'</td>'+
                        '<td id="projectname_'+data[i].id+'">'+data[i].projectname+'</td>'+
                        '<td   id="unit_'+data[i].id+'">'+data[i].unitno+'</td>'+
                       '<td id="locationname_'+data[i].id+'">'+data[i].location+'</td>'+
                        '<td id="profotage_'+data[i].id+'">'+data[i].projectfotage+'</td>'+
                        '<td id="shiftfrom_'+data[i].id+'">'+data[i].shifttimefrom+'</td>'+
                        '<td  id="shifto_'+data[i].id+'">'+data[i].shifttimeto+'</td>'+
                        '<td   style="display:none;" id="camera_'+data[i].id+'">'+data[i].camera+'</td>'+
                        '<td style="display:none;" id="require_'+data[i].id+'">'+data[i].requirement+'</td>'+
                        //'<td >'+status+'</td>'+
                        '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="'+data[i].id+'" name="'+data[i].status+'" ><i class="fa fa-edit"></i></button>'+
                        '</tr>';
                }
                //console.log(html);
                html += '</tbody></table>';
                $('#show_master').html(html);
    $('#myTable').DataTable({});
       
     }
 });
}
/*------Edit Data For Table of actualschedual------------------*/
$(document).on('click','.edit_data',function(){
        
    var id1 = $(this).attr('id');
 
   // var name = $(this).attr('name');		
   $("#shift_time").prop('disabled', false);
   $("#projected_footage").prop('disabled', false);
   $("#shift_timeto").prop('disabled', false);
   $("#location").prop('disabled', false);
   $("#no_camera").prop('disabled', false);
   $("#special_requirement").prop('disabled', false);
    var date = $('#date_'+id1).html();
    var proid = $('#projectid_'+id1).html();
    var location= $('#locationname_'+id1).html();
    var profo= $('#profotage_'+id1).html();
    var shiftfrom= $('#shiftfrom_'+id1).html();
    var shiftto= $('#shifto_'+id1).html();
    
    var unit= $('#unit_'+id1).html();
    var camera= $('#camera_'+id1).html();
    var requriment= $('#require_'+id1).html();

     $('#date').val(date);
        $('#project').val(proid).trigger('change');
         $('#location').val(location);;
        $('#projected_footage').val(profo);
        $('#shift_time').val(shiftfrom);
        $('#shift_timeto').val(shiftto);
        $('#unit_no').val(unit);
        $('#no_camera').val(camera);
        $('#special_requirement').val(requriment);
        $('#save_updatedata').val(id1);
        $('.btnhideshow').trigger('click');
        var project_name=$("#project option:selected").text();
        $("#projectdata").html('Project Name :   ' + project_name+"  ");
        $("#datedata").html('Date :   ' + date+"    ");
        $("#unitdata").html('Unit No :   ' + unit+"   ");

   var  where="aid="+id1;
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/get_master_actualscenedetails",
        dataType : "JSON",
        async : false,
        data : {
                
                table_name:'actualscenedetails',
                where:where,
                },
        success: function(data){
            console.log(data);
          //  $("#scenebody").html('');
            var row_id=0;
            for(i=0; i<data.length; i++){
                row_id=row_id +1;

          
               // var dataarray = data[i].name.split(",");
				
                var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                '<td  style="display:none;">'+row_id+'</td>'+
                '<td  id="screenno_'+row_id+'">'+data[i].scenno+'</td>'+
                '<td style="width:30%;" id="description_'+row_id+'">'+data[i].description+'</td>'+
                '<td id="effect_'+row_id+'">'+data[i].effect+'</td>'+
                '<td width="10%" id="sublocation_'+row_id+'">'+data[i].sublocation+'</td>'+
                '<td  style="display:none;" id="artistname_'+row_id+'">'+data[i].charecterid+'</td>'+
                '<td   width="10%" id="charectername_'+row_id+'">'+data[i].charectername+'</td>'+
                '<td   width="10%" id="fotage_'+row_id+'">'+data[i].planfotage+'</td>'+
               // '<td  id="actualfotage_'+row_id+'">	<div class="bfh-timepicker " id="actualfotagedata_'+row_id+'" data-align="right" value='+data[i].actualfotage+' width="10%"></div></td>'+
            // '<td style="white-space: nowrap; text-align: left; padding: 10px;"  id="actualfotage_'+row_id+'"><input type="text" id="actualfotagedata_'+row_id+'" value='+data[i].actualfotage+' width="10%"></td>'+
              //  '<td style="white-space: nowrap; text-align: left; padding: 10px;"  id="remark_'+row_id+'"><input type="text" id="remarkdata_'+row_id+'" value='+data[i].remark+' width="10%"></td>'+
                
              '<td width="10%" id="actualfotage_'+row_id+'">'+data[i].actualfotage+'</td>'+
              '<td  id="sceremark_'+row_id+'">'+data[i].remark+'</td>'+
              '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                '</tr>';			
                $("#scenebody").append(html);
                $('#screen_row_id').val(row_id);
 }
        }
        });
        $.ajax({
            type : "POST",
            url  : baseurl+"settings/get_master_where",
            dataType : "JSON",
            async : false,
            data : {
                    
                    table_name:'peopleattdance',
                    where:where,
                    },
            success: function(data){
                console.log(data);
                //$("#peoplebody").html('');
                var row_id=0;
                for(i=0; i<data.length; i++){
                    row_id=row_id +1;


                    var html = '<tr>'+
                    '<td style="display:none;" >'+row_id+'</td>'+
                    '<td style="display:none;" id="peopletypeid_'+row_id+'" >'+data[i].peopletypeid+'</td>'+
                    '<td width="10%" id="peopletype_'+row_id+'">'+data[i].peopletype+'</td>'+
                    '<td style="display:none;" id="charecter_'+row_id+'">'+data[i].charecterid+'</td>'+
                    '<td size="10%"  id="charectername_'+row_id+'">'+data[i].charectre+'</td>'+
                    '<td style="display:none;" id="people_'+row_id+'">'+data[i].peopleid+'</td>'+
                    '<td  id="peoplename_'+row_id+'">'+data[i].peoplename+'</td>'+
                    '<td  id="shifttime_'+row_id+'">'+data[i].fromshifttime+'</td>'+
                    '<td  id="shifttotime_'+row_id+'">'+data[i].toshifttime+'</td>'+
                    '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="actualshiftfromtime_'+row_id+'" size="20%" placeholder="hh:mm:ss" value='+data[i].actualfromtime+'> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                    '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control actualtime" id="actualshifttotime_'+row_id+'" size="20%" placeholder="hh:mm:ss" value='+data[i].actualtotime+'> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                    '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="actalduration_'+row_id+'"  size="20%" placeholder="hh:mm:ss" value='+data[i].duration+'> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                    '<td  id="extrahour_'+row_id+'"><input type="text" id="extratime_'+row_id+'" size="5%" value='+data[i].extrahour+' ></td>'+
                    '<td  id="callremark"><textarea  id="actualremarkdata_'+row_id+'"   cols="13" value='+data[i].remarks+'>'+data[i].remarks+'</textarea></td>'+
                  
                    // '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="10%"><option selected disabled value="" width="20%">Select</option> </select></td>'+
                   
                    '</tr>';

                    $("#peoplebody").append(html);
                    $('#schedulesheet_row_id').val(row_id); 



                        /*var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                        '<td style="display:none;" >'+row_id+'</td>'+
                        '<td style="display:none;" id="peopletypeid_'+row_id+'" >'+data[i].peopletypeid+'</td>'+
                        '<td  id="peopletype_'+row_id+'">'+data[i].peopletype+'</td>'+
                        '<td style="display:none;" id="charecter_'+row_id+'">'+data[i].charecterid+'</td>'+
                        '<td  id="charectername_'+row_id+'">'+data[i].charectre+'</td>'+
                        '<td style="display:none;" id="people_'+row_id+'">'+data[i].peopleid+'</td>'+
                        '<td  id="peoplename_'+row_id+'">'+data[i].peoplename+'</td>'+
                        '<td  id="shifttime_'+row_id+'">'+data[i].fromshifttime+'</td>'+
                        '<td  id="shifttotime_'+row_id+'">'+data[i].toshifttime+'</td>'+
                       
                       // '<td  id="actualshiftti_'+row_id+'"><div class="bfh-timepicker actualshift"  id="actualshifttime_'+row_id+'" data-align="right" value='+data[i].actualfromtime+'  width="10%"></div></td>'+
                         //'<td  id="actualshifttot_'+row_id+'"><div class="bfh-timepicker actualshiftto"  id="actualshifttotime_'+row_id+'" data-align="right" value='+data[i].actualfromtime+'  width="10%"></div></td>'+
                      /*  '<td  id="actualshiftti_'+row_id+'"><input type="text" class="actualshift" id="actualshifttime_'+row_id+'" value='+data[i].actualfromtime+' step="1"  min="00:00:00" max="23:59:59" size="10%"></td>'+
                        '<td  id="actualshifttot_'+row_id+'"><input type="text" class="actualshiftto" id="actualshifttotime_'+row_id+'" value='+data[i].actualfromtime+' step="1"  min="00:00:00" max="23:59:59" size="10%"></td>'+
                        '<td  id="duration_'+row_id+'"><input type="text" id="durationtime_'+row_id+'" value='+data[i].duration+' size="10%"></td>'+
                        '<td  id="extrahour_'+row_id+'"><input type="text" id="extratime_'+row_id+'" value='+data[i].extrahour+' size="10%"></td>'+
                        '<td  id="remarkd_'+row_id+'"><input type="text" id="premarkdata_'+row_id+'" value='+data[i].remarks+' size="10%"></td>'+
                        '<td id="actualshiftti_'+row_id+'">'+data[i].actualfromtime+'</td>'+
                        '<td  id="actualshifttot_'+row_id+'">'+data[i].actualtotime+'</td>'+
                        '<td  id="durationtime_'+row_id+'">'+data[i].duration+'</td>'+
                        '<td  id="extrahour_'+row_id+'">'+data[i].extrahour+'</td>'+
                        '<td  id="premarkdata_'+row_id+'">'+data[i].remarks+'</td>'+
                        '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                      //  '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                        '</tr>';*/		
                
     }
     
  }
});
var  where="aid="+id1;
$.ajax({
    type : "POST",
    url  : baseurl+"settings/get_master_where",
    dataType : "JSON",
    async : false,
    data : {
        table_name:'actualexpense',
        where:where,
           
            },
    success: function(data)
    {
        console.log(data);
        var unitname=[];
        var unitid = [];
        var suppliername=[];
        var supplierid = [];
        var where='';
       $.ajax({
           type : "POST",
           url  : baseurl+"settings/get_master_where",
           data:{table_name:'unitofmeasurement',
                   where:where,},
           dataType : "JSON",
           async : false,
           success: function(data){
                   console.log(data);
             var  html = '';
             
//					if(table_name=="victim_age"){
//					html += '<option selected  value="" >Select Victim Age</option>';
//						}else{
           //    html += '<option selected disabled value="" >Select</option>';
//						}
               for(i=0; i<data.length; i++){
                  
                     
                         unitname[i] = data[i].name;								
                         unitid[i] = data[i].id;
                               
               }
               //$(selecter).html(html);
           }
       });
       $.ajax({
        type : "POST",
        url  : baseurl+"settings/get_master_where",
        data:{table_name:'suppiler_master',
                where:where,},
        dataType : "JSON",
        async : false,
        success: function(data){
                console.log(data);
          var  html = '';
          
//					if(table_name=="victim_age"){
//					html += '<option selected  value="" >Select Victim Age</option>';
//						}else{
        //    html += '<option selected disabled value="" >Select</option>';
//						}
            for(i=0; i<data.length; i++){
         
                suppliername[i] = data[i].companyname;;								
                supplierid[i] = data[i].id;
                            
            }
            //$(selecter).html(html);
        }
    });
     
        var sr=0;
        var tamt=0;
        var totalamt=0;
        var narrationtotal=0;
        $("#expensive").html(''); 
        if(data.length>0){
        
        for(i=0; i<data.length; i++){
            sr=sr +1;
            narrationtotal=parseInt(narrationtotal)+parseInt(data[i].plannedamt);
            tamt=(parseFloat(data[i].qty)*parseFloat(data[i].rate));
            tamt=tamt.toFixed(2);
            totalamt=(parseFloat(data[i].qty)*parseFloat(data[i].rate)+parseFloat(totalamt));
           
            totalamt=totalamt.toFixed(2);
            console.log("narration"+data[i].narration);
            markup = '<tr  id="sr_'+sr+'">'+
            '<td  style="display:none; id="sr_'+data[i].id+'">'+sr+'</td>'+
            '<td  id="expensive_data'+sr+'"  style="display:none;">'+data[i].expenseid+'</td>'+
            '<td  id="expensubaccid'+sr+'"  style="display:none;">'+data[i].subaccountid+'</td>'+ // Last Changes
            '<td   id="suppliername_"><select   class="form-control input-sm suppliernm" id="supplierdata_'+sr+'" name="supplier" value='+data[i].supplerid+' width="20%" > </select></td>'+
            '<td   id="expensivename_'+data[i].id+'">'+data[i].expenname+'</td>'+
            '<td   id="expenssubaccname_'+data[i].id+'">'+data[i].subaccname+'</td>'+
            '<td  width="15%;" id="narro_"><input type="text" id="narroation_'+sr+'"  value="'+data[i].narration+'" ></td>'+
            '<td  width="10%" id="planamt_"><lable id="planamount_'+sr+'">'+data[i].plannedamt+'</lable></td>'+
            '<td   id="tqty_"><input type="text" style="text-align: right;" class="qtydata" id="qty_'+sr+'" value='+data[i].qty+' size="5%"></td>'+
            '<td   id="trate_"><input type="text"  style="text-align: right;" class="ratedata" id="rate_'+sr+'" value='+data[i].rate+'  size="5%"></td>'+
            '<td style="display:none;" id="unitid_'+sr+'">'+data[i].unit+'</td>'+
            '<td  id="unitname_'+sr+'">'+data[i].unitname+'</td>'+
            //'<td   id="getused_"><select   class="form-control input-sm unit" id="unitdata_'+sr+'" name="unit" width="20%"  ></select></td>'+
            '<td   id="paymentmode_'+sr+'">'+data[i].paymentmode+'</td>'+
            '<td      id="tamount_"><input type="number" style="text-align: right;width:105%;" id="amount'+sr+'" value='+tamt+'></td>'+
           '<td  id="treference_"><input type="text" id="refenceno'+sr+'" value='+data[i].referenceno+' style="width:55%;"></td>'+
            //'<td><button  class="doc_edit_data2 btn btn-xs btn-primary"   id="'+sr+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data2 btn btn-xs btn-danger"   id="'+sr+'"  ><i class="fa fa-trash"></i></button>'+
            '</tr>';
          
            $("#expensive").append(markup); 
            $('#row_update').val(sr);	
           
            var  html = '';
            html += '<option selected disabled value="" >Select</option>';
            for (var j = 0; j < unitname.length; ++j) {
                
                html += '<option value="'+unitid[j]+'" name="'+unitname[j]+'">'+unitname[j]+'</option>';
            } $('#unitdata_'+sr).html(html);
            $("#unitdata_"+sr).val(data[i].unit).trigger('change');
            var mark="";
            mark += '<option selected disabled value="" >Select</option>';
            for (var k = 0; k < suppliername.length; ++k) {
               
                mark += '<option value="'+supplierid[k]+'" name="'+suppliername[k]+'">'+suppliername[k]+'</option>';
            } $("#supplierdata_"+sr).html(mark);
          
            $("#supplierdata_"+sr).val(data[i].supplerid);
            $('#totalactualexpenses').text(totalamt);
        } 
        $('#planamounttotal').val(narrationtotal);
    }
    }
    
});
$('#fetchdata').hide();
$('.schedule_expenses').show(); 
$('.panel-tab a[href="#schedule_expenses"]').tab('show');
$('.scenedetails').show();
$('.peopleattend').show();
$('.actualexpense').show();    
amtdata();
addTimes();
actualaddTimes();
});
  /*---------delete  area_master  start-----------------*/

  $(document).on('click', '.delete_data', function() {
    var id1 = $("#save_update").val();
    if (id1 != "") {
        swal({
                title: "Are you sure to delete ?",
                text: "You will not be able to recover this Data !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            },
            function() {

                $.ajax({
                    type: "POST",
                    url: baseurl + "settings/delete_master",
                    dataType: "JSON",
                    data: {
                        id: id1,
                        table_name: table_name,
                    },
                    success: function(data) {
                        if (data == true) {
                            swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                            $('.closehideshow').trigger('click');
                            show_master(); //call function show all product					

                        } else {
                            errorTost("Data Delete Failed");
                        }

                    }
                });
                return false;

            });

    }

});
/*---------delete  area_master  end-----------------*/
/*------get Extra Time---------------------*/
$(document).on("change","#people",function(e){
    e.preventDefault();
   var  peopleid=$(this).val();
    var where='id='+peopleid;
    $.ajax({
        type : "POST",
        url  : baseurl+"settings/get_people_extra_hour",
        dataType : "JSON",
        async : false,
        data : {
         
        table_name:'actualschedual',
        where:where,
                },
        success: function(data){
            if(data.length>0){
           $('#workinghour').val(data[0].official_working_hour);
           
            }else{
                $('#workinghour').val('0');  
            }
        }
    });
});

/*---------Blur Event Of rate-------------*/
$(document).on("blur",".ratedata",function(e){
    e.preventDefault();
   var amt= $('#amountdata').val();
    var id=$(this).attr('id');
    id=id.split('_');
    rate= $(this).val();
    qty=$('#qty_'+id[1]).val();
    var total=parseInt(rate)* parseInt(qty);
        total=total.toFixed(2);
   $('#amount'+id[1]).val(total);
 // var  totalamt=parseInt(totalamt)+parseInt(total);
   //$('#amountdata').val(totalamt);
   amtdata();
});
$(document).on("blur",".qtydata",function(e){
    e.preventDefault();
    
    var id=$(this).attr('id');
    id=id.split('_');
    qty= $(this).val();
    rate=$('#rate_'+id[1]).val();
    var total=parseInt(rate)* parseInt(qty);
   // totalamt=parseInt(totalamt)+parseInt(total);
   total=total.toFixed(2);
   $('#amount'+id[1]).val(total);

 //  totalamt=parseInt(totalamt)+parseInt(total);
 amtdata();
    
      //  $('#amount'+sr).val(amt);
    
});
/*----------get total of amt qty and rate--------------------*/
function amtdata(){
    var amttotal=0;
    var caseamt=0;
    var chequamt=0;
    var amt=0;
    var r1 = $('table#expensivemaster').find('tbody').find('tr');
    var r = r1.length;
   var planamt=0;
var sr=0;

    for(var i=0;i<r;i++){
        
        sr=i+1;
        console.log("sr"+sr);
        var paymentmode = $(r1[i]).find('td:eq(12)').html();
        var totalplan = $('#planamount_'+sr).text();;
         amt =$('#amount'+sr).val();
        console.log("str"+sr+""+amt);
        amttotal=parseFloat(amttotal)+parseFloat(amt);
        amttotal=amttotal.toFixed(2);
        console.log("sr"+amttotal);
        if(paymentmode=='Cash'){
            caseamt=parseFloat(caseamt)+parseFloat(amt);
            caseamt=caseamt.toFixed(2);

        }else{
            chequamt=parseFloat(chequamt)+parseFloat(amt);
            chequamt=chequamt.toFixed(2);
        }
        planamt= parseFloat(planamt)+parseFloat(totalplan);
        planamt=planamt.toFixed(2);
    }
    $('#totalactualexpenses').text(amttotal);
    console.log(caseamt);
    console.log(chequamt);
    $('#totalcase').text(caseamt);
    $('#totalcheque').text(chequamt);
    $('#totalplanamt').text(planamt);
   
}
/*--------Delete Data into table-------------------*/
/*-----Delete data in to database-----------------*/
$(document).on('click','.delete_data',function(){
    var id1 = $("#save_updatedata").val();
    if(id1 != ""){
swal({
        title: "Are you sure to delete ?",
        text: "You will not be able to recover this Data !!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it !!",
        closeOnConfirm: false
    },
    function(){	

            $.ajax({
            type : "POST",
            url  : baseurl+"settings/delete_master",
            dataType : "JSON",
            data : { id:id1,
                     table_name:table_name,	},
            success: function(data){
            if(data == true){
                    swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                    $('.closehideshow').trigger('click');
                    show_master();	//call function show all product					
                
                }
                else{
                errorTost("Data Delete Failed");
                }

            }
        });
        return false;
        
    });
        
    }

   });


   /*----check actual data exist in database---------------*/
   function checkdata(){
    var date= $('#date').val();
    var proid= $('#project').val();
    var forunitno=$('#unit_no').val();

    var tdateAr = date.split('/');
    var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
    $.ajax({
      
        type : "POST",
        url  : baseurl+"settings/checkdataexist",
        dataType : "JSON",
        async : false,
        data : {           
                table_name:"actualschedual",
                date2:date2,
                projectid:proid,
                forunitno:forunitno,
                },
        success: function(result){
            
                if(result==true){
                  
                }else{
                    swal({
                        title: "Data Already Exists ?",
                        text: "Please Enter Another data  !!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    });
                }
        }
    });
}
/*---------prevous button-------*/
$(document).on("click","#previous",function(e){
    e.preventDefault();
    $('.schedule_expenses').show();
     $('.peopleattend').show();
     $('.panel-tab a[href="#schedule_expenses"]').tab('show');
});
$(document).on("click","#previous1",function(e){
    e.preventDefault();
    $('.schedule_expenses').show();
    $('.scenedetails').show();
    $('.peopleattend').show();
  //  $('.actualexpense').show();
   	$('.panel-tab a[href="#scene_details"]').tab('show');	
});
$(document).on("click","#previous2",function(e){
    e.preventDefault();
    $('.schedule_expenses').show();
    $('.peopleattend').show();
    $('.scenedetails').show();
       $('.actualexpense').show();	
       $('.panel-tab a[href="#people_attendance"]').tab('show');
});
/*-------------function get supplier change event data-------------*/
function settimeincallfrom(){
   
    var shifttime= $('#shift_time').val();
    var shifttimeto= $('#shift_timeto').val();
    var startdate = [];
    startdate = shifttime.split(":"); 
  var   different = [];
    different[0]=parseFloat(startdate[0]);  
    different[2]=parseFloat(startdate[2]);  
   var end= startdate[1];
   console.log("end data"+end);
   if(end<30){
       different[0]=parseFloat(startdate[0])- parseFloat(1);
       different[1]=(parseFloat(startdate[1]) + parseFloat(60))-parseFloat(30);
       console.log("differt[0]"+different[0]);
       console.log("differt[1]"+different[1]);
   }else{
       different[1]=parseFloat(startdate[1])-parseFloat(30);
   }  
 
   var r1 = $('table#peopleattand').find('tbody').find('tr');
   var r = r1.length;
   var row_id=0;
 
 
   for(var i=0;i<r;i++){ 
      row_id=row_id+1;
   
    $('#actualshiftfromtime_'+row_id).val(different[0]+":"+different[1]+":"+different[2]);
    $('#actualshifttotime_'+row_id).val(shifttimeto);
   if(shifttimeto>shifttime){
     
    var start=  $('#actualshiftfromtime_'+row_id).val();

    var end=shifttimeto;
    console.log(start+""+end);
       s = start.split(':');
          e = end.split(':');
          sec = e[2]-s[2];
          min = e[1]-s[1];
          hour_carry = 0;
          min_carry=0;
          if(sec<0){
             sec += 60;
             min_carry += 1;
             console.log("sec"+sec);
          }
             if(min < 0){
            console.log(min);
                 min += 60;
                hour_carry += 1;
                console.log("min"+min);
            }
            if(min_carry==1){
             if(min==0){
                 min += 60;
                 hour_carry += 1;
                 min = min-min_carry;
             }else{
                 min = min-min_carry;
             }
     
             console.log(min);
         }else{
       //  min = e[1]-s[1];
         }
            if(hour_carry==1){
            hour = e[0]-s[0]-hour_carry;
     
            console.log(hour);
            }else{
             hour = e[0]-s[0];  
            } 
                   
                console.log(hour+":"+min+":"+sec);
       $('#actalduration_'+row_id).val(hour+":"+min+":"+sec);
   //for()
    }
}
}
$(document).on("blur","#shift_time",function(e){
    e.preventDefault();
    shiftimesmall();
});
$(document).on("blur","#shift_timeto",function(e){
    e.preventDefault();
    shiftimesmall();
});
function  shiftimesmall(){
    var shiftimefrom=$('#shift_time').val();
    var shiftimeto=$('#shift_timeto').val();
   if(shiftimeto !=""  && shiftimefrom !=""){
    if(shiftimefrom > shiftimeto || shiftimefrom == shiftimeto){
        swal({
            title: "Please Enter Call Time - To Greater than Call Time - From From ?",
           // text: "Please Enter Another data  !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }else{
        settimeincallfrom();
     
    }
}else{
    swal({
        title: "Please Enter Call Time - To OR Call Time - From From ?",
       // text: "Please Enter Another data  !!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ok",
        closeOnConfirm: false
    });
}
}
/*----------get duration calculation------------------*/
$(document).on("blur",".actualtime",function(e){
    e.preventDefault();
    
    var id=$(this).attr('id');
    id=id.split('_');
     var end= $(this).val();
     console.log("end date"+end);
    var start=$('#actualshiftfromtime_'+id[1]).val();
    if(end !=""){
   
        s = start.split(':');
        e = end.split(':');
    var hour=0; var sec=0; var min=0;
    sec = e[2]-s[2];
     min = e[1]-s[1];
     hour_carry = 0;
     min_carry=0;
     if(sec<0){
        sec += 60;
        min_carry += 1;
        console.log("sec"+sec);
     }
        if(min < 0){
       console.log(min);
            min =min+ 60;
           hour_carry += 1;
           console.log("min"+min);
       }
       if(min_carry!=0){
           console.log("mindata");
        if(min==0){
            min += 60;
            hour_carry += 1;
            min = min-min_carry;
        }else{
            min = min-min_carry;
        }

        console.log(min);
    }else{
    //min = e[1]-s[1];
    }
       if(hour_carry!=0){
       hour = e[0]-s[0]-hour_carry;

       console.log("houtdata"+hour);
       }else{
        hour = e[0]-s[0];  
       } 
       console.log("hour carray"+hour_carry);
       console.log("min carray"+min_carry);
       if(hour >0){
     $('#actalduration_'+id[1]).val(hour+":"+min+":"+sec);
    }else{
        swal({
            title: "Please Change the Value of Call Time to?",
            text: "Please Enter Another data  !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }
}else{
    swal({
        title: "Please Enter Call Time to ?",
       // text: "Please Enter Another data  !!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ok",
        closeOnConfirm: false
    });
}
    
});
function addTimes () {
    var l1 = $('table#scenewise_table').find('tbody').find('tr');
    var l = l1.length;
var row=0;
var totalhour=0;
var totalmin=0;
var totalsec=0;
var planfotage=0;
for(var k=0;k<l;k++){
   
    row=row+1;
    console.log("row "+row);
     planfotage= $(l1[k]).find('td:eq(7)').html();
        console.log("planfotage"+planfotage);
    if(planfotage =='' || planfotage =='0'){
    }else{
        var times= planfotage.split(':');
  totalhour += parseInt(times[0]);
  totalmin += parseInt(times[1]);
  totalsec +=parseInt(times[2]);

  if (totalsec >= 60) {
    var m = (parseInt(totalsec) / parseInt(60)) << 0
    totalmin +=parseInt(m);
    totalsec -= parseInt(60) * parseInt(m);
  }

  if (totalmin >= 60) {
    var h = (parseInt(totalmin) / parseInt(60)) << 0
    totalhour +=parseInt(h);
    totalmin -=parseInt(60) * parseInt(h);
  }
 
}  
console.log(totalhour);
console.log(totalmin);
console.log(totalsec);
$('#plannedtotal').text(totalhour+":"+totalmin+":"+totalsec);
}
}
function actualaddTimes () {
    var l1 = $('table#scenewise_table').find('tbody').find('tr');
    var l = l1.length;
var row=0;
var totalhour=0;
var totalmin=0;
var totalsec=0;
var planfotage=0;
for(var k=0;k<l;k++){
   
    row=row+1;
    console.log("row "+row);
     planfotage= $(l1[k]).find('td:eq(8)').html();
     if(planfotage =='' || planfotage =='0'){
     }else{
  var times= planfotage.split(':');
    
  totalhour += parseInt(times[0]);
  totalmin += parseInt(times[1]);
  totalsec +=parseInt(times[2]);

  if (totalsec >= 60) {
    var m = (parseInt(totalsec) / parseInt(60)) << 0
    totalmin +=parseInt(m);
    totalsec -= parseInt(60) * parseInt(m);
  }

  if (totalmin >= 60) {
    var h = (parseInt(totalmin) / parseInt(60)) << 0
    totalhour +=parseInt(h);
    totalmin -=parseInt(60) * parseInt(h);
  }
 
}  
console.log(totalhour);
console.log(totalmin);
console.log(totalsec);
$('#Actualfotagetotal').text(totalhour+":"+totalmin+":"+totalsec);
}
}
$(document).on("click","#scenemodel_link",function(e){
    e.preventDefault();
    addTimes();
    actualaddTimes();
});

/*----------------get supplier name in model Actual Expense-------*/
getMasterSelect("suppiler_master",".suppliername"," status = '1' ");
function getMasterSelect(table_name,selecter,where){
	
    $.ajax({
       type : "POST",
       url  : baseurl+"settings/get_master_where",
       data:{table_name:table_name,
               where:where,},
       dataType : "JSON",
       async : false,
       success: function(data){
               console.log(data);
           html = '';
           var name = '';
//					if(table_name=="victim_age"){
//					html += '<option selected  value="" >Select Victim Age</option>';
//						}else{
           html += '<option selected disabled value="" >Select</option>';
//						}
           for(i=0; i<data.length; i++){
               var id = '';
               if(table_name=="suppiler_master"){
                name = data[i].companyname;								
                id = data[i].id;
               }else{
               name = data[i].name;								
                   id = data[i].id;
               }
         
          
                           html += '<option value="'+id+'" name="'+name+'">'+name+'</option>';
                      
           }
           $(selecter).html(html);
       }
   });
}
/*----------------get Expense Sub Account in Model---------------------*/
 /*--------Get Charecter Name IN dropDown--------------------*/
 $(document).on("change",".expense_type",function(e){
    e.preventDefault();
      var   exid=$(this).val();
        
       

        $.ajax({
            type : "POST",
            url  : baseurl+"settings/get_exsubaccount",
            dataType : "JSON",
            async : false,
            data : {
                
                    table_name:'expenses_subaccount',
                    exid:exid,
                    },
            success: function(data){
                var data1=eval(data);
                   
                   if(data.length>0){
        html = '';
                    var name = '';
    //					if(table_name=="victim_age"){
    //					html += '<option selected  value="" >Select Victim Age</option>';
    //						}else{
                   html += '<option selected disabled value="" >Select</option>';
    //						}
                    for(i=0; i<data.length; i++){
                    var id = '';
                            name = data[i].name;								
                            id = data[i].id;
                   
                    html += '<option value="'+id+'">'+name+'</option>';
                    }
                    $('.expense_sub_ac').html(html);

                }
            
    
    
            }
        });
        $.ajax({
            type : "POST",
            url  : baseurl+"settings/get_uom",
            dataType : "JSON",
            async : false,
            data : {
                
                    table_name:'expenses_subaccount',
                    exid:exid,
                    },
            success: function(data){
                var data1=eval(data);
                    if(data.length>0){
                         $('#uom').val(data[0].unitname);//Last Change file  04-05-2019
                }
 
            }
        });
    });
    /*-------get selected supplier rate for modal-----------------*/
    $(document).on("change",".expense_sub_ac",function(e){
        e.preventDefault();
         var subaccount=$(this).val();
        var project= $('#project').val();
        var accountid= $('#expense_type').val();
        var supplier= $('#suppliername').val();

    $.ajax({
     type : "POST",
     url  : baseurl+"settings/getchecksuppliernm",
     dataType : "JSON",
     async : false,
     data : {
         
                 table_name:'suppiler_master',
                 project:project,
                 supplier:supplier,
                 accountid:accountid,
                 subaccount:subaccount,
             },
     success: function(data){
         //var data1=eval(data);
     
       
             console.log(data);
             if(data != ''){
                 $('#rate').val(data[0].rate);
              var qtyed= $('#qty').val();
                 $('#amountdata').val(parseFloat(qtyed) * parseFloat(data[0].rate) )
             }else{
                 $('#rate').val('0');
             }
         amtdata();    
        }
    });
});
});