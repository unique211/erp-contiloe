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

$(".gen_btn").click(function(){
// alert("hey");
var project=$("#project").val();

var fromdate=$('#fromdate').val();

var todate=$("#todate").val();


		var tdateAr = fromdate.split('/');
        fromdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
		
		var tdateAr = todate.split('/');
        todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

// alert(fromdate+" "+todate);


$.ajax({
	url:baseurl + "settings/get_payment_req_report",
	method:'post',
	data:{
		fromdate:fromdate,
		todate:todate,
		project:project
	},
	success:function(data){
		// alert(data);

		$("#payment_req_body").html(data);
	}


});



});

    $(document).on("change", ".fromdate", function () {
        var fromdate = $('#fromdate').val();
         // alert('hiii');
		$('#reportfromdate').text(fromdate);
       
    });


    $(document).on("change", ".todate", function () {
        var fromdate = $('#todate').val();
         // alert('hiii');
		$('#reporttodate').text(fromdate);
       
    });



        $(document).on("change", ".project_name", function () {
        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);
    });
    $(document).on("change", ".project_name", function () {
        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);
    });