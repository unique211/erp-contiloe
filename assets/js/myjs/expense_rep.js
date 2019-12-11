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
        var fdate = '';
        var tdate = '';
        
        fromdate = $('#fromdate').val();
		todate = $('#todate').val();
		
		var tdateAr = fromdate.split('/');
        fromdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		
		var tdateAr = todate.split('/');
        todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		
//		alert(project + ' ' + fromdate );
		
//		var strURL = "targetp_func.php";
//		$.post(strURL,{ project:project,fromdate:fromdate},function(result){
//			  $('#expensebudgetbody').html('result');
//		});
		
//start		
		$.ajax({
            type: "POST",
            url: baseurl + "settings/expensegetreport",
            dataType: "JSON",
            async: false,
            data: {
                project: project,
                fromdate: fromdate,
				todate: todate,
            },
			success: function (data) {
                console.log(data);
               //alert(project + ' ' + fromdate );
                
				markup4 = '';
				 sr=0;
				 actualtotal= 0
				for (i = 0; i < data.length; i++) {
					 sr=sr+1;
					 amount	= parseInt(data[i].rate) * parseInt(data[i].qty);
							
                                    markup4 += '<tr>' +
										 '<td  style="text-align:left;" id="shootday1' + sr + '"> ' + data[i].date + ' </td>' +
                                        '<td  style="text-align:left;" id="expenname' + sr + '"> ' + data[i].expenname + ' </td>' +
                                        '<td  style="text-align:left;"  id="subaccname' + sr + '">' + data[i].subaccname + '</td>' +
                                        '<td  style="text-align:left;"  id="narration' + sr + '">' + data[i].narration + '</td>' +
                                        '<td   style="text-align:right;" id="rate' + sr + '">' + Math.floor(data[i].rate) + '</td>' +
                                        '<td   style="text-align:right;" id="qty' + sr + '">' + Math.floor(data[i].qty) + '</td>' + 
										'<td  style="text-align:left;"  id="unitname' + sr + '">' + data[i].unitname + '</td>' +
                                        '<td    id="paymenttype' + sr + '">' + data[i].paymentmode + '</td>' +
                                        '<td  style="text-align:right;"  id="amount' + sr + '">' + amount + '</td>' +

                                        '</tr>';
                            actualtotal += parseInt(amount);
					
					
				}
				actualtotal = 'Total : ' + actualtotal;
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
