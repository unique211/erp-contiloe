$(document).ready(function() {
    var budid = "";
    var project = "";
    var index = 0;
    $('#model_link').hide();
    $('#wait').hide();
    //$('#wait1').hide();

    $(document).on("change", ".project_name", function(e) {
        e.preventDefault();
        project = $(this).val();

        var project_name = $("#project option:selected").text();

        $("#pro_name").html('Project Name :   ' + project_name + "   ");
        //  checkdata();
    });
    $(document).on("change", "#month", function(e) {
        e.preventDefault();


        var month = $("#month").val();
        //$('#monthdata').val(month);
        $("#monthdata").html('Month :   ' + month + "  ");
        // checkdata();
    });
    $(document).on("change", "#year", function(e) {
        e.preventDefault();

        var year = $("#year").val();
        var yearname = $("#year").attr('name');
        $("#yeardata").html('Year :   ' + year + "  ");
        // $('#yeardata').val(year);
        if (yearname != "editdatayear") {
            // checkdata();
        } else {

        }

    });
    display_budgethead();

    function display_budgethead() {
        $.ajax({

            type: "POST",
            url: baseurl + "settings/budgetgetexpensesdata",
            dataType: "JSON",
            async: false,
            data: {
                table_name: "expenses_master",

            },
            success: function(result) {

                console.log('VISHAL' + result);

                var did = $('#save_update').val();
                for (i = 0; i < result.length; i++) {
                    var sr = i + 1;
                    //  alert('savedata'+sr);
                    console.log(sr);
                    if (did != '') {
                        var r1 = $('table#budgetentry').find('tbody').find('tr');
                        var r = r1.length;
                        var markup = "";
                        var flag = 1;
                        if (r != 0) {
                            for (var j = 0; j < r; j++) {
                                var expensiveid = $(r1[j]).find('td:eq(1)').html();

                                if (result[i].id == expensiveid) {

                                    flag = 0;

                                }
                            }
                            // alert(flag);
                            if (flag == 1) {
                                index = index + 1;
                                markup = '<tr>' +
                                    '<td  style="display:none;" id="sr_' + result[i].id + '">' + index + '</td>' +
                                    '<td style="display:none;" id="expensid_' + index + '">' + result[i].id + '</td>' +
                                    // '<td id="getexpense_"><select   class="form-control input-sm excategory" id="excategory_'+sr+'" name="excategory" width="20%" ><option selected disabled value="">Select</option><option value="1">Monthly</option> <option value="2">Variable</option>  </select></td>'+
                                    '<td id="expencode_' + result[i].id + '" width="10%">' + result[i].code + '</td>' +
                                    '<td id="expensivename_' + result[i].id + '" width="30%">' + result[i].name + '</td>' +
                                    '<td id="narro_"><input type="text" style="text-align: right;" id="narroation_' + index + '" value="0" size="5%"></td>' +
                                    '<td id="tqty_"><input type="text" style="text-align: right;" class="qtydata" id="qty_' + index + '" value="0" size="5%"></td>' +
                                    '<td id="trate_"><input type="text" style="text-align: right;" class="ratedata" id="rate_' + index + '" value="0" size="5%"></td>' +
                                    '<td style="display:none;" id="unitid_' + index + '">' + result[i].unit + '</td>' +
                                    '<td  id="unitname_' + index + '">' + result[i].unitname + '</td>' +
                                    //  '<td id="getused_"><select  style="text-align: right;" class="form-control input-sm unit" id="unit" name="unit" width="20%" ><option selected disabled value="">Select</option> </select></td>'+
                                    '<td id="tamount_"><input type="text" style="text-align: right;" id="amount' + index + '" size="12%" value="0"   disabled></td>' +
                                    '</tr>';
                                $("#budgetentrybody").append(markup);

                            }
                        }
                    } else {
                        markup = '<tr>' +
                            '<td style="display:none; id="sr_' + result[i].id + '">' + sr + '</td>' +
                            '<td style="display:none;" id="expensid_' + sr + '">' + result[i].id + '</td>' +
                            '<td id="expencode_' + result[i].id + '" width="10%">' + result[i].code + '</td>' +
                            // '<td id="getexpense_"><select   class="form-control input-sm excategory" id="excategory_'+sr+'" name="excategory" width="20%" ><option selected disabled value="">Select</option><option value="1">Monthly</option> <option value="2">Variable</option>  </select></td>'+
                            '<td id="expensivename_' + sr + '"  width="30%">' + result[i].name + '</td>' +
                            '<td id="unitno_"><input type="text" style="text-align: right;" id="unitnodata_' + sr + '" value="0" size="5%"></td>' +
                            '<td id="tqty_"><input type="text" style="text-align: right;" class="qtydata" id="qty_' + sr + '" value="0" size="5%"></td>' +
                            '<td id="trate_"><input type="text" style="text-align: right;" class="ratedata" id="rate_' + sr + '" value="0" size="5%"></td>' +
                            '<td style="display:none;" id="unitid_' + sr + '">' + result[i].unit + '</td>' +
                            '<td  id="unitname_' + sr + '">' + result[i].unitname + '</td>' +
                            //  '<td id="getused_"><select   class="form-control input-sm unit" id="unit_'+sr+'" name="unit" required><option selected disabled value="">Select</option> </select></td>'+
                            '<td id="tamount_"><input type="text" id="amount' + sr + '" style="text-align: right;" size="12%" value="0"  disabled></td>' +
                            '</tr>';

                        $("#budgetentrybody").append(markup);
                    }

                }
            }

        });
    }
    getMasterSelect("unitofmeasurement", ".unit", " status = '1'");

    function getMasterSelect(table_name, selecter, where) {

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            data: {
                table_name: table_name,
                where: where,
            },
            dataType: "JSON",
            async: false,
            success: function(data) {
                console.log(data);
                var html = '';
                var name = '';
                //					if(table_name=="victim_age"){
                //					html += '<option selected  value="" >Select Victim Age</option>';
                //						}else{
                html += '<option selected disabled value="" >Select</option>';
                //						}
                for (i = 0; i < data.length; i++) {
                    var id = '';

                    name = data[i].name;
                    id = data[i].id;

                    //alert(name);

                    html += '<option value="' + id + '" >' + name + '</option>';

                }
                $(selecter).html(html);
            }
        });
    }
    var totalamt = 0;
    $(document).on("blur", ".ratedata", function(e) {
        e.preventDefault();
        var amt = $('#amountdata').val();
        var id = $(this).attr('id');
        id = id.split('_');
        rate = $(this).val();
        qty = $('#qty_' + id[1]).val();
        var total = parseInt(rate) * parseInt(qty);
        $('#amount' + id[1]).val(total);
        //  totalamt=parseInt(totalamt)+ parseInt(total);
        //  $('#budgettotal').val(totalamt);
        // displaysum();

        getmonthbudget();
        Monthlyexpense();
        monthytotal();
        amtdata();
        //getalltotal();
        get_budtotal();

    });
    $(document).on("blur", ".qtydata", function(e) {
        e.preventDefault();

        var id = $(this).attr('id');
        id = id.split('_');
        qty = $(this).val();
        rate = $('#rate_' + id[1]).val();
        var total = parseInt(rate) * parseInt(qty);

        $('#amount' + id[1]).val(total);

        // totalamt=parseInt(totalamt)+ parseInt(total);
        //$('#budgettotal').val(totalamt);
        amtdata();
        //  $('#amount'+sr).val(amt);

    });
    $(document).on("change", ".project_name", function(e) {
        e.preventDefault();
        var proid = $(this).val();


        var where = 'proid=' + proid;

        /*$.ajax({
            type : "POST",
            url  : baseurl+"settings/getnameofstaff",
            dataType : "JSON",
            async : false,
            data : {
                
                    table_name:'lis_artist',
                    where:where,
                    },
            success: function(result){
                
                    var did=$('#save_update').val();
                    for(i=0; i<result.length; i++){
                        var sr = i+1;
                       
                        if(did !='')
                        {
                        var r1 = $('table#productionstaff').find('tbody').find('tr');
                        var r = r1.length;
                        var markup="";
                        var flag=1;
                        if(r !=0)
                        {
                       for(var j=0;j<r;j++)
                        {   
                            var expensiveid = $(r1[j]).find('td:eq(1)').html();
                           
                                if(result[i].id == expensiveid)
                                {
            
                                    flag=0;
                                   
                                }
                        }
                        if(flag==1)
                        {
                            markup = '<tr>'+
                            '<td  style="display:none; id="sr_'+result[i].id+'">'+sr+'</td>'+
                            '<td style="display:none;" id="peopleid_'+sr+'">'+result[i].pid+'</td>'+
                            '<td style="display:none;" id="roleidid_'+sr+'">'+result[i].role_id+'</td>'+
                            '<td id="peoplename_'+sr+'" width="30%">'+result[i].peoplename+'</td>'+
                            '<td id="charectername_'+sr+'" width="30%">'+result[i].charectername+'</td>'+
                            '<td id="productionqty_"><input type="text" style="text-align: right;" class="proqtydata" id="proqty_'+sr+'" value="0" size="5%"></td>'+
                            '<td id="tqty_"><input type="text" style="text-align: right;" class="proratedata" id="prorate_'+sr+'" value="0" size="5%"></td>'+
                            '<td id="perunit_"><input type="text" style="text-align: right;" style="align:right";   id="perunit_'+sr+'" value="0" size="5%"></td>'+
                          //  '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="20%" ><option selected disabled value="">Select</option> </select></td>'+
                            '<td id="tamount_"><input type="text" style="text-align: right;" id="proamount_'+sr+'" value="0" ></td>'+
                            '</tr>';
                            $("#productionstaffbody").append(markup);
            
                        }
                    }
                }
                    else
                    {
                        markup = '<tr>'+
                        '<td  style="display:none; id="sr_'+result[i].id+'">'+sr+'</td>'+
                        '<td style="display:none;" id="peopleid_'+sr+'">'+result[i].pid+'</td>'+
                        '<td style="display:none;" id="roleidid_'+sr+'">'+result[i].role_id+'</td>'+
                        '<td id="peoplename_'+sr+'" width="30%">'+result[i].peoplename+'</td>'+
                        '<td id="charectername_'+sr+'" width="30%">'+result[i].charectername+'</td>'+
                        '<td id="productionqty_"><input style="text-align: right;" type="text" class="proqtydata" id="proqty_'+sr+'" value="0" size="5%"></td>'+
                        '<td id="tqty_"><input type="text" style="text-align: right;" style="align:right";  class="proratedata" id="prorate_'+sr+'" value="0" size="5%"></td>'+
                        '<td id="perunit_"><input type="text" style="text-align: right;" style="align:right"; class="perunitdata"  id="perunit_'+sr+'" value="0" size="5%"></td>'+
                     
                        //  '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="20%" ><option selected disabled value="">Select</option> </select></td>'+
                        '<td id="tamount_"><input type="text" style="text-align: right;" id="proamount_'+sr+'" value="0" ></td>'+
                        //'<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="'+sr+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="'+sr+'"  ><i class="fa fa-trash"></i></button>'+
                        '</tr>';
                      $("#productionstaffbody").append(markup);
                     
                    }
                 
                    }
                
                    getMasterSelect("unitofmeasurement",".unit"," status = '1'");
            


            }
            
      
});*/
        $.ajax({
            type: "POST",
            url: baseurl + "settings/getsumofepisodic",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'lis_artist',
                where: where,
            },
            success: function(data) {
                if (data.length > 0) {


                    $('#save_episisoc').val(data[0].episodicplan);

                }

            }
        });

    });
    var tdata = 0;
    var prate = 0;
    var pqty = 0;
    $(document).on("blur", ".proratedata", function(e) {
        e.preventDefault();
        //  alert('hii');
        var id = $(this).attr('id');
        id = id.split('_');
        prate = $(this).val();
        pqty = $('#proqty_' + id[1]).val();
        var total = parseInt(prate) * parseInt(pqty);
        $('#proamount_' + id[1]).val(total);
        //   tdata= parseInt(total)+ parseInt(tdata);
        //$('#productiontotal').val(tdata)

        productamtdata();

    });
    $(document).on("blur", ".perunitdata", function(e) {
        e.preventDefault();

        getproduct();
        productiondata();
        //  finaltotal();
    });
    $(document).on("blur", ".proqtydata", function(e) {
        e.preventDefault();
        // alert('hii');
        var id = $(this).attr('id');
        id = id.split('_');
        var pqty = $(this).val();
        var prate = $('#rate_' + id[1]).val();

        var total = parseInt(pqty) * parseInt(prate);
        $('#proamount_' + id[1]).val(total);
        tdata = parseInt(total) + parseInt(tdata);
        productamtdata();
        // $('#productiontotal').val(tdata)



        //  $('#amount'+sr).val(amt);

    });

    function getmonthbudget() {

        var r1 = $('table#budgetentry').find('tbody').find('tr');
        var r = r1.length;
        var sr = 0;
        var unitdata = 0;
        var unit1 = 0;
        var unit2 = 0;
        var unit3 = 0;
        var sum = 0;
        for (var j = 0; j < r; j++) {
            sr = sr + 1;
            unitdata = $('#unitnodata_' + sr).val();
            var sum = $('#amount' + sr).val();
            // alert('unitdat'+unitdata+'sum'+sum);

            if (unitdata == 1) {

                unit1 = parseInt(unit1) + parseInt(sum);
            } else if (unitdata == 2) {
                unit2 = parseInt(unit2) + parseInt(sum);


            } else if (unitdata == 3) {
                unit3 = parseInt(unit3) + parseInt(sum);


            }
            // displaysum();
        }
        $('#munit1').val(unit1);
        $('#munit2').val(unit2);
        $('#munit3').val(unit3);
        get_budtotal();
    }

    function getproduct() {

        var r1 = $('table#productionstaff').find('tbody').find('tr');
        var r = r1.length;
        var sr = 0;
        var unitdata = 0;
        var unit1 = 0;
        var unit2 = 0;
        var unit3 = 0;
        var sum = 0;
        for (var j = 0; j < r; j++) {
            sr = sr + 1;
            unitdata = $('#perunit_' + sr).val();

            sum = $('#proamount_' + sr).val();

            // alert('unitdat'+unitdata+'sum'+sum);

            if (unitdata == 1) {
                unit1 = parseInt(unit1) + parseInt(sum);



            } else if (unitdata == 2) {
                unit2 = parseInt(unit2) + parseInt(sum);


            } else if (unitdata == 3) {
                unit3 = parseInt(unit3) + parseInt(sum);


            }

        }

        /*$('#punit1').val(unit1);
        $('#punit2').val(unit2);
        $('#punit3').val(unit3);*/




        // var episodic= $('#episodicpalnfo').val();   
        /* var munit1=$('#munit1').val();
         var munit2=$('#munit2').val();
        var munit3=$('#munit3').val();

        var unitdata=parseInt(munit1)*parseInt(episodic);
        var unitdata1=parseInt(munit2)*parseInt(episodic);
        var unitdata2=parseInt(munit3)*parseInt(episodic);
        $('#munit1').val(unitdata);
        $('#munit2').val(unitdata1);
        $('#munit3').val(unitdata2);*/
    }
    /*-------- get Artists Sum --------------------*/
    $(document).on("blur", ".aritistunit", function(e) {
        e.preventDefault();
        var unit1 = $('#aunit1').val();
        var unit2 = $('#aunit2').val();
        var unit3 = $('#aunit3').val();

        var sum = parseInt(unit1) + parseInt(unit2) + parseInt(unit3);
        $('#aunittotal').val(sum);

    });
    /*---------get Production Sum---------------*/
    $(document).on("blur", ".productionunit", function(e) {
        e.preventDefault();
        var unit1 = $('#punit1').val();
        var unit2 = $('#punit2').val();
        var unit3 = $('#punit3').val();

        var sum = parseInt(unit1) + parseInt(unit2) + parseInt(unit3);
        $('#punittotal').val(sum);

    });
    /*------------get Admin Staff Expenses sum--------*/
    $(document).on("blur", ".adminunit", function(e) {
        e.preventDefault();
        var unit1 = $('#asunit1').val();
        var unit2 = $('#asunit2').val();
        var unit3 = $('#asunit3').val();

        var sum = parseInt(unit1) + parseInt(unit2) + parseInt(unit3);
        $('#asunittotal').val(sum);

    });

    /*-----------get Episodic Expenses---------*/
    $(document).on("blur", "#episodicpalnfo", function(e) {
        e.preventDefault();
        var flag = 0;

        var episiodicplan = $('#episodicpalnfo').val();

        var unit1 = $('#save_episisoc').val();


        if (unit1 == '') {
            unit1 = 0;
        } else {
            unit1 = $('#save_episisoc').val();
        }

        var eunitdata1 = parseInt(unit1) * parseInt(episiodicplan);

        $('#eunit1').val(eunitdata1);

        $('#eunit2').val(eunitdata1);
        $('#eunit3').val(eunitdata1);

        var sum = parseInt(eunitdata1) * 3;
        $('#eunittotal').val(sum);

        getepisoidcdata();
        getalltotal();
        finaltotal();
        get_budtotal();

    });
    $(document).on("blur", ".episodicunit", function(e) {
        e.preventDefault();
        var eunit1 = $('#eunit1').val();
        var eunitdata1 = 0;
        var eunit2 = $('#eunit2').val();
        var eunit3 = $('#eunit3').val();
        eunitdata1 = parseInt(eunit1) + parseInt(eunit2) + parseInt(eunit3);
        $('#eunittotal').val(eunitdata1);
        getalltotal();
        finaltotal();
        get_budtotal();
    });
    /*------------episoidc total----------**/
    function getepisoidcdata() {

        var total1 = $('#total1').val();
        var munit1 = $('#eunit1').val();
        var montotal1 = parseInt(total1) + parseInt(munit1);
        $('#total1').val(montotal1);

        var total2 = $('#total2').val();
        var munit2 = $('#eunit2').val();
        var montotal2 = parseInt(total2) + parseInt(munit2);
        $('#total2').val(montotal2);

        var total3 = $('#total3').val();
        var munit3 = $('#eunit3').val();
        var montotal3 = parseInt(total3) + parseInt(munit3);
        $('#total3').val(montotal3);
        finaltotal();
        get_budtotal();
    }
    /*-------monthy total -------------------*/
    function monthytotal() {
        /*var total1=  $('#total1').val();
        var munit1=  $('#munit1').val();
        var montotal1=parseInt(total1)+parseInt(munit1);
        $('#total1').val(montotal1);

        var total2=  $('#total2').val();
        var munit2=  $('#munit2').val();
        var montotal2=parseInt(total2)+parseInt(munit2);
        $('#total2').val(montotal2);

        var total3=  $('#total3').val();
        var munit3=  $('#munit3').val();
        var montotal3=parseInt(total3)+parseInt(munit3);
        $('#total3').val(montotal3);*/
        getalltotal();
        finaltotal();
    }
    /*--------------get time sum---------*/
    $(document).on("blur", ".footage", function(e) {
        e.preventDefault();
        /*var time1=   $('#footage1').val();
 var time2=   $('#footage2').val();
 var time3=   $('#footage3').val();
    
 var hour=0;
 var minute=0;
 var second=0;
 if(time1==''){
     time1="00:00:00";
 } if(time2==''){
     time2="00:00:00";
 } if(time3==''){
     time3="00:00:00";
 }
 var splitTime1= time1.split(':');
 var splitTime2= time2.split(':');
 var splitTime3= time3.split(':');
 
 hour = parseInt(splitTime1[0])+parseInt(splitTime2[0])+parseInt(splitTime3[0]);
 minute = parseInt(splitTime1[1])+parseInt(splitTime2[1])+parseInt(splitTime3[1]);
 //hour = hour + minute/60;
 //minute = minute%60;
 second = parseInt(splitTime1[2])+parseInt(splitTime2[2])+parseInt(splitTime3[2]);
// minute = minute + second/60;
 //second = second%60;
 Math.ceil(hour);
 Math.ceil(minute);
 Math.ceil(second);

 //$('#Totalpalnfo').val(hour+":"+minute+":"+second);
*/
    });
    displaysum();
    /*--------provoid all sum data-----------*/
    function displaysum() {
        $(document).on("blur", ".unit1data", function(e) {
            e.preventDefault();
            /* var aunit1=0; var punit1=0; var asunit1=0; var munit1=0;  var eunit1=0;
              aunit1=   $('#aunit1').val();
              punit1=   $('#punit1').val();
              asunit1=   $('#asunit1').val();
              munit1=   $('#munit1').val();
              eunit1=   $('#eunit1').val();
             sum=parseInt(aunit1)+parseInt(punit1)+parseInt(asunit1)+parseInt(munit1)+parseInt(eunit1);
             $('#total1').val(sum);*/
            finaltotal();
            get_budtotal();
            getalltotal();

            get_budtotal();

        });
        $(document).on("blur", ".unit2data", function(e) {
            e.preventDefault();
            /* var aunit2=0; var punit2=0; var asunit2=0; var munit2=0;  var eunit2=0;
             aunit2=   $('#aunit2').val();
             punit2=   $('#punit2').val();
             asunit2=   $('#asunit2').val();
              munit2=   $('#munit2').val();
              eunit2=   $('#eunit2').val();
             var sum=parseInt(aunit2)+parseInt(punit2)+parseInt(asunit2)+parseInt(munit2)+parseInt(eunit2);
             $('#total2').val(sum);*/
            finaltotal();
            get_budtotal();
            getalltotal();


        });
        $(document).on("blur", ".unit3data", function(e) {
            e.preventDefault();
            /*var aunit3=0; var punit3=0; var asunit3=0; var munit3=0;  var eunit3=0;
            aunit3=   $('#aunit3').val();
            punit3=   $('#punit3').val();
            asunit3=   $('#asunit3').val();
            munit3=   $('#munit3').val();
            eunit3=   $('#eunit3').val();
            var sum=parseInt(aunit3)+parseInt(punit3)+parseInt(asunit3)+parseInt(munit3)+parseInt(eunit3);
            $('#total3').val(sum);*/
            finaltotal();
            get_budtotal();
            getalltotal();


        });
    }

    /*-------function gettotal all total-----------------*/
    function getalltotal() {
        var aunit1 = 0;
        var punit1 = 0;
        var asunit1 = 0;
        var munit1 = 0;
        var eunit1 = 0;
        var aunit2 = 0;
        var punit2 = 0;
        var asunit2 = 0;
        var munit2 = 0;
        var eunit2 = 0;
        var aunit3 = 0;
        var punit3 = 0;
        var asunit3 = 0;
        var munit3 = 0;
        var eunit3 = 0;
        aunit1 = $('#aunit1').val();
        //  punit1=   $('#punit1').val();
        //asunit1=   $('#asunit1').val();
        munit1 = $('#munit1').val();
        // eunit1=   $('#eunit1').val();
        var sum1 = parseInt(aunit1) + parseInt(punit1) + parseInt(asunit1) + parseInt(munit1) + parseInt(eunit1);
        $('#total1').val(sum1);

        aunit2 = $('#aunit2').val();
        // punit2=   $('#punit2').val();
        // asunit2=   $('#asunit2').val();
        munit2 = $('#munit2').val();
        //eunit2=   $('#eunit2').val();
        var sum2 = parseInt(aunit2) + parseInt(punit2) + parseInt(asunit2) + parseInt(munit2) + parseInt(eunit2);
        $('#total2').val(sum2);

        aunit3 = $('#aunit3').val();
        // punit3=   $('#punit3').val();
        // asunit3=   $('#asunit3').val();
        munit3 = $('#munit3').val();
        // eunit3=   $('#eunit3').val();
        var sum3 = parseInt(aunit3) + parseInt(punit3) + parseInt(asunit3) + parseInt(munit3) + parseInt(eunit3);
        $('#total3').val(sum3);
        get_budtotal();
    }

    /*----monthly expense unit total---------*/
    function Monthlyexpense() {
        var munit1 = 0;
        var munit2 = 0;
        var munit3 = 0;
        munit1 = $('#munit1').val();
        munit2 = $('#munit2').val();
        munit3 = $('#munit3').val();
        var sum = parseInt(munit1) + parseInt(munit2) + parseInt(munit3)
        $('#munittotal').val(sum);
        get_budtotal();
    }
    /*-----display Final total---------*/
    function finaltotal() {
        var total1 = 0;
        var total2 = 0;
        var total3 = 0;
        total1 = $('#total1').val();
        total2 = $('#total2').val();
        total3 = $('#total3').val();
        var sum = parseInt(total1) + parseInt(total2) + parseInt(total3)
        $('#total4').val(sum);
    }
    /*--------product data sum----------*/
    function productiondata() {
        /* var total1=  $('#total1').val();
         var munit1=  $('#punit1').val();
         var montotal1=parseInt(total1)+parseInt(munit1);
         $('#total1').val(montotal1);
   
         var total2=  $('#total2').val();
         var munit2=  $('#punit2').val();
         var montotal2=parseInt(total2)+parseInt(munit2);
         $('#total2').val(montotal2);
   
         var total3=  $('#total3').val();
         var munit3=  $('#punit3').val();
         var montotal3=parseInt(total3)+parseInt(munit3);
         $('#total3').val(montotal3);*/
        getalltotal();

    }
    /*------------submit of budget form-------------------*/
    $(document).on("submit", "#budget_form", function(e) {
        e.preventDefault();
        $('#wait').show();
        // $('#wait1').show();
        // $('#wait1').css('display', 'block');


        var project = $('#project').val();
        var month = $('#month').val();
        var year = $('#year').val();
        var footage1 = $('#shootday1').val();
        var footage2 = $('#shootday2').val();
        var footage3 = $('#shootday3').val();

        var min1 = $('#min1').val();
        var min2 = $('#min2').val();
        var min3 = $('#min3').val();

        var sec1 = $('#sec1').val();
        var sec2 = $('#sec2').val();
        var sec3 = $('#sec3').val();

        var episodicpalnfo = $('#episodicpalnfo').val();

        var aunit1 = $('#aunit1').val();
        var aunit2 = $('#aunit2').val();
        var aunit3 = $('#aunit3').val();

        var punittotal = $('#punittotal').val();
        var asunittotal = $('#asunittotal').val();
        var eunittotal = $('#eunittotal').val();
        /* var punit1 = $('#punit1').val();
         var punit2 = $('#punit2').val();
         var punit3=$('#punit3').val(); 

         var asunit1 = $('#asunit1').val();
         var asunit2 = $('#asunit2').val();
         var asunit3=$('#asunit3').val(); */

        var eunit1 = $('#eunit1').val();
        var eunit2 = $('#eunit2').val();
        var eunit3 = $('#eunit3').val();

        var munit1 = $('#munit1').val();
        var munit2 = $('#munit2').val();
        var munit3 = $('#munit3').val();

        var fromepisodicno = $('#fromepisodeno').val();
        var toepisodeno = $('#toepisodeno').val();
        var totalepisodeno = $('#totalepisodeno').val();





        var id = $('#save_update').val();
        if (id == "" || id != "") {
            //$('#wait1').show();
        }
        $.ajax({
            type: "POST",
            url: baseurl + "settings/save_settings",
            dataType: "JSON",
            async: false,
            data: {
                id: id,
                project: project,
                month: month,
                year: year,
                footage1: footage1,
                footage2: footage2,
                footage3: footage3,
                episodicpalnfo: episodicpalnfo,
                aunit1: aunit1,
                aunit2: aunit2,
                aunit3: aunit3,
                /*punit1:punit1,
                punit2:punit2,
                punit3:punit3,
                asunit1:asunit1,
                asunit2:asunit2,
                asunit3:asunit3,*/
                punittotal: punittotal,
                asunittotal: asunittotal,
                eunit1: '0',
                eunit2: '0',
                eunit3: '0',
                munit1: munit1,
                munit2: munit2,
                munit3: munit3,
                min1: min1,
                min2: min2,
                min3: min3,
                sec1: sec1,
                sec2: sec2,
                sec3: sec3,
                eunittotal: eunittotal,
                fromepisodicno: fromepisodicno,
                toepisodeno: toepisodeno,
                totalepisodeno: totalepisodeno,
                table_name: 'monthy_budget'
            },
            success: function(data) {
                if (data > 0 || data == true) {
                    budid = data;

                    /* var r1 = $('table#productionstaff').find('tbody').find('tr');
            var r = r1.length;
            
            var tr="";
            var uid = $('#save_update').val();
            var tr="";
            if(uid!=""){
                budid=uid;
                $.ajax({
                    type : "POST",
                    url  : baseurl+"settings/delete_master",
                    dataType : "JSON",
                    async : false,
                    data : {
                            id:budid,
                            table_name:'production_staff_budget',
                        
                            },
                    success: function(data){
                        
                    }
                });
            }
           var sr=0;
            for(var i=0;i<r;i++)
            {
             sr=sr+1;
               
                var t = document.getElementById('scene_wise');
                var  peopleid= $(r1[i]).find('td:eq(1)').html();
                var roleid= $(r1[i]).find('td:eq(2)').html();
                var proqty = $("#proqty_"+sr).val();
                var prorate_ = $("#prorate_"+sr).val();
                var perunit= $("#perunit_"+sr).val();
                
               
                $.ajax({
                    type : "POST",
                    url  : baseurl+"settings/save_settings",
                    dataType : "JSON",
                    async : false,
                    data : {
                    budid:budid,
                    peopleid:peopleid,
                    roleid:roleid,
                    proqty:proqty,
                    prorate_:prorate_,
                    perunit:perunit,
                   
                   table_name:'production_staff_budget',
                            },
                    success: function(data){
    
                    // successTost("Data save Successfully");
                  //   myDeleteFunction();
                   
                 }
             });	
                
            }*/
                    var r1 = $('table#budgetentry').find('tbody').find('tr');
                    var r = r1.length;
                    var uid = $('#save_update').val();
                    var tr = "";
                    if (uid != "") {
                        budid = uid;
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/delete_master",
                            dataType: "JSON",
                            async: false,
                            data: {
                                id: budid,
                                table_name: 'expensesbudget',

                            },
                            success: function(data) {

                            }
                        });
                    }
                    var sr = 0;
                    for (var i = 0; i < r; i++) {
                        sr = sr + 1;


                        var expeid = $(r1[i]).find('td:eq(1)').html();
                        var unit = $("#unitnodata_" + sr).val();
                        var proqty = $("#qty_" + sr).val();
                        var prorate_ = $("#rate_" + sr).val();
                        var perunit = $(r1[i]).find('td:eq(7)').html();
                        var excategory = $(r1[i]).find('td:eq(2)').html();
                        //  alert(excategory);
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/save_settings",
                            dataType: "JSON",
                            async: false,
                            data: {
                                budid: budid,
                                expeid: expeid,
                                unit: unit,
                                proqty: proqty,
                                prorate_: prorate_,
                                perunit: '',
                                excategory: excategory,
                                table_name: 'expensesbudget',
                            },
                            success: function(data) {

                                // successTost("Data save Successfully");
                                //   myDeleteFunction();

                            }
                        });

                    }
                    if (id != "") {
                        successTost("Data Update Successfully");
                    } else {
                        successTost("Data save Successfully");
                    }

                }

                form_clear();
            }
        });
        $('#wait').hide();
        // $('#wait1').hide();

        $('.closehideshow').trigger('click');
        show_master();
    });

    /*-------click event of close button---------------*/
    $(document).on('click', '.closehideshow', function() {
        form_clear();
        var l1 = $('table#budgetentry').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        for (var j = 0; j < s; j++) {
            sr = j + 1;

            $("#unitnodata_" + sr).val('');
            $("#qty_" + sr).val('');
            $("#rate_" + sr).val('');
            $("#amount" + sr).val('');

        }
        var l1 = $('table#project_fotagetbl').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        for (var j = 0; j < s; j++) {
            sr = j + 1;

            $("#shootday" + sr).val(0);
            $("#min" + sr).val(0);
            $("#sec" + sr).val(0);
            $("#prototal" + sr).val(0);

        }

    });
    /*-------------display tablbe----------------*/
    show_master();

    function show_master() {

        $.ajax({
            type: 'POST',
            url: baseurl + "settings/getmonthydata",
            async: false,
            data: {
                table_name: 'monthy_budget',

            },
            dataType: 'json',
            success: function(data) {
                console.log(data);

                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th  style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">Projectid</th>' +
                    '<th  style="white-space:nowrap;text-align:left;padding:10px 10px;">Project Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Month</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Year</th>' +
                    '<th  style="white-space:nowrap;text-align:left;padding:10px 10px;">Unit Plan 1</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Unit Plan 2</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Unit Plan 3</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">No. of Episodes Planned</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (i = 0; i < data.length; i++) {
                    var sr = i + 1;



                    html += '<tr>' +
                        '<td style="display:none;" id="date_' + data[i].id + '">' + data[i].projectid + '</td>' +
                        '<td  id="date_' + data[i].id + '">' + data[i].projectname + '</td>' +
                        '<td   id="projectid_' + data[i].id + '">' + data[i].month + '</td>' +
                        '<td id="projectname_' + data[i].id + '">' + data[i].year + '</td>' +
                        '<td   id="locationid_' + data[i].id + '">' + data[i].episodicplan + '</td>' +
                        '<td id="locationname_' + data[i].id + '">' + data[i].planfotage1 + '</td>' +
                        '<td id="profotage_' + data[i].id + '">' + data[i].planfotage2 + '</td>' +
                        '<td  id="shifto_' + data[i].id + '">' + data[i].planfotage3 + '</td>' +
                        '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="' + data[i].id + '" name="' + data[i].status + '" ><i class="fa fa-edit"></i></button>' +
                        '</tr>';
                }
                //console.log(html);
                html += '</tbody></table>';
                $('#show_master').html(html);
                $('#myTable').DataTable({});
            }

        });
    }

    /*-------------Edit data of table----------------------*/
    $(document).on('click', '.edit_data', function() {

        var id1 = $(this).attr('id');
        $('#model_link').show();
        $('#save_update').val(id1);
        $('.btnhideshow').trigger('click');
        $.ajax({
            type: 'POST',
            url: baseurl + "settings/getmonthyeditdata",
            async: false,
            data: {
                table_name: 'monthy_budget',
                where: "id=" + id1,
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data.length > 0) {
                    $('#project').val(data[0].projectid).trigger('change');
                    var project_name = $("#project option:selected").text();


                    $('#month').val(data[0].month).trigger('change');
                    $('#year').attr('name', 'editdatayear');
                    $('#year').val(data[0].year).trigger('change');
                    $('#shootday1').val(data[0].planfotage1);
                    $('#shootday2').val(data[0].planfotage2);
                    $('#shootday3').val(data[0].planfotage3);
                    $('#episodicpalnfo').val(data[0].episodicplan);

                    $('#aunit1').val(data[0].artistunit1);
                    $('#aunit2').val(data[0].artistunit2);
                    $('#aunit3').val(data[0].artistunit3);
                    $("#pro_name").html('Project Name :   ' + project_name + "   ");
                    $("#monthdata").html('Month :   ' + data[0].month + "  ");
                    $("#yeardata").html('Year :   ' + data[0].year + "  ");
                    $('#punit1').val(data[0].prounit1);
                    $('#punit2').val(data[0].prounit2);
                    $('#punit3').val(data[0].prounit3);
                    $('#asunit1').val(data[0].adminunit1);
                    $('#asunit2').val(data[0].adminunit2);
                    $('#asunit3').val(data[0].adminunit3);
                    $('#eunit1').val(data[0].episicunit1);
                    $('#eunit2').val(data[0].episicunit2);
                    $('#eunit3').val(data[0].episicunit3);
                    $('#munit1').val(data[0].monthyunit1);
                    $('#munit2').val(data[0].monthyunit2);
                    $('#munit3').val(data[0].monthyunit3);

                    $('#min1').val(data[0].min1);
                    $('#min2').val(data[0].min2);
                    $('#min3').val(data[0].min3);

                    $('#sec1').val(data[0].sec1);
                    $('#sec2').val(data[0].sec2);
                    $('#sec3').val(data[0].sec3);

                    $('#fromepisodeno').val(data[0].fromepisodeno);
                    $('#toepisodeno').val(data[0].toepisodeno);
                    $('#totalepisodeno').val(data[0].totalepisode);

                    var firstfotage = (parseInt(data[0].planfotage1) * parseInt(data[0].min1)) + (parseInt(data[0].planfotage1) * parseInt(data[0].sec1)) / 60;
                    var secondfotage = parseInt(data[0].planfotage2) * parseInt(data[0].min2) + (parseInt(data[0].planfotage2) * parseInt(data[0].sec2)) / 60;
                    var thirdfotage = parseInt(data[0].planfotage3) * parseInt(data[0].min3) + (parseInt(data[0].planfotage1) * parseInt(data[0].sec3)) / 60;;


                    $('#prototal1').val(parseInt(firstfotage));
                    $('#prototal2').val(parseInt(secondfotage));
                    $('#prototal3').val(parseInt(thirdfotage));

                    var ftotal1 = $('#prototal1').val();
                    var ftotal2 = $('#prototal2').val();
                    var ftotal3 = $('#prototal3').val();
                    var ftotal44 = parseInt(ftotal1) + parseInt(ftotal2) + parseInt(ftotal3);




                    var aunitsum = parseInt(data[0].artistunit1) + parseInt(data[0].artistunit2) + parseInt(data[0].artistunit3);
                    var punitsum = parseInt(data[0].punittotal);
                    var asunitsum = parseInt(data[0].asunittotal);
                    var esunitsum = parseInt(data[0].episoictotal);
                    //   var adunitsum=parseInt(data[0].adminunit1)+parseInt(data[0].adminunit2)+parseInt(data[0].adminunit3);
                    var monthyuni = parseInt(data[0].monthyunit1) + parseInt(data[0].monthyunit2) + parseInt(data[0].monthyunit3);
                    $('#aunittotal').val(aunitsum);
                    $('#punittotal').val(punitsum);
                    $('#asunittotal').val(asunitsum);
                    $('#eunittotal').val(esunitsum);
                    $('#munittotal').val(monthyuni);
                    var finalt = parseInt(aunitsum) + parseInt(punitsum) + parseInt(asunitsum) + parseInt(esunitsum) + parseInt(monthyuni);
                    $('#total4').val(finalt);

                    var unitsum1 = parseInt(data[0].artistunit1) + parseInt(data[0].prounit1) + parseInt(data[0].adminunit1) + parseInt(data[0].episicunit1) + parseInt(data[0].monthyunit1);
                    var unitsum2 = parseInt(data[0].artistunit2) + parseInt(data[0].prounit2) + parseInt(data[0].adminunit2) + parseInt(data[0].episicunit2) + parseInt(data[0].monthyunit2);
                    var unitsum3 = parseInt(data[0].artistunit3) + parseInt(data[0].prounit3) + parseInt(data[0].adminunit3) + parseInt(data[0].episicunit2) + parseInt(data[0].monthyunit3);
                    $('#total1').val(unitsum1);
                    $('#total2').val(unitsum2);
                    $('#total3').val(unitsum3);

                    var time1 = data[0].planfotage1;
                    var time2 = data[0].planfotage2;
                    var time3 = data[0].planfotage3;



                    var hour = 0;
                    var minute = 0;
                    var second = 0;

                    var splitTime1 = time1.split(':');
                    var splitTime2 = time2.split(':');
                    var splitTime3 = time3.split(':');

                    hour = parseInt(splitTime1[0]) + parseInt(splitTime2[0]) + parseInt(splitTime3[0]);
                    minute = parseInt(splitTime1[1]) + parseInt(splitTime2[1]) + parseInt(splitTime3[1]);
                    //hour = hour + minute/60;
                    //minute = minute%60;
                    second = parseInt(splitTime1[2]) + parseInt(splitTime2[2]) + parseInt(splitTime3[2]);
                    // minute = minute + second/60;
                    //second = second%60;
                    Math.ceil(hour);
                    Math.ceil(minute);
                    Math.ceil(second);

                    // $('#Totalpalnfo').val(hour+":"+minute+":"+second);
                    $('#Totalpalnfo').val(ftotal44);


                }



                /* $.ajax({
                     type  : 'POST',
                     url  : baseurl+"settings/getproductstaffdata",
                     async : false,
                     data : {table_name:'production_staff_budget',
                             where:"budid="+id1,
                             },
                     dataType : 'json',
                     success : function(data){
                         console.log(data);
                         var total=0;
                         if(data.length>0){
                             var markup="";
                             var sr=0;
                             $("#productionstaffbody").html('');
                             for(i=0;i<data.length;i++){
                                 sr=sr+1;
                                 var totalamt=parseInt(data[i].qty)*parseInt(data[i].rate);
                                 total=parseInt(total)+parseInt(totalamt);
                                 markup = '<tr>'+
                                     '<td  style="display:none; id="sr_'+data[i].id+'">'+sr+'</td>'+
                                     '<td style="display:none;" id="peopleid_'+sr+'">'+data[i].peopleid+'</td>'+
                                     '<td style="display:none;" id="roleidid_'+sr+'">'+data[i].roleid+'</td>'+
                                     '<td id="peoplename_'+sr+'" width="30%">'+data[i].peoplename+'</td>'+
                                     '<td id="charectername_'+sr+'" width="30%">'+data[i].charectername+'</td>'+
                                     '<td id="productionqty_"><input type="text" style="text-align: right;" class="proqtydata" id="proqty_'+sr+'" value='+data[i].qty+' size="5%"></td>'+
                                     '<td id="tqty_"><input type="text" style="text-align: right;"  class="proratedata" id="prorate_'+sr+'" value='+data[i].rate+' size="5%"></td>'+
                                     '<td id="perunit_"><input type="text" style="align:right";   id="perunit_'+sr+'" value='+data[i].perunit+'  size="5%"></td>'+
                                   //  '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="20%" ><option selected disabled value="">Select</option> </select></td>'+
                                     '<td id="tamount_"><input style="text-align: right;" type="text" id="proamount_'+sr+'" value='+totalamt+' ></td>'+
                                     '</tr>';
                                     $("#productionstaffbody").append(markup);
                                    $('#productiontotal').val(total);
                             }
                         }
                     }
                 });*/
                $.ajax({
                    type: 'POST',
                    url: baseurl + "settings/geteditexpensedata",
                    async: false,
                    data: {
                        table_name: 'expensesbudget',
                        where: "budid=" + id1,
                    },
                    dataType: 'json',
                    success: function(data) {
                        var unitname = [];
                        var unitid = [];
                        var where = '';
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/get_master_where",
                            data: {
                                table_name: 'unitofmeasurement',
                                where: where,
                            },
                            dataType: "JSON",
                            async: false,
                            success: function(data) {
                                console.log(data);
                                var html = '';

                                //					if(table_name=="victim_age"){
                                //					html += '<option selected  value="" >Select Victim Age</option>';
                                //						}else{
                                //    html += '<option selected disabled value="" >Select</option>';
                                //						}
                                for (i = 0; i < data.length; i++) {


                                    unitname[i] = data[i].name;
                                    unitid[i] = data[i].id;

                                }
                                //$(selecter).html(html);
                            }
                        });

                        console.log(data);
                        if (data.length > 0) {
                            var markup = "";
                            var sr = 0;
                            $("#budgetentrybody").html('');
                            var totalamt = 0;
                            var totaldata = 0;
                            for (i = 0; i < data.length; i++) {
                                sr = sr + 1;
                                totalamt = parseInt(data[i].qty) * parseInt(data[i].rate);
                                totaldata = parseInt(data[i].qty) * parseInt(data[i].rate) + parseInt(totaldata);
                                markup = '<tr>' +
                                    '<td style="display:none; id="sr_' + data[i].id + '">' + sr + '</td>' +
                                    '<td style="display:none;" id="expensid_' + sr + '">' + data[i].expensesid + '</td>' +
                                    '<td id="expencode_' + data[i].id + '" width="10%">' + data[i].excategory + '</td>' +
                                    //   '<td id="getexpense_"><select   class="form-control input-sm excategory" id="excategory_'+sr+'" name="excategory" width="20%" ><option selected disabled  >Select</option><option value="1">Monthly</option> <option value="2">Variable</option>  </select></td>'+
                                    '<td id="expensivename_' + sr + '" width="30%">' + data[i].expensename + '</td>' +
                                    '<td id="unitno_"><input type="text" id="unitnodata_' + sr + '" style="text-align: right;" value=' + data[i].unit + ' size="5%"></td>' +
                                    '<td id="tqty_"><input type="text" style="text-align: right;" class="qtydata" id="qty_' + sr + '" value=' + data[i].qty + ' size="5%"></td>' +
                                    '<td id="trate_"><input type="text" style="text-align: right;" class="ratedata" id="rate_' + sr + '" value=' + data[i].rate + ' size="5%"></td>' +
                                    '<td style="display:none;" id="unitid_' + sr + '">' + data[i].perunit + '</td>' +
                                    '<td  id="unitname_' + sr + '">' + data[i].unitname + '</td>' +
                                    //'<td id="getused_"><select   class="form-control input-sm unit" id="unit_'+sr+'" name="unit" required><option selected disabled value='+data[i].perunit+' >Select</option> </select></td>'+
                                    '<td id="tamount_"><input type="text" style="text-align: right;" id="amount' + sr + '" size="12%" value=' + totalamt + ' disabled></td>' +
                                    '</tr>';

                                $("#budgetentrybody").append(markup);
                                var html = '';
                                html += '<option selected disabled value="" >Select</option>';
                                for (let i = 0; i < unitname.length; ++i) {
                                    html += '<option value="' + unitid[i] + '" name="' + unitname[i] + '">' + unitname[i] + '</option>';
                                }
                                $('#unit_' + sr).html(html);

                                $('#excategory_' + sr).val(data[i].excategory).trigger('change');
                                $('#unit_' + sr).val(data[i].perunit).trigger('change');
                            }
                            $('#budgettotal').val(totaldata);
                            index = sr;
                            // getMasterSelect("unitofmeasurement",".unit"," status = '1'");
                        }
                    }
                });
                display_budgethead();
            }

        });
        $('.panel-tab a[href="#monthybudget"]').tab('show');
        //$('.scenedetails').show();
        //$('.production_tab').show();
        $('.peopleattend').show();

    });
    /*----------------delete data click event--------------------*/
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
                            table_name: 'monthy_budget',
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
    /*----------form clear------------------*/
    function form_clear() {
        $('#project').val('');
        $('#month').val('');
        $('#year').val('');
        $("year").attr("name", "year");
        $('#footage1').val('');
        $('#footage2').val('');
        $('#footage3').val('');
        $('#episodicpalnfo').val('');
        $('#aunit1').val(0);
        $('#aunit2').val(0);
        $('#aunit3').val(0);
        $('#punit1').val('');
        $('#punit2').val('');
        $('#punit3').val('');
        $('#asunit1').val('');
        $('#asunit2').val('');
        $('#asunit3').val('');
        $('#eunit1').val(0);
        $('#eunit2').val(0);
        $('#eunit3').val(0);
        $('#munit1').val(0);
        $('#munit2').val(0);
        $('#munit3').val(0);
        $('#aunittotal').val(0);
        $('#punittotal').val(0);
        $('#asunittotal').val(0);
        $('#eunittotal').val(0);
        $('#munittotal').val(0);
        $('#total4').val(0);
        $('#total1').val(0);
        $('#total2').val(0);
        $('#total3').val(0);
        $('#Totalpalnfo').val(0);
        $('#yeardata').html('');
        $('#monthdata').html('');
        $('#pro_name').html('');
        $('#fromepisodeno').val('');
        $('#toepisodeno').val('');
        $('#totalepisodeno').val('');

        $('#save_update').val('');

    }
    /*----------------cilck Event of Month Next Button-----------*/
    $(document).on('click', '#btnmonth', function() {
        var project = $('#project').val();
        var month = $('#month').val();
        var year = $('#year').val();


        if (project == null && month == null && year == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Project And Month And Year!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            });

        } else if (project == null && month == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Project And Month!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            });

        } else if (project == null && year == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Project And Year!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            });
            errorTost('Plase Select Project And Year');
        } else if (month == null && year == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Month And Year!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            });

        } else if (month == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Month!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            });

        } else if (year == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Year!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "ok !!",
                closeOnConfirm: false
            });

        } else if (project == null) {
            swal({
                title: "Please Select Data?",
                text: "Please Select Project!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "ok !!",
                closeOnConfirm: false
            });

        } else {

            $('.monthybudget').show();
            // $('.scenedetails').show();
            $('.peopleattend').show();
            $('.panel-tab a[href="#people_attendance"]').tab('show');
            // $('.panel-tab a[href="#scene_details"]').tab('show');
        }

    });
    //comment production staff code
    /*----$(document).on('click','#productionsave',function(){
        $('.monthybudget').show();
        $('.scenedetails').show();
        $('.peopleattend').show();
        $('.panel-tab a[href="#people_attendance"]').tab('show');
      
        
    });   */
    /*--------------------get Product  total-----------------*/
    function productamtdata() {
        var amttotal = 0;
        var amt = 0;
        var r1 = $('table#productionstaff').find('tbody').find('tr');
        var r = r1.length;

        var sr = 0;

        for (var i = 0; i < r; i++) {

            sr = i + 1;
            console.log("sr" + sr);

            amt = $('#amount' + sr).val();
            console.log("str" + sr + "" + amt);
            amttotal = parseInt(amttotal) + parseInt(amt);
            console.log("sr" + amttotal);

        }
        $('#productiontotal').val(amttotal);

    }
    /*--------------------get total-----------------*/
    function amtdata() {
        var amttotal = 0;
        var amt = 0;
        var r1 = $('table#budgetentry').find('tbody').find('tr');
        var r = r1.length;

        var sr = 0;

        for (var i = 0; i < r; i++) {

            sr = i + 1;
            console.log("sr" + sr);

            amt = $('#amount' + sr).val();
            console.log("str" + sr + "" + amt);
            amttotal = parseInt(amttotal) + parseInt(amt);
            console.log("sr" + amttotal);

        }
        $('#budgettotal').val(amttotal);

    }
    /*check data Exists or not-----------------*/
    function checkdata() {
        var project = $('#project').val();
        var month = $('#month').val();

        var year = $('#year').val();

        var tdateAr = date.split('/');
        var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        $.ajax({

            type: "POST",
            url: baseurl + "settings/checkmonthdata",
            dataType: "JSON",
            async: false,
            data: {
                table_name: "monthy_budget",
                project: project,
                month: month,
                year: year,
            },
            success: function(result) {

                if (result == true) {

                } else {
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
    /*---------calculate project fotage Total------------------*/
    function calprofotage() {
        /* $('#shootday1').val();
         $('#shootday2').val();
         $('#shootday3').val();

         $('#footage1').val();
         $('#footage2').val();
         $('#footage3').val();*/

        var r1 = $('table#project_fotagetbl').find('tbody').find('tr');
        var r = r1.length;
        console.log(r);
        // var r=parseInt(r)-1;
        var sr = 0;
        var totalamt = 0;
        var totalses = 0;
        var totalmin = 0;
        var finaltotaldata = 0;

        for (var i = 0; i < r; i++) {
            sr = sr + 1;

            var shootdaydata = $("#shootday" + sr).val();
            var minute = $("#min" + sr).val();
            var second = $("#sec" + sr).val();

            totalmin = parseFloat(minute) * parseFloat(shootdaydata);
            totalses = (parseFloat(second) * parseFloat(shootdaydata)) / 60;
            //   alert(totalses)
            console.log(totalses + "" + "<<<<<>>>>>>");
            totalamt = totalmin + totalses;
            //totalamt=parseInt(totalamt)+parseInt(totalses);
            $('#prototal' + sr).val(totalamt.toFixed(2));

            //  totaldata= $('#prototal'+sr).val();
            finaltotaldata = parseInt(finaltotaldata) + parseInt(totalamt);
            //  totalamt=parseInt(totalmin)+parseInt(totalses);
            console.log(sr);
            console.log(minute);
            console.log(second);
            console.log("shootmin" + totalmin);
            console.log("shootses" + totalses);
            console.log("total" + totalamt);
            console.log("total" + finaltotaldata);
        }
        $('#Totalpalnfo').val(finaltotaldata);
    }
    /*--------------get time sum---------*/
    $(document).on("blur", ".shootday", function(e) {
        e.preventDefault();
        calprofotage();
    });
    $(document).on("blur", ".minitue", function(e) {
        e.preventDefault();
        calprofotage();
    });
    $(document).on("click", "#previous", function(e) {
        e.preventDefault();
        $('.monthybudget').show();
        // $('.scenedetails').show();
        $('.peopleattend').show();
        $('.panel-tab a[href="#monthybudget"]').tab('show');
    });

    function get_budtotal() {
        var asunittotal = $('#asunittotal').val();
        var punittotal = $('#punittotal').val();
        var aunittotal = $('#aunittotal').val();
        var eunittotal = $('#eunittotal').val();
        var munittotal = $('#munittotal').val();
        amttotal = parseInt(aunittotal) + parseInt(punittotal) + parseInt(asunittotal) + parseInt(eunittotal) + parseInt(munittotal);
        $('#total4').val(amttotal);
    }
    $(document).on("blur", "#punittotal", function(e) {
        e.preventDefault();
        get_budtotal();
    });
    $(document).on("blur", "#asunittotal", function(e) {
        e.preventDefault();
        get_budtotal();
    });


    $('.scenedetails').hide();
    $('.peopleattend').hide();
    /*-------------Copy Button Click Event------------------------*/
    $(document).on("click", "#model_link", function(e) {
        e.preventDefault();
        var project = $("#project option:selected").text();
        var month = $('#month').val();
        var year = $('#year').val();

        $('#projectinfo').text(project);
        $('#monthinfo').text(month);
        $('#yearinfo').text(year);

    });
    $(document).on("click", "#Copydata", function(e) {
        var nextmonth = $('#nextmonth').val();
        var nextyear = $('#nextyear').val();
        $('#wait').show();

        $.ajax({
            type: "POST",
            url: baseurl + "settings/Checkmonthyearbudget",
            dataType: "JSON",
            data: {
                month: nextmonth,
                year: nextyear,
            },
            success: function(data) {
                if (data == '400') {
                    var project = $('#project').val();

                    var footage1 = $('#shootday1').val();
                    var footage2 = $('#shootday2').val();
                    var footage3 = $('#shootday3').val();

                    var min1 = $('#min1').val();
                    var min2 = $('#min2').val();
                    var min3 = $('#min3').val();

                    var sec1 = $('#sec1').val();
                    var sec2 = $('#sec2').val();
                    var sec3 = $('#sec3').val();

                    var episodicpalnfo = $('#episodicpalnfo').val();

                    var aunit1 = $('#aunit1').val();
                    var aunit2 = $('#aunit2').val();
                    var aunit3 = $('#aunit3').val();

                    var punittotal = $('#punittotal').val();
                    var asunittotal = $('#asunittotal').val();
                    var eunittotal = $('#eunittotal').val();
                    /* var punit1 = $('#punit1').val();
            var punit2 = $('#punit2').val();
            var punit3=$('#punit3').val(); 
        
            var asunit1 = $('#asunit1').val();
            var asunit2 = $('#asunit2').val();
            var asunit3=$('#asunit3').val(); */

                    var eunit1 = $('#eunit1').val();
                    var eunit2 = $('#eunit2').val();
                    var eunit3 = $('#eunit3').val();

                    var munit1 = $('#munit1').val();
                    var munit2 = $('#munit2').val();
                    var munit3 = $('#munit3').val();


                    var fromepisodicno = $('#fromepisodeno').val();
                    var toepisodeno = $('#toepisodeno').val();
                    var totalepisodeno = $('#totalepisodeno').val();

                    id = '';

                    $.ajax({
                        type: "POST",
                        url: baseurl + "settings/save_settings",
                        dataType: "JSON",
                        async: false,
                        data: {
                            id: id,
                            project: project,
                            month: nextmonth,
                            year: nextyear,
                            footage1: footage1,
                            footage2: footage2,
                            footage3: footage3,
                            episodicpalnfo: episodicpalnfo,
                            aunit1: aunit1,
                            aunit2: aunit2,
                            aunit3: aunit3,
                            /*punit1:punit1,
                            punit2:punit2,
                            punit3:punit3,
                            asunit1:asunit1,
                            asunit2:asunit2,
                            asunit3:asunit3,*/
                            punittotal: punittotal,
                            asunittotal: asunittotal,
                            eunit1: '0',
                            eunit2: '0',
                            eunit3: '0',
                            munit1: munit1,
                            munit2: munit2,
                            munit3: munit3,
                            min1: min1,
                            min2: min2,
                            min3: min3,
                            sec1: sec1,
                            sec2: sec2,
                            sec3: sec3,
                            fromepisodicno: fromepisodicno,
                            toepisodeno: toepisodeno,
                            totalepisodeno: totalepisodeno,
                            eunittotal: eunittotal,
                            table_name: 'monthy_budget'
                        },
                        success: function(data) {
                            if (data > 0 || data == true) {
                                budid = data;

                                var r1 = $('table#budgetentry').find('tbody').find('tr');
                                var r = r1.length;

                                var tr = "";

                                var sr = 0;
                                for (var i = 0; i < r; i++) {
                                    sr = sr + 1;


                                    var expeid = $(r1[i]).find('td:eq(1)').html();
                                    var unit = $("#unitnodata_" + sr).val();
                                    var proqty = $("#qty_" + sr).val();
                                    var prorate_ = $("#rate_" + sr).val();
                                    var perunit = $(r1[i]).find('td:eq(7)').html();
                                    var excategory = $(r1[i]).find('td:eq(2)').html();
                                    //  alert(excategory);
                                    $.ajax({
                                        type: "POST",
                                        url: baseurl + "settings/save_settings",
                                        dataType: "JSON",
                                        async: false,
                                        data: {
                                            budid: budid,
                                            expeid: expeid,
                                            unit: unit,
                                            proqty: proqty,
                                            prorate_: prorate_,
                                            perunit: '',
                                            excategory: excategory,
                                            table_name: 'expensesbudget',
                                        },
                                        success: function(data) {

                                            // successTost("Data save Successfully");
                                            //   myDeleteFunction();

                                        }
                                    });

                                }
                                if (id != "") {
                                    successTost("Data Update Successfully");
                                } else {
                                    successTost("Data save Successfully");
                                }

                            }


                        }
                    });

                    $('.closehideshow').trigger('click');
                    $('#initiation_model').modal('hide');
                    show_master();
                    $('#nextmonth').val('').trigger('change');
                    $('#nextyear').val('').trigger('change');

                } else {
                    swal({
                        title: "Data Already Exist ?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok!!",
                        closeOnConfirm: false
                    });
                }


            }
        });
        $('#wait').hide();

    });
    /*-------blur Event Of from Episode and To Episode--------------*/
    $(document).on("blur", ".totalepisode", function(e) {
        e.preventDefault();
        var fromepisodicno = $('#fromepisodeno').val();
        var toepisodeno = $('#toepisodeno').val();

        if (fromepisodicno > 0) {

        } else {
            fromepisodicno = 0;
        }
        if (toepisodeno > 0) {

        } else {
            toepisodeno = 0;
        }
        var totaleposode = parseInt(toepisodeno) - parseInt(fromepisodicno) + parseInt(1);
        $('#totalepisodeno').val(totaleposode);
    });
});