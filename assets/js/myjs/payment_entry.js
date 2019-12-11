$(document).ready(function() {
    var supplier = new Array();
    var peoplertype = new Array();
    $(document).on("click", "#btninadd", function(e) {
        e.preventDefault();
        form_clear();

        getentryno();
        $('.Delete_data').hide();
        getMasterSelect("peopletype_master", ".peoplertype", " status = '1'");

        $('.date').datepicker({
            'todayHighlight': true,
        });
        var date = new Date();
        date = date.toString('dd/MM/yyyy');
        $("#d_payment").val(date);

    });

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

    /*-------Change Event of  Vendor type Start----------------*/
    $(document).on("change", ".peoplertype", function(e) {
        e.preventDefault();
        var people_type = $(this).val();
        var people_typename = $(".peoplertype option:selected").text();;
        var table_name = "";
        var where = '';

        $('#amount_paid').val('0');
        //var remarks=$('#remarks').val();
        $('#deductiondes1').val('');
        $('#deduction1').val('0');
        $('#deduction2').val('0');
        $('#deduction3').val('0');
        $('#netamount').val('0');

        //  $('#totalpaid').val();
        $('#amtdes').val('');
        $('#deductiondes2').val('');
        $('#deductiondes3').val('');
        $('#totalpaid').val('');
        $('#totalinvoice').val('');
        $('#totalpaid').val('');
        $('#artists').html('');
        console.log(people_type);

        if (people_typename == "Artist" || people_typename == "Production" || people_typename == "Episodic" || people_typename == "Admin Staff") {
            table_name = 'people_master';
            where = "ptypeid=" + people_type;

        } else {
            table_name = "suppiler_master";
            where = 'status=1';
        }

        $.ajax({
            type: "POST",
            url: baseurl + "Paymententery/getsupplier",
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

                    if (table_name == "suppiler_master") {
                        name = data[i].companyname;
                        id = data[i].id;
                    } else {
                        name = data[i].name;
                        id = data[i].id;
                    }


                    html += '<option value="' + id + '" >' + name + '</option>';

                }
                $('#supplier').html(html);
            }

        });
    });
    /*-------Change Event of  Vendor type End----------------*/

    /*--------geting Enrty No Start-------------*/
    function getentryno() {
        $.ajax({
            type: "POST",
            url: baseurl + "Paymententery/getmaxid",
            data: {
                table_name: 'payment_entry',
                where: 'id',
            },
            dataType: "JSON",
            async: false,
            success: function(data) {
                if (data > 0) {
                    $('#entryno').val(parseInt(data) + parseInt(1));
                } else {
                    $('#entryno').val('1');
                }
            }
        });
    }
    /*--------geting Enrty No End-------------*/

    /*------------------------ Start Change Event OF Suppler   For Getting Invoice Record-------------------*/

    $(document).on("change", "#supplier", function(e) {

        e.preventDefault();

        var supplierid = $(this).val();
        $.ajax({
            type: "POST",
            url: baseurl + "Paymententery/getallsupplier",
            data: {
                table_name: 'invoice_entry',
                supplierid: supplierid,
            },
            dataType: "JSON",
            async: false,
            success: function(data) {
                var markup = "";
                var sgst = 0;
                var cgst = 0;
                var igst = 0;
                var deduction = 0;
                var othe = "";
                var invoiceamt = 0;
                var grossamt = 0;
                var totalamt = 0;
                var row_id = 0;
                $("#artists").html('');

                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {

                        row_id = row_id + 1;
                        grossamt = data[i].grossamt;
                        if (data[i].sgst > 0) {
                            sgst = parseInt(data[i].sgst).toFixed(2);
                        } else {
                            sgst = 0
                        }

                        if (data[i].cgst > 0) {
                            cgst = parseInt(data[i].cgst).toFixed(2);
                        } else {
                            cgst = 0;
                        }
                        if (data[i].igst > 0) {
                            igst = parseInt(data[i].igst).toFixed(2);
                        } else {
                            igst = 0;
                        }


                        invoiceamt = (parseInt(grossamt) + parseInt(sgst) + parseInt(cgst) + parseInt(igst));
                        //alert(data[i].paidamt);

                        if (data[i].paidamt > 0) {
                            //alert('hii');
                            invoiceamt = parseInt(invoiceamt) - parseInt(data[i].paidamt);
                        }


                        totalamt = parseInt(totalamt) + parseInt(invoiceamt);

                        var tdateAr = data[i].entrydate.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];




                        if (invoiceamt > 0) {
                            markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                                '<td style="display:none;" id="id_' + row_id + '">' + data[i].id + '</td>' +
                                '<td id="invoiceno_' + data[i].id + '">' + data[i].invoiceno + '</td>' +
                                '<td id="invoicedate_' + data[i].id + '">' + date + '</td>' +
                                '<td id="projectname_' + data[i].id + '">' + data[i].project + '</td>' +
                                // '<td id="expensgroup_' + data[i].id + '">' + data[i].expensgroup + '</td>' +
                                '<td style="text-align:right;" id="invoiceamt_' + data[i].id + '">' + invoiceamt + '</td>' +
                                '<td   id="paid_now" > <input type="number" class="form-control input-sm  ogetamount" id="paidnow_' + row_id + '" name=' + data[i].id + ' style="text-align:right;" ></td>' +
                                '</tr>';
                        }


                        $("#artists").append(markup);
                        $('#totalinvoice').val(totalamt);
                        $('#tfootdata').show();
                    }
                } else {

                    $('#totalinvoice').val('');
                }

            }
        });

    });

    /*------------------------ End  Change Event OF Suppler   For Getting Invoice Record-------------------*/
    /*--------- Start for getting Totalpaid Amount---------------*/
    function gettotalpaid() {
        var l1 = $('table#invoicetb').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        var totalactualamt = 0;

        for (var j = 1; j <= s; j++) {
            //k=j+1;
            var actalamt = $('#paidnow_' + j).val();

            if (actalamt > 0) {
                totalactualamt = parseInt(actalamt) + parseInt(totalactualamt);
            }
        }
        $('#totalpaid').val(totalactualamt);
    }
    /*---------------End for getting Totalpaid Amount---------------*/

    /*--------- Blur  Event of Totalpaid Amount---------------*/
    $(document).on("change", ".ogetamount", function(e) {
        e.preventDefault();
        gettotalpaid();
        var d_payment = $('#d_payment').val();
        var paidnow = $(this).val();
        var entryno = $('#entryno').val();
        var invoiceno = $(this).attr('name');

        var tdateAr = d_payment.split('/');
        d_payment = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        console.log(paidnow);
        var saveid = $('#save_update').val();
        if (saveid > 0) {
            if (parseInt(paidnow) > 0) {
                /*$.ajax({
    type : "POST",
    url  : baseurl+"Paymententery/getinvoiceid",
    data:{
    table_name:'invoice_entry',
    id:invoiceno,
  
    netamount:paidnow,
    paymentid:entryno,
    d_payment:d_payment,
    paymentstatus:'1',

},
    dataType : "JSON",
    async : false,
    success: function(data){
        
        console.log(data);
    }
});*/
            } else {
                console.log('from else');
                $.ajax({
                    type: "POST",
                    url: baseurl + "Paymententery/getinvoiceid",
                    data: {
                        table_name: 'invoice_entry',
                        id: invoiceno,
                        netamount: '0',
                        paymentid: '0',
                        d_payment: '0000-00-00',
                        paymentstatus: '0',

                    },
                    dataType: "JSON",
                    async: false,
                    success: function(data) {

                        console.log(data);
                    }
                });
            }
        }

    });
    /*--------- Blur  Event of Totalpaid Amount---------------*/


    /*------------- Start Submite Event of Form---------------*/
    $(document).on("submit", "#charectermaster_form", function(e) {
        e.preventDefault();
        var id = $('#save_update').val();
        var peopletype = $('#peopletype').val();
        var entryno = $('#entryno').val();
        var supplier = $('#supplier').val();
        var d_payment = $('#d_payment').val();
        var paid = $('#paid').val();
        var refrence = $('#refrence').val();
        var amount_paid = $('#amount_paid').val();
        //var remarks=$('#remarks').val();
        var tds = $('#deductiondes1').val();
        var deduction1 = $('#deduction1').val();
        var deduction2 = $('#deduction2').val();
        var deduction3 = $('#deduction3').val();
        var netamount = $('#netamount').val();

        var totalpaidamt = $('#totalpaid').val();
        var amtdes = $('#amtdes').val();
        var deductiondes2 = $('#deductiondes2').val();
        var deductiondes3 = $('#deductiondes3').val();
        var paymenttype = $("input[name='payment_type']:checked").val();
        var tdateAr1 = d_payment.split('/');
        d_payment = tdateAr1[2] + '-' + tdateAr1[1] + '-' + tdateAr1[0];


        if (parseInt(amount_paid) == parseInt(totalpaidamt)) {

            $.ajax({
                type: "POST",
                url: baseurl + "Paymententery/save_settings",
                data: {
                    table_name: 'payment_entry',
                    id: id,
                    peopletype: peopletype,
                    entryno: entryno,
                    supplier: supplier,
                    d_payment: d_payment,
                    paid: paid,
                    refrence: refrence,
                    amount_paid: amount_paid,
                    // remarks:remarks,
                    tds: tds,
                    deduction1: deduction1,
                    deduction2: deduction2,
                    deduction3: deduction3,
                    netamount: netamount,
                    deductiondes2: deductiondes2,
                    deductiondes3: deductiondes3,
                    amtdes: amtdes,


                },
                dataType: "JSON",
                async: false,
                success: function(data) {
                    if (id == "") {
                        // $('#save_update').val(data);
                    }
                    if (data > 0 || data == true) {
                        var paymentid = data;
                        var invoiceid = $('#save_update').val();

                        if (invoiceid != "") {
                            paymentid = invoiceid;

                            $.ajax({
                                type: "POST",
                                url: baseurl + "Paymententery/delete_paymentdetalis",
                                data: {
                                    table_name: 'payment_detalis',
                                    id: paymentid,


                                },
                                dataType: "JSON",
                                async: false,
                                success: function(data) {


                                }
                            });
                        }



                        var l1 = $('table#invoicetb').find('tbody').find('tr');
                        var s = l1.length;
                        var row_id = 0;


                        for (var j = 0; j < s; j++) {
                            row_id = row_id + 1;
                            var invoiceno = $(l1[j]).find('td:eq(0)').html();
                            var paidnow = $('#paidnow_' + row_id).val();
                            var invoiceamt = $(l1[j]).find('td:eq(4)').html();
                            var totalpaid = 0;

                            if (paidnow > 0) {

                                console.log(paidnow);

                                $.ajax({
                                    type: "POST",
                                    url: baseurl + "Paymententery/save_settings",
                                    data: {
                                        table_name: 'payment_detalis',
                                        paymentid: paymentid,
                                        invoiceid: invoiceno,
                                        invoice_amt: invoiceamt,
                                        paidamt: paidnow,


                                    },
                                    dataType: "JSON",
                                    async: false,
                                    success: function(data) {
                                        // alert(data);

                                    }
                                });
                                $.ajax({
                                    type: "POST",
                                    url: baseurl + "Paymententery/getpaiddata",
                                    data: {
                                        table_name: 'invoice_entry',
                                        id: invoiceno,


                                    },
                                    dataType: "JSON",
                                    async: false,
                                    success: function(data) {
                                        if (data.length > 0) {
                                            totalpaid = parseInt(data[0].totalpayment) + parseInt(paidnow);
                                        } else {
                                            totalpaid = paidnow;
                                        }


                                    }
                                });



                                if (invoiceamt == paidnow) {
                                    $.ajax({
                                        type: "POST",
                                        url: baseurl + "Paymententery/getinvoiceid",
                                        data: {
                                            table_name: 'invoice_entry',
                                            id: invoiceno,
                                            remain_status: 'Fullypaid',
                                            paymentstatus: '1',
                                            totalpaid: totalpaid,

                                        },
                                        dataType: "JSON",
                                        async: false,
                                        success: function(data) {


                                        }
                                    });
                                } else {
                                    $.ajax({
                                        type: "POST",
                                        url: baseurl + "Paymententery/getinvoiceid",
                                        data: {
                                            table_name: 'invoice_entry',
                                            id: invoiceno,
                                            remain_status: 'Partical paid',
                                            paymentstatus: '0',
                                            totalpaid: totalpaid,

                                        },
                                        dataType: "JSON",
                                        async: false,
                                        success: function(data) {


                                        }
                                    });
                                }

                            }
                        }
                    }
                    successTost("Data save Successfully");
                    $('.closehideshow').trigger('click');

                    // form_clear();
                    datashow();

                }
            });
        } else {
            swal("Amount Paid And  Paid Now Amount Not Same");
        }


    });



    /*-------------End Submite Event of Form---------------*/

    /*--------------Blur Event Through Get Final Amt-----------*/
    $(document).on("blur", ".getfinalamt", function(e) {
        e.preventDefault();

        var amount_paid = $('#amount_paid').val();
        var deduction1 = $('#deduction1').val();
        var deduction2 = $('#deduction2').val();
        var deduction3 = $('#deduction3').val();
        var finalamt = 0;
        if (deduction1 == "") {
            deduction1 = 0;
        }
        if (deduction1 == "") {
            deduction2 = 0;
        }
        if (deduction1 == "") {
            deduction3 = 0;
        }

        if (amount_paid > 0) {
            finalamt = parseInt(amount_paid) - (parseInt(deduction1) + parseInt(deduction2) + parseInt(deduction3));
        }
        $('#netamount').val(finalamt);
    });
    datashow();
    /*-------------function data show-------------------*/
    function datashow() {
        $.ajax({
            type: "POST",
            url: baseurl + "Paymententery/getallpayment",
            dataType: "JSON",
            async: false,
            data: {


            },
            success: function(data) {
                console.log(data);

                var payment = "";
                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Date of Payment</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Supplier Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Vendor Type</th>' +
                    '<th style="display:none;">Vendortypwid</th>' +
                    '<th style="display:none;"> Id</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Entry No</th>' +
                    '<th style="display:none;">Supplierid</th>' +
                    
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Paid Via</th>' +
                    '<th style="display:none;"> Payment ID</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Payment Refrence</th>' +

                    '<th style="display:none;">Amount Paid</th>' +
                    '<th style="display:none;">Description</th>' +
                    '<th style="display:none;">Deduction</th>' +
                    '<th style="display:none;">Description</th>' +
                    '<th style="display:none;">Deduction</th>' +
                    '<th style="display:none;">Description</th>' +
                    '<th style="display:none;">Deduction</th>' +
                    '<th style="display:none;">Description</th>' +
                    '<th style="display:none;">Finalpay</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
                if (data.length > 0) {
                    for (i = 0; i < data.length; i++) {

                        if (data[i].date != "0000-00-00") {

                            var tdateAr = data[i].payment_date.split('-');
                            date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                        }
                        if (data[i].paid_via == "1") {
                            payment = "Cash";
                        } else if (data[i].paid_via == "2") {
                            payment = "Cheque";
                        } else {
                            payment = "Online";
                        }

                        html += '<tr>' +
                            '<td id="payment_date_' + data[i].id + '">' + date + '</td>' +
                            '<td id="supplieridname_' + data[i].id + '">' + data[i].peplename + '</td>' +
                            '<td id="vendortype_' + data[i].id + '">' + data[i].vendortype + '</td>' +
                            '<td  style="display:none;" id="vendortype_id_' + data[i].id + '">' + data[i].vendor_type + '</td>' +
                            '<td  style="display:none;" id="idofsr_' + data[i].id + '">' + data[i].id + '</td>' +

                            '<td id="entryno_' + data[i].id + '">' + data[i].entryno + '</td>' +
                            '<td  style="display:none;" id="supplier_' + data[i].id + '">' + data[i].supplier + '</td>' +
                            '<td  style="display:none;" id="paid_via_' + data[i].id + '">' + data[i].paid_via + '</td>' +
                            '<td  id="payment_' + data[i].id + '">' + payment + '</td>' +
                            '<td  id="paymentref_' + data[i].id + '">' + data[i].payment_ref + '</td>' +


                            '<td style="display:none;" id="paidamt_' + data[i].id + '">' + data[i].paidamt + '</td>' +
                            '<td style="display:none;" id="deductoinamt1_' + data[i].id + '">' + data[i].deductoinamt1 + '</td>' +
                            '<td style="display:none;" id="deductoinamt2_' + data[i].id + '">' + data[i].deductoinamt2 + '</td>' +
                            '<td style="display:none;" id="deductiomamt3_' + data[i].id + '">' + data[i].deductiomamt3 + '</td>' +
                            '<td style="display:none;" id="deductiondes1_' + data[i].id + '">' + data[i].deductiondes1 + '</td>' +
                            '<td style="display:none;" id="deductiondes2_' + data[i].id + '">' + data[i].deductiondes2 + '</td>' +
                            '<td style="display:none;" id="deductiondes3_' + data[i].id + '">' + data[i].deductiondes3 + '</td>' +
                            '<td style="display:none;" id="amtdes_' + data[i].id + '">' + data[i].amtdes + '</td>' +
                            '<td style="display:none;" id="finalpayment_' + data[i].id + '">' + data[i].finalpayment + '</td>' +
                            '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="' + data[i].id + '"  ><i class="fa fa-edit"></i></button>' +
                            '</tr>';
                    }

                }
                html += '</tbody></table>';
                $('#show_master1').html(html);
                $('#myTable').DataTable({});



            }
        });
    }
    /*----------Edit Of Main Table--------------------*/

    $(document).on('click', '.edit_data', function() {
        $('.btnhideshow').trigger('click');
        $('.Delete_data').show();
        $('.attachment').show();
        $('.panel-tab a[href="#invoiceEntry"]').tab('show');

        var id1 = $(this).attr('id');

        var vendortype_id = $('#vendortype_id_' + id1).html();
        var entryno = $('#entryno_' + id1).html();
        var supplier = $('#supplier_' + id1).html();
        var payment_date = $('#payment_date_' + id1).html();
        var paid_via = $('#paid_via_' + id1).html();
        var paymentref = $('#paymentref_' + id1).html();

        var paidamt = $('#paidamt_' + id1).html();
        var deductoinamt1 = $('#deductoinamt1_' + id1).html();
        var deductoinamt2 = $('#deductoinamt2_' + id1).html();
        var deductiomamt3 = $('#deductiomamt3_' + id1).html();
        var deductiondes1 = $('#deductiondes1_' + id1).html();

        var deductiondes2 = $('#deductiondes2_' + id1).html();
        var deductiondes3 = $('#deductiondes3_' + id1).html();
        var amtdes = $('#amtdes_' + id1).html();
        var finalpayment = $('#finalpayment_' + id1).html();

        $('#save_update').val(id1);
        $('#peopletype').val(vendortype_id).trigger('change');
        $('#entryno').val(entryno);
        $('#supplier').val(supplier).trigger('change');
        $('#d_payment').val(payment_date);
        $('#paid').val(paid_via).trigger('change');
        $('#refrence').val(paymentref);
        $('#amount_paid').val(paidamt);
        //var remarks=$('#remarks').val();
        $('#deductiondes1').val(deductiondes1);
        $('#deduction1').val(deductoinamt1);
        $('#deduction2').val(deductoinamt2);
        $('#deduction3').val(deductiomamt3);
        $('#netamount').val(finalpayment);

        //  $('#totalpaid').val();
        $('#amtdes').val(amtdes);
        $('#deductiondes2').val(deductiondes2);
        $('#deductiondes3').val(deductiondes3);

        $.ajax({
            type: "POST",
            url: baseurl + "Paymententery/editgetallsupplier",
            data: {
                table_name: 'invoice_entry',
                supplier: supplier,
                id1: id1,
            },
            dataType: "JSON",
            async: false,
            success: function(data) {
                var markup = "";
                var sgst = 0;
                var cgst = 0;
                var igst = 0;
                var deduction = 0;
                var othe = "";
                var invoiceamt = 0;
                var grossamt = 0;
                var totalamt = 0;
                var row_id = 0;
                $("#artists").html('');
                var totalpaid = 0;
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {

                        row_id = row_id + 1;
                        // grossamt = data[i].grossamt;
                        // if (data[i].sgst > 0) {
                        //     sgst = parseInt(data[i].sgst).toFixed(2);
                        // } else {
                        //     sgst = 0
                        // }

                        // if (data[i].cgst > 0) {
                        //     cgst = parseInt(data[i].cgst).toFixed(2);
                        // } else {
                        //     cgst = 0;
                        // }
                        // if (data[i].igst > 0) {
                        //     igst = parseInt(data[i].igst).toFixed(2);
                        // } else {
                        //     igst = 0;
                        // }


                        invoiceamt = (parseInt(data[i].invoice_amt));
                        totalamt = parseInt(totalamt) + parseInt(invoiceamt);
                        totalpaid = (parseInt(totalpaid) + parseInt(data[i].paidamt)).toFixed(2);

                        var tdateAr = data[i].entrydate.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                        markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                            '<td style="display:none;" id="id_' + row_id + '">' + data[i].id + '</td>' +
                            '<td id="invoiceno_' + data[i].id + '">' + data[i].invoiceno + '</td>' +
                            '<td id="invoicedate_' + data[i].id + '">' + date + '</td>' +
                            '<td id="projectname_' + data[i].id + '">' + data[i].project + '</td>' +
                            //   '<td id="expensgroup_' + data[i].id + '">' + data[i].expensgroup + '</td>' +
                            '<td  style="text-align:right;" id="invoiceamt_' + data[i].id + '">' + invoiceamt + '</td>' +
                            '<td   id="paid_now" > <input type="number" class="form-control input-sm  ogetamount" id="paidnow_' + row_id + '" name=' + data[i].id + ' value=' + data[i].paidamt + ' style="text-align:right;" ></td>' +
                            '</tr>';
                        $("#artists").append(markup);
                        $('#totalinvoice').val(totalamt);
                        $('#totalpaid').val(totalpaid);
                    }
                } else {

                    $('#totalinvoice').val('');
                }

            }
        });

    });

    function form_clear() {
        $('#save_update').val('');
        $('#peopletype').val('').trigger('change');
        $('#entryno').val('');
        $('#supplier').val('').trigger('change');
        $('#d_payment').val('');
        $('#paid').val('').trigger('change');
        $('#refrence').val('');
        $('#amount_paid').val('0');
        //var remarks=$('#remarks').val();
        $('#deductiondes1').val('');
        $('#deduction1').val('0');
        $('#deduction2').val('0');
        $('#deduction3').val('0');
        $('#netamount').val('0');

        //  $('#totalpaid').val();
        $('#amtdes').val('');
        $('#deductiondes2').val('');
        $('#deductiondes3').val('');
        $('#totalpaid').val('');
    }
    $(document).on('click', '.Delete_data', function() {
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
                        url: baseurl + "Paymententery/delete_master",
                        dataType: "JSON",
                        data: {
                            id: id1,
                            table_name: 'payment_entry',
                        },
                        success: function(data) {
                            if (data == true) {
                                swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                                $('.closehideshow').trigger('click');
                                datashow(); //call function show all product					

                            } else {
                                errorTost("Data Delete Failed");
                            }

                        }
                    });
                    return false;

                });

        }

    });

});