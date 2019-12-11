$(document).ready(function() {
    var table_name = "suppiler_master";
    var sid = "";
    $('.document_tab').hide();

    $(document).on("submit", "#suppliermaster_form", function(e) {
        e.preventDefault();


        var name = $('#name').val();
        var mobile1 = $('#mobile1').val();
        var mobile2 = $('#mobile2').val();
        var contactperson = $('#contact_person').val();
        var email = $('#email').val();
        var gst = $('#gst').val();
        var pan = $('#pan').val();
        var category = $('#category').val();
        var credit_days = $('#credit_days').val();
        var address = $('#address').val();
        var remark = $('#remark').val();
        var id = $('#save_update').val();
        $.ajax({
            type: "POST",
            url: baseurl + "settings/save_settings",
            dataType: "JSON",
            async: false,
            data: {
                id: id,
                name: name,
                mobile1: mobile1,
                mobile2: mobile2,
                contactperson: contactperson,
                email: email,
                gst: gst,
                pan: pan,
                category: category,
                credit_days: credit_days,
                address: address,
                remark: remark,
                table_name: table_name,
            },
            success: function(data) {

                sid = data;
                if (data > 0 || data == true) {
                    var uid = $('#save_update').val();

                    if (uid != "") {
                        sid = uid;
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/delete_master",
                            dataType: "JSON",
                            async: false,
                            data: {
                                id: sid,
                                table_name: 'currentmaterial_master',

                            },
                            success: function(data) {

                            }
                        });
                    }
                    var r1 = $('table#supplier_tab').find('tbody').find('tr');
                    var r = r1.length;

                    var tr = "";

                    for (var i = 0; i < r; i++) {


                        var t = document.getElementById('supplier_tab');
                        var projectid = $(r1[i]).find('td:eq(1)').html();
                        var serviceid = $(r1[i]).find('td:eq(2)').html();
                        var subaccount = $(r1[i]).find('td:eq(3)').html();
                        var rate = $(r1[i]).find('td:eq(7)').html();
                        var perunit = $(r1[i]).find('td:eq(8)').html();
                        var remark = $(r1[i]).find('td:eq(10)').html();

                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/save_settings",
                            dataType: "JSON",
                            async: false,
                            data: {
                                sid: sid,
                                projectid: projectid,
                                serviceid: serviceid,
                                subaccount: subaccount,
                                rate: rate,
                                perunit: perunit,
                                remark: remark,
                                table_name: 'currentmaterial_master',
                            },
                            success: function(data) {

                                // successTost("Data save Successfully");
                                //   myDeleteFunction();

                            }
                        });

                    }
                    if (id != "") {



                        // successTost("Data Update Successfully");
                    } else {
                        // successTost("Data save Successfully");


                    }
                } else {
                    errorTost("Data Cannot Save");
                }
                show_master();
                $('.document_tab ').show();
                $('.panel-tab a[href="#document_tab"]').tab('show');
            }
        });


    });
    /*---------------currentmaterial_form-------- */
    $(document).on("submit", "#currentmaterial_form", function(e) {
        e.preventDefault();

        var project = $('#project').val();
        var service = $('#services').val();
        var subaccount = $('#subaccount').val();
        var rate = $('#rate').val();
        var perunit = $('#perunit').val();
        var remark = $('#remarks').val();
        var projectname = $('#project option:selected').text();
        var servicename = $('#services option:selected').text();
        var perunittext = $('#perunit option:selected').text();
        var subaccountname = $('#subaccount option:selected').text();
        var row_id = $('#material_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#material_save_update').val();
        if (save_update != "") {

            $("#project_" + save_update).html(project);
            $("#service_" + save_update).html(service);
            $("#subaccount_" + save_update).html(subaccount);
            $("#projectname_" + save_update).html(projectname);
            $("#servicename_" + save_update).html(servicename);
            $("#subaccountname_" + save_update).html(subaccountname);
            $("#rate_" + save_update).html(rate);
            $("#perunit_" + save_update).html(perunit);
            $("#perunitext_" + save_update).html(perunittext);
            $("#remark_" + save_update).html(remark);
            $('#material_save_update').val('');


        } else {

            var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  style="display:none;" id="project_' + row_id + '">' + project + '</td>' +
                '<td  style="display:none;" id="service_' + row_id + '">' + service + '</td>' +
                '<td  style="display:none;" id="subaccount_' + row_id + '">' + subaccount + '</td>' +
                '<td  id="projectname_' + row_id + '">' + projectname + '</td>' +
                '<td  id="servicename_' + row_id + '">' + servicename + '</td>' +
                '<td  id="subaccountname_' + row_id + '">' + subaccountname + '</td>' +
                '<td  id="rate_' + row_id + '">' + rate + '</td>' +
                '<td style="display:none;" id="perunit_' + row_id + '">' + perunit + '</td>' +
                '<td  id="perunitext_' + row_id + '">' + perunittext + '</td>' +
                '<td  id="remark_' + row_id + '">' + remark + '</td>' +
                '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#supplier_tab").append(html);
            $('#material_row_id').val(row_id);
            $('#material_save_update').val('');
        }
        $('#project').val('').trigger('change');
        $('#services').val('').trigger('change');
        $('#rate').val('');
        $('#perunit').val('').trigger('change');
        $('#remarks').val('');


    });

    /*---------------currentmaterial_form edit data -------- */
    $(document).on('click', '.doc_edit_data', function(e) {
        e.preventDefault();

        var row = $(this).attr('id');
        var project = $("#project_" + row).html();
        var service = $("#service_" + row).html();
        var subaccount = $("#subaccount_" + row).html();
        var rate = $("#rate_" + row).html();
        var perunit = $("#perunit_" + row).html();
        var remark = $("#remark_" + row).html();


        $('#project').val(project).trigger('change');
        $('#services').val(service).trigger('change');
        $('#subaccount').val(subaccount).trigger('change');
        $('#rate').val(rate);
        $('#perunit').val(perunit).trigger('change');
        $('#remarks').val(remark);
        $('#material_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });

    /*---------------currentmaterial_form delete data -------- */
    $(document).on('click', '.regional_delete_data', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        if (save_update != "") {
            $("#" + save_update).remove();
            $('#doc_save_update').val('');

        }
    });

    /*----------------form clear function---------------*/
    function form_clear() {

        $('#name').val('');
        $('#mobile1').val('');
        $('#mobile2').val('');
        $('#contact_person').val('');
        $('#email').val('');
        $('#gst').val('');
        $('#category').val('').trigger('change');
        $('#credit_days').val('');
        $('#address').val('');
        $('#remark').val('');
        $('#materialdata').html('');
        $('#docdata').html('');
        $('#save_update').val('');
        $('#msg').html('');
        $('#file_hidden').val('');
        $('#doc_save_update').val('');
        $('#doc_row_id').val('');
    }

    /*---------------document form ----------*/

    $(document).on("submit", "#document_form", function(e) {
        e.preventDefault();

        var documenttype = $('#type_document').val();
        var description = $('#description').val();
        var filename = $('#file_hidden').val();
        var doctype = $("#type_document option:selected").text();
        var row_id = $('#doc_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#doc_save_update').val();
        // var filename="";	

        if (save_update != "") {

            $("#documenttype_" + save_update).html(documenttype);
            $("#description_" + save_update).html(description);
            $("#doctype_" + save_update).html(doctype);
            $("#filename_" + save_update).html(filename);
            $('#doc_save_update').val('');
            //$('#regional_row_id').val('');		

        } else {
            var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  style="display:none;" id="documenttype_' + row_id + '">' + documenttype + '</td>' +
                '<td  id="doctype_' + row_id + '">' + doctype + '</td>' +
                '<td  id="description_' + row_id + '">' + description + '</td>' +
                '<td  id="filename_' + row_id + '">' + filename + '</td>' +
                '<td><button  class="doc_edit_data1 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="doc_delete_data btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#doctab").append(html);
            $('#doc_row_id').val(row_id);
            $('#doc_save_update').val('');
        }


        $('#msg').html('');
        $('#file_hidden').val('');
        var documenttype = $('#type_document').val('');
        var description = $('#description').val('');
        //var filename = $('#filename').val('');
        $('#add_file').html('');

        $('#add_file').html('<input type="file"  class="" id="filename" name="filename" required>');
    });

    /*--------------------document edit Form ------------*/

    $(document).on('click', '.doc_edit_data1', function(e) {
        e.preventDefault();

        var row = $(this).attr('id');

        var type = $("#documenttype_" + row).html();
        var description = $("#description_" + row).html();
        var filename = $("#filename_" + row).html();
        var hiddenid = 'file_hidden';
        var msgid = 'msg';

        $('#type_document').val(type).trigger('change');
        $('#file_hidden').val(filename);
        $('#msg').html(filename + '' + "<button class='delete_doc btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");
        $('#description').val(description);
        $('#filename').removeAttr('required');
        $('#doc_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });
    /**------------document deletedata-------- */
    $(document).on('click', '.doc_delete_data', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        if (save_update != "") {
            $("#" + save_update).remove();
            $('#doc_save_update').val('');

        }
    });

    /*-------------insert record of document data---------*/

    $(document).on('click', '#docsub', function(e) {
        e.preventDefault();
        var uid = $('#save_update').val();

        if (uid != "") {
            sid = uid;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: sid,
                    table_name: 'suppilerdocument',

                },
                success: function(data) {

                }
            });
        }
        var r1 = $('table#doctab').find('tbody').find('tr');
        var r = r1.length;
        var tr = "";


        for (var i = 0; i < r; i++) {


            var t = document.getElementById('doctab');
            type = $(r1[i]).find('td:eq(1)').html();
            description = $(r1[i]).find('td:eq(3)').html();
            filename = $(r1[i]).find('td:eq(4)').html();


            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    type: type,
                    sid: sid,
                    description: description,
                    filename: filename,


                    table_name: 'suppilerdocument',
                },
                success: function(data) {



                }



            });
        }
        if (uid != "") {
            successTost("Record Saved Successfully!!!");
        } else {
            successTost("Record Saved Successfully!!!!");
        }

        form_clear();

        $('.closehideshow').trigger('click');
        show_master();
        form_clear();
        $('.panel-tab a[href="#suppliermaster"]').tab('show');
    });
    show_master();
    /*----------------show data --------------------*/

    function show_master() {

        $.ajax({
            type: 'POST',
            url: baseurl + "settings/get_supplier",
            async: false,
            data: {
                table_name: 'suppiler_master',
                where: '1',
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);

                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Category</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Company Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Contact Person</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Mobile No</th>' +
                    '<th style="display:none;">Mobile NO2</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Email</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Gst NO</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">PAN NO</th>' +
                    '<th style="display:none;">CategoryId </th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Address</th>' +
                    '<th style="display:none;">Remark/th>' +
                    '<th style="display:none;">Credit/th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (i = 0; i < data.length; i++) {
                    var sr = i + 1;
                    category = "";
                    if (data[i].category == '1') {
                        category = 'Vanity Van Supplier';
                    } else if (data[i].category == '2') {
                        category = 'Junior Artist Supplier';
                    } else if (data[i].category == '3') {
                        category = 'Food Supplier';
                    } else if (data[i].category == '4') {
                        category = 'Furniture Supplier';
                    } else if (data[i].category == '5') {
                        category = 'Light Supplier';
                    }



                    html += '<tr>' +
                        '<td id="category_' + data[i].id + '" >' + data[i].categoryname + '</td>' +
                        '<td   style="display:none;" id="categoryid_' + data[i].id + '">' + data[i].category + '</td>' +
                        '<td id="companyname_' + data[i].id + '">' + data[i].companyname + '</td>' +
                        '<td id="contactperson_' + data[i].id + '">' + data[i].contactperson + '</td>' +
                        '<td id="mobile1_' + data[i].id + '">' + data[i].mobile1 + '</td>' +
                        '<td  style="display:none;" id="mobile2_' + data[i].id + '">' + data[i].mobile2 + '</td>' +
                        '<td id="email_' + data[i].id + '" style="display:none;">' + data[i].email + '</td>' +
                        '<td  id="gstno_' + data[i].id + '" style="display:none;">' + data[i].gstno + '</td>' +
                        '<td  id="panno_' + data[i].id + '" style="display:none;">' + data[i].panno + '</td>' +
                        '<td  id="address_' + data[i].id + '" style="display:none;">' + data[i].address + '</td>' +
                        '<td style="display:none;" id="remark_' + data[i].id + '">' + data[i].remark + '</td>' +
                        '<td style="display:none;" id="credit_' + data[i].id + '">' + data[i].credit_days + '</td>' +
                        //'<td >'+status+'</td>'+
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
    /*-------------file upload------------------*/
    $(document).on("mousedown", "#filename", function() {
        var id = 'filename';
        var hiddenid = "file_hidden";
        var msgid = "msg";
        //$('#filename').removeAttr('form');

        uploadfile(id, hiddenid, msgid);
    });

    function uploadfile(id, hiddenid, msgid) {
        console.log(id + '-' + hiddenid + '-' + msgid);

        $('#' + id).ajaxfileupload({
            //'action' : 'callAction',

            'action': baseurl + 'settings/doc_upload',
            params: { id: id },
            'onStart': function() { $('#' + msgid).html("<font color='red'><i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>Please wait file is uploading.....</font>"); },
            'onComplete': function(response) {
                console.log(response);

                if (response == '') {
                    $('#' + msgid).html("<font color='red'>" + "Error in file upload" + "</font>");
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
        //	alert('Document:'+doc+' Id:'+vendor_id);
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
                    url: baseurl + "settings/doc_delete",
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

    /*------------edit of show_master ----------------*/
    $(document).on('click', '.edit_data', function() {
        $('.doc_tab').show();
        $('.panel-tab a[href="#suppliermaster"]').tab('show');
        var id1 = $(this).attr('id');

        // var name = $(this).attr('name');		
        var cname = $('#companyname_' + id1).html();
        var mobile1 = $('#mobile1_' + id1).html();
        var mobile2 = $('#mobile2_' + id1).html();
        var contactperson = $('#contactperson_' + id1).html();
        var email = $('#email_' + id1).html();
        var gstno = $('#gstno_' + id1).html();
        var panno = $('#panno_' + id1).html();
        var category = $('#categoryid_' + id1).html();

        var address = $('#address_' + id1).html();
        var remark = $('#remark_' + id1).html();
        var credit = $('#credit_' + id1).html();

        $('#name').val(cname);
        $('#mobile1').val(mobile1);
        $('#mobile2').val(mobile2);
        $('#contact_person').val(contactperson);
        $('#email').val(email);
        $('#gst').val(gstno);
        $('#pan').val(panno);
        $('#category').val(category).trigger('change');
        //$("#type_document option:selected").text(category);
        $('#address').val(address);
        $('#remark').val(remark);
        $('#credit_days').val(credit);
        $('#save_update').val(id1);

        $('.btnhideshow').trigger('click');
        where = 'sid=' + id1;
        //alert(where);
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'currentmaterial_master',
                where: where,
            },
            success: function(data) {
                console.log("data for" + data);
                // alert(data);
                // alert(data);
                $('#materialdata').html('');
                var row_id = 0;
                for (i = 0; i < data.length; i++) {
                    var unit = "";
                    if (data[i].perunit == '1') {
                        unit = 'Per Person';
                    } else if (data[i].perunit == '2') {
                        unit = 'Per Hour';
                    } else if (data[i].perunit == '3') {
                        unit = 'Per Dish';
                    } else if (data[i].perunit == '4') {
                        unit = 'Per Piece';
                    }
                    // alert(row_id);
                    row_id += row_id + 1;
                    var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                        '<td style="display:none;" >' + row_id + '</td>' +
                        '<td  style="display:none;" id="project_' + row_id + '">' + data[i].proid + '</td>' +
                        '<td  style="display:none;" id="service_' + row_id + '">' + data[i].serviceid + '</td>' +
                        '<td  style="display:none;" id="subaccount_' + row_id + '">' + data[i].subaccountid + '</td>' +
                        '<td  id="projectname_' + row_id + '">' + data[i].projectname + '</td>' +
                        '<td  id="servicename_' + row_id + '">' + data[i].sevicename + '</td>' +
                        '<td  id="subaccountname_' + row_id + '">' + data[i].subaccountname + '</td>' +
                        '<td  id="rate_' + row_id + '">' + data[i].rate + '</td>' +
                        '<td style="display:none;" id="perunit_' + row_id + '">' + data[i].perunit + '</td>' +
                        '<td  id="perunitext_' + row_id + '">' + unit + '</td>' +
                        '<td  id="remark_' + row_id + '">' + data[i].remark + '</td>' +
                        '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';
                    //
                    $("#supplier_tab").append(html);
                }

            }
        });

        var where = 'sid=' + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'suppilerdocument',
                where: where,
            },
            success: function(data) {
                var row_id = 0;
                console.log("" + data);
                $('#docdata').html('');
                for (i = 0; i < data.length; i++) {
                    var doc = "";
                    if (data[i].doctype == '1') {
                        doc = "Agreement";
                    } else if (data[i].doctype == '2') {
                        doc = "GST Certificate";
                    } else if (data[i].doctype == '3') {
                        doc = "PAN Number";
                    }

                    var file = "";
                    row_id = row_id + 1;
                    var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                        '<td style="display:none;" >' + row_id + '</td>' +
                        '<td  style="display:none;" id="documenttype_' + row_id + '">' + data[i].doctype + '</td>' +
                        '<td  id="doctype_' + row_id + '">' + doc + '</td>' +
                        '<td  id="description_' + row_id + '">' + data[i].description + '</td>' +
                        '<td  id="filename_' + row_id + '">' + data[i].filename + '</td>' +
                        '<td><button  class="doc_edit_data1 btn btn-sm btn-primary" id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="doc_delete_data btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';

                    $("#doctab").append(html);




                }


            }
        });
    });

    /*-------------------delete function ------------------*/
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
    $(document).on('click', '.closehideshow', function() {
        form_clear();
    });
    /*----------------chanege Of Expense type-------------*/
    $(document).on("change", "#services", function(e) {
        e.preventDefault();
        var expeid = $(this).val();

        getexpenssunac("expenses_subaccount", ".subaccountdata", " expenses_subaccount.status = '1' and expenses_subaccount.expensesid=" + expeid + "");
    });

    getexpenssunac('suppiler_category', '#category', " status = '1' ");

    function getexpenssunac(table_name, selecter, where) {
        $.ajax({
            type: "POST",
            url: baseurl + "settings/getexpensesubac",
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

                    if (table_name == "expenses_subaccount") {
                        name = data[i].name;
                        id = data[i].id;
                    } else {
                        name = data[i].description;
                        id = data[i].id;
                    }


                    //alert(name);

                    html += '<option value="' + id + '" >' + name + '</option>';

                }
                $(selecter).html(html);
            }
        });
    }
});