$(document).ready(function() {


    //  $('.s_date').datetimepicker({format:"MM/YYYY",});
    var date = new Date();
    date = date.toString('MM/yyyy');
    $('#s_date').val(date);


    getMasterSelect("project_master", ".project_name", " status = '1'");


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




    var getDaysInMonth = function(month, year) {

        return new Date(year, month, 0).getDate();

    };



    /*------------getting First Date And Last Date ---------------------*/

    function gettting_Artistdata() {


        var supplier = $('#supplier').val();
        var project = $('#project').val();
        var people_typename = $("#people_type option:selected").text();
        var Sdate = $('#s_date').val();
        var tdateAr = Sdate.split('/');
        var date2 = tdateAr[1] + '-' + tdateAr[0];
        console.log(tdateAr[1] + "" + tdateAr[0]);

        var day = getDaysInMonth(tdateAr[0], tdateAr[1]);
        var tdateAr = Sdate.split('/');
        first = "1";
        var sdate = tdateAr[1] + '-' + tdateAr[0] + '-' + '1';

        var tdateAr1 = Sdate.split('/');
        var todate = tdateAr[1] + '-' + tdateAr[0] + '-' + day;
        if (project > 0 && supplier > 0) {

            var saveid = $('#save_update').val();
            //alert(saveid);
            if (saveid == "") {
                // $.ajax({
                //     type: "POST",
                //     url: baseurl + "Invoice_Entry/checkinvoicegenerate",
                //     dataType: "JSON",
                //     data: {
                //         project: project,
                //         supplier: supplier,
                //         date2: date2,
                //     },
                //     success: function(data) {
                //         if (data == 100) {
                //             swal("This Month Invoice Is Generated");

                //         } else {



                $.ajax({
                    type: "POST",
                    url: baseurl + "Invoice_Entry/getartisdata",
                    data: {
                        table_name: table_name,
                        supplier: supplier,
                        project: project,
                        sdate: sdate,
                        todate: todate,
                        people_typename: people_typename,
                    },
                    dataType: "JSON",
                    async: false,
                    success: function(data) {
                        $('#daytotal').text('0');
                        $('#passedamt').text('0');
                        $('#balanceamt').val('0');
                        // $('#actualdatatb').DataTable().destroy();
                        $('#actualtbody').html('');
                        var enterdate = Array();
                        var row_id = 0;
                        var flag = 0;
                        var amt = 0;
                        var amtdaat = 0;
                        var markup = "";
                        var alltotal = 0;
                        var totalextrahour = 0;
                        var daytotal = 0;
                        var alldaytotal = 0;
                        var balancetotal = 0;
                        var passamt = 0;
                        var balanceamt = 0;
                        var passedtotal = 0;
                        var totalleave = 0;
                        var counter = 0;
                        var monthlysalary = 0;
                        if (data.length > 0) {


                            /* for (var i = 0; i < data.length; i++) {

                             }*/

                            for (var i = 0; i < data.length; i++) {
                                var overdata = "";
                                if (people_typename == "Artist") {
                                    if (data[i].overtime > 0 && data[i].extrahour > 0) {

                                        totalextrahour = parseFloat(data[i].overtime) * parseFloat(data[i].extrahour);
                                        totalextrahour = Math.round(totalextrahour);

                                    } else {
                                        totalextrahour = 0;
                                    }

                                    daytotal = parseInt(data[i].rate) + parseInt(totalextrahour);
                                    alldaytotal = parseInt(alldaytotal) + parseInt(daytotal);

                                    if (data[i].passedamt > 0) {
                                        passamt = data[i].passedamt;
                                        balanceamt = data[i].balanceamt;
                                    } else {
                                        passamt = daytotal;
                                        balanceamt = 0;
                                    }
                                    balancetotal = parseInt(balanceamt) + parseInt(balancetotal);
                                    passedtotal = parseInt(passedtotal) + parseInt(passamt);
                                }

                                var tdateAr1 = data[i].date.split('-');
                                var adate = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];

                                row_id = row_id + 1;
                                var datedata = data[i].date;

                                if (people_typename == "Production") {



                                    if (data[i].unitname == "Per Month") {
                                        for (var j = 0; j < enterdate.length; j++) {
                                            console.log("Entry Date" + enterdate[j] + "data[i].date" + data[i].date);
                                            if (enterdate[j] == data[i].date) {
                                                flag = 1;
                                            }
                                        }
                                        if (flag == 1) {

                                            console.log("from Entry date:" + enterdate[j])
                                            markup = '<tr style="display:none;"  class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                                '<td  style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data[i].id + '</label></td>' +
                                                '<td > <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                                '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data[i].rate + '</label></td>' +
                                                '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                                '<td   id="callremark" style="text-align:right;" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + data[i].overtime + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm " id="apassamt_' + row_id + '" style="text-align:right;" value=' + passamt + ' disabled><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm " id="abalance_' + row_id + '" style="text-align:right;" value=' + balanceamt + ' disabled></td>' +
                                                '</tr>';
                                            flag = 0;
                                        } else {

                                            if (data[i].overtime > 0 && data[i].extrahour > 0) {

                                                totalextrahour = parseFloat(data[i].overtime) * parseFloat(data[i].extrahour);
                                                totalextrahour = Math.round(totalextrahour);
                                            } else {
                                                totalextrahour = 0;
                                            }
                                            //  alert(totalextrahour);
                                            console.log("data[i].rate" + data[i].rate);
                                            daytotal = (parseInt(data[i].rate) / parseInt(day)) + parseInt(totalextrahour);
                                            daytotal = Math.round(daytotal);
                                            var rate = (parseInt(data[i].rate) / parseInt(day));
                                            monthlysalary = parseInt(data[i].rate);
                                            rate = Math.round(rate);

                                            alldaytotal = parseInt(alldaytotal) + parseInt(daytotal);
                                            paiddayamt = rate;
                                            if (data[i].passedamt > 0) {
                                                passamt = data[i].passedamt;
                                                balanceamt = data[i].balanceamt;
                                            } else {
                                                passamt = daytotal;
                                                balanceamt = 0;
                                            }

                                            balancetotal = parseInt(balanceamt) + parseInt(balancetotal);
                                            passedtotal = parseInt(passedtotal) + parseInt(passamt);
                                            counter = counter + 1;
                                            var overtimerate = 0;
                                            if (data[i].extrahour == 0 || data[i].extrahour == "") {
                                                overtimerate = 0;
                                            } else {

                                                overtimerate = data[i].overtime;
                                            }

                                            markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                                '<td  style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data[i].id + '</label></td>' +
                                                '<td > <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                                '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + rate + '</label></td>' +
                                                '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                                '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + overtimerate + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="apassamt_' + row_id + '" style="text-align:right;" value=' + passamt + ' disabled><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="abalance_' + row_id + '" style="text-align:right;" value=' + balanceamt + ' disabled></td>' +
                                                '</tr>';
                                        }
                                        enterdate[i] = data[i].date;


                                        // $("#actualtbody").append(markup);
                                    } else if (data[i].unitname == "Per Day") {

                                        for (var j = 0; j < enterdate.length; j++) {
                                            console.log("Entry Date" + enterdate[j] + "data[i].date" + data[i].date);
                                            if (enterdate[j] == data[i].date) {
                                                flag = 1;
                                            }
                                        }
                                        if (flag == 1) {

                                            console.log("from Entry date:" + enterdate[j])
                                            markup = '<tr style="display:none;"  class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                                '<td  style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data[i].id + '</label></td>' +
                                                '<td > <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                                '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data[i].rate + '</label></td>' +
                                                '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                                '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + data[i].overtime + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm " id="apassamt_' + row_id + '" style="text-align:right;" value=' + 0 + '><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm " id="abalance_' + row_id + '" style="text-align:right;" value=' + balanceamt + '></td>' +
                                                '</tr>';
                                            flag = 0;
                                        } else {
                                            counter = counter + 1;

                                            if (data[i].overtime > 0 && data[i].extrahour > 0) {
                                                totalextrahour = parseFloat(data[i].overtime) * parseFloat(data[i].extrahour);
                                                totalextrahour = Math.round(totalextrahour);
                                            } else {
                                                totalextrahour = 0;
                                            }
                                            paiddayamt = data[i].rate;
                                            daytotal = parseInt(data[i].rate) + parseInt(totalextrahour);
                                            alldaytotal = parseInt(alldaytotal) + parseInt(daytotal);

                                            if (data[i].passedamt > 0) {
                                                passamt = data[i].passedamt;
                                                balanceamt = data[i].balanceamt;
                                            } else {
                                                passamt = daytotal;
                                                balanceamt = 0;
                                            }
                                            var overtimerate = 0;
                                            if (data[i].extrahour != 0) {
                                                overtimerate = data[i].overtime;
                                            }
                                            balancetotal = parseInt(balanceamt) + parseInt(balancetotal);
                                            passedtotal = parseInt(passedtotal) + parseInt(passamt);
                                            //counter = counter + 1;
                                            markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                                '<td  style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data[i].id + '</label></td>' +
                                                '<td > <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                                '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data[i].rate + '</label></td>' +
                                                '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                                '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + overtimerate + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="apassamt_' + row_id + '" style="text-align:right;" value=' + passamt + '><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="abalance_' + row_id + '" style="text-align:right;" value=' + balanceamt + ' disabled></td>' +
                                                '</tr>';
                                        }

                                    }
                                    enterdate[i] = data[i].date;


                                    $("#actualtbody").append(markup);

                                } else {
                                    for (var j = 0; j < enterdate.length; j++) {
                                        console.log("Entry Date" + enterdate[j] + "data[i].date" + data[i].date);
                                        if (enterdate[j] == data[i].date) {
                                            flag = 1;
                                        }
                                    }
                                    if (flag == 1) {

                                        console.log("from Entry date:" + enterdate[j])
                                        markup = '<tr style="display:none;"  class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                            '<td  style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data[i].id + '</label></td>' +
                                            '<td > <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                            '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data[i].rate + '</label></td>' +
                                            '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                            '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + data[i].overtime + '</label></td>' +
                                            '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                            '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm " id="apassamt_' + row_id + '" style="text-align:right;" value=' + passamt + '><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm " id="abalance_' + row_id + '" style="text-align:right;" value=' + balanceamt + '></td>' +
                                            '</tr>';
                                        flag = 0;
                                    } else {
                                        // counter = counter + 1;
                                        var overtimerate = "";

                                        if (data[i].extrahour == "" || data[i].extrahour == 0) {
                                            overtimerate = 0;

                                        } else {

                                            overtimerate = data[i].overtime;
                                        }

                                        markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                            '<td  style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data[i].id + '</label></td>' +
                                            '<td > <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                            '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data[i].rate + '</label></td>' +
                                            '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                            '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + overtimerate + '</label></td>' +
                                            '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                            '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="apassamt_' + row_id + '" style="text-align:right;" value=' + passamt + '><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="abalance_' + row_id + '" style="text-align:right;" value=' + balanceamt + '></td>' +
                                            '</tr>';
                                    }
                                    enterdate[i] = data[i].date;


                                    $("#actualtbody").append(markup);
                                }





                            }
                            if (people_typename == "Production") {
                                $('#attadanace').text(counter);
                                var padidata = $('#Paid_leavedata').text();
                                var totalleave = parseInt(counter) + parseInt(padidata);
                                $('#totalleave').text(totalleave);
                                //  $('#actualdatatb').DataTable({});
                                /* $('#daytotal').text(passamt);
                                 $('#passedamt').text(passamt);
                                 $('#balanceamt').text('0');
                                 $('#grossamt').val(passamt);*/

                                $('#daytotal').text(alldaytotal);
                                $('#passedamt').text(passedtotal);
                                $('#balanceamt').text(balancetotal);
                                $('#grossamt').val(passedtotal); //----last Change 27-08
                                $('#inamt').val(passedtotal);
                            } else {
                                var padidata = $('#Paid_leavedata').text();
                                var totalleave = parseInt(counter) + parseInt(padidata);
                                $('#totalleave').text(totalleave);
                                //  $('#actualdatatb').DataTable({});
                                $('#daytotal').text(alldaytotal);
                                $('#passedamt').text(passedtotal);
                                $('#balanceamt').text(balancetotal);
                                $('#grossamt').val(passedtotal);
                            }
                        }
                    }

                });
                // }

            }
            //  });

            // }

        }
    }

    /*-----Blur Event of Artist Data--------------*/
    $(document).on("blur", ".artistamt", function(e) {
        e.preventDefault();
        var id = $(this).attr('id');
        var mainbalance = 0;
        var id1 = id.split("_");
        var daytotal = $('#daytotalamt_' + id1[1]).text();
        var apassamt = $('#apassamt_' + id1[1]).val();
        var people_typename = $("#people_type option:selected").text();
        if (parseInt(apassamt) > parseInt(daytotal)) {
            $('#getartisterror_' + id1[1]).show();
        } else {
            $('#getartisterror_' + id1[1]).hide();
            mainbalance = parseInt(daytotal) - parseInt(apassamt);
            $('#abalance_' + id1[1]).val(mainbalance);
            get_total1();
            getamountdata();
            if (people_typename == "Production") {
                $('#paidleave').trigger('blur');
            }
        }

    });

    function get_total1() {
        var l1 = $('table#actualdatatb').find('tbody').find('tr');
        var s = l1.length;
        var hour = 0;
        var min = 0;
        var sec = 0;
        var allbalance = 0;
        var sum = 0;
        var sumdata = 0;
        var balancesum = 0;

        var rowid = 0;
        for (var j = 0; j < s; j++) {
            rowid = rowid + 1;

            sum = $('#apassamt_' + rowid).val();

            sumdata = parseFloat(sum) + parseFloat(sumdata);

            balancesum = $('#abalance_' + rowid).val();
            allbalance = parseFloat(allbalance) + parseFloat(balancesum);


        }
        console.log(sumdata);
        $('#grossamt').val(sumdata);
        $('#passedamt').text(sumdata);
        $('#balanceamt').text(allbalance);

    }
    /*-----Blur Event of Artist Data--------------*/
    $(document).on("blur", ".totalinvoice", function(e) {
        e.preventDefault();
        getamountdata();
    });



    function get_total() {
        var l1 = $('table#actualdatatb').find('tbody').find('tr');
        var s = l1.length;
        var hour = 0;
        var min = 0;
        var sec = 0;
        var sr = 0;
        var sum = 0;
        var sumdata = 0;

        for (var j = 0; j < s; j++) {
            var sum = $(l1[j]).find('td:eq(7)').html();
            sumdata = parseFloat(sum) + parseFloat(sumdata);


        }
        $('#total').val(sumdata);
    }
    /*--------click event of getattendance---------------*/
    $(document).on("click", "#getattendance", function(e) {
        e.preventDefault();
        var sdate = $('#af_date').val();
        var todate = $('#at_date').val();
        var supplier = $('#supplier').val();
        var project = $('#project').val();
        var people_typename = $("#people_type option:selected").text();

        var tdateAr = sdate.split('/');
        sdate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        var tdateAr1 = todate.split('/');
        todate = tdateAr1[2] + '-' + tdateAr1[1] + '-' + tdateAr1[0];
        if (project > 0 && supplier > 0) {
            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/getartistattendance",
                data: {
                    table_name: table_name,
                    supplier: supplier,
                    project: project,
                    sdate: sdate,
                    todate: todate,
                    people_typename: people_typename,
                },
                dataType: "JSON",
                async: false,
                success: function(data) {
                    $('#artists').html('');

                    var row_id = 0;
                    var amt = 0;
                    var amtdaat = 0;
                    var markup = "";
                    var total = 0;
                    var extrahour = 0;

                    if (data.length > 0) {

                        row_id = row_id + 1;
                        if (data[0].day > 0 && data[0].rate) {
                            amt = parseInt(data[0].day) * parseInt(data[0].rate);
                        } else {
                            amt = 0;
                        }
                        if (people_typename == "Admin Staff") {
                            markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Regular Attendance</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm rate getamount" id="day_' + row_id + '" style="text-align:right;" value=' + data[0].day + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Month</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm rate getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + data[0].rate + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + amt + '</label></td>' +
                                '</tr>';
                            $("#artists").append(markup);
                            $('#total').val(amt);
                            $('#grossamt').val(amt);
                        } else {

                            $("#actualtbody").html('');
                            for (var i = 0; i < data.length; i++) {

                                markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                    '<td id="date_"> <label class="control-label" id="date_' + row_id + '">' + data[i].date + '</label></td>' +
                                    '<td   id="perdayrate" ><label class="control-label" id="perrate_' + row_id + '">' + data[i].rate + '</label></td>' +
                                    '<td id="typeofpayment_"><label class="control-label" id="overtimerate_' + row_id + '">' + data[i].overtime + '</label></td>' +
                                    '<td   id="callremark" > <label class="control-label" id="extrahour_' + row_id + '">' + data[i].extrahour + '</label></td>' +
                                    '<td id="typeofpayment_"> <input type="checkbox" name=' + data[i].id + ' id="artisttb_' + row_id + '" class="form-control input-sm artistcheck" value=' + row_id + '></td>' +
                                    '</tr>';

                                $("#actualtbody").append(markup);
                                row_id = row_id + 1;

                            }






                        }
                    }
                }
            });
            var count = 0;
            var totalextrahour = 0;
            var finaltotal = 0;
            $(".artistcheck").change(function() {

                if ($(this).prop("checked") == true) {
                    count = parseInt(count) + parseInt(1);
                    var id = $(this).val();
                    var expebseid = $(this).attr('name');

                    var perdayrate = $('#perrate_' + id).text();
                    var overtimerate = $('#overtimerate_' + id).text();
                    var extrahour = $('#extrahour_' + id).text();
                    totalextrahour = parseInt(totalextrahour) + parseInt(extrahour);
                    var ptotal = parseInt(count) * parseInt(perdayrate);
                    var htotal = parseInt(totalextrahour) * parseInt(extrahour);
                    finaltotal = parseInt(ptotal) + parseInt(htotal);
                    var row_id = 1;
                    var markup = "";
                    $("#artists").html('');
                    markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                        '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Regular Attendance</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="day_' + row_id + '" style="text-align:right;" value=' + count + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Day</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + perdayrate + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + ptotal + '</label></td>' +
                        '</tr>';
                    row_id = row_id + 1;
                    markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                        '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Over Time</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm ogetamount" id="day_' + row_id + '" style="text-align:right;" value=' + extrahour + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Hour</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm  ogetamount" id="rate_' + row_id + '" style="text-align:right;" value=' + overtimerate + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="amount2">' + htotal + '</label></td>' +
                        '</tr>';

                    $("#artists").append(markup);
                    $('#total').val(finaltotal);
                    $('#grossamt').val(finaltotal);


                    console.log("count" + count + "perdayrate" + perdayrate + "overtimerate" + overtimerate + "totalextrahour" + totalextrahour);

                } else if ($(this).prop("checked") == false) {
                    var id = $(this).val();
                    count = parseInt(count) - parseInt(1);
                    var extrahour = $('#extrahour_' + id).text();
                    totalextrahour = parseInt(totalextrahour) - parseInt(extrahour);
                    var id = $(this).val();
                    var expebseid = $(this).attr('name');

                    var perdayrate = $('#perrate_' + id).text();
                    var overtimerate = $('#overtimerate_' + id).text();
                    var extrahour = $('#extrahour_' + id).text();
                    totalextrahour = parseInt(totalextrahour) + parseInt(extrahour);
                    var ptotal = parseInt(count) * parseInt(perdayrate);
                    var htotal = parseInt(totalextrahour) * parseInt(extrahour);
                    finaltotal = parseInt(ptotal) + parseInt(htotal);
                    var row_id = 1;
                    var markup = "";
                    $("#artists").html('');
                    markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                        '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Regular Attendance</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="day_' + row_id + '" style="text-align:right;" value=' + count + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Day</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + perdayrate + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + ptotal + '</label></td>' +
                        '</tr>';
                    row_id = row_id + 1;
                    markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                        '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Over Time</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm ogetamount" id="day_' + row_id + '" style="text-align:right;" value=' + extrahour + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Hour</label></td>' +
                        '<td   id="callremark" > <input type="number" class="form-control input-sm  ogetamount" id="rate_' + row_id + '" style="text-align:right;" value=' + overtimerate + '></td>' +
                        '<td id="typeofpayment_"> <label class="control-label" id="amount2">' + htotal + '</label></td>' +
                        '</tr>';

                    $("#artists").append(markup);
                    $('#total').val(finaltotal);
                    $('#grossamt').val(finaltotal);
                    if (count == 0) {
                        $("#artists").html('');
                    }
                    /*var sid=$('#save_update').val();
                    if(sid >0){

                    }*/
                }
                console.log(count);
            });

        }

    });
    /*-----------blur Event of Regular Attendance----------*/

    $(document).on("blur", ".ogetamount", function(e) {
        e.preventDefault();

        var oday = $('#day_2').val();
        var orate = $('#rate_2').val();
        var total = 0;
        var amt = 0;
        var amtdata = 0;
        if (oday > 0 && orate > 0) {
            var amt = parseInt(oday) * parseInt(orate);
            $('#amount2').text(amt);
        } else {
            $('#amount2').text(0);
        }

        amt = $('#amount2').text();
        amtdata = $('#amount1').text();
        total = parseInt(amt) + parseInt(amtdata);
        $('#total').val(total);
        $('#grossamt').val(total);
        getamountdata();
    });
    $(document).on("blur", ".getamount", function(e) {
        e.preventDefault();

        var amt = 0;
        var amtdata = 0;
        var total = 0;
        var people_typename = $("#people_type option:selected").text();
        var oday = $('#day_1').val();
        var orate = $('#rate_1').val();
        console.log("oday" + oday + "orate" + orate)
        if (oday > 0 && orate > 0) {
            amt = parseInt(oday) * parseInt(orate);
            $('#amount1').text(amt);
        } else {
            $('#amount1').text(0);
        }
        if (people_typename == "Admin Staff") {
            $('#total').val(amt);
            $('#grossamt').val(amt);
        } else {
            amt = $('#amount2').text();
            amtdata = $('#amount1').text();
            total = parseInt(amt) + parseInt(amtdata);
            $('#total').val(total);
            $('#grossamt').val(total);
        }
        getamountdata();
    });

    /*-------blur event of gst------------*/
    $(document).on("blur", ".amtdata", function(e) {
        e.preventDefault();
        var id = $(this).attr('id');
        var grossamt = $('#grossamt').val();
        var gst = $('#' + id).val();
        var amt = 0;
        var total = 0;
        if (grossamt > 0) {
            amt = parseInt(grossamt) * parseInt(gst) / 100;
        }
        if (id != "other") {
            $('#' + id + 'amt').val(amt);
        }

        var sgstamt = $('#sgstamt').val();
        var cgstamt = $('#cgstamt').val();
        var igstamt = $('#igstamt').val();
        var deductionamt = $('#deductionamt').val();
        var other = $('#other').val();

        total = (parseInt(grossamt) + parseInt(sgstamt) + parseInt(cgstamt) + parseInt(igstamt) + parseInt(other)) - (parseInt(deductionamt));
        $('#inamt').val(total);



    });

    function get_supplerdata(fromdate, todate) {
        var supplier = $('#supplier').val();
        var project = $('#project').val();
        if (project > 0 && supplier > 0) {
            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/getsupplerdata",
                data: {
                    table_name: table_name,
                    supplier: supplier,
                    project: project,
                    fromdate: fromdate,
                    todate: todate,
                },
                dataType: "JSON",
                async: false,
                success: function(data) {
                    var row_id = 0;
                    var amt = 0;
                    var table1 = $('#suppliertb').DataTable();
                    table1.destroy();
                    $('#suppliertbody').html('');
                    var total = 0;
                    if (data.length > 0) {
                        for (var i = 0; i < data.length; i++) {

                            row_id = row_id + 1;
                            if (data[i].qty > 0 && data[i].rate > 0) {
                                amt = parseInt(data[i].qty) * parseInt(data[i].rate);

                            }

                            var tdateAr1 = data[i].date.split('-');
                            var adate = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];

                            var html = '<tr class="project_tab_add_row" id="list_' + row_id + '" >' +
                                '<td  id="date_' + row_id + '" >' + adate + '</td>' +
                                '<td style="display:none;" id="exid_' + row_id + '" >' + data[i].id + '</td>' +
                                '<td  style="display:none;" id="type_of_payment_' + row_id + '">' + data[i].expenseid + '</td>' +
                                '<td  id="type_of_paymentname_' + row_id + '">' + data[i].expensetype + '</td>' +
                                '<td  id="narration_' + row_id + '">' + data[i].narration + '</td>' +
                                '<td   id="referenceno_' + row_id + '" style="text-align:right;">' + data[i].referenceno + '</td>' +
                                '<td  id="actualdata' + row_id + '"> <input type="number" class="form-control input-sm examtdata" id="examt_' + row_id + '" style="text-align:right;" value=' + amt + '></td>' +
                                '<td  id="passeddata_' + row_id + '"> <input type="number" class="form-control input-sm examtdata" id="passamtamt_' + row_id + '" style="text-align:right;" value=' + 0 + '><label class="control-label" id="getamterror_' + row_id + '" style="color:red;display:none;" >Amount Passed not greater than Expense amount</label></td>' +
                                '<td  id="balancedata_' + row_id + '"> <input type="text" class="form-control input-sm" id="balanceamt_' + row_id + '" value="0" style="text-align:right;" disabled ></td>' +
                                '<td  id="checkboxdata_' + row_id + '"><input type="checkbox" name=' + data[i].id + ' id="check_' + row_id + '" class="form-control input-sm checkbox checkBoxClass" value=' + row_id + '></td>' +
                                '</tr>';

                            $('#suppliertbody').append(html);
                            total = parseInt(amt) + parseInt(total);




                        }
                        console.log("total" + total);
                        $('#totalacamt').text(total);
                        $('#suppliertb').DataTable({});
                    }
                }
            });
            $(".checkbox").change(function() {
                if ($(this).prop("checked") == false) {

                    var id = $(this).val();
                    var expebseid = $(this).attr('name');
                    console.log('expebseid' + expebseid);
                    $.ajax({
                        type: "POST",
                        url: baseurl + "Invoice_Entry/getupdate_actualschedual",
                        data: {
                            invoice_no: '0',
                            invoicedate: '0000-00-00',
                            expebseid: expebseid,
                            actalamt: '0',
                            balance: '0',
                            passamt: '0',
                            invoicestatus: '0',
                        },
                        dataType: "JSON",
                        async: false,
                        success: function(data) {
                            get_all_suppliertotal();
                            desibledallocate();
                        }
                    });
                } else {
                    console.log('hii1');
                    get_all_suppliertotal();
                    desibledallocate();
                }
            });



        }
        //get_all_suppliertotal();

    }
    /*-------Click Event Of All Supplier Tick-----------------*/
    $(document).on("click", "#selectall", function(e) {
        e.preventDefault();

        if ($('input.checkBoxClass').not(':checked').length > 0) {
            console.log('hii from if');

            $(".checkBoxClass").prop('checked', true);
            $('#allocate').removeAttr("disabled");
        } else {
            console.log('hii from else');


            $(".checkBoxClass").prop('checked', false);
            $('#allocate').attr('disabled', 'disabled');
        }


    });


    var balanceamt = 0;
    /*------------Blur Event of table suppiler table get balance amt-------------------------*/
    $(document).on("blur", ".examtdata", function(e) {
        e.preventDefault();

        var id = $(this).attr('id');
        var id1 = id.split("_");



        var actalamt = $('#examt_' + id1[1]).val();
        var passamt = $('#passamtamt_' + id1[1]).val();

        // if(balanceamt >0 && actalamt >0){
        if (parseInt(actalamt) >= parseInt(passamt)) {
            balanceamt = parseInt(actalamt) - parseInt(passamt);


            $('#balanceamt_' + id1[1]).val(balanceamt);
            $('#getamterror_' + id1[1]).hide();
        } else {
            $('#getamterror_' + id1[1]).show();
        }

        get_all_suppliertotal();
    });

    function get_all_suppliertotal() {
        var l1 = $('table#suppliertb').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        var totalactualamt = 0;
        var totalpassedamt = 0;
        var totalbalance = 0;

        console.log('fromalldata');

        for (var j = 1; j <= s; j++) {
            //k=j+1;
            var actalamt = $('#examt_' + j).val();
            var balance = $('#balanceamt_' + j).val();
            var passamt = $('#passamtamt_' + j).val();
            if (actalamt >= 0) {
                totalactualamt = parseInt(actalamt) + parseInt(totalactualamt);
            }
            if ($('#check_' + j).prop("checked") == true) {
                if (balance >= 0) {
                    totalpassedamt = parseInt(totalpassedamt) + parseInt(passamt);
                }
                if (passamt >= 0) {
                    totalbalance = parseInt(totalbalance) + parseInt(balance);

                }
            }
            //totalpassedamt=parseInt(totalpassedamt)+parseInt(passamt);

        }
        $('#totalacamt').text(totalactualamt);
        $('#totalpassedamt').text(totalpassedamt);
        $('#totalbalance').text(totalbalance);
        var svaedata = $('#save_update').val();
        if (svaedata == "") {
            $('#grossamt').val(totalpassedamt);
        }
        $('#inamt').val(totalpassedamt);
        getamountdata();
    }



    /*----------form  clear----------------*/
    function form_clear() {
        $('#grossamt').val('0');
        $('#sgst').val('0');
        $('#sgstamt').val('0');
        $('#cgst').val('0');
        $('#cgstamt').val('0');
        $('#igst').val('0');
        //   $('#save_update').val('');
        $('#igstamt').val('0');
        $('#deduction').val('0');
        $('#deductionamt').val('0');
        $('#other').val('0');
        $('#inamt').val('0');
        $('#total').val('0');
        $('#totalacamt').text('');
        $('#totalpassedamt').text('');
        $('#totalbalance').text('');

        $('#other').val('0');
        $('#inamt').val('0');
        $('#total').val('0');

        $('#attadanace').text('0');
        $('#Paid_leavedata').text('0');
        $('#totalleave').text('0');
        $('#paidleave').val('0');
        $('#grossamt').val('0');






    }

    /*---------------Function for Dasabled the button--------*/
    function desibledallocate() {
        var l1 = $('table#suppliertb').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        for (var j = 1; j <= s; j++) {


            if ($('#check_' + j).prop("checked") == false) {
                $('#allocate').attr('disabled', 'disabled');
            }
        }
        for (var j = 1; j <= s; j++) {
            //k=j+1;

            if ($('#check_' + j).prop("checked") == true) {
                $('#allocate').removeAttr("disabled");
            }
        }
    }



    /*------------function Button Allocate Click Event---------------*/
    $(document).on("click", "#allocate", function(e) {
        e.preventDefault();
        var invoicedate = $('#invoicedate').val();
        var invoice_no = $('#e_no').val();

        console.log(invoice_no);
        $('#wait').show();
        var tdateAr1 = invoicedate.split('/');
        invoicedate = tdateAr1[2] + '-' + tdateAr1[1] + '-' + tdateAr1[0];

        $(':checkbox:checked').each(function(i) {

            var id = $(this).val();
            var expebseid = $(this).attr('name');
            var actalamt = $('#examt_' + id).val();
            var balance = $('#balanceamt_' + id).val();
            var passamt = $('#passamtamt_' + id).val();

            console.log(expebseid + "" + actalamt + "" + balance + "" + passamt + "" + invoice_no);

            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/getupdate_actualschedual",
                data: {
                    invoice_no: invoice_no,
                    invoicedate: invoicedate,
                    expebseid: expebseid,
                    actalamt: actalamt,
                    balance: balance,
                    passamt: passamt,
                    invoicestatus: '1',
                },
                dataType: "JSON",
                async: false,
                success: function(data) {

                }
            });


        });

        $('#productionsave').removeAttr("disabled");
        $('#wait').hide();


    });

    /*------------For Attachment Tab Start -----------------*/
    $(document).on("submit", "#document_data", function(e) {
        e.preventDefault();

        var documenttype = $('#type_document').val();
        var description = $('#des').val();
        var filename = $('#file_hidden').val();

        var msgid = $('#msg').val();
        var doctype = $("#type_document option:selected").text();
        var row_id = $('#doc_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#doc_save_update').val();

        if (save_update != "") {
            /* if(filename != ''){
                 download='<i class="fa fa-download" aria-hidden="true"></i>';
             }else{
                 download='';
             }*/
            $("#documenttype_" + save_update).html(documenttype);
            $("#description_" + save_update).html(description);
            $("#doctype_" + save_update).html(doctype);
            $("#filename_" + save_update).html(filename);
            //$("#attchment_"+save_update).html(download);
            $('#doc_save_update').val('');


        } else {
            if (filename != '') {
                download = '<i class="fa fa-download" aria-hidden="true"></i>';
            } else {
                download = '';
            }

            var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  style="display:none;" id="documenttype_' + row_id + '">' + documenttype + '</td>' +
                '<td  id="doctype_' + row_id + '">' + doctype + '</td>' +
                '<td  id="description_' + row_id + '">' + description + '</td>' +
                '<td  id="filename_' + row_id + '">' + filename + '</td>' +
                '<td id="attchment_' + row_id + '"><a href=' + baseurl + 'Invoice_Entry/download/' + filename + '>' + download + '</a></td>' +
                '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#doc_tbody").append(html);
            $('#doc_row_id').val(row_id);
            $('#doc_save_update').val('');


        }

        $('#myModal').modal('hide');
        $('#msg').html('');
        $('#file_hidden').val('');
        $('#type_document').val('');
        $('#des').val('');
        $('#filename').val('');
        $('#add_file').html('');

        $('#add_file').html('<input type="file"  class="" id="docupload" name="docupload" required>');

    });

    /*------------------edit data -------------------*/
    $(document).on('click', '.doc_edit_data4', function(e) {
        e.preventDefault();
        $('#myModal').modal('show');
        var row = $(this).attr('id');

        var type = $("#documenttype_" + row).html();
        var description = $("#description_" + row).html();
        var filename = $("#filename_" + row).html();
        var hiddenid = 'file_hidden';
        var msgid = 'msg';

        // var filhideen =   $("#filename_"+row).html();


        $('#type_document').val(type).trigger('change');
        $('#des').val(description);
        $('#file_hidden').val(filename);
        $('#msg').html(filename + '' + "<button class='delete_doc btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");


        //  document.getElementById('docupload').innerHTML = filename;
        // $('#docupload').val(filename);

        $('#doc_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });
    $(document).on('click', '.regional_delete_data', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        if (save_update != "") {
            $("#" + save_update).remove();
            $('#doc_save_update').val('');

        }
    });

    $(document).on("mousedown", "#docupload", function() {
        var id = 'docupload';
        var hiddenid = 'file_hidden';
        var msgid = 'msg';
        $('#docupload').removeAttr('form');

        uploadfile(id, hiddenid, msgid);
    });

    function uploadfile(id, hiddenid, msgid) {
        console.log(id + '-' + hiddenid + '-' + msgid);

        $('#' + id).ajaxfileupload({
            //'action' : 'callAction',

            'action': baseurl + 'Invoice_Entry/doc_upload',
            params: { id: id },
            'onStart': function() { $('#' + msgid).html("<font color='red'><i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>Please wait file is uploading.....</font>"); },
            'onComplete': function(response) {
                console.log(response);

                if (response == '') {
                    $('#' + msgid).html("<font color='red'>" + "Error in file upload" + "</font>");
                } else if (response == 'NA') {
                    $('#' + msgid).html("");
                    swal("Oops...", "File size more then 7MB is not allowed.Kindly Reduce the file size and try again !!!", "error");
                } else {

                    $('#' + hiddenid).val(response);
                    $('#' + msgid).html("<font id='doc_image_name' color='green'>" + response + "</font><button class='delete_doc btn btn-sm  btn-xs  btn-danger' id=" + response + '###' + hiddenid + '###' + msgid + " name=" + response + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");


                }

            }
        });
    }
    /* Delete Document start */
    $(document).on('click', '.delete_doc', function(e) {
        e.preventDefault();
        var doc = $(this).attr('id');

        doc = doc.split('###');

        //	var vendor_id=$('#vendorid').val();

        swal({
                title: "Are you sure to delete ?",
                text: "You will not be able to recover this file !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !!",
                closeOnConfirm: false
            },
            function() {
                $.ajax({
                    type: "POST",
                    url: baseurl + "Invoice_Entry/doc_delete",
                    dataType: "JSON",
                    data: {
                        doc: doc[0],
                    },
                    success: function(data) {
                        if (data == '1') {
                            $('#' + doc[1]).val('');
                            $('#' + doc[2]).html('');
                            swal("Deleted !!", "Hey, your File has been deleted !!", "success");

                        }
                    }
                });
                return false;

            });

    });
    /* Delete Document End */
    /*-----------------End of Attachment Tab data-----------------------------*/

    /*----------------Submite Of invoice_form-------------------*/
    $(document).on('submit', '#charectermaster_form', function(e) {
        e.preventDefault();

        var id = $('#save_update').val();
        var project = $('#project').val();
        var s_date = $('#s_date').val();
        var sdate = s_date;
        var projectname = $("#project option:selected").text();
        var peopletype = $("input[name='peopletype']:checked").val();

        var tdateAr1 = s_date.split('/');
        s_date = tdateAr1[1] + '-' + tdateAr1[0];

        var day = getDaysInMonth(tdateAr1[0], tdateAr1[1]);


        first = "1";

        var fromdate = tdateAr1[1] + '-' + tdateAr1[0];
        '-' + '1';


        var todate = tdateAr1[1] + '-' + tdateAr1[0] + '-' + day;

        // alert(day + "peopletype" + peopletype + "todate" + todate + "fromdate" + fromdate + "s_date" + s_date);
        var title = "BILL STATUS REPORT   " + sdate + "  For  " + projectname;

        $.ajax({
            type: "POST",
            url: baseurl + "Billreport/getbillreportdata",
            dataType: "JSON",
            data: {
                project: project,
                s_date: s_date,
                peopletype: peopletype,
                fromdate: fromdate,
                todate: todate,
                day: day,

            },
            success: function(data) {
                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Supplier- Peoplename</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Designation / Supplier Category </th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Payabled Amount</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Invoiced Amount</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Balance Amount</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (i = 0; i < data.length; i++) {
                    var invoiceamt = 0;
                    var type = "";
                    if (data[i].invoiceamt == null) {
                        invoiceamt = 0;
                    } else {
                        invoiceamt = data[i].invoiceamt;
                        invoiceamt = Math.round(invoiceamt);
                    }

                    if (data[i].type == "artist") {
                        type = "Artist";
                    } else if (data[i].type == "production") {
                        type = "Production";
                    } else {
                        type = data[i].type;
                    }


                    html += ' </tr>' +
                        '<td id="entryno_' + data[i].id + '">' + data[i].peoplename + '</td>' +
                        '<td id="supplieridname_' + data[i].id + '">' + type + '</td>' +

                        '<td   id="supplierid_' + data[i].id + '">' + Math.round(data[i].actualamount) + '</td>' +
                        '<td id="projectname_' + data[i].id + '">' + invoiceamt + '</td>' +
                        '<td  id="expens_id_' + data[i].id + '">' + Math.round(data[i].balanceamt) + '</td>' +
                        ' </tr>';

                }
                html += '</tbody></table>';
                $('#show_master').html(html);
                $('#myTable').DataTable({
                    "order": [
                        [2, "desc"]
                    ],
                    dom: 'Bfrtip',
                    //"dom": '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',
                    buttons: [{
                            extend: 'pdfHtml5',
                            title: title,
                            orientation: 'landscape',
                            pageSize: 'A4',
                            exportOptions: {
                                columns: [0, 1, 2, 3, 4]
                            },
                        },
                        {
                            title: title,
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

    /*---------click Event of attachment save-------------*/
    $(document).on('click', '#attachmentsave', function(e) {
        e.preventDefault();
        var l1 = $('table#documenttb').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        var aid = $('#save_update').val();
        if (aid != "") {
            invoiceid = aid;
            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: aid,
                    table_name: 'invoiceattachment',

                },
                success: function(data) {

                }
            });
        }




        for (var j = 0; j < s; j++) {


            var doctype = $(l1[j]).find('td:eq(1)').html();
            var descrption = $(l1[j]).find('td:eq(3)').html();
            var filename = $(l1[j]).find('td:eq(4)').html();

            console.log(doctype);

            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/save_settings",
                dataType: "JSON",
                data: {
                    doctype: doctype,
                    descrption: descrption,
                    filename: filename,
                    invoiceid: invoiceid,
                    table_name: 'invoiceattachment',
                },
                success: function(data) {}
            });

        }
        successTost("Data save Successfully");

        $('.closehideshow').trigger('click');

        form_clear();
        datashow();


    });

    /*-------------function of fill master table Start----------------*/


    function datashow() {
        $.ajax({
            type: "POST",
            url: baseurl + "Invoice_Entry/getinvoicedata",
            dataType: "JSON",
            async: false,
            data: {


            },
            success: function(data) {
                console.log(data);

                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Entry Date</th>' +
                    '<th style="display:none;">Project Id</th>' +
                    '<th style="display:none;"> Id</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Vendor type</th>' +
                    '<th style="display:none;">Vendortypwid</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Entry No</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Supplier Name</th>' +
                    '<th style="display:none;">Supplierid</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Projectname</th>' +
                    '<th style="display:none;">suppli_invoice_date</th>' +
                    '<th style="display:none;">invoiceno</th>' +
                    '<th style="display:none;">due_date</th>' +
                    '<th style="display:none;">grossamt</th>' +
                    '<th style="display:none;">sgst</th>' +
                    '<th style="display:none;">cgst</th>' +
                    '<th style="display:none;">igst</th>' +
                    '<th style="display:none;">deduction</th>' +
                    '<th style="display:none;">othercharge</th>' +
                    '<th style="display:none;">gst</th>' +
                    '<th style="display:none;">panno</th>' +
                    '<th style="display:none;">invoicedate</th>' +
                    '<th style="display:none;">invoicedate</th>' +
                    '<th style="display:none;">attandanceto</th>' +
                    '<th style="display:none;">paidleave</th>' +
                    '<th style="display:none;">remark</th>' +
                    '<th style="display:none;">worktype</th>' +
                    '<th style="display:none;">noofepisodemonth</th>' +
                    '<th style="display:none;">rateperepisode</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (i = 0; i < data.length; i++) {
                    var sr = i + 1;

                    if (data[i].date != "0000-00-00") {

                        var tdateAr = data[i].entrydate.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                    }


                    html += '<tr>' +
                        '<td id="date_' + data[i].id + '">' + date + '</td>' +
                        '<td  style="display:none;" id="projectid_' + data[i].id + '">' + data[i].projectid + '</td>' +
                        '<td  style="display:none;" id="idofsr_' + data[i].id + '">' + data[i].id + '</td>' +
                        '<td id="vendorname_' + data[i].id + '">' + data[i].vendortype + '</td>' +
                        '<td  style="display:none;" id="vendor_type_' + data[i].id + '">' + data[i].vendor_type + '</td>' +
                        '<td id="entryno_' + data[i].id + '">' + data[i].entryno + '</td>' +
                        '<td id="supplieridname_' + data[i].id + '">' + data[i].peplename + '</td>' +
                        '<td  style="display:none;" id="supplierid_' + data[i].id + '">' + data[i].supplierid + '</td>' +
                        '<td id="projectname_' + data[i].id + '">' + data[i].projectname + '</td>' +
                        '<td  style="display:none;" id="expens_id_' + data[i].id + '">' + data[i].expens_id + '</td>' +
                        '<td   style="display:none;" id="suppli_invoice_date_' + data[i].id + '">' + data[i].suppli_invoice_date + '</td>' +
                        '<td style="display:none;" id="invoiceno_' + data[i].id + '">' + data[i].invoiceno + '</td>' +
                        '<td style="display:none;" id="due_date_' + data[i].id + '">' + data[i].due_date + '</td>' +
                        '<td style="display:none;" id="grossamt_' + data[i].id + '">' + data[i].grossamt + '</td>' +
                        '<td style="display:none;" id="sgst_' + data[i].id + '">' + data[i].sgst + '</td>' +
                        '<td style="display:none;" id="cgst_' + data[i].id + '">' + data[i].cgst + '</td>' +
                        '<td style="display:none;" id="igst_' + data[i].id + '">' + data[i].igst + '</td>' +
                        '<td style="display:none;" id="deduction_' + data[i].id + '">' + data[i].deduction + '</td>' +
                        '<td style="display:none;" id="othercharge_' + data[i].id + '">' + data[i].othercharge + '</td>' +
                        '<td style="display:none;" id="gstno_' + data[i].id + '">' + data[i].gstno + '</td>' +
                        '<td style="display:none;" id="pan_no_' + data[i].id + '">' + data[i].pan_no + '</td>' +
                        '<td style="display:none;" id="invoice_date_' + data[i].id + '">' + data[i].invoice_date + '</td>' +
                        '<td style="display:none;" id="aggriment_' + data[i].id + '">' + data[i].aggriment + '</td>' +
                        '<td style="display:none;" id="paidleave_' + data[i].id + '">' + data[i].paidleave + '</td>' +
                        '<td style="display:none;" id="remarks_' + data[i].id + '">' + data[i].remark + '</td>' +
                        '<td style="display:none;" id="worktype_' + data[i].id + '">' + data[i].worktype + '</td>' +
                        '<td style="display:none;" id="noofepisodemonth_' + data[i].id + '">' + data[i].noofepisodemonth + '</td>' +
                        '<td style="display:none;" id="rateperepisode_' + data[i].id + '">' + data[i].rateperepisode + '</td>' +
                        //'<td >'+status+'</td>'+
                        '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="' + data[i].id + '" name="' + data[i].status + '" ><i class="fa fa-edit"></i></button>' +
                        '</tr>';
                }
                //console.log(html);
                html += '</tbody></table>';
                $('#show_master').html(html);
                $('#myTable').DataTable({
                    "order": [
                        [2, "desc"]
                    ]
                });



            }
        });
    }
    /*-------------function of fill master table End----------------*/
    /*------Edit Data For Table of actualschedual------------------*/
    $(document).on('click', '.edit_data', function() {
        $('.btnhideshow').trigger('click');
        $('.attachment').show();
        $('.panel-tab a[href="#invoiceEntry"]').tab('show');
        $('#productionsave').removeAttr("disabled");
        var id1 = $(this).attr('id');

        var date = $('#date_' + id1).html();
        var proid = $('#projectid_' + id1).html();
        var vendor_type = $('#vendor_type_' + id1).html();
        var entryno = $('#entryno_' + id1).html();
        var supplierid = $('#supplierid_' + id1).html();
        var expens_id = $('#expens_id_' + id1).html();

        var suppli_invoice_date = $('#suppli_invoice_date_' + id1).html();
        var invoiceno = $('#invoiceno_' + id1).html();
        var due_date = $('#due_date_' + id1).html();

        var grossamt = $('#grossamt_' + id1).html();
        var sgst = $('#sgst_' + id1).html();
        var cgst = $('#cgst_' + id1).html();
        var igst = $('#igst_' + id1).html();
        var deduction = $('#deduction_' + id1).html();
        var othercharge = $('#othercharge_' + id1).html();
        var invoice_date = $('#invoice_date_' + id1).html();
        var gstno = $('#gstno_' + id1).html();
        var pan_no = $('#pan_no_' + id1).html();
        var aggriment = $('#aggriment_' + id1).html();

        var remarks = $('#remarks_' + id1).html();
        var paidleave = $('#paidleave_' + id1).html();
        peopletype = vendor_type;

        var worktype = $('#worktype_' + id1).html();
        var noofepisodemonth = $('#noofepisodemonth_' + id1).html();
        var rateperepisode = $('#rateperepisode_' + id1).html();


        var tdateAr1 = invoice_date.split('-');
        invoice_date = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];

        var tdateAr1 = suppli_invoice_date.split('-');
        suppli_invoice_date = tdateAr1[1] + '/' + tdateAr1[0];

        var tdateAr1 = due_date.split('-');
        due_date = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];



        console.log("grossamt" + grossamt);


        $('#gstno').val(gstno);
        $('#panno').val(pan_no);



        $('#save_update').val(id1);

        $('#e_date').val(date);
        $('#e_no').val(entryno);
        $('#s_date').val(suppli_invoice_date);
        $('#s_no').val(invoiceno);

        $('#project').val(proid).trigger('change');
        $('#people_type').val(vendor_type).trigger('change');
        $('#d_date').val(due_date);
        $('#expensegroup').val(expens_id).trigger('change');
        $('#invoicedate').val(invoice_date);
        $('#supplier').val(supplierid).trigger('change');

        $('#paidleave').val(paidleave);
        $('#remarkdata').val(remarks);

        $('#Paid_leavedata').text(paidleave);


        //$('#grossamt').val(grossamt);



        var totalamount = (parseInt(grossamt) + parseInt(sgstamt) + parseInt(cgstamt) + parseInt(igstamt));


        $('#sgstamt').val(sgst);
        $('#cgstamt').val(cgst);
        $('#igstamt').val(igst);
        $('#inamt').val(totalamount);

        $('#worktype').val(worktype).trigger('change');
        $('#noofeposoic').val(noofepisodemonth);
        $('#perepisidicrate').val(rateperepisode);

        $.ajax({
            type: "POST",
            url: baseurl + "Invoice_Entry/fullypaidornot",
            dataType: "JSON",
            data: {
                id1: id1,


            },
            success: function(data) {
                if (data == '100') {
                    $('#productionsave').hide();
                    $('#attachmentsave').hide();
                    $('#model_link').hide();

                } else {
                    $('#productionsave').show();
                    $('#attachmentsave').show();
                    $('#model_link').show();
                }
            }
        });



        if (vendor_type != "5") {
            if (vendor_type == "4") {
                $('#totalleave').text(paidleave);
                $.ajax({
                    type: "POST",
                    url: baseurl + "Invoice_Entry/getartistdata",
                    dataType: "JSON",
                    async: false,
                    data: {
                        id: id1,

                    },
                    success: function(data) {
                        $("#artists").html('');
                        //  alert("from vender =4");
                        var amt = 0;
                        var total = 0;
                        var markup = "";

                        if (data.length > 0) {
                            var row_id = 0;
                            for (var i = 0; i < data.length; i++) {
                                amt = parseInt(data[i].day) * parseInt(data[i].rate);
                                total = parseInt(total) + parseInt(amt);
                                //   alert("from vender data=4");
                                if (i == 0) {
                                    row_id = row_id + 1;

                                    markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                        '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">' + data[0].typeofpayment + '</label></td>' +
                                        '<td   id="callremark" > <input type="number" class="form-control input-sm rate getamount" id="day_' + row_id + '" style="text-align:right;" value=' + data[0].day + '></td>' +
                                        '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">' + data[0].unit + '</label></td>' +
                                        '<td   id="callremark" > <input type="number" class="form-control input-sm rate getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + data[0].rate + '></td>' +
                                        '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + amt + '</label></td>' +
                                        '</tr>';
                                } else if (i == 1) {
                                    row_id = row_id + 1;

                                    markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                        '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">' + data[1].typeofpayment + '</label></td>' +
                                        '<td   id="callremark" > <input type="number" class="form-control input-sm ogetamount" id="day_' + row_id + '" style="text-align:right;" value=' + data[1].day + '></td>' +
                                        '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">' + data[1].unit + '</label></td>' +
                                        '<td   id="callremark" > <input type="number" class="form-control input-sm  ogetamount" id="rate_' + row_id + '" style="text-align:right;" value=' + data[1].rate + '></td>' +
                                        '<td id="typeofpayment_"> <label class="control-label" id="amount2">' + amt + '</label></td>' +
                                        '</tr>';
                                }
                                $("#artists").append(markup);
                                $('#total').val(total);
                                $('#grossamt').val(total);
                            }
                        }
                    }
                });
            } else {

                if (vendor_type == 1 || vendor_type == 2) {
                    console.log("form artist data");
                    var Sdate = $('#s_date').val();
                    var tdateAr = Sdate.split('/');
                    var date2 = tdateAr[1] + '-' + tdateAr[0];


                    var day = getDaysInMonth(tdateAr[0], tdateAr[1]);
                    var tdateAr = Sdate.split('/');

                    var sdate = tdateAr[1] + '-' + tdateAr[0] + '-' + '1';

                    var tdateAr1 = Sdate.split('/');
                    var todate = tdateAr[1] + '-' + tdateAr[0] + '-' + day;

                    var count = 0;
                    var totalextrahour = 0;
                    var aperdayrate = 0;
                    var aperdayhour = 0;
                    var finaltotal = 0;


                    console.log("proid" + proid + "supplierid" + supplierid + "sdate" + sdate + "todate" + todate + "id1" + id1);
                    $.ajax({
                        type: "POST",
                        url: baseurl + "Invoice_Entry/geteditpeopledata",
                        data: {
                            table_name: 'peopleattdance',
                            supplier: supplierid,
                            project: proid,
                            sdate: sdate,
                            todate: todate,
                            invoice: id1
                        },
                        dataType: "JSON",
                        async: false,
                        success: function(data1) {
                            $('#artists').html('');

                            var row_id = 0;
                            var amt = 0;
                            var amtdaat = 0;
                            var markup = "";
                            var total = 0;
                            var extrahour = 0;
                            if (data1 != null) {

                                if (data1.length > 0) {
                                    $('#attadanace').text(data1.length);
                                    var padidata = $('#Paid_leavedata').text();
                                    var totalleave = parseInt(data1.length) + parseInt(padidata);
                                    $('#totalleave').text(totalleave);
                                    //   alert("from vender!=4");

                                    var totalextrahour = 0;
                                    var daytotal = 0;
                                    var alldaytotal = 0;
                                    var passedtotal = 0;
                                    var balancetotal = 0;
                                    $("#actualtbody").html('');

                                    for (var i = 0; i < data1.length; i++) {
                                        //  alert("from vender data!=4");
                                        row_id = row_id + 1;
                                        if (vendor_type == 1) {
                                            if (data1[i].overtime > 0 && data1[i].extrahour > 0) {
                                                totalextrahour = parseFloat(data1[i].overtime) * parseFloat(data1[i].extrahour);
                                                totalextrahour = Math.round(totalextrahour);
                                            } else {
                                                totalextrahour = 0;
                                            }
                                            daytotal = parseInt(data1[i].rate) + parseInt(totalextrahour);
                                            alldaytotal = parseInt(alldaytotal) + parseInt(daytotal);
                                            passedtotal = parseInt(data1[i].passedamt) + parseInt(passedtotal);
                                            balancetotal = parseInt(data1[i].balanceamt) + parseInt(balancetotal);

                                            var tdateAr1 = data1[i].date.split('-');
                                            var adate = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];

                                            markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                                '<td id="date_" style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data1[i].id + '</label></td>' +
                                                '<td id="date_"> <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                                '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data1[i].rate + '</label></td>' +
                                                '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data1[i].extrahour + '</label></td>' +
                                                '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + data1[i].overtime + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="apassamt_' + row_id + '" style="text-align:right;" value=' + data1[i].passedamt + '><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="abalance_' + row_id + '" style="text-align:right;" value=' + data1[i].balanceamt + '></td>' +
                                                '</tr>';

                                            $("#actualtbody").append(markup);
                                        } else {
                                            if (data1[i].overtime > 0 && data1[i].extrahour > 0) {
                                                totalextrahour = parseFloat(data1[i].overtime) * parseFloat(data1[i].extrahour);
                                                totalextrahour = Math.round(totalextrahour);
                                            } else {
                                                totalextrahour = 0;
                                            }
                                            daytotal = parseInt(data1[i].rate) + parseInt(totalextrahour);
                                            alldaytotal = parseInt(alldaytotal) + parseInt(daytotal);
                                            passedtotal = parseInt(data1[i].passedamt) + parseInt(passedtotal);
                                            balancetotal = parseInt(data1[i].balanceamt) + parseInt(balancetotal);
                                            paiddayamt = data1[i].rate;
                                            var tdateAr1 = data1[i].date.split('-');
                                            var adate = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];

                                            markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                                '<td id="date_" style="display:none;"> <label class="control-label" id="actualid_' + row_id + '">' + data1[i].id + '</label></td>' +
                                                '<td id="date_"> <label class="control-label" id="date_' + row_id + '">' + adate + '</label></td>' +
                                                '<td   id="perdayrate" ><label style="text-align:right;" class="control-label" id="perrate_' + row_id + '">' + data1[i].rate + '</label></td>' +
                                                '<td id="typeofpayment_"><label style="text-align:right;" class="control-label" id="overtimerate_' + row_id + '">' + data1[i].extrahour + '</label></td>' +
                                                '<td   id="callremark" > <label style="text-align:right;" class="control-label" id="extrahour_' + row_id + '">' + data1[i].overtime + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="totalexamt_' + row_id + '">' + totalextrahour + '</label></td>' +
                                                '<td   id="totalex" > <label style="text-align:right;" class="control-label" id="daytotalamt_' + row_id + '">' + daytotal + '</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="apassamt_' + row_id + '" style="text-align:right;" value=' + data1[i].passedamt + ' disabled><label class="control-label" id="getartisterror_' + row_id + '" style="color:red;display:none;" >Passed Amount  not greater than Day Total amount</label></td>' +
                                                '<td   id="callremark" > <input type="number" class="form-control input-sm artistamt" id="abalance_' + row_id + '" style="text-align:right;" value=' + data1[i].balanceamt + ' disabled></td>' +
                                                '</tr>';

                                            $("#actualtbody").append(markup);
                                        }
                                    }
                                    $('#daytotal').text(alldaytotal);
                                    $('#passedamt').text(passedtotal);
                                    $('#balanceamt').text(balancetotal);
                                    //$('#grossamt').val(alldaytotal);

                                }
                            }
                        }
                    });


                    $(".artistcheck").change(function() {


                        if ($(this).prop("checked") == true) {
                            count = parseInt(count) + parseInt(1);
                            var id = $(this).val();
                            var expebseid = $(this).attr('name');
                            var saveid = $('#save_update').val();

                            var extrahour = $('#extrahour_' + id).text();
                            totalextrahour = parseInt(totalextrahour) + parseInt(extrahour);

                            var ptotal = parseInt(count) * parseInt(aperdayrate);
                            var htotal = parseInt(totalextrahour) * parseInt(aperdayhour);
                            finaltotal = parseInt(ptotal) + parseInt(htotal);
                            var row_id = 1;
                            var markup = "";
                            $("#artists").html('');
                            markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Regular Attendance</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="day_' + row_id + '" style="text-align:right;" value=' + count + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Day</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + aperdayrate + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + ptotal + '</label></td>' +
                                '</tr>';
                            row_id = row_id + 1;
                            markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Over Time</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm ogetamount" id="day_' + row_id + '" style="text-align:right;" value=' + totalextrahour + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Hour</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm  ogetamount" id="rate_' + row_id + '" style="text-align:right;" value=' + aperdayhour + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="amount2">' + htotal + '</label></td>' +
                                '</tr>';

                            $("#artists").append(markup);
                            $('#total').val(finaltotal);
                            $('#grossamt').val(finaltotal);




                        } else if ($(this).prop("checked") == false) {
                            var id = $(this).val();
                            count = parseInt(count) - parseInt(1);
                            var extrahour = $('#extrahour_' + id).text();
                            console.log(extrahour);
                            totalextrahour = parseInt(totalextrahour) - parseInt(extrahour);
                            console.log("totalextrahour" + totalextrahour);
                            var id = $(this).val();
                            var peopleid = $(this).attr('name');
                            var extrahour = $('#extrahour_' + id).text();

                            var ptotal = parseInt(count) * parseInt(aperdayrate);
                            var htotal = parseInt(totalextrahour) * parseInt(aperdayhour);
                            finaltotal = parseInt(ptotal) + parseInt(htotal);
                            var row_id = 1;
                            var markup = "";
                            $("#artists").html('');
                            markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Regular Attendance</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="day_' + row_id + '" style="text-align:right;" value=' + count + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Day</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm  getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + aperdayrate + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + ptotal + '</label></td>' +
                                '</tr>';
                            row_id = row_id + 1;
                            markup += '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +

                                '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">Over Time</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm ogetamount" id="day_' + row_id + '" style="text-align:right;" value=' + totalextrahour + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">Per Hour</label></td>' +
                                '<td   id="callremark" > <input type="number" class="form-control input-sm  ogetamount" id="rate_' + row_id + '" style="text-align:right;" value=' + aperdayhour + '></td>' +
                                '<td id="typeofpayment_"> <label class="control-label" id="amount2">' + htotal + '</label></td>' +
                                '</tr>';

                            $("#artists").append(markup);
                            $('#total').val(finaltotal);
                            $('#grossamt').val(finaltotal);
                            if (count == 0) {
                                $("#artists").html('');
                            }
                            var sid = $('#save_update').val();
                            if (sid > 0) {
                                $.ajax({
                                    type: "POST",
                                    url: baseurl + "Invoice_Entry/getupdatepeople",
                                    data: {
                                        peopleid: peopleid,
                                        invoice_no: '0',
                                        invoice_status: '0',
                                        table_name: 'peopleattdance',
                                    },
                                    dataType: "JSON",
                                    async: false,
                                    success: function(data) {

                                    }
                                });
                            }
                        }
                        console.log(count);
                    });
                    $.ajax({
                        type: "POST",
                        url: baseurl + "Invoice_Entry/getartistdata",
                        dataType: "JSON",
                        async: false,
                        data: {
                            id: id1,

                        },
                        success: function(data) {
                            $("#artists").html('');

                            var amt = 0;
                            var total = 0;
                            var markup = "";

                            if (data.length > 0) {
                                var row_id = 0;
                                for (var i = 0; i < data.length; i++) {
                                    amt = parseInt(data[i].day) * parseInt(data[i].rate);
                                    total = parseInt(total) + parseInt(amt);
                                    count = data[0].day;
                                    totalextrahour = data[1].day;
                                    aperdayrate = data[0].rate;
                                    aperdayhour = data[1].rate;
                                    if (i == 0) {
                                        row_id = row_id + 1;

                                        markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                            '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">' + data[0].typeofpayment + '</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm rate getamount" id="day_' + row_id + '" style="text-align:right;" value=' + data[0].day + '></td>' +
                                            '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">' + data[0].unit + '</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm rate getamount" id="rate_' + row_id + '" style="text-align:right;" value=' + data[0].rate + '></td>' +
                                            '<td id="typeofpayment_"> <label class="control-label" id="amount1">' + amt + '</label></td>' +
                                            '</tr>';
                                    } else if (i == 1) {
                                        row_id = row_id + 1;

                                        markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                            '<td id="typeofpayment_"> <label class="control-label" id="regular_attandance_' + row_id + '">' + data[1].typeofpayment + '</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm ogetamount" id="day_' + row_id + '" style="text-align:right;" value=' + data[1].day + '></td>' +
                                            '<td id="typeofpayment_"> <label class="control-label" id="unitdata_' + row_id + '">' + data[1].unit + '</label></td>' +
                                            '<td   id="callremark" > <input type="number" class="form-control input-sm  ogetamount" id="rate_' + row_id + '" style="text-align:right;" value=' + data[1].rate + '></td>' +
                                            '<td id="typeofpayment_"> <label class="control-label" id="amount2">' + amt + '</label></td>' +
                                            '</tr>';
                                    }
                                    $("#artists").append(markup);
                                    $('#total').val(total);
                                    $('#grossamt').val(total);
                                }
                            }
                        }
                    });

                }
            }
        } else {
            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/getactualsupplierdata",
                dataType: "JSON",
                async: false,
                data: {
                    id: entryno,
                    supplierid: supplierid,
                    proid: proid,
                },
                success: function(data) {
                    var row_id = 0;
                    var amt = 0;
                    var table1 = $('#suppliertb').DataTable();
                    table1.destroy();
                    $('#suppliertbody').html('');
                    var total = 0;
                    if (data.length > 0) {
                        for (var i = 0; i < data.length; i++) {

                            row_id = row_id + 1;
                            if (data[i].qty > 0 && data[i].rate > 0) {
                                amt = parseInt(data[i].qty) * parseInt(data[i].rate);

                            }
                            var tdateAr1 = data[i].date.split('-');
                            var adate = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];
                            total = parseInt(amt) + parseInt(total);
                            $('#totalacamt').text(total);
                            var html = '<tr class="project_tab_add_row" id="list_' + row_id + '" >' +
                                '<td  id="date_' + row_id + '" >' + adate + '</td>' +
                                '<td style="display:none;" id="exid_' + row_id + '" >' + data[i].id + '</td>' +
                                '<td  style="display:none;" id="type_of_payment_' + row_id + '">' + data[i].expenseid + '</td>' +
                                '<td  id="type_of_paymentname_' + row_id + '">' + data[i].expensetype + '</td>' +
                                '<td  id="narration_' + row_id + '">' + data[i].narration + '</td>' +
                                '<td   id="referenceno_' + row_id + '" style="text-align:right;">' + data[i].referenceno + '</td>' +
                                '<td  id="actualdata' + row_id + '"> <input type="number" class="form-control input-sm examtdata" id="examt_' + row_id + '" style="text-align:right;" value=' + amt + '></td>' +
                                '<td  id="passeddata_' + row_id + '"> <input type="number" class="form-control input-sm examtdata" id="passamtamt_' + row_id + '" style="text-align:right;" value=' + data[i].amountpass + '><label class="control-label" id="getamterror_' + row_id + '" style="color:red;display:none;" >Amount Passed not greater than Expense amount</label></td>' +
                                '<td  id="balancedata_' + row_id + '"> <input type="text" class="form-control input-sm" id="balanceamt_' + row_id + '" value=' + data[i].balance_amt + '  style="text-align:right;" disabled ></td>';
                            if (data[i].invoice_no == entryno && data[i].invoice_status == 1) {
                                html += '<td  id="checkboxdata_' + row_id + '"><input type="checkbox" name=' + data[i].id + ' id="check_' + row_id + '" class="form-control input-sm checkbox checkBoxClass" value=' + row_id + ' checked></td>';
                            } else {
                                html += '<td  id="checkboxdata_' + row_id + '"><input type="checkbox" name=' + data[i].id + ' id="check_' + row_id + '" class="form-control input-sm checkbox checkBoxClass" value=' + row_id + '></td>';
                            }

                            html += '</tr>';

                            $('#suppliertbody').append(html);



                        }
                        $('#suppliertb').DataTable({});
                        $(".checkbox").change(function() {
                            if ($(this).prop("checked") == false) {

                                var id = $(this).val();
                                var expebseid = $(this).attr('name');
                                var passamt = $('#passamtamt_' + id).val();
                                grossamt = $('#grossamt').val();
                                var amtgross = parseInt(grossamt) - parseInt(passamt);
                                $('#grossamt').val(amtgross);
                                console.log('expebseid' + expebseid);
                                $.ajax({
                                    type: "POST",
                                    url: baseurl + "Invoice_Entry/getupdate_actualschedual",
                                    data: {
                                        invoice_no: '0',
                                        invoicedate: '0000-00-00',
                                        expebseid: expebseid,
                                        actalamt: '0',
                                        balance: '0',
                                        passamt: '0',
                                        invoicestatus: '0',
                                    },
                                    dataType: "JSON",
                                    async: false,
                                    success: function(data) {

                                        get_all_suppliertotal();
                                        desibledallocate();
                                        getamountdata();
                                    }
                                });
                            } else {



                                var id = $(this).val();
                                var expebseid = $(this).attr('name');
                                var passamt = $('#passamtamt_' + id).val();
                                grossamt = $('#grossamt').val();
                                var amtgross = parseInt(grossamt) + parseInt(passamt);
                                $('#grossamt').val(amtgross);
                                get_all_suppliertotal();
                                desibledallocate();
                                getamountdata();
                            }
                        });

                        /*-------Click Event Of All Supplier Tick-----------------*/
                        /* $(document).on("click","#selectall",function(e){
                             e.preventDefault();
                             alert('hii')
                             $(".checkBoxClass").prop('checked', true);

                         });*/
                    }
                }

            });
            get_all_suppliertotal();
            desibledallocate();



        }
        $('#grossamt').val(grossamt);
        getamountdata();
        /* $('#deduction').val(deduction);
    $('#other').val(othercharge);
    $('#sgstamt').val(sgstamt);
    $('#cgstamt').val(cgstamt);
    $('#igstamt').val(igstamt);
    $('#deductionamt').val(deductionamt);
    $('#inamt').val(totalamount);
   $('#other').val(othercharge);*/

        /*------------get document of this Attachment----------------*/
        $.ajax({
            type: "POST",
            url: baseurl + "Invoice_Entry/getattachmentdata",
            dataType: "JSON",
            async: false,
            data: {
                id: id1,

            },
            success: function(data) {

                var row_id = 0;
                var doc = "";
                var download = "";
                $("#doc_tbody").html('');
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        row_id = row_id + 1;
                        if (data[i].doctype == "1") {
                            doc = "Invoice Copy";
                        } else {
                            doc = "Challan Copy";
                        }

                        if (data[i].filename != '') {
                            download = '<i class="fa fa-download" aria-hidden="true"></i>';
                        } else {
                            download = '';
                        }
                        var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                            '<td style="display:none;" >' + row_id + '</td>' +
                            '<td  style="display:none;" id="documenttype_' + row_id + '">' + data[i].doctype + '</td>' +
                            '<td  id="doctype_' + row_id + '">' + doc + '</td>' +
                            '<td  id="description_' + row_id + '">' + data[i].descrption + '</td>' +
                            '<td  id="filename_' + row_id + '">' + data[i].filename + '</td>' +
                            '<td id="attchment_' + row_id + '"><a href=' + baseurl + 'Invoice_Entry/download/' + data[i].filename + '>' + download + '</a></td>' +
                            '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                            '</tr>';

                        $("#doc_tbody").append(html);
                        $('#doc_row_id').val(row_id);
                    }

                }
            }
        });

    });



    /*----------Calculate the gst ----------------*/
    function getamountdata() {

        var sgstamt = $('#sgstamt').val();
        var cgstamt = $('#cgstamt').val();
        var igstamt = $('#igstamt').val();

        var grossamt = $('#grossamt').val();

        var totalamount = (parseInt(grossamt) + parseInt(sgstamt) + parseInt(cgstamt) + parseInt(igstamt));

        $('#inamt').val(totalamount);
    }
    $(document).on('click', '.closehideshow', function() {
        $('#artists').html('');
        $("#doc_tbody").html('');
        $('#suppliertbody').html('');

        form_clear();
    });
    /*--------------Delete Code Start---------------*/
    /*$(document).on('click','.delete_data',function(){
        var id1 = $("#save_update").val();

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
                url  : baseurl+"Invoice_Entry/delete_master",
                dataType : "JSON",
                data : { id:id1,
                         peopletype:peopletype,
                         table_name:'invoice_entry',},
                success: function(data){
                if(data == true){
                        swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                        $('.closehideshow').trigger('click');
                        datashow();	//call function show all product					
                    
                    }
                    else{
                    errorTost("Data Delete Failed");
                    }

                }
            });
            return false;
            
        });
            
        }

       });*/
    /*--------------------Delete Code End---------------*/
    var newurl = "";

    function getdocument() {
        var project = $('#project').val();
        var supplier = $('#supplier').val();
        var people_type = $('#people_type').val();

        // if (project > 0 && supplier > 0 && people_type > 0) {
        $.ajax({
            type: "POST",
            url: baseurl + "Invoice_Entry/getdocumentdata",
            dataType: "JSON",
            data: {
                project: project,
                supplier: supplier,
                people_type: people_type,

            },
            success: function(data) {
                //alert(data);

                if (data.length > 0) {
                    if (data[0].attachment != "") {
                        console.log("data[0].attachment" + data[0].attachment);
                        if (people_type != "5") {
                            newurl = baseurl + 'Invoice_Entry/download2/' + data[0].attachment;
                        } else {
                            console.log("data[0].attachment" + data[0].filename);
                            newurl = baseurl + 'Invoice_Entry/download1/' + data[0].filename;
                        }

                        //newurl= baseurl+"/assets/documents/"+data[0].filename;
                        $('a.target').show();
                        $('#linkerror').hide();
                    } else {
                        $('a.target').attr('title', 'Not avalible');
                        $('a.target').hide();
                        $('#linkerror').show();
                    }

                } else {
                    $('a.target').attr('title', 'Not avalible');
                    $('a.target').hide();
                    $('#linkerror').show();
                    //$('#') 
                }


            }
        });
        // }
    }

    $(document).on("click", "a", function() {
        $('a.target').attr('href', newurl);
        console.log(newurl);

        //window.open(newurl, '_blank'); 
    });

    function check_artistdata() {
        var sid = $('#save_update').val();

        if (sid == "") {
            var supplier = $('#supplier').val();
            var project = $('#project').val();
            var people_typename = $("#people_type option:selected").text();
            var Sdate = $('#s_date').val();
            var tdateAr = Sdate.split('/');
            var date2 = tdateAr[1] + '-' + tdateAr[0];

            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/checkinvoicegenerate",
                dataType: "JSON",
                data: {
                    project: project,
                    supplier: supplier,
                    date2: date2,
                },
                success: function(data) {
                    if (data == 100) {
                        swal("This Month Invoice Is Generated");
                        count = 1;
                    } else {
                        count = 0;
                    }

                }
            });
        }
    }

    /*--------------check Status of Current invoice-----------------*/


    /*----------------Click Event OF Filter  Button Start-------------------------------*/

    $(document).on('click', '#filter', function(e) {
        e.preventDefault();


        var fromdate = $('#fromdate').val();
        var todate = $('#todate').val();

        var tdateAr1 = fromdate.split('/');
        fromdate = tdateAr1[2] + '-' + tdateAr1[1] + '-' + tdateAr1[0];

        var tdateAr1 = todate.split('/');
        todate = tdateAr1[2] + '-' + tdateAr1[1] + '-' + tdateAr1[0];

        get_supplerdata(fromdate, todate);


    });




    /*----------------Click Event OF Filter  Button End-------------------------------*/

    /*----------------Getting Payment Entry Data  Start-------------------------------*/
    $(document).on("change", "#supplier", function(e) {
        e.preventDefault();
        var supplier = $('#supplier').val();
        $.ajax({
            type: "POST",
            url: baseurl + "Invoice_Entry/getpaymentEntrydata",
            dataType: "JSON",
            data: {

                supplier: supplier,

            },
            success: function(data) {
                $("#payment_tbody").html('');
                var row_id = 0;
                var payment = "";
                var totalpaidamt = 0;
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        row_id = row_id + 1;

                        var tdateAr1 = data[i].payment_date.split('-');
                        var payment_date = tdateAr1[2] + '/' + tdateAr1[1] + '/' + tdateAr1[0];

                        if (data[i].paid_via == "1") {
                            payment = "Cash";
                        } else if (data[i].paid_via == "2") {
                            payment = "Cheque";
                        } else {
                            payment = "Online";
                        }
                        var deductionamt = parseInt(data[i].deductoinamt1) + parseInt(data[i].deductoinamt2) + parseInt(data[i].deductiomamt3);
                        var padiamt = parseInt(data[i].paidamt);
                        var netamt = parseInt(padiamt) - parseInt(deductionamt);
                        totalpaidamt = parseInt(totalpaidamt) + parseInt(netamt);
                        var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                            '<td  id="payment_date_' + row_id + '">' + payment_date + '</td>' +
                            '<td  id="payment_' + row_id + '">' + payment + '</td>' +
                            '<td  id="paymentref_' + row_id + '">' + data[i].payment_ref + '</td>' +
                            '<td   style="text-align:right;" id="paymentamt_' + row_id + '">' + data[i].paidamt + '</td>' +
                            '<td  style="text-align:right;" id="deductionamt_' + row_id + '">' + deductionamt + '</td>' +
                            '<td  style="text-align:right;" id="finalamt_' + row_id + '">' + netamt + '</td>' +
                            '</tr>';

                        $("#payment_tbody").append(html);

                    }
                    $('#payment_totalamt').text(totalpaidamt);

                }

            }
        });

    });

    /*----------------Getting Payment Entry Data  End-------------------------------*/

    /*----------------Check Invoice No Already Exists OR Not Start-------------------------------*/
    $(document).on("blur", "#s_no", function(e) {
        e.preventDefault();
        var inviceno = $('#s_no').val();
        var supplier = $('#supplier').val();

        $.ajax({
            type: "POST",
            url: baseurl + "Invoice_Entry/checkinvoiceno",
            dataType: "JSON",
            data: {

                inviceno: inviceno,
                supplier: supplier,

            },
            success: function(data) {

                if (data == '100') {
                    //  swal("Entered Invoice NO Already Exists");
                    $('#errinvoiceno').show();
                    $('#productionsave').attr('disabled', 'disabled');
                } else {
                    $('#errinvoiceno').hide();
                    $('#productionsave').removeAttr("disabled");
                }

            }
        });

    });


    /*----------------Check Invoice No Already Exists OR Not  End-------------------------------*/

    /*----------------Paid Leave Blur Start-------------------------------*/
    $(document).on("blur", "#paidleave", function(e) {
        e.preventDefault();



        var people_typename = $("#people_type option:selected").text();;
        var padidata = $('#paidleave').val();
        if (people_typename == "Production") {

            if (padidata > 0) {
                var grossamt = $('#grossamt').val();
                var sgstamt = $('#sgstamt').val();
                var cgstamt = $('#cgstamt').val();
                var igstamt = $('#igstamt').val();
                $('#Paid_leavedata').text(padidata);
                var attadanace = $('#attadanace').text();

                var totalleave = parseInt(padidata) + parseInt(attadanace);
                $('#totalleave').text(totalleave);
                var passamt = $('#passedamt').text();
                var paidleaveamt = (parseInt(paiddayamt) * parseInt(padidata));

                var finalamt = parseInt(paidleaveamt) + parseInt(passamt);
                var inam = parseInt(finalamt) + parseInt(sgstamt) + parseInt(cgstamt) + parseInt(igstamt);

                $('#grossamt').val(finalamt);
                $('#inamt').val(inam);


            }
        } else {
            if (padidata > 0) {
                var Sdate = $('#s_date').val();
                var tdateAr = Sdate.split('/');
                var date2 = tdateAr[1] + '-' + tdateAr[0];
                console.log(tdateAr[1] + "" + tdateAr[0]);

                var day = getDaysInMonth(tdateAr[0], tdateAr[1]);

                var grossamt = $('#grossamt').val();
                $('#Paid_leavedata').text(padidata);
                var attadanace = $('#attadanace').text();
                var sgstamt = $('#sgstamt').val();
                var cgstamt = $('#cgstamt').val();
                var igstamt = $('#igstamt').val();

                var totalleave = parseInt(padidata) + parseInt(attadanace);
                $('#totalleave').text(totalleave);
                var finalamt = 0;

                if (adminsalary > 0) {

                    grossamt = parseInt(adminsalary) / parseInt(day);
                    grossamt = grossamt.toFixed(2);
                    //  alert(grossamt);
                    finalamt = parseFloat(grossamt) * parseFloat(padidata);
                    finalamt = finalamt.toFixed(2);
                } else {
                    finalamt = 0;
                }

                $('#grossamt').val(finalamt);
                var inam = parseInt(finalamt) + parseInt(sgstamt) + parseInt(cgstamt) + parseInt(igstamt);
                $('#inamt').val(inam);



            }
        }
    });


    /*----------------Paid Leave Blur Start End-------------------------------*/

    /*------------get Admin Salary Start ---------------*/
    function getadminsalary() {
        var suppiler = $('#supplier').val();

        if (suppiler > 0) {
            var id = $('#save_update').val();
            if (id == "") {
                $.ajax({
                    type: "POST",
                    url: baseurl + "Invoice_Entry/getadminstaffdata",
                    dataType: "JSON",
                    data: {

                        supplier: suppiler,

                    },
                    success: function(data) {

                        if (data.length > 0) {
                            $('#grossamt').val(data[0].rate_per_month);
                            $('#inamt').val(data[0].rate_per_month);
                            adminsalary = data[0].rate_per_month;
                        }

                    }
                });
            }
        }

    }

    /*------------get Admin Salary End ---------------*/
    function getepisodicsalary() {
        var suppiler = $('#supplier').val();
        var project = $('#project').val();

        if (suppiler > 0 && project > 0) {
            var id = $('#save_update').val();
            if (id == "") {
                $.ajax({
                    type: "POST",
                    url: baseurl + "Invoice_Entry/getepisodicstaffdata",
                    dataType: "JSON",
                    data: {
                        project: project,
                        supplier: suppiler,

                    },
                    success: function(data) {

                        if (data.length > 0) {
                            $('#perepisidicrate').val(data[0].rate);
                            //$('#inamt').val(data[0].rate);
                            var noofeposoic = $('#noofeposoic').val();
                            var rate = data[0].rate;
                            if (noofeposoic > 0 && rate > 0) {
                                var grossdata = parseInt(rate) * parseInt(noofeposoic);
                                $('#grossamt').val(grossdata);
                                $('#inamt').val(grossdata);
                            } else {
                                $('#grossamt').val('0');
                                $('#inamt').val('0');
                            }
                        } else {
                            $('#perepisidicrate').val('0');
                        }

                    }
                });
            }
        }

    }




    function addTimes() {
        var peopletype = $('#people_type').val();
        var people_typename = $("#people_type option:selected").text();
        var supplier = $('#supplier').val();
        var project = $('#project').val();
        var Sdate = $('#s_date').val();
        var tdateAr = Sdate.split('/');
        var months = [
            'January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ];
        var date2 = tdateAr[1] + '-' + tdateAr[0];
        console.log(tdateAr[1] + "" + tdateAr[0]);

        var day = getDaysInMonth(tdateAr[0], tdateAr[1]);
        var monthname = months[tdateAr[0] - 1];

        var year = tdateAr[1];


        if (project > 0 && peopletype > 0) {
            $.ajax({
                type: "POST",
                url: baseurl + "Invoice_Entry/getplannfotagedata",
                data: {

                    project: project,
                    monthname: monthname,
                    year: year,

                },
                dataType: "JSON",
                async: false,
                success: function(data) {

                    if (data.length != "") {
                        $('#noofeposoic').val(data[0].totalepisode);
                    } else {
                        $('#noofeposoic').val('0');
                    }
                    var noofeposoic = $('#noofeposoic').val();
                    var rate = $('#perepisidicrate').val();
                    if (noofeposoic > 0 && rate > 0) {
                        var grossdata = parseInt(rate) * parseInt(noofeposoic);
                        $('#grossamt').val(grossdata);
                        $('#inamt').val(grossdata);
                    } else {

                        $('#grossamt').val('0');
                        $('#inamt').val('0');
                    }


                }
            });
        }
    }

    /*--------Blur Event of No of Episode and Rate-----------------*/
    $(document).on("blur", ".episodicgross", function(e) {
        e.preventDefault();

        var noofeposoic = $('#noofeposoic').val();
        var rate = $('#perepisidicrate').val();
        if (noofeposoic > 0 && rate > 0) {
            var grossdata = parseInt(rate) * parseInt(noofeposoic);
            $('#grossamt').val(grossdata);
            $('#inamt').val(grossdata);
        } else {
            $('#grossamt').val('0');
            $('#inamt').val('0');
        }
    });


    /*----------Click Event of  Fetch Detalis Start--------------------*/
    $(document).on("click", "#fetchdetails", function(e) {
        e.preventDefault();
        var people_typename = $("#people_type option:selected").text();

        var project = $('#project').val();
        var s_date = $('#s_date').val();
        var people_type = $('#people_type').val();
        var supplier = $('#supplier').val();

        if (project == null) {
            $('#projecterr').show();
        } else {
            $('#projecterr').hide();
        }

        if (s_date == "") {
            $('#invoicedateerr').show();
        } else {
            $('#invoicedateerr').hide();
        }

        if (people_type == null) {
            $('#vendortypeerr').show();

        } else {
            $('#vendortypeerr').hide();
        }

        if (supplier == null) {
            $('#suppliererr').show();

        } else {
            $('#suppliererr').hide();
        }
        if (people_typename == "Supplier") {
            $('#suppliertbody').html('');
            var Sdate = $('#s_date').val();
            var tdateAr = Sdate.split('/');
            var date2 = tdateAr[1] + '-' + tdateAr[0];
            console.log(tdateAr[1] + "" + tdateAr[0]);

            var day = getDaysInMonth(tdateAr[0], tdateAr[1]);
            var tdateAr = Sdate.split('/');
            first = "1";
            var fromdate = tdateAr[1] + '-' + tdateAr[0] + '-' + '1';

            var tdateAr1 = Sdate.split('/');
            var todate = tdateAr[1] + '-' + tdateAr[0] + '-' + day;

            get_supplerdata(fromdate, todate);
        } else if (people_typename == "Artist" || people_typename == "Production") {
            gettting_Artistdata();
        } else if (people_typename == "Admin Staff") {
            getadminsalary();
        } else if (people_typename == "Episodic") {
            getepisodicsalary();
            addTimes();


        }
    });
    /*----------Click Event of  Fetch Detalis End--------------------*/



});