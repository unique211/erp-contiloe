$(document).ready(function() {
    var table_name = "project_master";
    var uid = "";

    $('.artist_tab').hide();
    $('.production_tab').hide();
    $('.episodic_tab').hide();
    $('.prodoc_tab').hide();
    $('.monthly_expenses').hide();
    $("#pro_name").hide();
    var proid = "";
    /*---------insert data into area_master start-----------------*/
    /*$(document).on("change",".person_name",function(e){
        e.preventDefault();
    		var id1=$(this).val();
    		
    		 var 	where="id="+id1;
    		$.ajax({
    			type : "POST",
    			url  : baseurl+"settings/get_master_where",
    			dataType : "JSON",
    			async : false,
    			data : {
    				
    					table_name:'people_master',
    					where:where,
    					},
    			success: function(data){
    				var data1=eval(data);
    					console.log(data);
    					
    			$('.rate').val(data[0].currentrate);
    			$('.unit').val(data[0].perunit);
    			 $('.overtime').val(data[0].overrate);
    			


    			}
          
    });
    });*/

    $(document).on("blur", "#name", function() {
        var name = $('#name').val();
        $("#pro_name").html('Project Name :' + name);
    });

    $(document).on("submit", "#projectmaster_form", function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var directorname = $('#director').val();
        var channel = $('#channel').val();
        var schedule = $('#schedule').val();
        var dop = $('#dop').val();
        var weight_age = $('#admin_cost').val();
        var date = $('#s_date').val();

        var remark = $('#remark').val();
        var date2 = "";
        var tdateAr = date.split('/');

        date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        var id = $('#save_update').val();


        $.ajax({
            type: "POST",
            url: baseurl + "settings/save_settings",
            dataType: "JSON",
            async: false,
            data: {
                id: id,
                name: name,
                directorname: directorname,
                dop: dop,
                channel: channel,
                schedule: schedule,
                date: date2,
                weight_age: weight_age,
                remark: remark,
                table_name: table_name,
            },
            success: function(data) {
                //console.log(data);
                //$('#save_update').val(data);
                if (data != true) {
                    $('#save_update').val(data);
                    //getMasterSelect("character_master", ".roledata", " status = '1' and peopletype='1' and projectid=" + data + "");
                    //getMasterSelect("character_master", ".role1", " status = '1' and peopletype='2' and projectid=" + data + "");
                    //getMasterSelect("character_master", ".role2", " status = '1' and peopletype='3' and projectid=" + data + "");
                    if (data != 0) {
                        proid = data;

                        if (id != "") {
                            //proid=id;

                            //successTost("Data Update Successfully");



                        } else {
                            //successTost("Data Save Successfully");							
                        }

                    } else {
                        errorTost("Data Cannot Save");
                    }
                }
                //form_clear();		//call function clear role_master form
                show_master(); //call function show role_master table
                //$('.closehideshow').trigger('click');
                $('.projectmaster').show();
                $('.artist_tab').show();
                $('.production_tab').hide();
                $('.episodic_tab').hide();
                $('.monthly_expenses').hide();
                $('.prodoc_tab').hide();
                $('.panel-tab a[href="#list_artist"]').tab('show');
            }
        });

    });
    $(document).on("submit", "#list_artist_form", function(e) {
        e.preventDefault();

        var charecter = $('#role').val();
        var person = $('#person_name').val();
        var role = $('#role option:selected').text();
        var person_name = $('#person_name option:selected').text();
        var perunittext = $('#unit option:selected').text();
        var perunittext = $('#unit option:selected').text();

        var rate = $('#rate').val();
        var perunit = $('#unit').val();
        var date = $('#effective').val();
        var leavingdate = $('#leavingdate').val();
        var creditday = $('#creditday').val();
        var overtime = $('#overtime').val();
        var filename = $('#file_hidden1').val();

        var status = 0;
        if ($('#status').is(":checked")) {
            status = 1;
        }

        //var tdateAr = date.split('/');
        //date1 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        var row_id = $('#list_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#list_save_update').val();

        var type = "artist";

        if (status == 1) {
            status1 = '<button  class="btn btn-sm  btn-xs  btn-success"  >Active</button>';
        } else {
            status1 = '<button  class="btn btn-sm  btn-xs  btn-danger"  >Inactive</button>';
        }

        // var dlt = 0;
        // var r1 = $('table#project_tab1').find('tbody').find('tr');
        // var r = r1.length;
        // for (var i = 0; i < r; i++) {
        // var roleid = $(r1[i]).find('td:eq(1)').html();
        // var personeid = $(r1[i]).find('td:eq(2)').html();
        // if (save_update == "") {
        // if (charecter == roleid && person == personeid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // } else if (person == personeid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // } else if (charecter == roleid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // }
        // }
        // }

        // if (dlt > 0) {
        // errorTost("Selected Character or Person Already Entered !!!");
        // var dlt = 0;

        // } else {
        if (save_update != "") {

            $("#charecter_" + save_update).html(charecter);
            $("#person_" + save_update).html(person);
            $("#role_" + save_update).html(role);
            $("#persome_" + save_update).html(person_name);
            $("#date_" + save_update).html(date);
            $("#leavingdate_" + save_update).html(leavingdate);
            $("#creditday_" + save_update).html(creditday);
            $("#rate_" + save_update).html(rate);
            $("#perunit_" + save_update).html(perunit);
            $("#perunitext_" + save_update).html(perunittext);
            $("#overtime_" + save_update).html(overtime);
            $("#statusinfo_" + save_update).html(status);
            $("#artistfilename_" + save_update).html(filename);
            $("#status_" + save_update).html(status1);
            $('#list_save_update').val('');


        } else {



            var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +

                '<td  style="display:none;" id="charecter_' + row_id + '">' + charecter + '</td>' +
                '<td  style="display:none;" id="person_' + row_id + '">' + person + '</td>' +
                '<td  id="role_' + row_id + '">' + role + '</td>' +
                '<td  id="persome_' + row_id + '">' + person_name + '</td>' +
                '<td  id="date_' + row_id + '">' + date + '</td>' +
                '<td  id="leavingdate_' + row_id + '">' + leavingdate + '</td>' +
                '<td  id="creditday_' + row_id + '">' + creditday + '</td>' +
                '<td  id="rate_' + row_id + '" style="text-align:right;">' + rate + '</td>' +
                '<td style="display:none;" id="perunit_' + row_id + '">' + perunit + '</td>' +
                '<td  id="perunitext_' + row_id + '">' + perunittext + '</td>' +
                '<td  id="overtime_' + row_id + '" style="text-align:right;">' + overtime + '</td>' +
                '<td  id="status_' + row_id + '">' + status1 + '</td>' +

                '<td  style="display:none;" id="type_' + row_id + '">' + type + '</td>' +
                '<td  style="display:none;" id="statusinfo_' + row_id + '">' + status + '</td>' +
                '<td  style="display:none;" id="artistfilename_' + row_id + '">' + filename + '</td>' +
                '<td  style="column-width:70px;"><button  class="doc_edit_data btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-xs btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#project_tab1").append(html);
            $('#list_row_id').val(row_id);
            $('#list_save_update').val('');
        }

        $('#role').val('').trigger('change');
        $('#person_name').val('').trigger('change');
        $('#rate').val('').trigger('change');
        $('#unit').val('');
        // $('#effective').val('');
        $('#overtime').val('');
        $('#creditday').val();
        $('#file_hidden1').val('');
        $('#msg1').html('');
        $('#add_file1').html('');

        $('#add_file1').html('<input type="file"  class="" id="docupload1" name="docupload1" >');
        $('#list_artist_details').modal('hide');
        // }
    });
    $(document).on('click', '.doc_edit_data', function(e) {
        e.preventDefault();
        $('#list_artist_details').modal('show');
        var row = $(this).attr('id');

        var cherecter = $("#charecter_" + row).html();
        var person = $("#person_" + row).html();
        var date = $("#date_" + row).html();
        var leavingdate = $("#leavingdate_" + row).html();
        var creditday = $("#creditday_" + row).html();
        var rate = $("#rate_" + row).html();
        var perunit = $("#perunit_" + row).html();
        var overtime = $("#overtime_" + row).html();
        var st = $("#statusinfo_" + row).html();
        var filename = $("#artistfilename_" + row).html();

        $('#role').val(cherecter).trigger('change');
        $('#person_name').val(person).trigger('change');

        $('#rate').val(rate);
        $('#unit').val(perunit).trigger('change');
        $('#effective').val(date);
        $('#leavingdate').val(leavingdate);
        $('#overtime').val(overtime);
        $('#creditday').val(creditday);


        var hiddenid = 'file_hidden1';
        var msgid = 'msg1';


        $('#file_hidden1').val(filename);
        if (filename != "") {
            $('#msg1').html(filename + '' + "<button class='delete_doc1 btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");
        } else {
            $('#msg1').html('');
        }

        if (st == '1') {
            $('#status').bootstrapToggle('on');
        } else {
            $('#status').bootstrapToggle('off');
        }
        $('#list_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });
    $(document).on('click', '.regional_delete_data', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        var cherecter = $("#charecter_" + save_update).html();
        var person = $("#person_" + save_update).html();
        var project = $('#save_update').val();
        //alert('HEllo');
        //alert(save_update);

        if (save_update != "") {
            swal({
                    title: "Are you sure to delete ?",
                    //text: " !!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "OK",
                    closeOnConfirm: false
                },
                function() {
                    $.ajax({
                        type: "POST",
                        url: baseurl + "Checkproject/existcheckartist",
                        dataType: "JSON",
                        async: false,
                        data: {
                            cherecter: cherecter,
                            person: person,
                            project: project,

                        },
                        success: function(data) {
                            var count = data;

                            if (count > 0) {
                                swal("Can’t Delete this record, People is used in Planning / Actual");
                            } else {

                                $("#" + save_update).remove();
                                $('.cancel').trigger('click');
                            }
                        }

                    });
                    return false;
                });


            // var x = confirm("Are you sure you want to delete?");
            // if (x) {
            //     return true;
            // } else {
            //     //alert(closeOnConfirm);
            //     //alert('HEllo123...');	
            //     return false;
            // }

            // $("#" + save_update).remove();
            // $('#doc_save_update').val('');

        }
    });
    $(document).on('click', '#artist', function(e) {
        e.preventDefault();

        var id = $('#save_update').val();
        if (id != "") {

            proid = id;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master1",
                dataType: "JSON",
                async: false,
                data: {
                    id: id,
                    table_name: 'lis_artist',
                    type: 'artist',
                },
                success: function(data) {

                }

            });
        }


        var r1 = $('table#project_tab1').find('tbody').find('tr');
        var r = r1.length;

        var tr = "";

        for (var i = 0; i < r; i++) {


            var t = document.getElementById('project_tab1');
            roleid = $(r1[i]).find('td:eq(1)').html();
            persone = $(r1[i]).find('td:eq(2)').html();

            date = $(r1[i]).find('td:eq(5)').html();
            leavingdate = $(r1[i]).find('td:eq(6)').html();
            creditday = $(r1[i]).find('td:eq(7)').html();
            rate = $(r1[i]).find('td:eq(8)').html();
            perunit = $(r1[i]).find('td:eq(9)').html();
            overtime = $(r1[i]).find('td:eq(11)').html();
            status = $(r1[i]).find('td:eq(12)').html();
            type = $(r1[i]).find('td:eq(13)').html();
            statu = $(r1[i]).find('td:eq(14)').html();
            var filename = $(r1[i]).find('td:eq(15)').html();

            var tdateAr = date.split('/');
            date = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            var tdateAr = leavingdate.split('/');
            ldate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            if (status == '1') {
                status = 1;
            } else {
                status = 0;
            }

            // type = $(r1[i]).find('td:eq(11)').html();


            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    proid: proid,
                    roleid: roleid,
                    persone: persone,
                    date: date,
                    leavingdate: ldate,
                    creditday: creditday,
                    rate: rate,
                    perunit: perunit,
                    overtime: overtime,
                    status: statu,
                    type: type,
                    filename: filename,
                    table_name: 'lis_artist',
                },
                success: function(data) {

                    //successTost("Data save Successfully");
                    //   myDeleteFunction();

                }



            });
        }
        $('.projectmaster').show();
        $('.artist_tab').show();
        $('.production_tab').show();
        $('.episodic_tab').hide();
        $('.monthly_expenses').hide();
        $('.prodoc_tab').hide();
        $('.panel-tab a[href="#list_production_staff"]').tab('show');
    });
    /*function myDeleteFunction() {
    
				var t="";
				var r1 = $('table#project_tab1').find('tbody').find('tr');
					   var r = r1.length;
									  
			
										for(var i=r;i>0;i--)
										{
											document.getElementById("project_tab2").deleteRow(i);
											
					  
										}
				  }*/


    $(document).on("submit", "#list_Production_form", function(e) {
        e.preventDefault();

        var charecter = $('#role1').val();
        var person = $('#person_name1').val();
        var role = $("#role1 option:selected").text();
        var person_name = $("#person_name1 option:selected").text();
        var perunittext = $("#unit1 option:selected").text();
        var rate = $('#rate1').val();
        var perunit = $('#unit1').val();
        var date = $('#effective1').val();
        var leavingdate = $('#leavingdate1').val();
        var creditday = $('#creditday1').val();
        var overtime = $('#overtime1').val();
        var file_hidden2 = $('#file_hidden2').val();
        var status = 0;

        // alert(role+""+person);
        if ($('#status1').is(":checked")) {
            status = 1;
        } else {
            status = 0;
        }

        // var tdateAr = date.split('/');
        // date1 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        var row_id = $('#listproduct_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#listproduct_save_update').val();

        var type = "production";

        if (status == 1) {
            status1 = '<button  class="btn btn-sm  btn-xs  btn-success"  >Active</button>';
        } else {
            status1 = '<button  class="btn btn-sm  btn-xs  btn-danger"  >Inactive</button>';
        }

        // var dlt = 0;
        // var r1 = $('table#project_tab2').find('tbody').find('tr');
        // var r = r1.length;
        // for (var i = 0; i < r; i++) {
        // var roleid = $(r1[i]).find('td:eq(1)').html();
        // var personeid = $(r1[i]).find('td:eq(2)').html();
        // if (save_update == "") {
        // if (charecter == roleid && person == personeid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // } else if (person == personeid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // } else if (charecter == roleid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // }
        // }
        // }

        // if (dlt > 0) {
        // errorTost("Selected Character or Person Already Entered !!!");
        // var dlt = 0;

        // } else {
        if (save_update != "") {

            $("#charecter1_" + save_update).html(charecter);
            $("#person1_" + save_update).html(person);
            $("#role1_" + save_update).html(role);
            $("#persome1_" + save_update).html(person_name);
            $("#date1_" + save_update).html(date);
            $("#rate1_" + save_update).html(rate);
            $("#leavingdate1_" + save_update).html(leavingdate);
            $("#creditday1_" + save_update).html(creditday);
            $("#perunit1_" + save_update).html(perunit);
            $("#overtime1_" + save_update).html(overtime);
            $("#statusinfo1_" + save_update).html(status);
            $("#status1_" + save_update).html(status1);
            $("#productionfile_" + save_update).html(file_hidden2);
            $('#listproduct_save_update').val('');


        } else {

            var html = '<tr class="project_tab_add_row" id="production_' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +

                '<td  style="display:none;" id="charecter1_' + row_id + '">' + charecter + '</td>' +
                '<td  style="display:none;" id="person1_' + row_id + '">' + person + '</td>' +
                '<td  id="role1_' + row_id + '">' + role + '</td>' +
                '<td  id="persome1_' + row_id + '">' + person_name + '</td>' +
                '<td  id="date1_' + row_id + '">' + date + '</td>' +
                '<td  id="leavingdate1_' + row_id + '">' + leavingdate + '</td>' +
                '<td  id="creditday1_' + row_id + '">' + creditday + '</td>' +
                '<td  id="rate1_' + row_id + '" style="text-align:right;">' + rate + '</td>' +
                '<td style="display:none;" id="perunit1_' + row_id + '">' + perunit + '</td>' +
                '<td  id="perunitext1_' + row_id + '">' + perunittext + '</td>' +
                '<td  id="overtime1_' + row_id + '" style="text-align:right;">' + overtime + '</td>' +
                '<td  id="status1_' + row_id + '">' + status1 + '</td>' +
                '<td  style="display:none;" id="type1_' + row_id + '">' + type + '</td>' +
                '<td  style="display:none;" id="statusinfo1_' + row_id + '">' + status + '</td>' +
                '<td  style="display:none;" id="productionfile_' + row_id + '">' + file_hidden2 + '</td>' +
                '<td style="column-width:70px;"><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="production_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#project_tab2").append(html);
            $('#listproduct_row_id').val(row_id);
            $('#listproduct_save_update').val('');
        }

        // }

        $('#role1').val('').trigger('change');
        $('#person_name1').val('').trigger('change');
        $('#rate1').val('').trigger('change');
        $('#unit1').val('').trigger('change');
        //$('#effective1').val('');
        $('#overtime1').val('');
        // $('#leavingdate1').val('');
        $('#creditday1').val('');
        $('#file_hidden2').val('');
        $('#msg2').html('');
        $('#add_file2').html('');

        $('#add_file2').html('<input type="file"  class="" id="docupload2" name="docupload2" >');
        $('#list_production_staffdata').modal('hide');

    });
    $(document).on('click', '.doc_edit_data1', function(e) {
        e.preventDefault();

        var row = $(this).attr('id');
        //var st = $(this).attr('name');	
        var leavingdate = $("#leavingdate1_" + row).html();
        var creditday = $("#creditday1_" + row).html();
        var cherecter = $("#charecter1_" + row).html();
        var person = $("#person1_" + row).html();
        var date = $("#date1_" + row).html();
        var rate = $("#rate1_" + row).html();
        var perunit = $("#perunit1_" + row).html();
        var overtime = $("#overtime1_" + row).html();
        var st = $("#statusinfo1_" + row).html();
        var filename = $("#productionfile_" + row).html();


        $('#role1').val(cherecter).trigger('change');
        $('#person_name1').val(person).trigger('change');

        $('#rate1').val(rate);
        $('#unit1').val(perunit).trigger('change');
        $('#effective1').val(date);
        $('#overtime1').val(overtime);
        $('#leavingdate1').val(leavingdate);
        $('#creditday1').val(creditday);
        var hiddenid = 'file_hidden2';
        var msgid = 'msg2';


        $('#file_hidden2').val(filename);
        if (filename != "") {
            $('#msg2').html(filename + '' + "<button class='delete_doc1 btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");
        } else {
            $('#msg2').html('');
        }
        $('#file_hidden2').val(filename);
        if (st == 1) {
            $('#status1').bootstrapToggle('on');
        } else {
            $('#status1').bootstrapToggle('off');
        }
        $('#listproduct_save_update').val(row);
        //$('#regional_row_id').val(row);		
        $('#list_production_staffdata').modal('show');

    });
    $(document).on('click', '.regional_delete_data1', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');
        save_update = save_update.split("_");

        var cherecter = $("#charecter1_" + save_update[1]).html();
        var person = $("#person1_" + save_update[1]).html();
        var project = $('#save_update').val();


        if (save_update[1] != "") {
            swal({
                    title: "Are you sure to delete ?",
                    //text: " !!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "OK",
                    closeOnConfirm: false
                },
                function() {
                    $.ajax({
                        type: "POST",
                        url: baseurl + "Checkproject/existproduction",
                        dataType: "JSON",
                        async: false,
                        data: {
                            cherecter: cherecter,
                            person: person,
                            project: project,

                        },
                        success: function(data) {
                            var count = data;

                            if (count > 0) {
                                swal("Can’t Delete this record, People is used in Planning / Actual");
                            } else {

                                $("#production_" + save_update[1]).remove();
                                $('#listproduct_save_update').val('');
                                $('.cancel').trigger('click');
                            }
                        }

                    });
                    return false;
                });

        }
    });
    $(document).on('click', '#tab2', function(e) {
        e.preventDefault();

        var id = $('#save_update').val();
        if (id != "") {

            proid = id;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master1",
                dataType: "JSON",
                async: false,
                data: {
                    id: proid,
                    table_name: 'lis_artist',
                    type: 'production',
                },
                success: function(data) {

                }
            });
        }
        var r1 = $('table#project_tab2').find('tbody').find('tr');
        var r = r1.length;

        var tr = "";

        for (var i = 0; i < r; i++) {


            var t = document.getElementById('project_tab2');
            roleid = $(r1[i]).find('td:eq(1)').html();
            persone = $(r1[i]).find('td:eq(2)').html();

            date = $(r1[i]).find('td:eq(5)').html();
            leavingdate = $(r1[i]).find('td:eq(6)').html();
            creditday = $(r1[i]).find('td:eq(7)').html();
            rate = $(r1[i]).find('td:eq(8)').html();
            perunit = $(r1[i]).find('td:eq(9)').html();
            overtime = $(r1[i]).find('td:eq(11)').html();
            status = $(r1[i]).find('td:eq(12)').html();
            type = $(r1[i]).find('td:eq(13)').html();
            statu = $(r1[i]).find('td:eq(14)').html();
            var filename = $(r1[i]).find('td:eq(15)').html();
            var tdateAr = date.split('/');
            date = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            var tdateAr = leavingdate.split('/');
            ldate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    proid: proid,
                    roleid: roleid,
                    persone: persone,
                    date: date,
                    leavingdate: ldate,
                    creditday: creditday,
                    rate: rate,
                    perunit: perunit,

                    overtime: overtime,
                    status: statu,
                    type: type,
                    filename: filename,
                    table_name: 'lis_artist',
                },
                success: function(data) {
                    //	successTost("Data save Successfully");
                    //	myDeleteFunction();

                }



            });
        }
        $('.projectmaster').show();
        $('.artist_tab').show();
        $('.production_tab').show();
        $('.episodic_tab').show();
        $('.monthly_expenses').hide();
        $('.prodoc_tab').hide();
        $('.panel-tab a[href="#list_episodic_staff"]').tab('show');
    });



    $(document).on("submit", "#list_Episodic_form", function(e) {
        e.preventDefault();

        var charecter = $('#role2').val();
        var person = $('#person_name2').val();
        var role = $("#role2 option:selected").text();
        var person_name = $("#person_name2 option:selected").text();
        var perunittext = $("#unit2 option:selected").text();
        var rate = $('#rate2').val();
        var perunit = $('#unit2').val();
        var date = $('#effective2').val();
        var leavingdate = $('#leavingdate2').val();
        var creditday = $('#creditday2').val();
        var overtime = $('#overtime2').val();
        var status = 0;
        var file_hidden3 = $('#file_hidden3').val();


        if ($('#status2').is(":checked")) {
            status = 1;
        }

        // var tdateAr = date.split('/');
        // date1 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        var row_id = $('#listepisodic_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#listepisoic_save_update').val();

        var type = "episodic";

        if (status == 1) {
            status1 = '<button  class="btn btn-sm  btn-xs  btn-success"  >Active</button>';
        } else {
            status1 = '<button  class="btn btn-sm  btn-xs  btn-danger"  >Inactive</button>';
        }

        // var dlt = 0;
        // var r1 = $('table#project_tab3').find('tbody').find('tr');
        // var r = r1.length;
        // for (var i = 0; i < r; i++) {
        // var roleid = $(r1[i]).find('td:eq(1)').html();
        // var personeid = $(r1[i]).find('td:eq(2)').html();
        // if (save_update == "") {
        // if (charecter == roleid && person == personeid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // } else if (person == personeid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // } else if (charecter == roleid) {
        // dlt = parseInt(dlt) + parseInt(1);
        // }
        // }
        // }

        // if (dlt > 0) {
        // errorTost("Selected Character or Person Already Entered !!!");
        // var dlt = 0;

        // } else {
        if (save_update != "") {

            $("#charecter2_" + save_update).html(charecter);
            $("#person2_" + save_update).html(person);
            $("#role2_" + save_update).html(role);
            $("#persome2_" + save_update).html(person_name);
            $("#date2_" + save_update).html(date);
            $("#leavingdate2_" + save_update).html(leavingdate);
            $("#creditday2_" + save_update).html(creditday);
            $("#rate2_" + save_update).html(rate);
            $("#perunit2_" + save_update).html(perunit);
            $("#perunitext2_" + save_update).html(perunittext);
            $("#overtime2_" + save_update).html(overtime);
            $("#statusinfo2_" + save_update).html(status);
            $("#status2_" + save_update).html(status1);
            $("#listofepisodicfile_" + save_update).html(file_hidden3);
            $('#listepisoic_save_update').val('');


        } else {

            var html = '<tr class="project_tab_add_row" id="episodic_' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +

                '<td  style="display:none;" id="charecter2_' + row_id + '">' + charecter + '</td>' +
                '<td  style="display:none;" id="person2_' + row_id + '">' + person + '</td>' +
                '<td  id="role2_' + row_id + '">' + role + '</td>' +
                '<td  id="persome2_' + row_id + '">' + person_name + '</td>' +
                '<td  id="date2_' + row_id + '">' + date + '</td>' +
                '<td  id="leavingdate2_' + row_id + '">' + leavingdate + '</td>' +
                '<td  id="creditday2_' + row_id + '">' + creditday + '</td>' +
                '<td  id="rate2_' + row_id + '" style="text-align:right;">' + rate + '</td>' +
                '<td style="display:none;" id="perunit2_' + row_id + '">' + perunit + '</td>' +
                '<td  id="perunitext2_' + row_id + '">' + perunittext + '</td>' +
                '<td  id="overtime2_' + row_id + '" style="text-align:right;">' + overtime + '</td>' +
                '<td  id="status2_' + row_id + '">' + status1 + '</td>' +

                '<td  style="display:none;" id="type2_' + row_id + '">' + type + '</td>' +

                '<td  style="display:none;" id="statusinfo2_' + row_id + '">' + status + '</td>' +
                '<td  style="display:none;" id="listofepisodicfile_' + row_id + '">' + file_hidden3 + '</td>' +
                '<td style="column-width:70px;"><button  class="doc_edit_data2  btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data2 btn btn-xs btn-danger"   id="episodic_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#project_tab3").append(html);
            $('#listepisodic_row_id').val(row_id);
            $('#listepisoic_save_update').val('');
        }
        //  }


        $('#role2').val('').trigger('change');
        $('#person_name2').val('').trigger('change');
        $('#rate2').val('').trigger('change');
        $('#unit1').val('').trigger('change');
        //   $('#effective2').val('');
        $('#overtime2').val('');
        //  $('#leavingdate2').val('');
        $('#creditday2').val('');
        $('#add_file3').html('');
        $('#msg3').html('');
        $('#add_file3').html('<input type="file"  class="" id="docupload3" name="docupload3" >');
        $('#file_hidden3').val('');
        $('#list_episodic_staffdata').modal('hide');

    });
    $(document).on('click', '.doc_edit_data2', function(e) {
        e.preventDefault();
        $('#list_episodic_staffdata').modal('show');
        var row = $(this).attr('id');
        var leavingdate = $("#leavingdate2_" + row).html();
        var creditday = $("#creditday2_" + row).html();
        var cherecter = $("#charecter2_" + row).html();
        var person = $("#person2_" + row).html();
        var date = $("#date2_" + row).html();
        var rate = $("#rate2_" + row).html();
        var perunit = $("#perunit2_" + row).html();
        var overtime = $("#overtime2_" + row).html();
        var st = $("#statusinfo2_" + row).html();

        var filename = $("#listofepisodicfile_" + row).html();



        $('#role2').val(cherecter).trigger('change');
        $('#person_name2').val(person).trigger('change');

        $('#rate2').val(rate);
        $('#unit2').val(perunit).trigger('change');
        $('#effective2').val(date);
        $('#overtime2').val(overtime);
        $('#leavingdate2').val(leavingdate);
        $('#creditday2').val(creditday);
        // $('#file_hidden3').val(filename);
        var hiddenid = 'file_hidden3';
        var msgid = 'msg3';


        $('#file_hidden3').val(filename);
        if (filename != "") {
            $('#msg3').html(filename + '' + "<button class='delete_doc1 btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");
        } else {
            $('#msg3').html('');
        }

        $('#file_hidden3').val(filename);
        if (st == 1) {
            $('#status2').bootstrapToggle('on');
        } else {
            $('#status2').bootstrapToggle('off');
        }
        $('#listepisoic_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });
    $(document).on('click', '.regional_delete_data2', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');
        save_update = save_update.split("_");
        if (save_update[1] != "") {
            $("#episodic_" + save_update[1]).remove();
            $('#doc_save_update').val('');

        }
    });
    $(document).on('click', '.regional_delete_data3', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        if (save_update != "") {
            $("#" + save_update).remove();
            $('#listepisoic_save_update').val('');

        }
    });
    $(document).on('click', '#tab3', function(e) {
        e.preventDefault();



        var id = $('#save_update').val();
        if (id != "") {

            //alert('Hello....');

            //alert(id);

            proid = id;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master1",
                dataType: "JSON",
                async: false,
                data: {
                    id: proid,
                    table_name: 'lis_artist',
                    type: 'episodic',
                },
                success: function(data) {

                }
            });
        }
        var r1 = $('table#project_tab3').find('tbody').find('tr');
        var r = r1.length;

        var tr = "";

        for (var i = 0; i < r; i++) {


            var t = document.getElementById('project_tab3');
            roleid = $(r1[i]).find('td:eq(1)').html();
            persone = $(r1[i]).find('td:eq(2)').html();

            date = $(r1[i]).find('td:eq(5)').html();
            leavingdate = $(r1[i]).find('td:eq(6)').html();
            creditday = $(r1[i]).find('td:eq(7)').html();
            rate = $(r1[i]).find('td:eq(8)').html();
            perunit = $(r1[i]).find('td:eq(9)').html();
            overtime = $(r1[i]).find('td:eq(11)').html();
            status = $(r1[i]).find('td:eq(12)').html();
            type = $(r1[i]).find('td:eq(13)').html();
            statu = $(r1[i]).find('td:eq(14)').html();
            filename = $(r1[i]).find('td:eq(15)').html();

            var tdateAr = date.split('/');
            date = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            var tdateAr = leavingdate.split('/');
            ldate = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];


            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    proid: proid,
                    roleid: roleid,
                    persone: persone,
                    date: date,
                    leavingdate: ldate,
                    creditday: creditday,
                    rate: rate,
                    perunit: perunit,
                    overtime: overtime,
                    status: statu,
                    type: type,
                    table_name: 'lis_artist',
                    filename: filename,
                },
                success: function(data) {
                    //successTost("Data save Successfully");
                    //myDeleteFunction();

                }



            });
        }
        $('.projectmaster').show();
        $('.artist_tab').show();
        $('.production_tab').show();
        $('.episodic_tab').show();
        $('.monthly_expenses').show();
        $('.prodoc_tab').hide();
        $('.panel-tab a[href="#monthly_expenses"]').tab('show');
    });
    /*--------------monthy tab insert data in to table--------*/
    $(document).on("submit", "#monthlyexpenses", function(e) {
        e.preventDefault();
        //alert("Monthly Exp...");
        var expenseid = $('#expensestype').val();
        var vendorname = $('#vendorname').val();
        var amountdata = $('#amount_data').val();
        var expensubacc = $('#expensubacc').val();
        var expensesname = $("#expensestype option:selected").text();
        var expenaccname = $("#expensubacc option:selected").text();

        var effecitivedate4 = $('#effecitivedate4').val();
        var leavingdate4 = $('#leavingdate4').val();
        var status4 = $('#status4').val();
        var filename4 = $('#filename4').val();


        //alert(status4 + "" + filename4 + "" + effecitivedate4 + "" + leavingdate4);

        var status4 = 0;
        if ($('#status4').is(":checked")) {
            status4 = 1;
        }

        //alert(status4);

        //var startdate = $('#startdate').val();
        //var enddate = $('#enddate').val();
        var row_id = $('#monthly_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#monthly_save_update').val();


        if (save_update != "") {

            $("#expensesid_" + save_update).html(expenseid);
            $("#expensestype_" + save_update).html(expensesname);
            $("#subaccid_" + save_update).html(expensubacc);
            $("#expensesacsubname_" + save_update).html(expenaccname);
            $("#vendorname_" + save_update).html(vendorname);
            $("#amountdata_" + save_update).html(amountdata);
            $("#meffecitivedate_" + save_update).html(effecitivedate4);
            $("#mleavingdate_" + save_update).html(leavingdate4);

            $("#filename4_" + save_update).html(filename4);
            $("#status4_" + save_update).html(status4);

            //alert("Hello Update..");
            // $("#startdate_" + save_update).html(startdate);
            //$("#enddate_" + save_update).html(enddate);
            $('#monthly_save_update').val('');
            //$('#regional_row_id').val('');	


        } else {

            var html = '<tr class="project_tab_add_row" id="monthly_' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  style="display:none;" id="expensesid_' + row_id + '">' + expenseid + '</td>' +
                '<td  style="display:none;" id="subaccid_' + row_id + '">' + expensubacc + '</td>' +
                '<td  id="expensestype_' + row_id + '">' + expensesname + '</td>' +
                '<td  id="expensesacsubname_' + row_id + '">' + expenaccname + '</td>' +
                '<td  id="vendorname_' + row_id + '">' + vendorname + '</td>' +
                '<td  id="meffecitivedate_' + row_id + '">"' + effecitivedate4 + '"</td>' +
                '<td  id="mleavingdate_' + row_id + '">"' + leavingdate4 + '"</td>' +
                '<td  id="amountdata_' + row_id + '" style="text-align:right;">' + amountdata + '</td>' +

                '<td  style="display:none;" id="status4_' + row_id + '">' + status4 + '</td>' +
                '<td  style="display:none;" id="filename4_' + row_id + '">' + filename4 + '</td>' +


                // '<td  id="startdate_' + row_id + '">' + startdate + '</td>' +
                //'<td  id="enddate_' + row_id + '">' + enddate + '</td>' +
                '<td><button  class="doc_edit_data5 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data5 btn btn-sm btn-danger"   id="monthly_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#monthlybody").append(html);
            $('#monthly_row_id').val(row_id);
            $('#monthly_save_update').val('');

            //  $('.panel-tab a[href="#projectmaster_form"]').tab('show');
        }

        $('#expensestype').val('').trigger('change');
        $('#vendorname').val('');
        $('#amount_data').val('');
        $('#filename4').val('');

        $('#msg4').html('');
        $('#add_file4').html('<input type="file"  class="" id="docupload4" name="docupload4" >');
        $('#monthlyexpensesmodel').modal('hide');




    });

    /*------monthly table delete function---------*/
    $(document).on('click', '.regional_delete_data5', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');
        save_update = save_update.split("_");



        $("#monthly_" + save_update[1]).remove();
        $('#doc_save').val('');





    });
    /*--------monthly table Edit function---------------*/
    $(document).on('click', '.doc_edit_data5', function(e) {
        e.preventDefault();

        $('#monthlyexpensesmodel').modal('show');
        var row = $(this).attr('id');

        // alert(row);
        var expensesid = $("#expensesid_" + row).html();
        var subacid = $("#subaccid_" + row).html();
        var vendorname = $("#vendorname_" + row).html();
        var amountdata = $("#amountdata_" + row).html();
        var effecitivedate4 = $("#meffecitivedate_" + row).html();
        var leavingdate4 = $("#mleavingdate_" + row).html();
        var status = $("#status4_" + row).html();
        var filename = $("#filename4_" + row).html();



        $('#filename4').val(filename);
        if (status == 1) {
            $('#status4').bootstrapToggle('on');
        } else {
            $('#status4').bootstrapToggle('off');
        }
        var hiddenid = "file_hidden4";
        var msgid = "msg4";
        $('#msg4').html("<font id='doc_image_name' color='green'>" + filename + "</font><button class='delete_doc1 btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");

        //var startdate = $("#startdate_" + row).html();
        //var enddate = $("#enddate_" + row).html();

        $('#expensestype').val(expensesid).trigger('change');
        $('#expensubacc').val(subacid).trigger('change');
        $('#vendorname').val(vendorname);
        $('#amount_data').val(amountdata);

        $('#effecitivedate4').val(effecitivedate4);
        $('#leavingdate4').val(leavingdate4);


        // $('#startdate').val(startdate);
        //$('#enddate').val(enddate);
        $('#monthly_save_update').val(row);
        //$('#filename').val(filename);

        //alert(x);
        //$('#regional_row_id').val(row);		


    });

    /*-------monthly tab Data insert in database------------*/
    $(document).on('click', '#monthly_tab', function(e) {
        e.preventDefault();



        var id = $('#save_update').val();
        if (id != "") {

            proid = id;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: proid,
                    table_name: 'monthly_expense',

                },
                success: function(data) {

                }
            });
        }
        var r1 = $('table#tblmonthlyexpenses').find('tbody').find('tr');
        var r = r1.length;

        var tr = "";
        // alert(r);
        for (var i = 0; i < r; i++) {


            var t = document.getElementById('tblmonthlyexpenses');
            var expensiveid = $(r1[i]).find('td:eq(1)').html();
            var subacid = $(r1[i]).find('td:eq(2)').html();
            var vendorname = $(r1[i]).find('td:eq(5)').html();
            var effecitivedatefrom = $(r1[i]).find('td:eq(6)').html();
            var leavingdateto = $(r1[i]).find('td:eq(7)').html();

            var amount = $(r1[i]).find('td:eq(8)').html();
            var status = $(r1[i]).find('td:eq(9)').html();

            var filename = $(r1[i]).find('td:eq(10)').html();


            var tdateAr = effecitivedatefrom.split('/');
            var effecitivedate4 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            var tdateAr1 = leavingdateto.split('/');
            var leavingdate4 = tdateAr1[2] + '-' + tdateAr1[1] + '-' + tdateAr1[0];

            //alert("effecitivedate4" + effecitivedate4 + 'leavingdate4' + leavingdate4);


            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    proid: proid,
                    expensiveid: expensiveid,
                    subacid: subacid,
                    vendorname: vendorname,
                    effecitivedatefrom: effecitivedate4,
                    leavingdateto: leavingdate4,
                    amount: amount,
                    status: status,
                    filename: filename,
                    table_name: 'monthly_expense',
                },
                success: function(data) {
                    //successTost("Data save Successfully");
                    //myDeleteFunction();
                    console.log(data);

                }



            });
        }
        $('.projectmaster').show();
        $('.artist_tab').show();
        $('.production_tab').show();
        $('.episodic_tab').show();
        $('.monthly_expenses').show();
        $('.prodoc_tab').show();
        $('.panel-tab a[href="#document_tab"]').tab('show');
    });
    /*----doc tab-----*/

    $(document).on("submit", "#document_form", function(e) {
        e.preventDefault();

        var documenttype = $('#type_document').val();
        var description = $('#description').val();
        var filename = $('#file_hidden').val();
        var doctype = $("#type_document option:selected").text();
        var row_id = $('#doc_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#doc_save').val();
        //	alert('saveupadaet'+save_update);

        if (save_update != "") {

            $("#documenttype_" + save_update).html(documenttype);
            $("#description_" + save_update).html(description);
            $("#doctype_" + save_update).html(doctype);
            $("#filename_" + save_update).html(filename);
            $('#doc_save').val('');
            //$('#regional_row_id').val('');		

        } else {

            /*'<tr class="project_tab_add_row" id="'+row_id+'" >'+
                            '<td style="display:none;" >'+row_id+'</td>'+
                            '<td  style="display:none;" id="documenttype_'+row_id+'">'+documenttype+'</td>'+
                            '<td  id="doctype_'+row_id+'">'+doctype+'</td>'+
                            '<td  id="description_'+row_id+'">'+description+'</td>'+
                            '<td  id="filename_'+row_id+'">'+filename+'</td>'+
                            '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                            '</tr>';*/
            var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  style="display:none;" id="documenttype_' + row_id + '">' + documenttype + '</td>' +
                '<td  id="doctype_' + row_id + '">' + doctype + '</td>' +
                '<td  id="description_' + row_id + '">' + description + '</td>' +
                '<td  id="filename_' + row_id + '">' + filename + '</td>' +
                '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data4 btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#project_tab4").append(html);
            $('#doc_row_id').val(row_id);
            $('#doc_save').val('');
            $('#documenttab_data').modal('hide');
            //  $('.panel-tab a[href="#projectmaster_form"]').tab('show');
        }



        var documenttype = $('#type_document').val('');
        var description = $('#description').val('');
        //var filename = $('#filename').val('');
        //$('#msg').val('');
        $('#msg').html('');
        $('#file_hidden').val('');

        $('#add_file').html('');

        $('#add_file').html('<input type="file"  class="" id="filename" name="filename" required>');

    });
    $(document).on('click', '.regional_delete_data4', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');

        if (save_update != "") {
            $("#" + save_update).remove();
            $('#doc_save').val('');

        }
    });
    $(document).on('click', '#save', function(e) {
        e.preventDefault();
        var r1 = $('table#project_tab4').find('tbody').find('tr');
        var r = r1.length;
        var tr = "";
        var id = $('#save_update').val();

        if (id != "") {
            proid = id;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: proid,
                    table_name: 'projectdocument',

                },
                success: function(data) {

                }
            });
        }

        for (var i = 0; i < r; i++) {


            var t = document.getElementById('project_tab4');
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
                    proid: proid,
                    description: description,
                    filename: filename,


                    table_name: 'projectdocument',
                },
                success: function(data) {


                }



            });
        }
        if (id != "") {
            successTost("Record Saved Successfully!!!");

        } else {
            successTost("Record Saved Successfully!!!");

        }

        form_clear();
        //show_master();
        $('.closehideshow').trigger('click');
        $('.panel-tab a[href="#projectmaster"]').tab('show');

    });
    $(document).on('click', '.closehideshow', function() {
        form_clear();
        show_master();
        $('.artist_tab').hide();
        $('.production_tab').hide();
        $('.episodic_tab').hide();
        $('.prodoc_tab').hide();
        $('.prodoc_tab').hide();

        //$('.panel-tab a[href="#projectmaster_form"]').tab('show');
    });
    $(document).on('click', '.doc_edit_data4', function(e) {
        e.preventDefault();

        $('#documenttab_data').modal('show');
        var row = $(this).attr('id');
        $('#doc_save').val(row);
        // alert(row);
        var type = $("#documenttype_" + row).html();
        var description = $("#description_" + row).html();
        var filename = $("#filename_" + row).html();
        $('#filename').removeAttr('required');
        var hiddenid = 'file_hidden';
        var msgid = 'msg';

        $('#type_document').val(type).trigger('change');
        $('#file_hidden').val(filename);
        $('#msg').html(filename + '' + "<button class='delete_doc btn btn-sm  btn-xs  btn-danger' id=" + filename + '###' + hiddenid + '###' + msgid + " name=" + filename + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");
        $('#description').val(description);
        //$('#filename').val(filename);

        //alert(x);
        //$('#regional_row_id').val(row);		


    });
    $(document).on("mousedown", "#filename", function() {
        var id = 'filename';
        var hiddenid = "file_hidden";
        var msgid = "msg";
        //	$('#filename').removeAttr('form');

        uploadfile(id, hiddenid, msgid);
    });

    function uploadfile(id, hiddenid, msgid) {
        //console.log(id + '-' + hiddenid + '-' + msgid);

        $('#' + id).ajaxfileupload({
            //'action' : 'callAction',

            'action': baseurl + 'settings/doc_upload',
            params: { id: id },
            'onStart': function() { $('#' + msgid).html("<font color='red'><i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>Please wait file is uploading.....</font>"); },
            'onComplete': function(response) {
                //console.log(response);

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

    /*---------insert data into area_master end-----------------*/


    /*---------get data into area_master start-----------------*/

    show_master(); //call function show data table


    //	function show data table
    function show_master() {

        $.ajax({
            type: 'POST',
            url: baseurl + "settings/get_master",
            async: false,
            data: {
                table_name: 'project_master',
            },
            dataType: 'json',
            success: function(data) {
                //console.log(data);

                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Channel Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Schedule</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Start Date</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Director</th>' +
                    '<th style="display:none;white-space:nowrap;text-align:left;padding:10px 10px;">Dop</th>' +
                    '<th style="display:none;">Remark/th>' +
                    '<th style="display:none;">ageforadmincost/th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (i = 0; i < data.length; i++) {
                    var sr = i + 1;

                    var date = "";
                    if (data[i].date != "0000-00-00") {

                        var tdateAr = data[i].date.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                    }


                    html += '<tr>' +
                        '<td id="name_' + data[i].id + '">' + data[i].name + '</td>' +
                        '<td id="channel_' + data[i].id + '">' + data[i].channelname + '</td>' +
                        '<td id="schdule_' + data[i].id + '">' + data[i].schedule + '</td>' +

                        '<td id="date_' + data[i].id + '">' + date + '</td>' +
                        '<td id="director_' + data[i].id + '" style="display:none;">' + data[i].director + '</td>' +
                        '<td id="dop_' + data[i].id + '" style="display:none;">' + data[i].dop + '</td>' +
                        '<td style="display:none;" id="remark_' + data[i].id + '">' + data[i].remark + '</td>' +
                        '<td style="display:none;" id="ageforadmincost_' + data[i].id + '">' + data[i].weight_age + '</td>' +

                        //'<td >'+status+'</td>'+
                        '<td><button  class="edit_datas btn btn-sm  btn-xs  btn-primary" id="' + data[i].id + '" name="' + data[i].status + '" ><i class="fa fa-edit"></i></button>' +
                        '</tr>';
                }
                //console.log(html);
                html += '</tbody></table>';
                $('#show_master').html(html);
                $('#myTable').DataTable({});
            }

        });
    }

    /*---------get data into area_master end-----------------*/

    $(document).on('click', '.closehideshow', function() {
        form_clear();
    });

    function form_clear() {

        var date = new Date();
        date = date.toString('dd/MM/yyyy');
        $("#date").val('');
        $('#name').val('');
        $('#director').val('');
        $('#channel').val('');
        $('#dop').val('');
        $('#admin_cost').val('');
        $('#schedule').val('');
        $('#schedule').val('');
        $('#remark').val('');
        $('#artists').html('');
        $('#production').html('');
        $('#episidic').html('');
        $('#documents').html('');
        $('#msg').html('');
        $('#save_update').val('');
        $("#pro_name").html('');
    }
    /*-------add new click Event---------*/

    $(document).on('click', '.btnhideshow', function(e) {
        $('.artist_tab').hide();
        $('.production_tab').hide();
        $('.episodic_tab').hide();
        $('.prodoc_tab').hide();
        //form_clear();
    });
    /*---------get  role_master  start-----------------*/

    $(document).on('click', '.edit_datas', function(e) {
        e.preventDefault();
        var id1 = $(this).attr('id');
        $('#save_update').val(id1);
        uid = id1;
        var delf = '';
        var name = $('#name_' + id1).html();
        var chennel = $('#channel_' + id1).html();
        var directopr = $('#director_' + id1).html();
        var schedule = $('#schdule_' + id1).html();
        var dop = $('#dop_' + id1).html();
        var remerk = $('#remark_' + id1).html();
        var date = $('#date_' + id1).html();
        var ageforadmincost = $('#ageforadmincost_' + id1).html();
        $("#pro_name").html('Project Name :' + name);
        //date=date;
        //date=date[0]+'/'+date[1]+'/'+date[2];


        /*var tdateAr = date.split('-');
        	var date1= tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[1].slice();*/
        //$('#vendor_category').val(name);
        $('#date').val(date);




        $('#name').val(name);
        $('#director').val(directopr);
        $('#channel').val(chennel);
        $('#schedule').val(schedule);
        $('#dop').val(dop);
        $('#s_date').val(date);
        $('#remark').val(remerk);
        $('#admin_cost').val(ageforadmincost);
        $('.btnhideshow').trigger('click');
        //$('#filename').removeAttr('required');

        // getMasterSelect("character_master", ".roledata", " status = '1' and peopletype='1' and projectid=" + id1 + "");
        //getMasterSelect("character_master", ".role1", " status = '1' and peopletype='2' and projectid=" + id1 + "");
        //getMasterSelect("character_master", ".role2", " status = '1' and peopletype='3' and projectid=" + id1 + "");

        var where = "lis_artist.proid=" + id1;

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'lis_artist',
                where: where,
            },
            success: function(data) {
                //console.log(data);

                var row_id = 0;
                var row_id1 = 0;
                var row_id2 = 0;
                $('#production').html('');
                $('#episidic').html('');
                $('#production').html('');
                for (i = 0; i < data.length; i++) {
                    var status = "";
                    if (data[i].status == '1') {

                        status = '<button  class="btn btn-sm  btn-xs  btn-success"  >Active</button>';
                    } else {
                        status = '<button  class="btn btn-sm  btn-xs  btn-danger"  >Inactive</button>';
                    }


                    var perunittext = "";
                    if (data[i].perunit == '1') {
                        perunittext = "Per Day";
                    } else if (data[i].perunit == '2') {
                        perunittext = "Per Month";
                    } else if (data[i].perunit == '3') {
                        perunittext = "Per Episode";
                    } else if (data[i].perunit == '4') {
                        perunittext = "Per Person";
                    } else if (data[i].perunit == '5') {
                        perunittext = "Per Piece";
                    }
                    if (data[i].type == "artist") {

                        //RAVI						
                        var pid = data[i].pid;
                        var delf = 'N';
                        //alert(pid);		

                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/valid_trans_artist",
                            dataType: "JSON",
                            //async: false,
                            data: {
                                pid: pid,
                                table_name: 'lis_artist',
                                where: where,
                            },
                            success: function(result) {
                                //console.log(trand);
                                var cnt = result[0].cnt;
                                //alert(cnt+ " <<<>>> " );

                                if (cnt > 0) {
                                    //var cnt = result[0].cnt;
                                    delf = 'Y';

                                }

                            }


                        })

                        //RAVI			

                        // var  row_id =0;
                        var tdateAr = data[i].effecitivedate.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];


                        var leving = data[i].leavingdate.split('-');
                        var leaving = leving[2] + '/' + leving[1] + '/' + leving[0];

                        var row_id = row_id + 1;

                        var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                            '<td style="display:none;" >' + row_id + '</td>' +

                            '<td  style="display:none;" id="charecter_' + row_id + '">' + data[i].role_id + '</td>' +
                            '<td  style="display:none;" id="person_' + row_id + '">' + data[i].pid + '</td>' +
                            '<td  id="role_' + row_id + '">' + data[i].charectername + '</td>' +
                            '<td  id="persome_' + row_id + '">' + data[i].peoplename + '</td>' +
                            '<td  id="date_' + row_id + '">' + date + '</td>' +
                            '<td  id="leavingdate_' + row_id + '">' + leaving + '</td>' +
                            '<td  id="creditday_' + row_id + '">' + data[i].creditday + '</td>' +
                            '<td  id="rate_' + row_id + '" style="text-align:right;">' + data[i].rate + '</td>' +
                            '<td style="display:none;" id="perunit_' + row_id + '">' + data[i].perunit + '</td>' +
                            '<td  id="perunitext_' + row_id + '">' + perunittext + '</td>' +
                            '<td  id="overtime_' + row_id + '" style="text-align:right;">' + data[i].overtime + '</td>' +
                            '<td  id="overtime_' + row_id + '">' + status + '</td>' +
                            '<td  style="display:none;" id="type_' + row_id + '">' + data[i].type + '</td>' +
                            '<td  style="display:none;" id="statusinfo_' + row_id + '">' + data[i].status + '</td>' +
                            '<td  style="display:none;" id="artistfilename_' + row_id + '">' + data[i].attachment + '</td>' +
                            '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>';
                        var html1 = '';

                        if (delf == 'N') {
                            var html1 = '&nbsp;&nbsp;<button class="regional_delete_data btn btn-xs btn-danger" id="' + row_id + '"  ><i class="fa fa-trash"></i></button>';

                        }
                        html = html + html1 + '</tr>';
                        //	$('#artists').html('');
                        $("#project_tab1").append(html);
                        $('#list_row_id').val(row_id);

                    } else if (data[i].type == "episodic") {

                        var tdateAr = data[i].effecitivedate.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];
                        var leving = data[i].leavingdate.split('-');
                        var leaving = leving[2] + '/' + leving[1] + '/' + leving[0];
                        //  var  row_id =0;
                        row_id1 = row_id1 + 1;

                        var html = '<tr class="project_tab_add_row" id="episodic_' + row_id1 + '" >' +
                            '<td style="display:none;" >' + row_id1 + '</td>' +

                            '<td  style="display:none;" id="charecter2_' + row_id1 + '">' + data[i].role_id + '</td>' +
                            '<td  style="display:none;" id="person2_' + row_id1 + '">' + data[i].pid + '</td>' +
                            '<td  id="role2_' + row_id1 + '">' + data[i].charectername + '</td>' +
                            '<td  id="persome2_' + row_id1 + '">' + data[i].peoplename + '</td>' +
                            '<td  id="date2_' + row_id1 + '">' + date + '</td>' +
                            '<td  id="leavingdate2_' + row_id1 + '">' + leaving + '</td>' +
                            '<td  id="creditday2_' + row_id1 + '">' + data[i].creditday + '</td>' +
                            '<td  id="rate2_' + row_id1 + '" style="text-align:right;">' + data[i].rate + '</td>' +
                            '<td style="display:none;" id="perunit2_' + row_id1 + '">' + data[i].perunit + '</td>' +
                            '<td  id="perunitext2_' + row_id1 + '">' + perunittext + '</td>' +
                            '<td  id="overtime2_' + row_id1 + '" style="text-align:right;">' + data[i].overtime + '</td>' +
                            '<td  id="overtime_' + row_id1 + '">' + status + '</td>' +
                            '<td  style="display:none;" id="type_' + row_id1 + '">' + data[i].type + '</td>' +
                            '<td  style="display:none;" id="statusinfo2_' + row_id1 + '">' + data[i].status + '</td>' +
                            '<td  style="display:none;" id="listofepisodicfile_' + row_id1 + '">' + data[i].attachment + '</td>' +
                            '<td><button  class="doc_edit_data2 btn btn-xs btn-primary"   id="' + row_id1 + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data2 btn btn-xs btn-danger"   id="episodic_' + row_id1 + '"  ><i class="fa fa-trash"></i></button>' +
                            '</tr>';
                        //$('#episidic').html('');
                        $("#project_tab3").append(html);
                        $('#listepisodic_row_id').val(row_id1);

                    } else if (data[i].type == "production") {
                        var tdateAr = data[i].effecitivedate.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                        var leving = data[i].leavingdate.split('-');
                        var leaving = leving[2] + '/' + leving[1] + '/' + leving[0];
                        row_id2 = row_id2 + 1;
                        var html = '<tr class="project_tab_add_row" id="production_' + row_id2 + '" >' +
                            '<td style="display:none;" >' + row_id2 + '</td>' +

                            '<td  style="display:none;" id="charecter1_' + row_id2 + '">' + data[i].role_id + '</td>' +
                            '<td  style="display:none;" id="person1_' + row_id2 + '">' + data[i].pid + '</td>' +
                            '<td  id="role1_' + row_id2 + '">' + data[i].charectername + '</td>' +
                            '<td  id="persome1_' + row_id2 + '">' + data[i].peoplename + '</td>' +
                            '<td  id="date1_' + row_id2 + '">' + date + '</td>' +
                            '<td  id="leavingdate1_' + row_id2 + '">' + leaving + '</td>' +
                            '<td  id="creditday1_' + row_id2 + '">' + data[i].creditday + '</td>' +
                            '<td  id="rate1_' + row_id2 + '" style="text-align:right;">' + data[i].rate + '</td>' +
                            '<td style="display:none;" id="perunit1_' + row_id2 + '">' + data[i].perunit + '</td>' +
                            '<td  id="perunitext1_' + row_id2 + '">' + perunittext + '</td>' +
                            '<td  id="overtime1_' + row_id2 + '" style="text-align:right;">' + data[i].overtime + '</td>' +
                            '<td  id="overtime_' + row_id2 + '">' + status + '</td>' +
                            '<td  style="display:none;" id="type_' + row_id2 + '">' + data[i].type + '</td>' +
                            '<td  style="display:none;" id="statusinfo1_' + row_id2 + '">' + data[i].status + '</td>' +
                            '<td  style="display:none;" id="productionfile_' + row_id2 + '">' + data[i].attachment + '</td>' +
                            '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="' + row_id2 + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="production_' + row_id2 + '"  ><i class="fa fa-trash"></i></button>' +
                            '</tr>';
                        //	$('#production').html('');
                        $("#project_tab2").append(html);
                        $('#listproduct_row_id').val(row_id2);
                    }

                }



            }
        });
        where = "projectdocument.proid=" + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'projectdocument',
                where: where,
            },
            success: function(data) {
                var row_id = 0;
                // console.log(data);

                for (i = 0; i < data.length; i++) {
                    var doc = "";
                    if (data[i].typedoc == '1') {
                        doc = "Agreement";
                    } else if (data[i].typedoc == '2') {
                        doc = "GST Certificate";
                    } else {
                        doc = "PAN Number";
                    }

                    row_id = row_id + 1;

                    /*'<tr class="project_tab_add_row" id="'+row_id+'" >'+
                    '<td style="display:none;" >'+row_id+'</td>'+
                    '<td  style="display:none;" id="documenttype_'+row_id+'">'+data[i].typedoc+'</td>'+
                    '<td  id="doctype_'+row_id+'">'+doc+'</td>'+
                    '<td  id="description_'+row_id+'">'+data[i].description+'</td>'+
                    '<td  id="filename_'+row_id+'">'+data[i].filename+'</td>'+
                    '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                    '</tr>';	*/


                    var html = '<tr class="project_tab_add_row" id="' + row_id + '" >' +
                        '<td style="display:none;" >' + row_id + '</td>' +
                        '<td  style="display:none;" id="documenttype_' + row_id + '">' + data[i].typedoc + '</td>' +
                        '<td  id="doctype_' + row_id + '">' + doc + '</td>' +
                        '<td  id="description_' + row_id + '">' + data[i].description + '</td>' +
                        '<td  id="filename_' + row_id + '">' + data[i].filename + '</td>' +
                        '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data4 btn btn-sm btn-danger"   id="' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';
                    /*var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                    '<td style="display:none;" >'+row_id+'</td>'+
                    '<td style="display:none;  id="documenttype_'+row_id+'">'+data[i].typedoc+'</td>'+
                    '<td  id="doctype_'+row_id+'">'+doc+'</td>'+
                    '<td  id="description_'+row_id+'">'+data[i].description+'</td>'+

                    '<td  id="filename_'+row_id+'">'+data[i].filename+'</td>'+
                    '<td><button  class="doc_edit_data4 btn btn-sm btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data btn btn-sm btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                    '</tr>';*/

                    $("#project_tab4").append(html);
                    $('#doc_row_id').val(row_id);
                }


            }
        });
        where = "monthly_expense.projectid=" + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/getmonthlydata",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'monthly_expense',
                where: where,
            },
            success: function(data) {
                var row_id = 0;
                //console.log(data);
                $("#monthlybody").html('');
                for (i = 0; i < data.length; i++) {

                    // alert(data);
                    row_id = row_id + 1;

                    var tdateAr = data[i].effecitivedate.split('-');
                    var effecitivedate = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                    var leving = data[i].leavingdate.split('-');
                    var leavingdate = leving[2] + '/' + leving[1] + '/' + leving[0];


                    // var effecitivedate = data[i].effecitivedate;
                    // var leavingdate = data[i].leavingdate;


                    var html = '<tr class="project_tab_add_row" id="monthly_' + row_id + '" >' +
                        '<td style="display:none;" >' + row_id + '</td>' +
                        '<td  style="display:none;" id="expensesid_' + row_id + '">' + data[i].expensesid + '</td>' +
                        '<td  style="display:none;" id="subaccid_' + row_id + '">' + data[i].subaccid + '</td>' +


                        // '<td  style="display:none;" id="expensesid_' + row_id + '">' +data[i].expensesid + '</td>' +
                        //'<td  id="expensestype_' + row_id + '">' + data[i].expensename + '</td>' +
                        '<td  id="expensestype_' + row_id + '">' + data[i].expensename + '</td>' +
                        '<td  id="expensesacsubname_' + row_id + '">' + data[i].expenaccname + '</td>' +
                        '<td  id="vendorname_' + row_id + '">' + data[i].vendorname + ' </td>' +
                        '<td  id="meffecitivedate_' + row_id + '">' + effecitivedate + ' </td>' +
                        '<td  id="mleavingdate_' + row_id + '">' + leavingdate + ' </td>' +

                        '<td  id="amountdata_' + row_id + '" style="text-align:right;" >' + data[i].amount + '</td>' +

                        '<td  style="display:none;" id="status4_' + row_id + '">' + data[i].status + '</td>' +
                        '<td  style="display:none;" id="filename4_' + row_id + '">' + data[i].attachment + '</td>' +


                        // '<td  id="startdate_' + row_id + '">' + startdate + '</td>' +
                        //'<td  id="enddate_' + row_id + '">' + enddate + '</td>' +
                        '<td><button  class="doc_edit_data5 btn btn-sm btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data5 btn btn-sm btn-danger"   id="monthly_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';

                    $("#monthlybody").append(html);


                    $('#monthly_row_id').val(row_id);

                }


            }
        });

        $('.panel-tab a[href="#projectmaster"]').tab('show');
        $('.artist_tab').show();
        $('.production_tab').show();
        $('.episodic_tab').show();
        $('.prodoc_tab').show();
        $('.monthly_expenses').show();



    });

    /*---------get  area_master  end-----------------*/
    /*---------delete  area_master  start-----------------*/

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

                            } else if (data == '500') {
                                errorTost("Data Can not Delete Because Avalible in Plann Schedule");
                            } else {
                                errorTost("Data Delete Failed");
                            }

                        }
                    });
                    return false;

                });

        }

    });

    /*-----------Monthly Tab Insert Data In Table--------------------*/

    /*---------delete  area_master  end-----------------*/
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
                //console.log(data);
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

                    html += '<option value="' + id + '">' + name + '</option>';
                }
                $(selecter).html(html);
            }
        });
    }
    /*change of Expensive type*/
    $(document).on("change", ".expense_type", function(e) {
        e.preventDefault();
        var id1 = $(this).val();

        getMasterSelect('expenses_subaccount', '.expensubacc', 'expensesid=' + id1)

    });


    /*-------------Artist file upload --------------------*/
    $(document).on("mousedown", "#docupload1", function() {
        var id = 'docupload1';
        var hiddenid = "file_hidden1";
        var msgid = "msg1";
        //	$('#filename').removeAttr('form');
        //   $('#docupload1').removeAttr('form');
        uploadfile1(id, hiddenid, msgid);
    });

    $(document).on("mousedown", "#docupload2", function() {
        var id = 'docupload2';
        var hiddenid = "file_hidden2";
        var msgid = "msg2";
        //	$('#filename').removeAttr('form');
        //   $('#docupload1').removeAttr('form');
        uploadfile1(id, hiddenid, msgid);
    });

    $(document).on("mousedown", "#docupload3", function() {
        var id = 'docupload3';
        var hiddenid = "file_hidden3";
        var msgid = "msg3";
        //	$('#filename').removeAttr('form');
        //   $('#docupload1').removeAttr('form');
        uploadfile1(id, hiddenid, msgid);
    });

    $(document).on("mousedown", "#docupload4", function() {
        var id = 'docupload4';
        var hiddenid = "filename4";
        var msgid = "msg4";
        //	$('#filename').removeAttr('form');
        //   $('#docupload1').removeAttr('form');
        uploadfile1(id, hiddenid, msgid);
    });

    function uploadfile1(id, hiddenid, msgid) {
        //console.log(id + '-' + hiddenid + '-' + msgid);

        $('#' + id).ajaxfileupload({
            //'action' : 'callAction',

            'action': baseurl + 'Invoice_Entry/doc_upload1',
            params: { id: id },
            'onStart': function() { $('#' + msgid).html("<font color='red'><i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>Please wait file is uploading.....</font>"); },
            'onComplete': function(response) {
                //console.log(response);

                if (response == '') {
                    $('#' + msgid).html("<font color='red'>" + "Error in file upload" + "</font>");
                } else {

                    $('#' + hiddenid).val(response);
                    $('#' + msgid).html("<font id='doc_image_name' color='green'>" + response + "</font><button class='delete_doc1 btn btn-sm  btn-xs  btn-danger' id=" + response + '###' + hiddenid + '###' + msgid + " name=" + response + '-' + hiddenid + '-' + msgid + "><i class='fa fa-trash'></i></button>");


                }

            }
        });
    }
    /* Delete Document start */
    $(document).on('click', '.delete_doc1', function(e) {
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
                    url: baseurl + "Invoice_Entry/doc_delete1",
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



});

function artistdel() {


    //	alert("Hello....");	

    var x = confirm("Are you sure you want to delete?");
    if (x)
        return true;
    else
        return false;

}