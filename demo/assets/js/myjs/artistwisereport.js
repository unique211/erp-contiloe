$(document).ready(function () {
    getMasterSelect("project_master", ".project_name", " status = '1' ");
    $('#from_date').hide();
    $('#to_date').hide();
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

  $(document).on("submit", "#showwisereport", function (e) {
        e.preventDefault();
        var project = $('#project').val();
		var peopletype = $('#peopletype').val();
        var fdate = '';
        var tdate = '';
        
        fromdate = $('#fromdate').val();
		todate = $('#todate').val();
		
		var tdateAr = fromdate.split('/');
        fromdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		
		var tdateAr = todate.split('/');
        todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		
	//alert(project + ' ' + fromdate + ' ' + peopletype );
		
//		var strURL = "targetp_func.php";
//		$.post(strURL,{ project:project,fromdate:fromdate},function(result){
//			  $('#expensebudgetbody').html('result');
//		});
		
//start		
		$.ajax({
            type: "POST",
            url: baseurl + "settings/artistwisereport",
            dataType: "JSON",
            async: false,
            data: {
                project: project,
				peopletype: peopletype,
                fromdate: fromdate,
				todate: todate,
            },
			success: function (data) {
                console.log(data);
				markup4 = '';
				peoplename = '';
				charecter	= data[i].charecter;
				amt			= 0;
				amt_tot		= 0 ;
				grandtotal	= 0;
				peopletype  = 0;
				 sr=0;
				 actualtotal= 0
				for (i = 0; i < data.length; i++) {
					 sr=sr+1;
					 //amount	= parseInt(data[i].rate) * parseInt(data[i].qty);
					
					if( peoplename != data[i].peoplename || charecter != data[i].charecter ){
						if(peoplename!='' && charecter!=''){	
							markup4 += '<tr><th colspan="6" style="text-align: right;" >TOTAL</th> <th colspan="4"></th>' +
										'<td style="text-align: right;">' + amt_tot.toFixed(2) + '</td>' +
										'</tr>' ;
										
						}				
							amt			= 0;
							amt_tot		= 0 ;
							markup4 += '<tr>' +'<th >' + data[i].peopletype + '</th>' +
										'<th colspan="3" >' + data[i].charecter + '</th>' +
										'<th colspan="5">' + data[i].peoplename + '</th> <th colspan="2"></th>' +
										'</tr>' ;
					}
					
					peopletype  	= data[i].peopletypeid;
					charecter 		= data[i].charecter;
					
					//if(peopletype=='2'){
					//	amt 			= parseFloat(data[i].amt);
					//}
					//else{					
					//	amt 			= parseFloat(data[i].amount);
					//}
					
					amt				= parseFloat(data[i].amt);
					amt_tot			= parseFloat(amt_tot) + parseFloat(amt);
					//fromdate		= data[i].date;
					var tdate 		= data[i].rdate;
					var tdate = tdate.split('-');
					tdate = tdate[2] + '-' + tdate[1] + '-' + tdate[0];
					
					        markup4 += '<tr>' +'<td ></td>' +
										
										'<td >' + tdate + '</td>' +
										'<td >' + data[i].unitno + '</td>' +
										
										'<td >' + data[i].location + '</td>' +
										'<td style="text-align: right;">' + data[i].actualfromtime + '</td>' +
										'<td style="text-align: right;">' + data[i].actualtotime + '</td>' +
										'<td style="text-align: right;">' + data[i].duration + '</td>' +
										'<td style="text-align: right;">' + data[i].rate + '</td>' +
										'<td style="text-align: right;">' + data[i].overtime + '</td>' +
										'<td style="text-align: right;">' + data[i].extrahour + '</td>' +
										'<td style="text-align: right;">' + amt.toFixed(2) + '</td>' +
							+ '</tr>';
                           grandtotal += parseFloat(amt); 
						   
							peoplename = data[i].peoplename;
							
				}
				
				markup4 += '<tr><th colspan="6" style="text-align: right;" >TOTAL</th> <th colspan="4"></th>' +
										'<td style="text-align: right;">' + amt_tot.toFixed(2) + '</td>' +
										'</tr>' ;
				markup4 += '<tr><th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 14px;color:#000000;text-align: right;" >GRAND TOTAL</th> <th colspan="4" style="text-align:center;background-color:#DCDCDC;font-size: 14px;color:#000000;text-align: right;" ></th>' +
										'<td style="text-align:center;background-color:#DCDCDC;font-size: 14px;color:#000000;text-align: right;" >' + grandtotal.toFixed(2) + '</td>' +
										'</tr>' ;
										
				actualtotal = 'Total : ' + grandtotal.toFixed(2);
				$('#expensebudgetbody').html(markup4);
				
				$('.grant_total').html(actualtotal);
				
	            $('#reportfromdate').html(fromdate);
			
				$('#reporttodate').html(todate);
						
			}
			
        });
//
			
//
//end		
		
	})
	
    $(document).on("change", ".fromdate", function () {
        var fromdate = $('#fromdate').val();
         alert('hiii');
		$('#reportfromdate').text(fromdate);
       
    });
	
//	$('#fromdate').change(function(){
//		var this_val = $(this).val();
	//	alert(this_val + ' Hello123');
//		$('#fromdate').val(this_val);
		
//	} )

	
    $(document).on("change", ".project_name", function () {
        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);
    });
    $(document).on("change", ".project_name", function () {
        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);
    });
    $('#project').val('1').trigger('change');
    $('#frommonth').val('May').trigger('change');
    $('#fromyear').val('2019').trigger('change');
    $('#tomonth').val('May').trigger('change');
    $('#toyear').val('2019').trigger('change');
});
