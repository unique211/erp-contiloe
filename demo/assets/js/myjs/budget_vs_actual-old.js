$(document).ready(function () {
        var grand_plannedtotal =0;
    var grant_actualtotal=0;
	var grant_expensetotal=0;
	
    getMasterSelect("project_master", ".project_name", " status = '1' ");
    // $('#from_date').hide();
    // $('#to_date').hide();
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
            success: function (data) {
                console.log(data);
                html = '';
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
                    if (table_name == "peopletype_master") {
                        html += '<option value="' + id + '" name="' + name + '">' + name + '</option>';
                    } else {
                        html += '<option value="' + id + '" >' + name + '</option>';
                    }
                }
                $(selecter).html(html);
            }
        });
    }



    /*----------- artistschedule form---------*/
    $(document).on("submit", "#showwisereport", function (e) {
        
       // $('#Process').text('Process...');
        
 //alert("hey")

        e.preventDefault();
        var project = $('#project').val();
        var frommonth = $('#frommonth').val();
        var fromyear = $('#fromyear').val();
        var markup4='';
        var status = 0;
        var prev_unit='0';
        var grant_expensetotal = 0;
		var grand_plannedtotal = 0;
        var grant_actualtotal = 0;
                 
                if ($('#status').is(":checked")){
                    status = 1; 

                                   markup4 +=' <tr style="border:solid 1px;">'+
                                        '<th style="width:5%;">Expense Code</th>'+
                                                    '<th style="width:15%;"> Expense A/c</th>'+
                                                    '<th style="width:10%;text-align:right;"> Unit No</th>'+
                                                    '<th style="width:10%;text-align:right;">Planned for the Month</th>'+
                                                   ' <th style="width:20%;">Expense Sub A/c</th>'+
                                                    '<th style="width:10%;text-align:right;">Actual Expenses</th>'+
                                                    
                                                    '<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>'+
													'<th style="width:10%;text-align:right;border-right:solid 2px;">Group</th>'+
                                                    
                                                '</tr>';
                }
                else
                {
                            markup4 +=' <tr style="border:solid 1px;">'+
                                        '<th style="width:5%;">Expense Code</th>'+
                                                    '<th style="width:15%;"> Expense A/c</th>'+
                                                    '<th style="width:10%;text-align:right;"> Unit No</th>'+
													//'<th style="width:10%;text-align:right;"> Unit of Measurement</th>'+
													'<th style="width:10%;text-align:right;">Plan for the Month</th>'+
                                                    '<th style="width:10%;text-align:right;">Actual Till Date</th>'+
													'<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>'+
                                                   // ' <th style="width:10%;">Expense Sub A/c</th>'+
												   '<th style="width:10%;text-align:right;border-right:solid 2px;">Planned for Day</th>'+
                                                    '<th style="width:10%;text-align:right;">Actual Expenses for Day</th>'+
                                                    
                                                    '<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>'+
													
                                                '</tr>';
                }
        
        var fromdate = $('#fromdate').val();

  var tdateAr = fromdate.split('/');
        fromdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
// alert(status+" status");


// alert(project);

        var todate = $('#todate').val();
            var tdateAr = todate.split('/');
        todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        $.ajax({
            type: "POST",
            url: baseurl + "settings/expensegetbudgetreport1",
            dataType: "JSON",
            async: false,
            data: {
                project: project,
                fromdate: fromdate,
                todate: todate,
                fromyear: fromyear,
                frommonth: frommonth,
                status:status
               
                // tomonthtext: tomonthtext,
            },
            success: function (result) {

                // alert(result+" "+"abc");
                $('#expensebudgetbody').html('');
                var sr = 0;
                console.log("result" + result.length);


                // var markup4 = '';

                for (var i = 0; i < result.length; i++) {
                    sr = sr + 1;
                    $.ajax({
                        type: "POST",
                        url: baseurl + "settings/expensebudgetsubaccount1",
                        dataType: "JSON",
                        async: false,
                        data: {
                            exid: result[i].expenseaccount,
                            todate: todate,
                            project: project,
                            fromdate: fromdate,
                            status:status
                        },
                        success: function (data) {
                            var r1 = $('table#expensebudget').find('tbody').find('tr');
                            var r = r1.length;
                            var code = $(r1[i]).find('td:eq(1)').html();

                           // console.log(code + "" + result[i].code);

                            // alert(result[i].status+" "+"Is statussss");

						//For Detail Report 							
                            if(result[i].status == 1)
                            {
                        
                            if (result[i].code == code) {
                                result[i].code = "";
                                result[i].name = "";
                                result[i].unitno = "";
                                result[i].planamt = "";
								result[i].planamt_mth = "";
								//result[i].perunit = "";
                            }
                            var plannedtotal = 0;
                            var actualtotal = 0;
                            var variation = 0;
                            for (var j = 0; j < data.length; j++) {

                                if (j == 0) {
                                    markup4 += '<tr>' +
                                        '<td  id="shootday1' + sr + '">' + result[i].code + '</td>' +
                                        '<td  id="unitno' + sr + '">' + result[i].name + '</td>' +
                                        '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + result[i].unitno + '</td>' +
                                        '<td  style="text-align:right;"  id="shootday1' + sr + '">' + (parseInt(result[i].planamt).toFixed(0)) + '</td>' +
                                        '<td    id="perdayfotage1' + sr + '">' + data[j].subaccountname + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '">' + Math.floor(data[j].rate) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
										'<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
										
                                        '</tr>';
                                    plannedtotal += parseInt(result[i].planamt);
                                    actualtotal += parseInt(data[j].rate);
									var expensetotal = data[j].expensetotal;
									
									grant_expensetotal  += parseInt(expensetotal); //for Detail report
									
                                } else {

                                    markup4 += '<tr>' +
                                        '<td  style="text-align:right;" id="shootday1' + sr + '"> </td>' +

                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                        '<td  style="text-align:right;"  id="unitno' + sr + '"></td>' +
                                        '<td  style="text-align:right;"  id="shootday1' + sr + '"></td>' +
                                        '<td    id="perdayfotage1' + sr + '">' + data[j].subaccountname + '</td>' +
                                        '<td   style="text-align:right;" id="perdayfotage1' + sr + '">' + Math.floor(data[j].rate) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
										'<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
										'</tr>';
                                    actualtotal += parseInt(data[j].rate);
									//var expensetotal = data[j].expensetotal;
                                }

                            }
							//var expensetotal = data[j].expensetotal ;
                            variation_plan = parseInt(plannedtotal) - parseInt(actualtotal);
							
							 variation = parseInt(plannedtotal) - parseInt(actualtotal);
                           markup4 += '<tr style="background-color:#DCDCDC;border:solid 1px;">' +
                                '<td   style="text-align:right;" id="shootday1' + sr + '"></td>' +
                                '<td   style="text-align:right;" id="unitno' + sr + '"></td>' +
                                '<td   style="text-align:right;" id="perdayfotage1' + sr + '">Total</td>' +
                                '<td   style="text-align:right;"  id="shootday1' + sr + '">' + plannedtotal.toFixed(0) + '</td>' +
                                '<td   style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + actualtotal + '</td>' +
                                '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + variation + '</td>' +
								'<td  style="text-align:right;"  id="perdayfotage1' + sr + '">'+ expensetotal +'</td>' +
                                '</tr>';
                             grand_plannedtotal += plannedtotal;
                             grant_actualtotal  += actualtotal;
							 
                // $('#expensebudgetbody').append(markup4);


                        }
                        else if(result[i].status == 0)
                        {
    //For Summary Report

                            console.log("reched");
                            if (result[i].code == code) {
                                result[i].code = "";
                                result[i].name = "";
                                result[i].unitno = "";
                                result[i].planamt = "";
								result[i].planamt_mth = "";
								
								//result[i].perunit = "";
                            }
                         var cur_unit=result[i].unitno;

                           // console.log(cur_unit+" "+"unit"+" "+prev_unit+" prev");
						
						
						
                        if(status == 0 && prev_unit!=cur_unit && prev_unit !='0')
                        {

                        var diff=grand_plannedtotal-grant_actualtotal;
                        
                            markup4+='<tr>'+
                      '<td></td>'+
                      '<th>Total</th>'+
                      '<td></td>'+
                      '<td style="text-align:right">'+grand_plannedtotal+'</td>'+
                      '<td style="text-align:right">'+grant_actualtotal+'</td>'+
                      '<td style="text-align:right">'+diff+'</td>'+

                     'tr';

                             grand_plannedtotal=0;
                             grant_actualtotal=0;
                        }


                                 prev_unit= cur_unit;
                            var plannedtotal = 0;
                            var actualtotal = 0;
                            var variation = 0;
							
                            for (var j = 0; j < data.length; j++) {
                                if (j == 0) {
                                 
                                    variation_plan = ( parseInt(result[i].planamt_mth)  - parseInt(data[j].expensetotal));
									
                                    grant_expensetotal  += parseInt(data[j].expensetotal);
									
									variation = parseInt(result[i].planamt)   - parseInt(data[j].rate);
									
                                    markup4 += '<tr>' +
                                        '<td  id="shootday1' + sr + '">' + result[i].code + '</td>' +
                                        '<td  id="unitno' + sr + '">' + result[i].name + '</td>' +
                                        '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + result[i].unitno + '</td>' +
										//'<td  style="text-align:left;"  id="uom' + sr + '">' + result[i].perunit + '</td>' +
										
										'<td  style="text-align:right;" id="perdayfotage1' + sr + '">' + (parseInt(result[i].planamt_mth).toFixed(0)) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '">'+ (parseInt(data[j].expensetotal).toFixed(0)) + '</td>' +
										'<td  style="text-align:right;"  id="perdayfotage1' + sr + '">'+variation_plan+'</td>' +
										
										'<td  style="text-align:right;"  id="shootday1' + sr + '">' + (parseInt(result[i].planamt).toFixed(0)) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '">' + Math.floor(data[j].rate) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '">'+variation +'</td>' +
										
										'</tr>';
                                        
                                    plannedtotal += parseInt(result[i].planamt);
                                    actualtotal += parseInt(data[j].rate);
									
                                   
                                } else {

                                    markup4 += '<tr>' +
                                        '<td  style="text-align:right;" id="shootday1' + sr + '"> </td>' +

                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                        '<td  style="text-align:right;"  id="unitno' + sr + '"></td>' +
										'<td  style="text-align:right;"  id="uom' + sr + '"></td>' +
										
                                        '<td  style="text-align:right;"  id="shootday1' + sr + '"></td>' +
										'<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
										'<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                        // '<td    id="perdayfotage1' + sr + '">' + data[j].subaccountname + '</td>' +
                                        // '<td   style="text-align:right;" id="perdayfotage1' + sr + '">' + Math.floor(data[j].rate) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
										'<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                        '</tr>';
                                    actualtotal += parseInt(data[j].rate);
									//grant_expensetotal  += parseInt(data[j].expensetotal);
                                }

                            }
                            variation = parseInt(plannedtotal) - parseInt(actualtotal);
                            
							  grand_plannedtotal += plannedtotal;
                              grant_actualtotal  += actualtotal;
							//  grant_expensetotal  += parseInt(expensetotal);

  
                // $('#expensebudgetbody1').append(markup4);

                                // console.log(prev_unit);

                        }


                     // markup4+='<tr>'+
             //  '<td>Total</td>'+
             // 'tr';   
                    }

             // markup4+='<tr>'+
             //  '<td>Total</td>'+
             // 'tr';
                    });
//$('.grant_total').text("<td>Planned month total:</td><td>"+grand_plannedtotal+"</td><td> Actual expenses total:</td><td>"+grant_actualtotal+"</td>");
$('.grant_total').text(grand_plannedtotal);
$('.grant_total_e').text(grant_actualtotal);

                }
                    
//alert(status);
                    if(status == 0 )
                        {

                        var diff_paln = grand_plannedtotal-grant_actualtotal;
						var diff=grant_expensetotal-grant_actualtotal;
						
                        
                            markup4+='<tr  style="border:solid 1px;">'+
                      '<td></td>'+
                      '<th>Total Summary</th>'+
                     
					   '<td></td>'+
					  '<td></td>'+
					  '<td style="text-align:right">'+grant_expensetotal.toFixed(0)+'</td>'+
					  '<td></td>'+
					  
					  '<td style="text-align:right">'+grand_plannedtotal+'</td>'+
                      '<td style="text-align:right">'+grant_actualtotal+'</td>'+
                      '<td style="text-align:right">'+diff+'</td>'+
					 
                     'tr';
                    }
                     else  if(status == 1){

                        var diff=grand_plannedtotal-grant_actualtotal;
                        
                            markup4+='<tr  style="border:solid 1px;">'+
                      '<td></td>'+
                      '<th>Total</th>'+
                      '<td></td>'+
                      '<td style="text-align:right">'+grand_plannedtotal+'</td>'+
                      '<td></td>'+
                      '<td style="text-align:right">'+grant_actualtotal+'</td>'+
                      '<td style="text-align:right">'+diff+'</td>'+
					  '<td style="text-align:right">'+parseInt(grant_expensetotal.toFixed(0))+'</td>'+
					 'tr';
                    }


                $('#expensebudgetbody').append(markup4);
               
//         $('#Process').html('');
         
            }


        });



    });
    $(document).on("change", ".yeardata", function () {
        // alert('hiii');
        var frommonth = $('#frommonth').val();
        var fromyear = $('#fromyear').val();
        var tomonth = $('#tomonth').val();
        var toyear = $('#toyear').val();
        //console.log(frommonth+"from"+fromyear+"to"+tomonth+"to"+toyear);
        // if ((tomonth == frommonth && fromyear == toyear)) {
        //     $('#from_date').show();
        //     $('#to_date').show();


        // } else {
        //     $('#from_date').hide();
        //     $('#to_date').hide();
        // }
    });
    // $(document).on("change", ".project_name", function () {
    //     var proname = $('#project option:selected').text();
    //     $('#reportproject').text(proname);
    // });
    // $(document).on("change", ".project_name", function () {
    //     var proname = $('#project option:selected').text();
    //     $('#reportproject').text(proname);
    // });
    
    
        $(document).on("change", ".project_name", function () {

        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);

        var from_month = $('#frommonth option:selected').text();
        var from_year  = $('#fromyear option:selected').text();

        var to_month = $('#tomonth option:selected').text();
        var to_year  = $('#toyear option:selected').text();

        var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();

        // alert('from_month:'+from_month+' '+'from_year:'+from_year+' '+'to_month:'+to_month+' '+'to_year:'+to_year+' '+'from_date:'+from_date+' '+'to_date:'+to_date);
    });


    $(document).on("change", ".project_name", function () {

        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);

        var from_month = $('#frommonth option:selected').text();
        var from_year  = $('#fromyear option:selected').text();

        var to_month = $('#tomonth option:selected').text();
        var to_year  = $('#toyear option:selected').text();

        var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();

        // alert('from_month:'+from_month+' '+'from_year:'+from_year+' '+'to_month:'+to_month+' '+'to_year:'+to_year+' '+'from_date:'+from_date+' '+'to_date:'+to_date);
    });


    $(document).on("change", ".project_name", function () {
        var proname = $('#project option:selected').text();
        var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();

        $('#reportproject').text(proname);
        $('#reportfrommonth').text('From Date: '+from_date);   
        $('#reporttonmonth').text('To Date: '+to_date) 
    });



    $(document).on("change","#fromdate",function(){
          var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();
        $('#reportfrommonth').text('From Date: '+from_date);    

    });
    
    
        $(document).on("change","#todate",function(){
          var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();
        $('#reporttonmonth').text('To Date: '+to_date);    

    });
    
    
    
        $(document).on("change","#frommonth",function(){
              var from_month = $('#frommonth option:selected').text();
              
              $("#startmonth").text("From: "+from_month);

 
        });


        $(document).on("change","#tomonth",function(){
        var tomonth =$("#tomonth option:selected").text();
             $("#endmonth").text("To:"+tomonth) 


        });

    $('#project').val('1').trigger('change');
    $('#frommonth').val('May').trigger('change');
    $('#fromyear').val('2019').trigger('change');
    $('#tomonth').val('May').trigger('change');
    $('#toyear').val('2019').trigger('change');
	
	
	
	
	
});


