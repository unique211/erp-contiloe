$(document).ready(function() {
    var table_name = "people_master";
    $('.doc_tab').hide();
    $('#rpm').hide();
    $('#owh').hide();

    $(document).on("change", "#peopletype", function() {
        var peopletype = $("#peopletype option:selected").text();

        if (peopletype == "Admin Staff") {
            $('#rpm').show();
            $('#owh').hide();
            $('#rate_month').val('');
            $('#working_hour').val('');

        } else if (peopletype == "Artist" || peopletype == "Production") {
            $('#rpm').hide();
            $('#owh').show();
            $('#rate_month').val('');
        } else {
            $('#rpm').hide();
            $('#owh').hide();
            $('#rate_month').val('');
            $('#working_hour').val('');

        }


    });

    var pid = "";
    /*---------insert data into area_master start-----------------*/
    $(document).on("submit", "#charectermaster_form", function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var peopletype = $('#peopletype').val();
        var mobile1 = $('#mobile1').val();
        var mobile2 = $('#mobile2').val();
        var address = $('#address').val();
        var email = $('#email').val();
        var gst = $('#gst').val();
        var pan = $('#pan').val();
        var rate_per_month = $('#rate_month').val();
        var official_working_hour = $('#working_hour').val();
        //  var rate=$('#rate').val();
        //  var unit=$('#unit').val();
        //  var overtime=$('#overtime').val();
        var remark = $('#remark').val();
        var id = $('#save_update').val();

        /*var status = 0;
        	if ($('#status').is(":checked")){
        		status = 1; 
        	}*/

        $.ajax({
            type: "POST",
            url: baseurl + "settings/save_settings",
            dataType: "JSON",
            async: false,
            data: {
                id: id,
                name: name,
                peopletype: peopletype,
                mobile1: mobile1,
                mobile2: mobile2,
                address: address,
                email: email,
                gst: gst,
                pan: pan,
                rate_per_month: rate_per_month,
                official_working_hour: official_working_hour,
                //   rate:rate,
                //   unit:unit,
                remark: remark,
                //   overtime:overtime,
                table_name: table_name,
            },
            success: function(data) {

                console.log('ID:' + data);
                // pid=data;
                if (data != true) {
                    $('#save_update').val(data);
                    if (data > 0) {

                        if (id != "") {

                            pid = id;

                            // successTost("Data Update Successfully");
                        } else {
                            pid = data;

                            //

                        }
                    } else {
                        errorTost("Data Cannot Save");
                    }
                }
                //call function clear role_master form
                show_master(); //call function show role_master table
                $('.doc_tab').show();
                // $('#rpm').show();
                //$('#owh').show();

                $('.panel-tab a[href="#document_tab"]').tab('show');
            }
        });

    });
    /*-----------get duration time-----------*/
    $(document).on("blur", "#name", function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var id = $('#save_update').val();
        $.ajax({
            type: "POST",
            url: baseurl + "settings/checkpeoplename",
            dataType: "JSON",
            async: false,
            data: {
                id: id,
                name: name,
                table_name: table_name,
            },
            success: function(data) {
                if (data == '404') {

                    swal({
                        title: "Name Already Exists ?",
                        text: "Your Enter Name is Exists Please Enter Another Name!!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it !!",
                        closeOnConfirm: false
                    });
                }
            }
        });

    });

    function form_clear() {

        $('#name').val('');
        $('#peopletype').val('').trigger('change');
        $('#mobile1').val('');
        $('#mobile2').val('');
        $('#address').val('');
        $('#email').val('');
        $('#gst').val('');
        $('#pan').val('');
        $('#rate').val('');
        $('#unit').val('').trigger('change');
        $('#overtime').val('');
        $('#remark').val('');
        $('#projectdoc').html('');
        //$('#projectbody').html('');  
    }

    $(document).on("submit", "#document_form", function(e) {
        e.preventDefault();

        var documenttype = $('#type_document').val();
        var description = $('#description').val();
        var filename = $('#file_hidden').val();
        var msgid = $('#msg').val();
        var doctype = $("#type_document option:selected").text();
        var row_id = $('#doc_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#doc_save_update').val();
        // alert(documenttype+""+description+""+filename+"save update"+save_update);
        if (save_update != "") {

            $("#documenttype_" + save_update).html(documenttype);
            $("#description_" + save_update).html(description);
            $("#doctype_" + save_update).html(doctype);
            $("#filename_" + save_update).html(filename);
            $('#doc_save_update').val('');
            //$('#regional_row_id').val('');	
            // uploadfile(id,filename,msgid);	

        } else {

            var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  style="display:none;" id="documenttype_' + row_id + '">' + documenttype + '</td>' +
                '<td  id="doctype_' + row_id + '">' + doctype + '</td>' +
                '<td  id="description_' + row_id + '">' + description + '</td>' +
                '<td  id="filename_' + row_id + '">' + filename + '</td>' +
                '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#project_tab").append(html);
            $('#doc_row_id').val(row_id);
            $('#doc_save_update').val('');
        }


        $('#msg').html('');
        $('#file_hidden').val('');
        $('#type_document').val('');
        $('#description').val('');
        $('#add_file').html('');

        $('#add_file').html('<input type="file"  class="" id="docupload" name="docupload" required>');

    });

    $(document).on('click', '.regional_delete_data', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        if (save_update != "") {
            $("#" + save_update).remove();
            $('#doc_save_update').val('');

        }
    });
    $(document).on('click', '#save', function(e) {
        e.preventDefault();
        var uid = $('#save_update').val();
        if (uid != "") {
            pid = uid;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: pid,
                    table_name: 'document_master',

                },
                success: function(data) {

                }
            });
        }

        var r1 = $('table#project_tab').find('tbody').find('tr');
        var r = r1.length;
        var tr = "";


        for (var i = 0; i < r; i++) {


            var t = document.getElementById('project_tab');
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
                    pid: pid,
                    description: description,
                    filename: filename,


                    table_name: 'document_master',
                },
                success: function(data) {



                }



            });
        }
        if (uid != "") {
            successTost("Record Saved Successfully!!!");
        } else {
            successTost("Record Saved Successfully!!!");
        }
        $('.closehideshow').trigger('click');
        form_clear();
        show_master();

        $('.doc_tab').hide();
        $('#save_update').val('');

        $('.panel-tab a[href="#peoplemaster"]').tab('show');

    });
    $(document).on('click', '.doc_edit_data4', function(e) {
        e.preventDefault();

        var row = $(this).attr('id');

        var type = $("#documenttype_" + row).html();
        var description = $("#description_" + row).html();
        var filename = $("#filename_" + row).html();
        var hiddenid = 'file_hidden';
        var msgid = 'msg';
        // var filhideen =   $("#filename_"+row).html();
        //  alert('file'+filename);

        $('#type_document').val(type).trigger('change');
        $('#description').val(description);
        $('#file_hidden').val(filename);
        $('#msg').html(filename + '' + "<button class='delete_doc btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");

        $('#docupload').removeAttr('required');

        $('#doc_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });
    $(document).on("mousedown", "#docupload", function() {
        var id = 'docupload';
        var hiddenid = 'file_hidden';
        var msgid = 'msg';
        // $('#docupload').removeAttr('form');
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
        // alert(doc);
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

    show_master();

    $(document).on('click', '.edit_data', function() {
        var id1 = $(this).attr('id');
        $('.panel-tab a[href="#peoplemaster"]').tab('show');


        // var name = $(this).attr('name');		
        var name = $('#name_' + id1).html();
        var peopletype = $('#peopeltype_' + id1).html();
        var mobile1 = $('#mobile1_' + id1).html();
        var mobile2 = $('#mobile2_' + id1).html();
        var address = $('#address_' + id1).html();
        var email = $('#email_' + id1).html();
        var gstno = $('#gstno_' + id1).html();
        var pan = $('#panno_' + id1).html();
        var ratepermonth = $('#ratepermonth_' + id1).html();
        var officialworkinghour = $('#officialworkinghour_' + id1).html();
        //  var currentrate = $('#currentrate_'+id1).html();
        //  var perunit= $('#perunit_'+id1).html();
        //  var overrate= $('#overate_'+id1).html();
        var remark = $('#remark_' + id1).html();

        $('#name').val(name);
        $('#peopletype').val(peopletype).trigger('change');
        $('#mobile1').val(mobile1);
        $('#mobile2').val(mobile2);
        $('#address').val(address);
        $('#email').val(email);
        $('#gst').val(gstno);
        $('#pan').val(pan);
        $('#rate_month').val(ratepermonth);
        $('#working_hour').val(officialworkinghour);
        //   $('#rate').val(currentrate);
        //   $('#unit').val(perunit).trigger('change');
        //    $('#overtime').val(overrate);
        $('#remark').val(remark);
        $('#save_update').val(id1);

        var where = "pid=" + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'document_master',
                where: where,
            },
            success: function(data) {
                var row_id = 0;
                console.log("from people" + data);
                var html = '';
                for (i = 0; i < data.length; i++) {
                    var doc = "";
                    if (data[i].doctype == '1') {
                        doc = "Agreement";
                    } else if (data[i].doctype == '2') {
                        doc = "GST Certificate";
                    } else {
                        doc = "PAN Number";
                    }
                    //  var file="";



                    row_id = row_id + 1;
                    html += '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                        '<td style="display:none;" >' + row_id + '</td>' +
                        '<td  style="display:none;" id="documenttype_' + row_id + '">' + data[i].doctype + '</td>' +
                        '<td  id="doctype_' + row_id + '">' + doc + '</td>' +
                        '<td  id="description_' + row_id + '">' + data[i].description + '</td>' +
                        '<td  id="filename_' + row_id + '">' + data[i].fielname + '</td>' +
                        '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';

                }
                $('#projectdoc').html('');
                $("#project_tab").append(html);


            }
        });

        $('#save_update').val(id1);

        $('.btnhideshow').trigger('click');

    });

    /*----------delete----------*/
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

    $('.people1').on('change', function() {
        var table = $('#myTable').DataTable();
        var regExSearch = this.value;
        table.column(0).search(regExSearch, true, false).draw();
    });

    function show_master() {

        var where = '1';
        $.ajax({

            type: 'POST',
            url: baseurl + "settings/get_master_where",
            async: false,
            data: {
                table_name: 'people_master',
                where: where,
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);

                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th colspan="13" >' +
                    '<div class="col-sm-3" ><div class="form-group"><label class="control-label">People Type</label> &nbsp;' +
                    '<select class="form-control input-sm people1" id="peopletype1" name="peopletype1" style="width: 200px !important;">' +
                    '</select></div></div>' +
                    '</th>' +
                    '</tr>' +
                    '<tr>' +
                    '<th style="display:none;">People Type</th>' +
                    '<th style="display:none;">Remark</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">People Type</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Official Working hour</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Mobile No</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">Mobile No</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Address</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Email</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">GSTIN</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">PANNO</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">ratepermonth</th>' +

                    //  '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Current Rate</th>'+
                    // '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Per Unit</th>'+
                    // '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Over Rate</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';




                for (i = 0; i < data.length; i++) {
                    var officialhour = "";
                    if (data[i].perunit == '1') {
                        perunit = "Per Day";
                    } else if (data[i].perunit == '2') {
                        perunit = "Per Month";
                    } else if (data[i].perunit == '3') {
                        perunit = "Per Episode";
                    }
                    if (data[i].official_working_hour != "") {
                        if (data[i].ptypeid == "1" || data[i].ptypeid == "2") {
                            officialhour = data[i].official_working_hour;
                        } else {
                            officialhour = "-";
                        }


                    } else {
                        officialhour = "-";
                    }
                    html += '<tr>' +

                        '<td style="display:none;"  id="peopeltype_' + data[i].id + '">' + data[i].ptypeid + '</td>' +
                        '<td  style="display:none;" id="remark_' + data[i].id + '">' + data[i].remark + '</td>' +
                        '<td id="people_' + data[i].id + '">' + data[i].peopletype + '</td>' +
                        '<td id="name_' + data[i].id + '">' + data[i].name + '</td>' +
                        '<td  id="officialworkinghour_' + data[i].id + '" >' + officialhour + '</td>' +
                        '<td  id="mobile1_' + data[i].id + '">' + data[i].mobileno1 + '</td>' +
                        '<td id="mobile2_' + data[i].id + '" style="display:none;">' + data[i].mobileno2 + '</td>' +
                        '<td id="address_' + data[i].id + '" style="display:none;">' + data[i].address + '</td>' +
                        '<td id="email_' + data[i].id + '" style="display:none;">' + data[i].email + '</td>' +
                        '<td  id="gstno_' + data[i].id + '" style="display:none;">' + data[i].gstno + '</td>' +
                        '<td  id="panno_' + data[i].id + '" style="display:none;">' + data[i].panno + '</td>' +
                        '<td  id="ratepermonth_' + data[i].id + '" style="display:none;">' + data[i].rate_per_month + '</td>' +

                        //   '<td id="currentrate_'+data[i].id+'" style="display:none;">'+data[i].currentrate+'</td>'+
                        //  '<td id="perunit_'+data[i].id+'" style="display:none;">'+data[i].perunit+'</td>'+
                        //  '<td  id="overate_'+data[i].id+'" style="display:none;">'+data[i].overrate+'</td>'+
                        //'<td >'+status+'</td>'+
                        '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="' + data[i].id + '" name="' + data[i].status + '" ><i class="fa fa-edit"></i></button>' +
                        '</tr>';
                }
                //console.log(html);
                html += '</tbody></table>';
                $('#show_master').html(html);
                $('#myTable').DataTable({});
                getMasterSelect("peopletype_master", ".people1", " status = '1' ");

                $('.people1').on('change', function() {
                    var table = $('#myTable').DataTable();
                    var regExSearch = this.value;
                    table.column(0).search(regExSearch, true, false).draw();
                });
            }
        });
    }
    getMasterSelect("peopletype_master", ".people1", " status = '1' ");

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
                html += '<option selected  value="" >Select</option>';
                //						}
                for (i = 0; i < data.length; i++) {
                    var id = '';
                    name = data[i].name;
                    id = data[i].id;
                    //alert(name);	
                    html += '<option value="' + id + '">' + name + '</option>';
                }
                $(selecter).html(html);
            }
        });
    }
    $(document).on('click', '.closehideshow', function() {
        form_clear();
    });


});