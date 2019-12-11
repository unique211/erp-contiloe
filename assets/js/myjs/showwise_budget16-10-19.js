$(document).ready(function() {
    var grand_plannedtotal = 0;
    var grant_actualtotal = 0;
    getMasterSelect("project_master", ".project_name", " status = '1' ");
    $('#from_date').hide();
    $('#to_date').hide();
    var project = '';
    var frommonth = '';
    var fromyear = '';
    var tomonth = '';
    var toyear = '';
    var fromdate = '';
    var frommonthtext = '';
    var tomonthtext = '';
    var todate = '';
    var noofepisode = '';

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
    $(document).on("submit", "#showwisereport", function(e) {
        e.preventDefault();
        project = $('#project').val();
        frommonth = $('#frommonth').val();
        fromyear = $('#fromyear').val();
        tomonth = $('#tomonth').val();
        toyear = $('#toyear').val();
        fromdate = $('#fromdate').val();

        todate = $('#todate').val();
        noofepisode = $('#noofepisode').val();
        var fdate = '';
        var tdate = '';
        frommonthtext = $("#frommonth option:selected").text();
        tomonthtext = $("#tomonth option:selected").text();
        if (fromyear > toyear) {
            if (frommonth > tomonth) {
                swal({
                    title: "Plase Select To Month And Year Grather Than From Month And Year ?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok!!",
                    closeOnConfirm: false
                });
            } else if (frommonth == tomonth) {
                if (fromdate > todate) {
                    swal({
                        title: "Plase Select To Date Grather Than From Date ?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok!!",
                        closeOnConfirm: false
                    });
                }


            } else {
                if (frommonth > 7) {
                    if (frommonth % 2 == 0 || tomonth % 2 == 0) {
                        fromdate = fromyear + '-' + frommonth + '-31';
                        todate = toyear + '-' + tomonth + '-31';

                    } else {
                        fromdate = fromyear + '-' + frommonth + '-30';
                        todate = toyear + '-' + tomonth + '-30';
                    }
                } else {
                    if (frommonth == '2' || todate == '2') {
                        fromdate = fromyear + '-02-28';
                        todate = toyear + '-02-28';
                    } else if (frommonth % 2 == 0 || tomonth % 2 == 0) {
                        fromdate = fromyear + '-' + frommonth + '-30';
                        todate = toyear + '-' + tomonth + '-30';
                    } else {
                        fromdate = fromyear + '-' + frommonth + '-31';
                        todate = toyear + '-' + tomonth + '-31';
                    }
                }
            }
        }
        if (tomonth == 'January' || tomonth == 'March' || tomonth == "May" || tomonth == "July" || tomonth == "August" || tomonth == "October" || tomonth == "December") {
            m = 0;
            if (tomonth == "January") {
                m = '1';
            } else if (tomonth == "March") {
                m = '3';
            } else if (tomonth == "May") {
                m = '5';
            } else if (tomonth == "July") {
                m = '7';
            } else if (tomonth == "August") {
                m = '8';
            } else if (tomonth == "October") {
                m = '10';
            } else if (tomonth == "December") {
                m = '11';
            }
            todate = '31' + "/" + m + "/" + toyear;

        } else if (tomonth == "February") {

            todate = '28' + "/" + '2' + "/" + toyear;

        } else {
            if (tomonth == "April") {
                m = '4';
            } else if (tomonth == "June") {
                m = '6';
            } else if (tomonth == "September") {
                m = '9';
            } else if (tomonth == "November") {
                m = '11';
            }

            todate = '30' + "/" + m + "/" + toyear;
        }
        if (frommonth == 'January' || frommonth == 'March' || frommonth == "May" || frommonth == "June" || frommonth == "July" || frommonth == "August" || frommonth == "October" || frommonth == "December") {
            fm = 0;
            if (frommonth == "January") {
                fm = '1';
            } else if (frommonth == "March") {
                fm = '3';
            } else if (frommonth == "May") {
                fm = '5';
            } else if (frommonth == "July") {
                fm = '7';
            } else if (frommonth == "August") {
                fm = '8';
            } else if (frommonth == "October") {
                fm = '10';
            } else if (frommonth == "December") {
                fm = '11';
            }
            fromdate = '1' + "/" + fm + "/" + fromyear;
        } else if (frommonth == "February") {
            fromdate = '1' + "/" + '2' + "/" + fromyear;
        } else {
            if (frommonth == "April") {
                fm = '4';
            } else if (frommonth == "June") {
                fm = '6';
            } else if (frommonth == "September") {
                fm = '9';
            } else if (frommonth == "November") {
                fm = '11';
            }
            fromdate = '1' + "/" + fm + "/" + fromyear
        }

        if ((tomonth == frommonth) && (fromyear == toyear)) {

            fromdate = $('#fromdate').val();
            todate = $('#todate').val();

        }
        var tdateAr = fromdate.split('/');
        fromdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        var tdateAr = todate.split('/');
        todate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        console.log(fromdate + "" + todate + "" + project + "" + fromyear + "" + frommonth + "" + tomonth + "" + toyear);

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
                tomonth: tomonth,
                toyear: toyear,
                frommonthtext: frommonthtext,
                tomonthtext: tomonthtext,
            },
            success: function(data) {
                $('#productionadmintbody').html('');
                $('#allreportentry').html('');
                $('#eposodicrecord').html('');
                $('#peoplecostbody').html('');
                $('#episodicstaffcostbody').html('');
                var markup = '';

                console.log(data);
                var sr = sr + 1;
                if (data != "") {
                    var unit1actualfootage = Array();
                    unit1actualfootage = data[0].unit1actual;
                    var hour = 0;
                    var minitu = 0;
                    var second = 0;
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
                    var hour1 = 0;
                    var minitu1 = 0;
                    var second1 = 0;
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
                    var hour2 = 0;
                    var minitu2 = 0;
                    var second2 = 0;
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
                    var totalvarian = ((parseInt(totalactual) * 100) / parseInt(totaltarget)) - 100;


                    totalaverage = totalaverage.toFixed(2);
                    totalunit = totalunit.toFixed(2);
                    totaltarget = totaltarget.toFixed(2);
                    totalactual = totalactual.toFixed(2);
                    totaverageunit = totaverageunit.toFixed(2);
                    totaldiffert = totaldiffert.toFixed(2);
                    totalvarian = totalvarian.toFixed(2);

                    markup = '<tr>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 2px ;">Unit No. 1</td>' +
                        '<td  style=" text-align:right;" id="shootday1' + sr + '">' + data[0].shootday1 + '</td>' +
                        '<td style=" text-align:right;"  id="perdayfotage1' + sr + '">' + data[0].footage1 + '</td>' +
                        '<td  style=" text-align:right;" id="totalfotage' + sr + '">' + totalfotage + '</td>' +
                        '<td style=" text-align:right;border-right:solid 2px ;"  id="averageunit' + sr + '">' + averageperunit + '</td>' +
                        '<td style=" text-align:right;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[0] + '</td>' +
                        '<td style=" text-align:right;"  id="perdayfotage1' + sr + '">' + targetfootage + '</td>' +
                        '<td style=" text-align:right;" id="actaulfotage' + sr + '">' + parseFloat(minitu).toFixed(2) + '</td>' +
                        '<td style=" text-align:right;"  id="actaulfotage' + sr + '">' + averageperunit1 + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + difference + '</td>' +
                        '<td  style=" text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + Variance + '</td>' +
                        '</tr>' +

                        '<tr>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 2px ;">Unit No. 2</td>' +
                        '<td  style="text-align:right;" id="shootday1' + sr + '">' + data[0].shootday2 + '</td>' +
                        '<td  style=" text-align:right;" id="perdayfotage1' + sr + '">' + data[0].footage2 + '</td>' +
                        '<td  style=" text-align:right;" id="totalfotage' + sr + '">' + totalfotage2 + '</td>' +
                        '<td  style=" text-align:right;border-right:solid 2px ;" id="averageunit' + sr + '">' + averageperunit2 + '</td>' +
                        '<td  style=" text-align:right;" id="perdayfotage1' + sr + '">' + data[0].noofunit[1] + '</td>' +
                        '<td  style=" text-align:right;" id="perdayfotage1' + sr + '">' + targetfootage2 + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + parseFloat(minitu1).toFixed(2) + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + averageperunit12 + '</td>' +
                        '<td  style=" text-align:right;"   id="actaulfotage' + sr + '">' + difference2 + '</td>' +
                        '<td  style=" text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + Variance2 + '</td>' +
                        '</tr>' +

                        '<tr>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 2px ;">Unit No. 3</td>' +
                        '<td style=" text-align:right;"  id="shootday1' + sr + '">' + data[0].shootday3 + '</td>' +
                        '<td style=" text-align:right;"  id="perdayfotage1' + sr + '">' + data[0].footage3 + '</td>' +
                        '<td style=" text-align:right;"  id="totalfotage' + sr + '">' + totalfotage3 + '</td>' +
                        '<td style=" text-align:right;border-right:solid 2px ;" id="averageunit' + sr + '">' + averageperunit3 + '</td>' +
                        '<td style=" text-align:right;" id="perdayfotage1' + sr + '">' + data[0].noofunit[2] + '</td>' +
                        '<td style=" text-align:right;"  id="perdayfotage1' + sr + '">' + targetfootage3 + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + parseFloat(minitu2).toFixed(2) + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + averageperunit13 + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + difference3 + '</td>' +
                        '<td  style=" text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + Variance3 + '</td>' +
                        '</tr>' +

                        '<tr style="background-color:#DCDCDC;">' +
                        '<td   id="unitno' + sr + '" style="border:solid 2px ;border-right: 0px ;"></td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="shootday1' + sr + '">' + totalshootday + '</td>' +
                        '<td   id="perdayfotage1' + sr + '" style="border-top:solid 2px ;border-bottom:solid 2px ;"></td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="totalfotage' + sr + '">' + alltotalfotage + '</td>' +
                        '<td style=" text-align:right;border:solid 2px ;border-left: 0px ;"  id="averageunit' + sr + '">' + totalaverage + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;" id="perdayfotage1' + sr + '">' + Math.round(totalunit) + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="perdayfotage1' + sr + '">' + totaltarget + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;" id="actaulfotage' + sr + '"><button id="getallfotage_data"  class="btn btn-xs btn-info getallfotage" ><i class="fa fa-angle-double-down"></i></button>' + totalactual + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;" id="actaulfotage' + sr + '">' + totaverageunit + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="actaulfotage' + sr + '">' + totaldiffert + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;border-right:solid 2px ;"  id="actaulfotage' + sr + '">' + totalvarian + '</td>' +
                        '</tr>';
                    $('#allreportentry').append(markup);
                    
                    
        //RAVI Actual Expense 15-oct		
					var actual_total_exp = parseInt(data[0].actual_total_exp);
					 var html = '<tr  >' +
                        '<td id="unitno' + sr + '" style="border:solid 2px ;border-right: 0px ;">Actual Expenses</td>' +
                        '<td  style=" text-align:right;solid 2px ;border-bottom:solid 2px;border-right: 2px solid;" id="perdayfotage1' + sr + '"></td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;" id="totalfotage' + sr + '">' + actual_total_exp + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="averageunit' + sr + '"></td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;border-right:solid 2px;" id="averageunit' + sr + '"></td>' +
                        '</tr>';
					$('#eposodicexpenses').append(html);
		//RAVI Actual Expense 15-oct	
			
			
                    var planneedasper = (parseInt(alltotalfotage) / 23)
                    var actualair = (parseInt(totalactual) / 23)
                    var diff = parseFloat(planneedasper) - parseFloat(actualair);
                    planneedasper = planneedasper.toFixed(2);
                    actualair = actualair.toFixed(2);
                    diff = diff.toFixed(2);
                    var html = '<tr  >' +
                        '<td id="unitno' + sr + '" style="border:solid 2px ;border-right: 0px ;">Episodes</td>' +
                        '<td  style=" text-align:right;solid 2px ;border-bottom:solid 2px;border-right: 2px solid;" id="perdayfotage1' + sr + '">' + planneedasper + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;" id="totalfotage' + sr + '">' + actualair + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="averageunit' + sr + '">' + diff + '</td>' +
                        '<td style=" text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;border-right:solid 2px;" id="averageunit' + sr + '"></td>' +
                        '</tr>';
                    $('#eposodicrecord').append(html);

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
                    }
                    if (data[0].shootday2 == 0) {
                        epensestilldate2 = 0;
                    }
                    if (data[0].shootday1 == 0) {
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
                    }
                    if (data[0].totalunit[1] != null) {
                        unittotal2 = data[0].totalunit[1];
                    }
                    if (data[0].totalunit[2] != null) {
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
                    }
                    if (unittotal3 == 0) {
                        peoplevariance3 = 0;
                    }
                    if (unittotal1 == 0) {
                        peoplevariance1 = 0;
                    }
                    peoplevariance1 = peoplevariance1.toFixed(2);
                    peoplevariance2 = peoplevariance2.toFixed(2);
                    peoplevariance3 = peoplevariance3.toFixed(2);

                    totalepensestilldate = parseFloat(epensestilldate1) + parseFloat(epensestilldate3) + parseFloat(epensestilldate2);
                    totalepensestilldate = totalepensestilldate;
                    var actualpeopletotal = parseFloat(unittotal1) + parseFloat(unittotal2) + parseFloat(unittotal3);
                    totalpepolevariance = ((parseFloat(epensestilldate1) * parseFloat(100)) / parseFloat(actualpeopletotal));
                    totalpepolevariance = totalpepolevariance.toFixed(2);
                    var markup1 = '<tr style="border-left:solid 2px ;">' +
                        '<td   style="border-left:solid 2px;"  id="unitno' + sr + '">Unit 1</td>' +
                        '<td style=" text-align:right;"  id="totalfotage' + sr + '">' + monthunit1 + '</td>' +
                        '<td style=" text-align:right;"  id="shootday1' + sr + '">' + data[0].shootday1 + '</td>' +
                        '<td style=" text-align:right;border-left:solid 2px;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[0] + '</td>' +
                        '<td  style=" text-align:right;" id="averageunit' + sr + '">' + epensestilldate1 + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + unittotal1 + '</td>' +
                        '<td  style=" text-align:right;" id="actaulfotage' + sr + '">' + actualdiff1 + '</td>' +
                        '<td style=" text-align:right;text-align:right;border-right:solid 2px ;"  id="actaulfotage' + sr + '">' + peoplevariance1 + '</td>' +
                        '</tr >' +
                        '<tr>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 2px ;" >Unit 2</td>' +
                        '<td style="text-align:right;"  id="totalfotage' + sr + '">' + monthunit2 + '</td>' +
                        '<td  style="text-align:right;" id="shootday1' + sr + '">' + data[0].shootday2 + '</td>' +
                        '<td style="text-align:right;border-left:solid 2px ;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[1] + '</td>' +
                        '<td  style="text-align:right;" id="averageunit' + sr + '">' + epensestilldate2 + '</td>' +
                        '<td  style="text-align:right;" id="actaulfotage' + sr + '">' + unittotal2 + '</td>' +
                        '<td  style="text-align:right;" id="actaulfotage' + sr + '">' + actualdiff2 + '</td>' +
                        '<td  style="text-align:right; text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + peoplevariance2 + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td   id="unitno' + sr + '" style="border-left:solid 2px ;">Unit 3</td>' +
                        '<td  style="text-align:right;"  id="totalfotage' + sr + '">' + monthunit3 + '</td>' +
                        '<td  style="text-align:right;"  id="shootday1' + sr + '">' + data[0].shootday3 + '</td>' +
                        '<td  style="text-align:right;border-left:solid 2px;"  id="perdayfotage1' + sr + '">' + data[0].noofunit[2] + '</td>' +
                        '<td   style="text-align:right;" id="averageunit' + sr + '">' + epensestilldate3 + '</td>' +
                        '<td   style="text-align:right;" id="actaulfotage' + sr + '">' + unittotal2 + '</td>' +
                        '<td  style="text-align:right;"  id="actaulfotage' + sr + '">' + actualdiff3 + '</td>' +
                        '<td   style="text-align:right; text-align:right;border-right:solid 2px ;" id="actaulfotage' + sr + '">' + peoplevariance3 + '</td>' +
                        '</tr>' +
                        '<td  id="unitno' + sr + '" style="border:solid 2px ;border-right: 0px ;">Total</td>' +
                        '<td  style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"   id="totalfotage' + sr + '">' + (parseInt(monthunit1) + parseInt(monthunit2) + parseInt(monthunit3)) + '</td>' +
                        '<td   style="text-align:right;border:solid 2px ;border-left: 0px ;"  id="shootday1' + sr + '">' + (parseInt(data[0].shootday1) + parseInt(data[0].shootday2) + parseInt(data[0].shootday3)) + '</td>' +
                        '<td  style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px;"   id="perdayfotage1' + sr + '">' + (parseInt(data[0].noofunit[0]) + parseInt(data[0].noofunit[1]) + parseInt(data[0].noofunit[2])) + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px;"  id="shootday1' + sr + '">' + totalepensestilldate + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="shootday1' + sr + '">' + (parseInt(unittotal1) + parseInt(unittotal2) + parseInt(unittotal3)) + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="perdayfotage1' + sr + '">' + ((parseInt(actualdiff3) + parseInt(actualdiff2) + parseInt(actualdiff1))) + '</td>' +
                        '<td   style="text-align:right;border:solid 2px ;border-left: 0px ;"  id="perdayfotage1' + sr + '">' + totalpepolevariance + '</td>' +
                        '</tr>';


                    $('#peoplecostbody').append(markup1);
                    var paybel = 0;
                    var episodiccosttotal = data[0].episodicsum;
                    var episodistaffttotal = data[0].episodicstaffsum;
                    if (data[0].episodicstaffsum > 0 && noofepisode > 0) {
                        paybel = parseInt(noofepisode) * parseInt(episodistaffttotal);
                    }


                    var markup2 = '<tr>' +
                        '<td style="border:solid 2px ;border-right: 0px ;" id="unitno' + sr + '">Episodic Expenses</td>' +
                        '<td  style="text-align:right;solid 2px ;border-bottom:solid 2px;border-left: 2px ;"  id="totalfotage' + sr + '">' + episodiccosttotal + '</td>' +
                        '<td  style="text-align:right;solid 2px ;border-bottom:solid 2px;border-left: 2px;border-right: 2px;"  id="shootday1' + sr + '">' + noofepisode + '</td>' +
                        '<td  style="text-align:right;solid 2px ;border-right:solid 2px;border-bottom:solid 2px ;border-left: 2px ;"  id="perdayfotage1' + sr + '">' + paybel + '</td>' +
                        '</tr>';

                    $('#episodicstaffcostbody').append(markup2);

                    var productionbudget = 0;
                    productionbudget = parseInt(data[0].punittotal);
                    var adminstaff = parseInt(data[0].asunittotal);
                    var day = parseInt(data[0].noofday);
                    var targetedproduction = 0;
                    var targetedadminstaff = 0;
                    if (day > 0 && productionbudget > 0) {
                        targetedproduction = (parseInt(productionbudget) * parseInt(day) / 30);
                    }
                    console.log('target' + targetedproduction);
                    if (day > 0 && adminstaff > 0) {
                        targetedadminstaff = (parseInt(adminstaff) * parseInt(day) / 30);
                    }
                    var actalproduction = parseInt(data[0].actalproduction);
                    var actalproductiondiffrent = parseInt(actalproduction) - parseInt(targetedproduction);
                    var actalvariation = (parseInt(100) - (((parseInt(targetedproduction) * parseInt(100)) / parseInt(actalproduction))));

                    var admindifferent = parseInt(targetedadminstaff) - parseInt(targetedadminstaff);
                    var adminvariation = (parseInt(100) - (((parseInt(targetedadminstaff) * parseInt(100)) / parseInt(targetedadminstaff))));
                    console.log("actu" + adminvariation);
                    if (targetedadminstaff == 0) {
                        adminvariation = 0;
                    }
                    var monthlocationcost = data[0].locationcost;
                    var targettotal = parseInt(targetedadminstaff) + parseInt(actalproduction);
                    var totalactaldata = parseInt(actalproductiondiffrent) + parseInt(admindifferent);
                    var totalvariation = (((parseFloat(targettotal) * parseFloat(100)) / parseFloat(totalactaldata))) - parseFloat(100);
                    console.log(targettotal + "" + totalactaldata + "" + totalvariation);
                    actalvariation = actalvariation.toFixed(2);
                    adminvariation = adminvariation.toFixed(2);
                    totalvariation = totalvariation.toFixed(2);
                    targetedproduction = targetedproduction.toFixed(2);
                    targetedadminstaff = targetedadminstaff.toFixed(2);
                    monthlocationcost = parseInt(monthlocationcost).toFixed(0);
                    var markup3 = '<tr>' +
                        '<td  " id="unitno' + sr + '"  style="border-left:solid 2px ;">Production</td>' +
                        '<td   style="text-align:right;" id="totalfotage' + sr + '">' + productionbudget + '</td>' +
                        '<td   style="text-align:right;" id="shootday1' + sr + '">' + day + '</td>' +
                        '<td   style="text-align:right;border-left:solid 2px ;"" id="perdayfotage1' + sr + '">' + targetedproduction + '</td>' +
                        '<td   style="text-align:right;" id="shootday1' + sr + '">' + actalproduction + '</td>' +
                        '<td   style="text-align:right;" id="perdayfotage1' + sr + '">' + actalproductiondiffrent + '</td>' +
                        '<td    style="text-align:right;border-right:solid 2px ;" id="perdayfotage1' + sr + '">' + actalvariation + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td    id="unitno' + sr + '"  style="border-left:solid 2px ;">Admin</td>' +
                        '<td   style="text-align:right;" id="totalfotage' + sr + '">' + adminstaff + '</td>' +
                        '<td   style="text-align:right;" id="shootday1' + sr + '">' + day + '</td>' +
                        '<td   style="text-align:right;border-left:solid 2px ;""  id="perdayfotage1' + sr + '">' + targetedadminstaff + '</td>' +
                        '<td   style="text-align:right;"  id="shootday1' + sr + '">' + targetedadminstaff + '</td>' +
                        '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + admindifferent + '</td>' +
                        '<td   style="text-align:right;border-right:solid 2px ;"  id="perdayfotage1' + sr + '">' + adminvariation + '</td>' +
                        '</tr>' +

                        '<td    id="unitno' + sr + '"  style="border-left:solid 2px ;">Monthly Cost of Location </td>' +
                        '<td   style="text-align:right;" id="totalfotage' + sr + '">' + monthlocationcost + '</td>' +
                        '<td   style="text-align:right;" id="shootday1' + sr + '">-</td>' +
                        '<td   style="text-align:right;border-left:solid 2px ;""  id="perdayfotage1' + sr + '">-</td>' +
                        '<td   style="text-align:right;"  id="shootday1' + sr + '">-</td>' +
                        '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">-</td>' +
                        '<td   style="text-align:right;border-right:solid 2px ;"  id="perdayfotage1' + sr + '">-</td>' +
                        '</tr>' +

                        '<td  id="unitno' + sr + '" style="border:solid 2px ;border-right: 0px ;">Total</td>' +
                        '<td  style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"   id="totalfotage' + sr + '">' + (parseInt(adminstaff) + parseInt(productionbudget) + parseInt(monthlocationcost)) + '</td>' +
                        '<td   style="text-align:right;border:solid 2px ;border-left: 0px ;"  id="shootday1' + sr + '">' + (parseInt(day) + parseInt(day)) + '</td>' +
                        '<td  style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"   id="perdayfotage1' + sr + '">' + (parseInt(targetedadminstaff) + parseInt(targetedproduction)) + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="shootday1' + sr + '">' + (parseInt(targetedadminstaff) + parseInt(actalproduction)) + '</td>' +
                        '<td   style="text-align:right;border-top:solid 2px ;border-bottom:solid 2px ;"  id="perdayfotage1' + sr + '">' + (parseInt(actalproductiondiffrent) + parseInt(admindifferent)) + '</td>' +
                        '<td   style="text-align:right;border:solid 2px ;border-left: 0px ;"  id="perdayfotage1' + sr + '">' + totalvariation + '</td>' +
                        '</tr>';
                    $('#productionadmintbody').append(markup3);

                }
            }
        });
        $.ajax({
            type: "POST",
            url: baseurl + "settings/expensegetbudgetreport",
            dataType: "JSON",
            async: false,
            data: {
                project: project,
                fromdate: fromdate,
                todate: todate,
                fromyear: fromyear,
                frommonth: frommonth,
                tomonth: tomonth,
                toyear: toyear,
                frommonthtext: frommonthtext,
                tomonthtext: tomonthtext,
            },
            success: function(result) {
                $('#expensebudgetbody').html('');
                var sr = 0;
                console.log("result" + result.length);
                var markup4 = '';
                for (var i = 0; i < result.length; i++) {
                    sr = sr + 1;
                    $.ajax({
                        type: "POST",
                        url: baseurl + "settings/expensebudgetsubaccount",
                        dataType: "JSON",
                        async: false,
                        data: {
                            exid: result[i].expenseaccount,
                            todate: todate,
                            project: project,
                            fromdate: fromdate,
                        },
                        success: function(data) {
                            var r1 = $('table#expensebudget').find('tbody').find('tr');
                            var r = r1.length;
                            var code = $(r1[i]).find('td:eq(1)').html();

                            console.log(code + "" + result[i].code);

                            if (result[i].code == code) {
                                result[i].code = "";
                                result[i].name = "";
                                result[i].unitno = "";
                                result[i].planamt = "";
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
                                        '</tr>';
                                    plannedtotal += parseInt(result[i].planamt);
                                    actualtotal += parseInt(data[j].rate);
                                } else {

                                    markup4 += '<tr>' +
                                        '<td  style="text-align:right;" id="shootday1' + sr + '"> </td>' +

                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                        '<td  style="text-align:right;"  id="unitno' + sr + '"></td>' +
                                        '<td  style="text-align:right;"  id="shootday1' + sr + '"></td>' +
                                        '<td    id="perdayfotage1' + sr + '">' + data[j].subaccountname + '</td>' +
                                        '<td   style="text-align:right;" id="perdayfotage1' + sr + '">' + Math.floor(data[j].rate) + '</td>' +
                                        '<td  style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +

                                        '</tr>';
                                    actualtotal += parseInt(data[j].rate);
                                }

                            }
                            variation = parseInt(plannedtotal) - parseInt(actualtotal);
                            markup4 += '<tr style="background-color:#DCDCDC;">' +
                                '<td   style="text-align:right;" id="shootday1' + sr + '"></td>' +
                                '<td   style="text-align:right;" id="unitno' + sr + '"></td>' +
                                '<td   style="text-align:right;" id="perdayfotage1' + sr + '">Total</td>' +
                                '<td   style="text-align:right;"  id="shootday1' + sr + '">' + plannedtotal.toFixed(0) + '</td>' +
                                '<td   style="text-align:right;"  id="perdayfotage1' + sr + '"></td>' +
                                '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + actualtotal + '</td>' +

                                '<td   style="text-align:right;"  id="perdayfotage1' + sr + '">' + variation + '</td>' +
                                '</tr>';
                            grand_plannedtotal += plannedtotal;
                            grant_actualtotal += actualtotal;
                        }
                    });
                    $('.grant_total').text("Planned month total:" + grand_plannedtotal + " " + "AND" + " " + "Actual expenses total " + grant_actualtotal);

                }
                $('#expensebudgetbody').append(markup4);
            }
        });



    });
    $(document).on("change", ".yeardata", function() {
        // alert('hiii');
        var frommonth = $('#frommonth').val();
        var fromyear = $('#fromyear').val();
        var tomonth = $('#tomonth').val();
        var toyear = $('#toyear').val();
        //console.log(frommonth+"from"+fromyear+"to"+tomonth+"to"+toyear);
        if ((tomonth == frommonth && fromyear == toyear)) {
            $('#from_date').show();
            $('#to_date').show();


        } else {
            $('#from_date').hide();
            $('#to_date').hide();
        }
    });
    // $(document).on("change", ".project_name", function () {
    //     var proname = $('#project option:selected').text();
    //     $('#reportproject').text(proname);
    // });
    // $(document).on("change", ".project_name", function () {
    //     var proname = $('#project option:selected').text();
    //     $('#reportproject').text(proname);
    // });


    $(document).on("change", ".project_name", function() {

        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);

        var from_month = $('#frommonth option:selected').text();
        var from_year = $('#fromyear option:selected').text();

        var to_month = $('#tomonth option:selected').text();
        var to_year = $('#toyear option:selected').text();

        var from_date = $('#fromdate').val();
        var to_date = $('#todate').val();

        // alert('from_month:'+from_month+' '+'from_year:'+from_year+' '+'to_month:'+to_month+' '+'to_year:'+to_year+' '+'from_date:'+from_date+' '+'to_date:'+to_date);
    });


    $(document).on("change", ".project_name", function() {

        var proname = $('#project option:selected').text();
        $('#reportproject').text(proname);

        var from_month = $('#frommonth option:selected').text();
        var from_year = $('#fromyear option:selected').text();

        var to_month = $('#tomonth option:selected').text();
        var to_year = $('#toyear option:selected').text();

        var from_date = $('#fromdate').val();
        var to_date = $('#todate').val();

        // alert('from_month:'+from_month+' '+'from_year:'+from_year+' '+'to_month:'+to_month+' '+'to_year:'+to_year+' '+'from_date:'+from_date+' '+'to_date:'+to_date);
    });


    $(document).on("change", ".project_name", function() {
        var proname = $('#project option:selected').text();
        var from_date = $('#fromdate').val();
        var to_date = $('#todate').val();

        $('#reportproject').text(proname);
        $('#reportfrommonth').text('From Date:' + from_date);
        $('#reporttonmonth').text('To Date:' + to_date)
    });



    $(document).on("change", "#fromdate", function() {
        var from_date = $('#fromdate').val();
        var to_date = $('#todate').val();
        $('#reportfrommonth').text('From Date:' + from_date);

    });


    $(document).on("change", "#todate", function() {
        var from_date = $('#fromdate').val();
        var to_date = $('#todate').val();
        $('#reporttonmonth').text('To Date:' + to_date);

    });



    $(document).on("change", "#frommonth", function() {
        var from_month = $('#frommonth option:selected').text();

        $("#startmonth").text("From: " + from_month);


    });


    $(document).on("change", "#tomonth", function() {
        var tomonth = $("#tomonth option:selected").text();
        $("#endmonth").text("To:" + tomonth)


    });

    $('#project').val('1').trigger('change');
    $('#frommonth').val('May').trigger('change');
    $('#fromyear').val('2019').trigger('change');
    $('#tomonth').val('May').trigger('change');
    $('#toyear').val('2019').trigger('change');


    //Click Event of getall Fotage
    $(document).on("click", ".getallfotage", function() {

        $.ajax({
            type: "POST",
            url: baseurl + "settings/getfotagedetalis",
            dataType: "JSON",
            async: false,
            data: {
                project: project,
                fromdate: fromdate,
                todate: todate,
                fromyear: fromyear,
                frommonth: frommonth,
                tomonth: tomonth,
                toyear: toyear,
                frommonthtext: frommonthtext,
                tomonthtext: tomonthtext,
            },
            success: function(data) {
                var table = $('#myTable').DataTable();
                table.destroy();
                var flag = 0;
                var html = '';
                var date = '';
                var datedata = Array();
                var flag = 0;
                var actualfotagetotal = 0;
                var totalhour = 0;
                var totalhour = 0;
                var totalmin = 0;
                var totalsec = 0;

                if (data.length > 0) {
                    datedata = data[0].date;

                }


                $('#get_footage').text('Footage Detalis');
                var title = "Footage Detalis";
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +

                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Date</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Unit</th>' +
                    '<th style="white-space:nowrap;text-align:right;padding:10px 10px;">Targeted Footage till date</th>' +
                    '<th style="white-space:nowrap;text-align:right;padding:10px 10px;">Actual Footage</th>' +
                    '<th style="white-space:nowrap;text-align:right;padding:10px 10px;">Difference</th>' +

                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (var i = 0; i < data.length; i++) {

                    console.log(data[i].date + '  ' + datedata);
                    if (data[i].date == datedata) {
                        //alert(data[i].date + "date" + datedata);
                        var actualfotahge = data[i].actualfotage;
                        var times = actualfotahge.split(':');
                        totalhour += parseInt(times[0]);
                        totalmin += parseInt(times[1]);
                        totalsec += parseInt(times[2]);

                        if (totalsec >= 60) {
                            var m = (parseInt(totalsec) / parseInt(60)) << 0
                            totalmin += parseInt(m);
                            totalsec -= parseInt(60) * parseInt(m);
                        }

                        if (totalmin >= 60) {
                            var h = (parseInt(totalmin) / parseInt(60)) << 0
                            totalhour += parseInt(h);
                            totalmin -= parseInt(60) * parseInt(h);
                        }
                        actualfotagetotal = totalhour + ":" + totalmin + ":" + totalsec;
                        // alert(actualfotagetotal + "" + datedata);
                        flag = 0;
                    } else {


                        flag = 1;
                        //actualfotagetotal = data[i].actualfotage;
                        totalhour = 0;
                        totalhour = 0;
                        totalmin = 0;
                        totalsec = 0;


                    }

                    if (flag == 1) {
                        var difference = 0;
                        console.log(actualfotagetotal + "" + datedata);

                        var tdateAr1 = datedata.split('-');
                        var adate = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];
                        var minitues = "00:" + data[i].minitu + ":00";

                        s = minitues.split(':');

                        e = actualfotagetotal.split(':');
                        var hour = 0;
                        var sec = 0;
                        var min = 0;
                        sec = e[2] - s[2];
                        min = e[1] - s[1];
                        hour_carry = 0;
                        min_carry = 0;
                        if (sec < 0) {
                            sec += 60;
                            // min_carry += 1;
                            console.log("sec" + sec);
                        }
                        if (min < 0) {
                            console.log(min);
                            // min = min + 60;
                            // hour_carry += 1;
                            console.log("min" + min);
                        }
                        if (min_carry != 0) {
                            console.log("mindata");
                            if (min == 0) {
                                //min += 60;
                                //hour_carry += 1;
                                min = min - min_carry;
                            } else {
                                min = min - min_carry;
                            }

                            console.log(min);
                        } else {
                            //min = e[1]-s[1];
                        }
                        if (hour_carry != 0) {
                            hour = e[0] - s[0] - hour_carry;

                            console.log("houtdata" + hour);
                        } else {
                            hour = e[0] - s[0];
                        }


                        html += '<tr>' +

                            '<td id="peopelname_' + data[i].id + '"><b>' + adate + '</b></td>' +
                            '<td id="day_' + data[i].id + '">' + data[i].unitno + '</td>' +
                            '<td  style="text-align:right;" id="rate_' + data[i].id + '">' + "00:" + data[i].minitu + ":00" + '</td>' +
                            '<td style="text-align:right;" id="overtime_' + data[i].id + '">' + actualfotagetotal + '</td>' +
                            '<td style="text-align:right;" id="total_' + data[i].id + '">' + hour + ":" + min + ":" + sec + '</td>' +
                            '</tr>';
                        var actualfotahge = data[i].actualfotage;
                        var times = actualfotahge.split(':');
                        totalhour += parseInt(times[0]);
                        totalmin += parseInt(times[1]);
                        totalsec += parseInt(times[2]);
                        if (totalsec >= 60) {
                            var m = (parseInt(totalsec) / parseInt(60)) << 0
                            totalmin += parseInt(m);
                            totalsec -= parseInt(60) * parseInt(m);
                        }

                        if (totalmin >= 60) {
                            var h = (parseInt(totalmin) / parseInt(60)) << 0
                            totalhour += parseInt(h);
                            totalmin -= parseInt(60) * parseInt(h);
                        }
                        actualfotagetotal = totalhour + ":" + totalmin + ":" + totalsec;

                    }
                    datedata = data[i].date;





                }

                html += '<tfoot></table>';
                $('#getfootageinfo').html(html);
                $('#myTable').DataTable({
                    "displayLength": 500,
                    "order": [
                        [2, "desc"]
                    ],
                    dom: 'Bfrtip',
                    //"dom": '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',
                    buttons: [{
                            extend: 'pdfHtml5',
                            title: 'Footage Detalis',
                            orientation: 'landscape',
                            pageSize: 'A4',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            },
                        },
                        {
                            title: 'Footage Detalis',
                            extend: 'excelHtml5',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            }
                        }
                    ]
                });

            }
        });
    });


});