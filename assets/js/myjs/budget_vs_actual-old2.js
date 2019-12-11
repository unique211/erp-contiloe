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
        


		$('#bodyloader').show();

 //alert("hey")
		
        e.preventDefault();
        var project = $('#project').val();
        var frommonth = $('#frommonth').val();
        var fromyear = $('#fromyear').val();
        var markup4='';
        var status = 1;
        var prev_unit='0';
		var planamt_mth=0;
        var grant_expensetotal = 0;
		var grand_plannedtotal = 0;
        var grant_actualtotal = 0;
		var expensetotal_total 	=0;
		var planamt_mth_total  	=0;
		var variation_total 	=0;
		var variation_plantotal =0;
									
                 
                if ($('#status').is(":checked")){
                    status = 0; 

							markup4 +=' <tr style="border:solid 1px;">'+
                                        '<th style="width:5%;">Expense Code</th>'+
                                                    '<th style="width:15%;"> Expense A/c</th>'+
                                                    '<th style="width:10%;text-align:right;"> Unit No</th>'+
													//'<th style="width:10%;text-align:right;"> Unit of Measurement</th>'+
													'<th style="width:10%;text-align:right;">Plan for the Month till date</th>'+
                                                    '<th style="width:10%;text-align:right;">Actual Expenses Till Date</th>'+
													'<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>'+
                                                   // ' <th style="width:10%;">Expense Sub A/c</th>'+
												   '<th style="width:10%;text-align:right;border-right:solid 2px;">Planned for Day</th>'+
                                                    '<th style="width:10%;text-align:right;">Actual Expenses for Day</th>'+
                                                    
                                                    '<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>'+
													
                                                '</tr>';
                                   
                }
                else
                {
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
        
		
		var plannedtotal = 0;
		var actualtotal = 0;
		var variation = 0;
							
        //var fromdate = $('#fromdate').val();
		var fromdate = $('#todate').val();

		var tdateAr = fromdate.split('/');
        //fromdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		 fromdate = tdateAr[2] + '-' + tdateAr[1] + '-01';
// alert(status+" status");

       var todate = $('#todate').val();
        var tdateAr = todate.split('/');
        todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

//alert(fromdate + ' ' + todate);

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
                status:status,
               
                // tomonthtext: tomonthtext,
            },
            success: function (result) {

                 
                $('#expensebudgetbody').html('');
                var sr = 0;
                console.log("result" + result.length);

//alert("result" + result.length);

                // var markup4 = '';

                for (var i = 0; i < result.length; i++) {
			
			//RAVI	
				//var rid = result[i].expenseaccount; 	
				//if(rid == '26' || rid == '11' ){	
				//	alert( i + ' EXP.ID: ' + result[i].expenseaccount+ ' Name: ' + result[i].name + ' Unit:' + result[i].unitno);
				//}
			//RAVI
			
                    sr = sr + 1;
                    $.ajax({
                        type: "POST",
                        url: baseurl + "settings/expensebudgetsubaccount1",
                        dataType: "JSON",
                        async: false,
                        data: {
                            exid: result[i].expenseaccount,
							unitno: result[i].unitno,
                            todate: todate,
                            project: project,
                            fromdate: fromdate,
                            status:status,
                        },
                        success: function (data) {
                            var r1 = $('table#expensebudget').find('tbody').find('tr');
                            var r = r1.length;
                            var code = $(r1[i]).find('td:eq(1)').html();

                           // console.log(code + "" + result[i].code);

                            // alert(result[i].status+" "+"Is statussss");

//alert(result[i].code +' '+ result[i].name);
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
								
								
                             grand_plannedtotal += parseInt(plannedtotal);
                             grant_actualtotal  = parseInt(actualtotal);
							 
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
                        
                        /*    markup4+='<tr>'+
                      '<td></td>'+
                      '<th>Total</th>'+
                      '<td></td>'+
                      '<td style="text-align:right">'+grand_plannedtotal+'</td>'+
                      '<td style="text-align:right">'+grant_actualtotal+'</td>'+
                      '<td style="text-align:right">'+diff+'</td>'+

                     '</tr>';
*/
                             grand_plannedtotal=0;
                             grant_actualtotal=0;
                        }

                                 prev_unit= cur_unit;
                            
                            //var actualtotal = 0;
                            var variation = 0;
							
                            for (var j = 0; j < data.length; j++) {
                                if (j == 0) {
                                 
									if(!result[i].planamt_mth){
										result[i].planamt_mth = 0;
									}
									
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
									
									expensetotal_total 	+= parseInt(data[j].expensetotal);
									planamt_mth_total 	+= parseInt(result[i].planamt_mth);
									variation_total 	+= variation;
									variation_plantotal += variation_plan;
									
                                   
                                } else {

                                /*RAVI    markup4 += '<tr>' +
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
                                */
									actualtotal += parseInt(data[j].rate);
									//grant_expensetotal  += parseInt(data[j].expensetotal);
                                }

                            }
                            variation = parseInt(plannedtotal) - parseInt(actualtotal);
                            
							  grand_plannedtotal = parseInt(plannedtotal);
                              grant_actualtotal  = parseInt(actualtotal);
							  
//alert(grant_actualtotal + ' ' + actualtotal);
  
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
//$('.grant_total').text(grand_plannedtotal);
//$('.grant_total_e').text(grant_actualtotal);

                }
                    
//alert(status);
                    
				$('#bodyloader').hide();
//RAVI Start

			var toyear = fromyear;
			var tomonth = frommonth;
			var markup5 ='';

//$project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth		
            $.ajax({
            type: "POST",
            url: baseurl + "settings/getallreportdata",
            dataType: "JSON",
            async: false,
            data: {
                project: project,
                fromdate: fromdate,
                todate: todate,
                fromyear: fromyear,
                frommonth: frommonth,
                toyear: toyear,
				tomonth: tomonth,     
            },
            success: function (data) {
                //$('#peoplecostbody').html('HELLO WORLD.....');
                var markup5 = '';
	            console.log(data);
                var sr = sr + 1;
                if (data != "") {
					
					
                    var unit1actualfootage = Array();
                    unit1actualfootage = data[0].unit1actual;
                    var hour = 0; var minitu = 0; var second = 0;
                    var time = '';

                    for (i = 0; i < unit1actualfootage.length; i++) {
                        console.log(unit1actualfootage);
                        time = unit1actualfootage[i].split(':');
                        console.log('time' + time);

                        hour += parseInt(time[0]);
                        minitu += parseInt(time[1]);
                        second += parseInt(time[2]);
                    }
                    if (second > 59) {
                        minitu = parseInt(minitu) + parseInt(second) / 60;
                        //  second = parseInt(second%60);
                    }
                    if (minitu > 59) {
                        hour = parseInt(hour) + parseInt(minitu) / 60;
                        minitu = parseInt(minitu) % 60;
                    }
                    if (hour > 0) {
                        minitu = hour * 60;
                    }
                    if (unit1actualfootage == "") {
                        minitu = 0;
                    }

                    var unit2actualfootage = Array();
                    unit2actualfootage = data[0].unit2actual;
                    var hour1 = 0; var minitu1 = 0; var second1 = 0;
                    var time1 = '';
                    for (i = 0; i < unit2actualfootage.length; i++) {

                        time1 = unit2actualfootage[i].split(':');


                        hour1 += parseInt(time1[0]);
                        minitu1 += parseInt(time1[1]);
                        second1 += parseInt(time1[2]);
                    }
                    if (second > 59) {
                        minitu1 = parseInt(minitu1) + parseInt(second1) / 60;
                        //  second = parseInt(second%60);
                    }
                    if (minitu > 59) {
                        hour1 = parseInt(hour1) + parseInt(minitu1) / 60;
                        minitu1 = parseInt(minitu1) % 60;
                    }
                    if (hour > 0) {
                        minitu1 = hour1 * 60;
                    }

                    var unit3actualfootage = Array();
                    unit3actualfootage = data[0].unit3actual;
                    var hour2 = 0; var minitu2 = 0; var second2 = 0;
                    var time2 = '';
                    for (i = 0; i < unit3actualfootage.length; i++) {

                        time2 = unit3actualfootage[i].split(':');


                        hour2 += parseInt(time2[0]);
                        minitu2 += parseInt(time2[1]);
                        second2 += parseInt(time2[2]);
                    }
                    if (second > 59) {
                        minitu2 = parseInt(minitu2) + parseInt(second2) / 60;
                        //  second = parseInt(second%60);
                    }
                    if (minitu > 59) {
                        hour2 = parseInt(hour2) + parseInt(minitu2) / 60;
                        minitu1 = parseInt(minitu1) % 60;
                    }
                    if (hour > 0) {
                        minitu2 = hour2 * 60;
                    }



                    if (data[0].noofunit[0] != undefined) {
                        var totalfotage = parseInt(data[0].shootday1) * parseInt(data[0].footage1);
                        var averageperunit = (parseInt(totalfotage) / parseInt(data[0].shootday1));
                        var targetfootage = (parseInt(totalfotage) * parseInt(data[0].noofunit[0]) / parseInt(data[0].shootday1));
                        var averageperunit1 = (parseInt(minitu) / parseInt(data[0].noofunit[0]));
                        var difference = parseInt(minitu) - parseInt(targetfootage);
                        var Variance = ((parseInt(minitu) * 100) / parseInt(targetfootage)) - 100;
                    } else {

                        if (data[0].shootday1 != null && data[0].footage1 != null && data[0].shootday1 > 0) {
                            totalfotage = parseInt(data[0].shootday1) * parseInt(data[0].footage1);
                            averageperunit = parseInt(totalfotage) / parseInt(data[0].shootday1);
                            averageperunit1 = 0;
                            difference = 0;
                            targetfootage = 0;
                            Variance = 0;
                            data[0].noofunit[0] = 0;
                        } else {
                            averageperunit = 0;
                            totalfotage = 0;
                            averageperunit1 = 0;
                            difference = 0;
                            targetfootage = 0;
                            Variance = 0;
                            data[0].noofunit[0] = 0;
                        }
                    }
                    totalfotage = totalfotage.toFixed(2);
                    averageperunit = averageperunit.toFixed(2);
                    targetfootage = targetfootage.toFixed(2);
                    averageperunit1 = averageperunit1.toFixed(2);
                    difference = difference.toFixed(2);
                    Variance = Variance.toFixed(2);
                    var b = averageperunit.toString().substring(0, averageperunit.toString().indexOf(".") + 3);
                    /* Math.floor(averageperunit) 
                     console.log(targetfootage);
                     console.log(averageperunit1);
                     console.log(difference);
                     console.log(Variance);*/

                    if (data[0].noofunit[1] != undefined) {
                        var totalfotage2 = (parseInt(data[0].shootday2) * parseInt(data[0].footage2));
                        var averageperunit2 = (parseInt(totalfotage2) / parseInt(data[0].shootday2));
                        var targetfootage2 = (parseInt(totalfotage) * parseInt(data[0].noofunit[1]) / parseInt(data[0].shootday2));
                        var averageperunit12 = (parseInt(minitu1) / parseInt(data[0].noofunit[1]));
                        var difference2 = parseInt(minitu1) - parseInt(targetfootage2);
                        var Variance2 = ((parseInt(minitu1) * 100) / parseInt(targetfootage2)) - 100;
                    } else {
                        //totalfotage2=0;
                        // averageperunit2=0;
                        if (data[0].shootday2 != null && data[0].footage2 != null && data[0].shootday2 > 0) {
                            totalfotage2 = parseInt(data[0].shootday2) * parseInt(data[0].footage2);
                            averageperunit2 = parseInt(totalfotage2) / parseInt(data[0].shootday2);
                            targetfootage2 = 0;
                            averageperunit12 = 0;
                            difference2 = 0;
                            Variance2 = 0;
                            data[0].noofunit[1] = 0;
                        } else {
                            totalfotage2 = 0;
                            averageperunit2 = 0;
                            targetfootage2 = 0;
                            averageperunit12 = 0;
                            difference2 = 0;
                            Variance2 = 0;
                            data[0].noofunit[1] = 0;
                        }
                    }
                    totalfotage2 = totalfotage2.toFixed(2);
                    averageperunit2 = averageperunit2.toFixed(2);
                    targetfootage2 = targetfootage2.toFixed(2);
                    averageperunit12 = averageperunit12.toFixed(2);
                    difference2 = difference2.toFixed(2);
                    //data[0].noofunit[1].toPrecision(2);
                    Variance2 = Variance2.toFixed(2);

                    if (data[0].noofunit[2] != undefined) {

                        var totalfotage3 = parseInt(data[0].shootday3) * parseInt(data[0].footage3);
                        var averageperunit3 = (parseInt(totalfotage3) / parseInt(data[0].shootday3));
                        var targetfootage3 = (parseInt(totalfotage3) * parseInt(data[0].noofunit[2]) / parseInt(data[0].shootday3));
                        var averageperunit13 = (parseInt(minitu2) / parseInt(data[0].noofunit[2]));
                        var difference3 = (parseInt(minitu2) - parseInt(targetfootage3));
                        var Variance3 = (parseInt(minitu2) * 100) / parseInt(targetfootage3) - 100;

                    } else {
                        //totalfotage3=0;  
                        if (data[0].shootday3 != null && data[0].shootday3 > 0) {
                            totalfotage3 = parseInt(data[0].shootday3) * parseInt(data[0].footage3);
                            averageperunit3 = parseInt(totalfotage3) / parseInt(data[0].shootday3);
                            targetfootage3 = 0;
                            averageperunit13 = 0;
                            difference3 = 0;
                            Variance3 = 0;
                            data[0].noofunit[2] = 0;
                        } else {
                            averageperunit3 = 0;
                            targetfootage3 = 0;
                            averageperunit13 = 0;
                            difference3 = 0;
                            Variance3 = 0;
                            data[0].noofunit[2] = 0;
                            totalfotage3 = 0;
                        }
                    }
                    difference3 = difference3.toFixed(2);
                    averageperunit3 = averageperunit3.toFixed(2);
                    targetfootage3 = targetfootage3.toFixed(2);
                    averageperunit13 = averageperunit13.toFixed(2);
                    Variance3 = Variance3.toFixed(2);
                    totalfotage3 = totalfotage3.toFixed(2);

                    var totalshootday = parseInt(data[0].shootday3) + parseInt(data[0].shootday2) + parseInt(data[0].shootday1);
                    var alltotalfotage = parseInt(totalfotage) + parseInt(totalfotage2) + parseInt(totalfotage3);
                    var totalaverage = (parseInt(alltotalfotage) / parseInt(totalshootday));
                    var totalunit = parseInt(data[0].noofunit[0]) + parseInt(data[0].noofunit[1]) + parseInt(data[0].noofunit[2]);
                    var totaltarget = parseInt(targetfootage) + parseInt(targetfootage2) + parseInt(targetfootage3);
                    var totalactual = parseInt(minitu) + parseInt(minitu1) + parseInt(minitu2);
                    var totaverageunit = (parseInt(totalactual) / parseInt(totalunit));
                    var totaldiffert = parseInt(difference) + parseInt(difference2) + parseInt(difference3);
                    var totalvarian = ((parseInt(totalactual) * 100) / parseInt(totaltarget))  - 100;


                    totalaverage = totalaverage.toFixed(2);
                    totalunit = totalunit.toFixed(2);
                    totaltarget = totaltarget.toFixed(2);
                    totalactual = totalactual.toFixed(2);
                    totaverageunit = totaverageunit.toFixed(2);
                    totaldiffert = totaldiffert.toFixed(2);
                    totalvarian = totalvarian.toFixed(2);

                   
                    var planneedasper = (parseInt(alltotalfotage) / 23)
                    var actualair = (parseInt(totalactual) / 23)
                    var diff = parseFloat(planneedasper) - parseFloat(actualair);
                    planneedasper = planneedasper.toFixed(2);
                    actualair = actualair.toFixed(2);
                    diff = diff.toFixed(2);
                   
                    var epensestilldate2 = 0;
                    var epensestilldate3 = 0;
                    var monthunit1 = data[0].monthunit1;
                    var monthunit2 = data[0].monthunit2;
                    var monthunit3 = data[0].monthunit3;
                    var epensestilldate1 = (parseInt(monthunit1) * parseInt(data[0].noofunit[0]) / parseInt(data[0].shootday1));
                    var epensestilldate2 = (parseInt(monthunit2) * parseInt(data[0].noofunit[1]) / parseInt(data[0].shootday2));
                    var epensestilldate3 = (parseInt(monthunit3) * parseInt(data[0].noofunit[2]) / parseInt(data[0].shootday3));

                    if (data[0].shootday3 == 0) {
                        epensestilldate3 = 0;
                    } if (data[0].shootday2 == 0) {
                        epensestilldate2 = 0;
                    } if (data[0].shootday1 == 0) {
                        epensestilldate1 = 0;
                    }
                    var unittotal1 = 0;
                    var unittotal2 = 0;
                    var unittotal3 = 0;
                    epensestilldate1 = epensestilldate1;
                    epensestilldate2 = epensestilldate2;
                    epensestilldate3 = epensestilldate3;

                    if (data[0].totalunit[0] != null) {
                        unittotal1 = data[0].totalunit[0];
                    } if (data[0].totalunit[1] != null) {
                        unittotal2 = data[0].totalunit[1];
                    } if (data[0].totalunit[2] != null) {
                        unittotal3 = data[0].totalunit[2];
                    }

                    var actualdiff1 = parseInt(epensestilldate1) - parseInt(unittotal1);
                    var actualdiff2 = parseInt(epensestilldate2) - parseInt(unittotal2);
                    var actualdiff3 = parseInt(epensestilldate3) - parseInt(unittotal3);
                    if (unittotal1 == 0 && epensestilldate1 == 0) {
                        actualdiff1 = 0;
                    }
                    if (unittotal2 == 0 && epensestilldate2 == 0) {
                        actualdiff2 = 0;
                    }
                    if (unittotal3 == 0 && epensestilldate3 == 0) {
                        actualdiff3 = 0;
                    }


                    var peoplevariance1 = (parseInt(epensestilldate1) * parseInt(100) / parseInt(unittotal1));
                    var peoplevariance2 = (parseInt(epensestilldate2) * parseInt(100) / parseInt(unittotal2));
                    var peoplevariance3 = (parseInt(epensestilldate3) * parseInt(100) / parseInt(unittotal3));

                    if (unittotal2 == 0) {
                        peoplevariance2 = 0;
                    } if (unittotal3 == 0) {
                        peoplevariance3 = 0;
                    } if (unittotal1 == 0) {
                        peoplevariance1 = 0;
                    }
                    peoplevariance1 = peoplevariance1.toFixed(2);
                    peoplevariance2 = peoplevariance2.toFixed(2);
                    peoplevariance3 = peoplevariance3.toFixed(2);

                    totalepensestilldate = parseFloat(epensestilldate1) + parseFloat(epensestilldate3) + parseFloat(epensestilldate2);
                    totalepensestilldate = totalepensestilldate;
                    var actualpeopletotal = parseFloat(unittotal1) + parseFloat(unittotal2) + parseFloat(unittotal3);
                    totalpepolevariance = ((parseFloat(epensestilldate1) * parseFloat(100)) / parseFloat(actualpeopletotal)) ;
                    totalpepolevariance = totalpepolevariance.toFixed(2);
					
					planamt_mth_total = planamt_mth_total + totalepensestilldate;
					expensetotal_total = expensetotal_total + actualpeopletotal;
					variation_plantotal = planamt_mth_total - expensetotal_total;
					
                    var markup5 = '<tr style="border-left:solid 0px ;">' +
                        '<td   style="border-left:solid 0px;"  id="unitno' + sr + '"></td>' +
                        //'<td   style="border-left:solid 0px;"  id="unitno' + sr + '">Unit 1</td>' +
                        '<td   style="border-left:solid 0px;"  id="unitno' + sr + '">Artist Cost</td>' +
                        //'<td style=" text-align:right;"  id="totalfotage' + sr + '">' + monthunit1 + '</td>' +
                       //'<td style=" text-align:right;"  id="shootday1' + sr + '">' + data[0].shootday1 + '</td>' +
                        //'<td style=" text-align:right;border-left:solid 2px;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[0] + '</td>' +
                        '<td   style="border-left:solid 0px;"  id="unitno' + sr + '">Unit 1</td>' +
                        '<td  style=" text-align:right;" id="averageunit' + sr + '">' + epensestilldate1 + ' </td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + unittotal1 + ' </td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + actualdiff1 + '</td>' +
                        //'<td style=" text-align:right;text-align:right;border-right:solid 2px ;"  id="actaulfotage' + sr + '">' + peoplevariance1 + '</td>' +
                        '</tr >' +
                        '<tr>' +
						'<td   style="border-left:solid 0px;"  id="unitno' + sr + '"></td>' +
                        //'<td   id="unitno' + sr + '" style="border-left:solid 0px ;" >Unit 2</td>' +
                        '<td   style="border-left:solid 0px;"  id="unitno' + sr + '">Artist Cost</td>' +
                        //'<td style="text-align:right;"  id="totalfotage' + sr + '">' + monthunit2 + '</td>' +
                        //'<td  style="text-align:right;" id="shootday1' + sr + '">' + data[0].shootday2 + '</td>' +
                        //'<td style="text-align:right;border-left:solid 2px ;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[1] + '</td>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 0px ;" >Unit 2</td>' +
                        '<td  style="text-align:right;" id="averageunit' + sr + '">' + epensestilldate2 + '</td>' +
                        '<td  style="text-align:right;" id="actaulfotage' + sr + '">' + unittotal2 + '</td>' +
                        '<td  style="text-align:right;" id="actaulfotage' + sr + '">' + actualdiff2 + '</td>' +
                        //'<td  style="text-align:right; text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + peoplevariance2 + '</td>' +
                        '</tr>' +
                        '<tr>' +
						'<td   style="border-left:solid 0px;"  id="unitno' + sr + '"></td>' +
                        //'<td   id="unitno' + sr + '" style="border-left:solid 0px ;">Unit 3</td>' +
                        '<td   style="border-left:solid 0px;"  id="unitno' + sr + '">Artist Cost</td>' +
                        //'<td  style="text-align:right;"  id="totalfotage' + sr + '">' + monthunit3 + '</td>' +
                        //'<td  style="text-align:right;"  id="shootday1' + sr + '">' + data[0].shootday3 + '</td>' +
                        //'<td  style="text-align:right;border-left:solid 2px;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[2] + '</td>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 0px ;">Unit 3</td>' +
                        '<td   style="text-align:right;" id="averageunit' + sr + '">' + epensestilldate3 + '</td>' +
                        '<td   style="text-align:right;" id="actaulfotage' + sr + '">' + unittotal3 + '</td>' +
                        '<td  style="text-align:right;"  id="actaulfotage' + sr + '">' + actualdiff3 + '</td>' +
                        //'<td   style="text-align:right; text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + peoplevariance3 + '</td>' +
                        '</tr>' +
                    /*    '<td  id="unitno' + sr + '" style="border:solid 2px ;border-right: 0px ;">Total</td>' +
                        '<td  style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"   id="totalfotage' + sr + '">' + (parseInt(monthunit1) + parseInt(monthunit2) + parseInt(monthunit3)) + '</td>' +
                        '<td   style="text-align:right;border:solid 2px ;border-left: 0px ;"  id="shootday1' + sr + '">' + (parseInt(data[0].shootday1) + parseInt(data[0].shootday2) + parseInt(data[0].shootday3)) + '</td>' +
                        '<td  style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px;"   id="perdayfotage1' + sr + '">' + (parseInt(data[0].noofunit[0]) + parseInt(data[0].noofunit[1]) + parseInt(data[0].noofunit[2])) + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px;"  id="shootday1' + sr + '">' + totalepensestilldate + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="shootday1' + sr + '">' + (parseInt(unittotal1) + parseInt(unittotal2) + parseInt(unittotal3)) + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="perdayfotage1' + sr + '">' + ((parseInt(actualdiff3) + parseInt(actualdiff2) + parseInt(actualdiff1))) + '</td>' +
                        //'<td   style="text-align:right;border:solid 2px ;border-left: 0px ;"  id="perdayfotage1' + sr + '">' + totalpepolevariance + '</td>' +
                        '</tr>'
					*/
						' ';
//alert(markup5);

                }

					if(status == 0 )
                    {
//Summary Report
			
                        var diff_paln = grand_plannedtotal-grant_actualtotal;
						var diff=grant_expensetotal-grant_actualtotal;
						var variation_total = grand_plannedtotal - grant_actualtotal;
                        
                      markup5+='<tr  style="border:solid 1px;">'+
                      '<td></td>'+
                      '<th>Total Summary</th>'+
                     
					   '<td></td>'+
					  '<td style="text-align:right">'+planamt_mth_total.toFixed(0)+'</td>'+
					  '<td style="text-align:right">'+expensetotal_total.toFixed(0)+'</td>'+
					  '<td style="text-align:right">'+variation_plantotal.toFixed(0)+'</td>'+
					//'<td style="text-align:right">'+grant_expensetotal.toFixed(0)+'</td>'+
					    
					  '<td style="text-align:right">'+grand_plannedtotal.toFixed(0)+'</td>'+
                      '<td style="text-align:right">'+grant_actualtotal.toFixed(0)+'</td>'+
                      '<td style="text-align:right">'+variation_total.toFixed(0)+'</td>'+
					 
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


				//$('#peoplecostbody').html(markup5);
				$('#expensebudgetbody').append(markup4);
				$('#expensebudgetbody').append(markup5);
				
				
            }
        });
		
//RAVI End
				
                
				
				
               
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
        //$('#reportfrommonth').text('From Date: '+from_date);   
        $('#reporttonmonth').text('As on Date: '+to_date) 
    });



    $(document).on("change","#fromdate",function(){
          var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();
        $('#reportfrommonth').text('From Date: '+from_date);    

    });
    
    
        $(document).on("change","#todate",function(){
          var from_date = $('#fromdate').val();
        var to_date   = $('#todate').val();
        $('#reporttonmonth').text('As on Date: '+to_date);    

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
    $('#frommonth').val('Select').trigger('change');
    $('#fromyear').val('2019').trigger('change');
    $('#tomonth').val('').trigger('change');
    $('#toyear').val('2019').trigger('change');
	
	
	
	
	
});


