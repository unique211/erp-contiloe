$(document).ready(function() {
    var table_name = "artist_schedule";
    var aid = "";
    var proid = "";
    var index = 0;
    var calldata = 0;
    $('#wait').hide();
    $('#wait1').hide();
    $('#model_link').hide();
    $(document).on("click", "#addnewdata", function(e) {
        e.preventDefault();
        // display_budgethead();
    });
    /*----------- artistschedule form---------*/
    $(document).on("submit", "#artistschedule_form", function(e) {
        e.preventDefault();

        var date = $('#date').val();
        var project = $('#project').val();
        var location = $('#location').val();
        var projectft = $('#projected').val();
        var shift = $('#shifttime').val();

        var shiftto = $('#shifttime_to').val();
        var unit = $('#for_unit').val();
        var camera = $('#camrera').val();
        var requriment = $('#requirement').val();
        var tdateAr = date.split('/');
        var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        var id = $('#save_update').val();

        $.ajax({
            type: "POST",
            url: baseurl + "settings/save_settings",
            dataType: "JSON",
            async: false,
            data: {
                id: id,
                date: date2,
                project: project,
                location: location,
                projectft: projectft,
                shift: shift,
                shiftto: shiftto,
                unit: unit,
                camera: camera,
                requriment: requriment,
                table_name: table_name,
            },
            success: function(data) {

                if (data > 0 || data == true) {

                    aid = data;
                    var uid = $('#save_update').val();

                    if (uid != "") {
                        aid = uid;

                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/delete_master",
                            dataType: "JSON",
                            async: false,
                            data: {
                                id: aid,
                                table_name: 'scenewisedetails',

                            },
                            success: function(data) {

                            }
                        });
                    }
                    var r1 = $('table#scene_wise').find('tbody').find('tr');
                    var r = r1.length;

                    var tr = "";

                    for (var i = 0; i < r; i++) {


                        var t = document.getElementById('scene_wise');
                        var sceno = $(r1[i]).find('td:eq(1)').html();
                        var description = $(r1[i]).find('td:eq(2)').html();
                        var effect = $(r1[i]).find('td:eq(3)').html();
                        var sub_location = $(r1[i]).find('td:eq(4)').html();
                        var artist_name = $(r1[i]).find('td:eq(5)').html();
                        var footage = $(r1[i]).find('td:eq(7)').html();

                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/save_settings",
                            dataType: "JSON",
                            async: false,
                            data: {
                                aid: aid,
                                sceno: sceno,
                                description: description,
                                effect: effect,
                                sub_location: sub_location,
                                artist_name: artist_name,
                                footage: footage,
                                table_name: 'scenewisedetails',
                            },
                            success: function(data) {

                                // successTost("Data save Successfully");
                                //   myDeleteFunction();

                            }
                        });

                    }
                    var l1 = $('table#scheduledata').find('tbody').find('tr');
                    var s = l1.length;
                    var uid = $('#save_update').val();
                    if (uid != "") {
                        aid = uid;
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/delete_master",
                            dataType: "JSON",
                            async: false,
                            data: {
                                id: aid,
                                table_name: 'callsheet',

                            },
                            success: function(data) {

                            }
                        });
                    }
                    var sr = 0;
                    for (var j = 0; j < s; j++) {
                        sr = sr + 1;


                        var t = document.getElementById('schedule');
                        var peopletype = $(l1[j]).find('td:eq(1)').html();
                        var charecter = $(l1[j]).find('td:eq(3)').html();
                        var peopleid = $(l1[j]).find('td:eq(5)').html();
                        var shfifrom = $("#shiftfromtime_" + sr).val();
                        var shiftto = $("#shifttotime_" + sr).val();
                        var duration = $("#duration_" + sr).val();
                        var remark = $("#remarkdata_" + sr).val();

                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/save_settings",
                            dataType: "JSON",
                            async: false,
                            data: {
                                aid: aid,
                                peopletype: peopletype,
                                charecter: charecter,
                                peopleid: peopleid,
                                shfifrom: shfifrom,
                                shiftto: shiftto,
                                duration: duration,
                                remark: remark,
                                table_name: 'callsheet',
                            },
                            success: function(data) {

                                // successTost("Data save Successfully");
                                //   myDeleteFunction();

                            }
                        });

                    }
                    var l1 = $('table#expensivedata').find('tbody').find('tr');
                    var s = l1.length;
                    var uid = $('#save_update').val();
                    if (uid != "") {
                        aid = uid;
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/delete_master",
                            dataType: "JSON",
                            async: false,
                            data: {
                                id: aid,
                                table_name: 'plannedexpenses',

                            },
                            success: function(data) {

                            }
                        });
                    }
                    var sr = 0;
                    for (var j = 0; j < s; j++) {
                        sr = j + 1;


                        var t = document.getElementById('schedule');
                        var accountid = $(l1[j]).find('td:eq(1)').html();
                        var subaccid = $(l1[j]).find('td:eq(2)').html();
                        var narroation = $(l1[j]).find('td:eq(5)').html();
                        var qty = $(l1[j]).find('td:eq(6)').html();
                        var rate = $(l1[j]).find('td:eq(7)').html();
                        var paymentmode = $(l1[j]).find('td:eq(10)').html();
                        //alert(paymentmode);
                        // var  unit =  $(l1[j]).find('td:eq(6)').html();
                        //var  amt =$(l1[j]).find('td:eq(2)').html();

                        // alert(accountid+""+narroation+""+qty+""+rate+""+unit+""+amt);
                        $.ajax({
                            type: "POST",
                            url: baseurl + "settings/save_settings",
                            dataType: "JSON",
                            async: false,
                            data: {
                                aid: aid,
                                accountid: accountid,
                                subaccid: subaccid,
                                narroation: narroation,
                                qty: qty,
                                rate: rate,
                                paymentmode: paymentmode,
                                unit: '',
                                amt: '',
                                table_name: 'plannedexpenses',
                            },
                            success: function(data) {

                                // successTost("Data save Successfully");
                                //   myDeleteFunction();

                            }
                        });

                    }
                    var sr = 0;
                    for (var j = 0; j < s; j++) {
                        sr = j + 1;

                        $("#narroation_" + sr).val('');
                        $("#qty_" + sr).val('');
                        $("#rate_" + sr).val('');
                        $("#unit_" + sr).val('');
                        $("#amount" + sr).val('');
                    }
                    if (id != "") {
                        successTost("Data Update Successfully");
                    } else {
                        successTost("Data save Successfully");
                    }
                } else {
                    errorTost("Data Cannot Save");
                }

                form_clear();




            }
        });
        $('.closehideshow').trigger('click');
        show_master();
    });

    $(document).on("mousedown", "#docupload", function() {
        var id = 'docupload';
        var hiddenid = "file_hidden";
        var msgid = "msg";
        $('#docupload').removeAttr('form');

        uploadfile(id, hiddenid, msgid);
    });

    /*-------------------Scene Wise Details Form -----------------*/

    $(document).on("submit", "#scenedetails_form", function(e) {
        e.preventDefault();

        var sceno = $('#scene_no').val();
        var description = $('#scene_description').val();
        var effect = $('#effect').val();
        var sub_location = $('#sub_location').val();
        var sceneremarks = $('#sceneremarks').val();
        // var footage =$('#footage').attr('value');

        // var artistname= $('#artist_name option:selected').val();
        var footage = $('#footage').val();
        // alert(footage);
        // var artistname="";
        /* $("#artist_name option:selected").each(function () {
             var $this = $(this);
             if ($this.length) {
               artistname = $this.text();
              
             }
          });*/
        var save_update = $('#screen_save_update').val();
        var artistname = new Array();
        var artist_id = new Array();
        var selObj = document.getElementById('artist_name');
        var i;
        var count = 0;
        if (save_update == "") {
            for (i = 0; i < selObj.options.length; i++) {
                if (selObj.options[i].selected) {
                    artistname[count] = " " + selObj.options[i].text + " ";
                    //charecter[count] = selObj.options[i].val+",";
                    count++;
                }
            }
        } else {
            for (i = 0; i < selObj.options.length; i++) {
                if (selObj.options[i].selected) {
                    artistname[count] = " " + selObj.options[i].text + ",";
                    //charecter[count] = selObj.options[i].val+",";
                    count++;
                }
            }

        }
        // var res = artistname.replace(",", ",");
        var artistid = $('#artist_name').val();
        if (artistid != null) {
            artist_id = artistid.join(",");
        }
        var row_id = $('#screen_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);


        if (save_update != "") {

            $("#screenno_" + save_update).html(sceno);
            $("#description_" + save_update).html(description);
            $("#effect_" + save_update).html(effect);
            $("#sublocation_" + save_update).html(sub_location);
            $("#artistid_" + save_update).html(artist_id);
            $("#artistname_" + save_update).html(artistname);
            $("#fotage_" + save_update).html(footage);
            $("#scene_remark_" + save_update).html(sceneremarks);
            $('#screen_save_update').val('');


        } else {

            var html = '<tr class="project_tab_add_row" id="tab2_' + row_id + '" >' +
                '<td style="display:none;" >' + row_id + '</td>' +
                '<td  id="screenno_' + row_id + '">' + sceno + '</td>' +
                '<td style="width:30%;"  id="description_' + row_id + '"  >' + description + '</td>' +
                '<td  id="effect_' + row_id + '">' + effect + '</td>' +
                '<td id="sublocation_' + row_id + '">' + sub_location + '</td>' +
                '<td  style="display:none;" id="artistid_' + row_id + '">' + artist_id + '</td>' +
                '<td  id="artistname_' + row_id + '">' + artistname + '</td>' +
                '<td  id="fotage_' + row_id + '">' + footage + '</td>' +
                '<td  style="display:none;" id="scene_remark_' + row_id + '">' + sceneremarks + '</td>' +
                '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data5 btn btn-xs btn-danger"   id="tab2_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';

            $("#scrnedata").append(html);
            $('#screen_row_id').val(row_id);
            $('#screen_save_update').val('');
        }
        $('#scenemodel_link').trigger('click');
        $('#scene_no').val('');
        $(".artist_name").val('').multiselect('rebuild').trigger('change');
        $('#scene_description').val('');
        $('#effect').val('');
        $('#sub_location').val('');
        $('#artist_name').val('');
        $('#footage').val('');
        $('#sceneremarks').text('');
        $('#sceneremarks').val('');
        $('#scenewisemodel').modal('hide');

    });

    /*--------------------edit For Scene Wise Details Form -------*/
    $(document).on('click', '.doc_edit_data', function(e) {
        e.preventDefault();
        $('#scenewisemodel').modal('show');
        var row = $(this).attr('id');
        var scene_no = $("#screenno_" + row).html();
        var description = $("#description_" + row).html();
        var effect = $("#effect_" + row).html();
        var sub_location = $("#sublocation_" + row).html();
        var artist_id = $("#artistid_" + row).html();
        var artist_name = $("#artistname_" + row).html();
        var fotage = $("#fotage_" + row).html();
        var scene_remark = $("#scene_remark_" + row).html();

        var dataarray = artist_id.split(",");
        $(".artist_name").val(dataarray).multiselect('rebuild').trigger('change');
        $('#scene_no').val(scene_no);
        $('#scene_description').val(description);
        $('#effect').val(effect);
        $('#sub_location').val(sub_location);
        // $('#artist_name').val(artist_name);
        $('#footage').val(fotage);
        $('#sceneremarks').val(scene_remark);
        $('#screen_save_update').val(row);
        //$('#regional_row_id').val(row);		


    });

    /*------------------Delete For Scene Wise Details Form -------*/
    $(document).on('click', '.regional_delete_data5', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');
        save_update = save_update.split("_")[1];
        if (save_update != "") {
            $("#tab2_" + save_update).remove();
            $('#doc_save_update').val('');

        }
    });


    /*--------------- form clear-------- */
    function form_clear() {

        // $('#date').val('');

        $('#project').val('').trigger('change');
        $('#location').val('').trigger('change');;
        $('#directore').val('');
        $('#plnnsave_update').val('');
        $('#dop').val('');
        $('#projected').val('');
        $('#shifttime').val('');
        $('#shifttime_to').val('');
        $('#for_unit').val('');
        $('#camrera').val('');
        $('#requirement').val('');
        $('#scrnedata').html('');
        $('#callsheet').html('');
        $('#save_update').val('');
        $('#unitdata').html('');
        $('#projectname').html('');
        $('#datedata').html('');
        $('#plannedtotal').text('');
        $('#totalcheque').text('');
        $('#totalcaseexpenses').text('');
        $('#totalexpenses').text('');
        // $('#expensive').html('');
    }

    /*----------------------Artist Schedule/Call sheet --------------------*/

    $(document).on("submit", "#schedulesheet_form", function(e) {
        e.preventDefault();
        // $('#shifttime_to').val();
        var artistnm = $('#artistnm').val();
        var artistname = $("#artistnm option:selected").text();
        var character = $('#character').val();
        var charactername = $("#character option:selected").text();
        var call = $('#call').val();
        var people = $('#people').val();
        var peoplename = $("#people option:selected").text();
        var shifttime = $('#shiftfromtime').val();
        var shifttotime = $('#shifttototime').val();
        var duration = $('#duration').val();
        var remarks = $('#remarks').val();



        var row_id = $('#schedulesheet_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);

        var save_update = $('#schedulesheet_save_update').val();

        var dlt = 0;
        var r1 = $('table#scheduledata').find('tbody').find('tr');
        var r = r1.length;
        for (var i = 0; i < r; i++) {

            var peoletype = $(r1[i]).find('td:eq(1)').html();
            var role_id = $(r1[i]).find('td:eq(3)').html();
            var peopleid = $(r1[i]).find('td:eq(5)').html();
            if (save_update == "") {
                if (artistnm == peoletype && character == role_id && peopleid == people) {
                    // dlt = parseInt(dlt) + parseInt(1);
                }
            }
        }
        if (shifttime == '' || shifttime == '00:00:00' || shifttotime == '' || shifttotime == '00:00:00') {
            dlt = parseInt(dlt) + parseInt(2);
        }

        if (dlt > 0) {
            if (dlt == 1) {
                errorTost("Selected Peopletype or Character or Person Already Entered !!!");
            } else {
                errorTost("Call time - From Or Call Time - To Not Empty Or 00:00:00 !!!");
            }
            var dlt = 0;

        } else if (save_update != "") {

            $("#peopletypeid_" + save_update).html(artistnm);
            $("#roleid_" + save_update).html(character);
            $("#peopletype_" + save_update).html(artistname);
            $("#rolename_" + save_update).html(charactername);
            $("#peopleid_" + save_update).html(people);
            $("#peoplename_" + save_update).html(peoplename);
            $("#shiftfromtime_" + save_update).val(shifttime);
            $("#shifttotime_" + save_update).val(shifttotime);
            $("#duration_" + save_update).val(duration);
            $("#remarkdata_" + save_update).val(remarks);
            $('#schedulesheet_save_update').val('');


        } else {
            alert(row_id);
            markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                '<td style="display:none;"  id="expeid_' + row_id + '">' + row_id + '</td>' +
                '<td style="display:none;" width="5%" id="peopletypeid_' + row_id + '">' + artistnm + '</td>' +
                '<td  width="10%" id="peopletype_' + row_id + '">' + artistname + '</td>' +
                '<td style="display:none;"  id="roleid_' + row_id + '">' + character + '</td>' +
                '<td style="width:10%" id="rolename_' + row_id + '">' + charactername + '</td>' +
                '<td style="display:none;"  id="peopleid_' + row_id + '">' + people + '</td>' +
                '<td  width="15%" id="peoplename_' + row_id + '">' + peoplename + '</td>' + // last changes
                '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="shiftfromtime_' + row_id + '"  placeholder="hh:mm:ss" value=' + shifttime + '> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control calltimeto" id="shifttotime_' + row_id + '" placeholder="hh:mm:ss" value=' + shifttotime + '> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="duration_' + row_id + '" placeholder="hh:mm:ss" value=' + duration + '> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                '<td   id="callremark" ><textarea  id="remarkdata_' + row_id + '">' + remarks + '</textarea></td>' +
                '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="tab3_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                '</tr>';
            $("#callsheet").append(markup);
            $('#schedulesheet_row_id').val(row_id);
            //  $('#schedulesheet_save_update').val('');
        }
        // $('#artistnm').val('').trigger('change');
        $('#character').val('').trigger('change');
        $('#people').val('').trigger('change');
        $('#call').val('');
        //$('#shiftfromtime').val('');
        //$('#duration').val('');
        $('#remarks').val('');
        //$('#duration').val('');
        $('#aristschedulemodel').modal('hide');



    });


    /*--------------------- Edit Artist Schedule/Call sheet --------------------*/
    $(document).on('click', '.doc_edit_data1', function(e) {
        e.preventDefault();

        var row = $(this).attr('id');

        var peopletypeid = $("#peopletypeid_" + row).html();
        var charecter = $("#roleid_" + row).html();
        var people = $("#peopleid_" + row).html();
        var shifttime = $("#shiftfromtime_" + row).val();
        var shifttotime = $("#shifttotime_" + row).val();
        var duration = $("#duration_" + row).val();
        var remark = $("#remarkdata_" + row).text();


        $('#artistnm').val(peopletypeid).trigger('change');
        $('#character').val(charecter).trigger('change');
        $('#people').val(people).trigger('change');

        $('#shiftfromtime').val(shifttime);
        $('#shifttototime').val(shifttotime);
        $('#duration').val(duration);
        $('#remarks').text(remark);
        $('#aristschedulemodel').modal('show');

        $('#schedulesheet_save_update').val(row);



    });

    /*------------------------ delete data  Artist Schedule/Call sheet --------------------*/

    $(document).on('click', '.regional_delete_data1', function(e) {
        e.preventDefault();
        var save_update = $(this).attr('id');
        save_update = save_update.split("_")[1];
        console.log(save_update);
        if (save_update != "") {
            $("#tab3_" + save_update).remove();
            console.log("#tab3_" + save_update);
            $('#schedulesheet_save_update').val('');

        }
    });


    /*---------------------- get director & Dop Change Event---------*/

    $(document).on("change", ".project_name", function(e) {
        e.preventDefault();
        proid = $(this).val();

        getMasterSelect("lis_artist", ".personname1", " lis_artist.status = '1' and lis_artist.proid=" + proid + " and lis_artist.type='artist'");
        var where = "id=" + proid;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where1",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'project_master',
                where: where,
            },
            success: function(data) {
                var data1 = eval(data);
                console.log(data);

                $('#directore').val(data1[0].director);
                $('#dop').val(data[0].dop);




            }


        });
        var where = "peopletype='1'";

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_aritistdata",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'character_master',
                where: where,
                proid: proid,
            },
            success: function(data) {
                var data1 = eval(data);
                console.log("artistdarta" + data);

                if (data.length > 0) {
                    html = '';
                    var name = '';
                    //					if(table_name=="victim_age"){
                    //					html += '<option selected  value="" >Select Victim Age</option>';
                    //						}else{
                    //  html += '<option selected disabled value="" >Select</option>';
                    //						}
                    for (i = 0; i < data.length; i++) {
                        var id = '';
                        name = data[i].name;
                        id = data[i].id;

                        html += '<option value="' + id + '">' + name + '</option>';
                    }
                    $('.artist_name').html(html);
                    $('.artist_name').multiselect('rebuild');
                }



            }
        });
        // getaritsdata();
        var project_name = $("#project option:selected").text();
        $("#projectname").html('Project Name :   ' + project_name + "   ");

    });
    /*-------------------------get Artist Schedule Charecter Name -----------------*/


    /*-------------------------get charecter name -----------------*/

    $(document).on("change", ".personname1", function(e) {
        e.preventDefault();
        var id1 = $(this).val();

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_charecter",
            dataType: "JSON",
            async: false,
            data: {
                table_name: 'character_master',
                pid: id1,
                proid: proid,
            },
            success: function(data) {
                var data1 = eval(data);
                if (data1.length > 0) {
                    $('#character').val(data[0].name);
                } else {
                    console.log('datanot found')
                }

            }

        });
    });
    /*------------edit of show_master ----------------*/
    $(document).on('click', '.edit_data', function() {
        $('#model_link').show();
        var id1 = $(this).attr('id');

        $('#wait').show();
        $('#save_artistdata').val(id1);
        // var name = $(this).attr('name');		
        var date = $('#date_' + id1).html();
        var proid = $('#projectid_' + id1).html();
        var locationid = $('#locationid_' + id1).html();
        var profo = $('#profotage_' + id1).html();
        var shiftto = $('#shifto_' + id1).html();
        var shiftfrom = $('#shiftfrom_' + id1).html();
        var unit = $('#unitdata_' + id1).html();
        var camera = $('#camera_' + id1).html();
        var requriment = $('#require_' + id1).html();
        $('#plannsave_update').val(id1);
        $('#plnnsave_update').val(id1);
        $('#date').val(date);
        $('#project').val(proid).trigger('change');
        $('.project_name').val(proid).trigger('change');
        $('#location').val(locationid).trigger('change');;
        $('#projected').val(profo);
        $('#shifttime').val(shiftfrom);
        $('#shifttime_to').val(shiftto);
        $('#for_unit').val(unit);
        $('#for_unit').attr('name', 'editdatayear');
        $('#camrera').val(camera);
        $('#requirement').val(requriment);
        $('#save_update').val(id1);
        $('.btnhideshow').trigger('click');

        var project_name = $("#project option:selected").text();
        $("#projectname").html('Project Name :   ' + project_name + "   ");
        $("#datedata").html('Date :   ' + date + "    ");
        $("#unitdata").html('Unit No :    ' + unit + "   ");

        $('#copydate').text(date);
        $('#copyproject').text(project_name);
        $('#copyunitno').text(unit);
        where = "asid=" + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/getsceneartistdata",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'scenewisedetails',
                where: where,
            },
            success: function(data) {
                console.log(data);
                $("#scrnedata").html('');
                var row_id = 0;
                for (i = 0; i < data.length; i++) {
                    row_id = row_id + 1;
                    //    alert(data[i].sceneremark);
                    var html = '<tr class="project_tab_add_row" id="tab2_' + row_id + '" >' +
                        '<td style="display:none;" >' + row_id + '</td>' +
                        '<td  id="screenno_' + row_id + '">' + data[i].screenno + '</td>' +
                        '<td style="width:30%;" id="description_' + row_id + '">' + data[i].description + '</td>' +
                        '<td  id="effect_' + row_id + '">' + data[i].effect + '</td>' +
                        '<td id="sublocation_' + row_id + '">' + data[i].sublocation + '</td>' +
                        '<td  style="display:none;" id="artistid_' + row_id + '">' + data[i].name + '</td>' +
                        '<td  id="artistname_' + row_id + '">' + data[i].charectername + '</td>' +
                        // '<td  id="fotage_'+row_id+'">'+data[i].charectername+'</td>'+
                        '<td  id="fotage_' + row_id + '">' + data[i].planfotage + '</td>' +
                        '<td  style="display:none;" id="scene_remark_' + row_id + '">' + data[i].sceneremark + '</td>' +
                        '<td><button  class="doc_edit_data btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data5 btn btn-xs btn-danger"   id="tab2_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';
                    $("#scrnedata").append(html);


                }
                $('#screen_row_id').val(row_id);
            }
        });
        where = 'aid=' + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'callsheet',
                where: where,
            },
            success: function(data) {
                console.log('call sheet' + data);
                $('#callsheet').html('');
                var row_id = 0;
                var markup = '';
                for (i = 0; i < data.length; i++) {
                    row_id = row_id + 1;

                    markup = '<tr class="project_tab_add_row" id="tab3_' + row_id + '" >' +
                        '<td  style="display:none;" id="sr_' + row_id + '">' + data[i].id + '</td>' +
                        //'<td style="display:none;"  id="expeid_'+sr+'">'+result[i].id+'</td>'+
                        '<td  style="display:none;" width="5%" id="peopletypeid_' + row_id + '">' + data[i].peopletypeid + '</td>' +
                        '<td width="10%" id="peopletype_' + row_id + '">' + data[i].peopletypename + '</td>' +
                        '<td style="display:none;"   id="roleid_' + row_id + '">' + data[i].characterid + '</td>' +
                        '<td style="width:10%"  id="rolename_' + row_id + '">' + data[i].charectername + '</td>' +
                        '<td style="display:none;"  id="peopleid_' + row_id + '">' + data[i].peopleid + '</td>' +
                        '<td width="15%" id="peoplename_' + row_id + '">' + data[i].peoplename + '</td>' + // last changes
                        '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="shiftfromtime_' + row_id + '" value=' + data[i].fromshift + ' > <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                        '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control calltimeto" id="shifttotime_' + row_id + '" value=' + data[i].toshift + ' > <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                        '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="duration_' + row_id + '" value=' + data[i].fromshift + ' > <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                        '<td id="callremark"><textarea  id="remarkdata_' + row_id + '"    >' + data[i].remark + '</textarea></td>' +
                        '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="tab3_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                        '</tr>';
                    $("#callsheet").append(markup);




                    /*  var html =  '<tr class="project_tab_add_row" id="'+row_id+'" >'+
                        '<td style="display:none;" >'+row_id+'</td>'+
                        '<td style="display:none;" id="artistnm_'+row_id+'" >'+data[i].peopletypeid+'</td>'+
                        '<td  id="artistname_'+row_id+'">'+data[i].peoletype+'</td>'+
                        '<td style="display:none;" id="charecter_'+row_id+'">'+data[i].characterid+'</td>'+
                        '<td  id="charectername_'+row_id+'">'+data[i].charectername+'</td>'+
                        '<td style="display:none;" id="people_'+row_id+'">'+data[i].peopleid+'</td>'+
                        '<td  id="peoplename_'+row_id+'">'+data[i].peoplename+'</td>'+
                        '<td  id="shifttime_'+row_id+'">'+data[i].toshift+'</td>'+
                        '<td  id="shifttotime_'+row_id+'">'+data[i].fromshift+'</td>'+
                        '<td  id="duration_'+row_id+'">'+data[i].duration+'</td>'+
                        '<td id="remark_'+row_id+'">'+data[i].remark+'</td>'+
                       
                        '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="'+row_id+'"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="'+row_id+'"  ><i class="fa fa-trash"></i></button>'+
                        '</tr>';			
                 $("#callsheet").append(html);*/

                }

                calldata = row_id;
                $('#schedulesheet_row_id').val(row_id);

            }
        });
        where = 'aid=' + id1;
        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_where",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'plannedexpenses',
                where: where,
            },
            success: function(data) {
                console.log(data);
                var unitname = [];
                var unitid = [];

                var where = '';
                $.ajax({
                    type: "POST",
                    url: baseurl + "settings/getexpensesdata",
                    data: {
                        table_name: 'unitofmeasurement',
                        where: where,
                    },
                    dataType: "JSON",
                    async: false,
                    success: function(data) {
                        console.log(data);


                        //					if(table_name=="victim_age"){
                        //					html += '<option selected  value="" >Select Victim Age</option>';
                        //						}else{
                        //    html += '<option selected disabled value="" >Select</option>';
                        //						}
                        for (i = 0; i < data.length; i++) {


                            unitname[i] = data[i].name;
                            unitid[i] = data[i].id;

                        }
                        //$(selecter).html(html);
                    }
                });

                var sr = 0;
                var tamt = 0;
                var totalamt = 0;
                $("#expensivetbody").html('');
                for (i = 0; i < data.length; i++) {
                    sr = sr + 1;



                    tamt = parseFloat(data[i].qty) * parseFloat(data[i].rate);
                    tamt = tamt.toFixed(2);
                    totalamt = parseFloat(data[i].qty) * parseFloat(data[i].rate) + parseFloat(totalamt);
                    totalamt.toFixed(2);

                    var markup = '<tr class="project_tab_add_row" id="tab4_' + sr + '" >' +
                        '<td  style="display:none; id="sr_' + sr + '">' + data[i].id + '</td>' +
                        '<td style="display:none;"  id="expeid_' + sr + '">' + data[i].expensiveid + '</td>' +
                        '<td style="display:none;"  id="expesubacid_' + sr + '">' + data[i].subaccountid + '</td>' +
                        '<td width="30%" id="expensivename_' + sr + '">' + data[i].expensename + '</td>' +
                        '<td width="10%" id="expessubaccname_' + sr + '">' + data[i].subaccount + '</td>' +
                        '<td  id="narro_' + sr + '">' + data[i].narration + '</td>' +
                        '<td  id="tqty_' + sr + '" style="text-align:right">' + data[i].qty + '</td>' +
                        '<td  id="trate_' + sr + '" style="text-align:right">' + data[i].rate + '</td>' +
                        '<td style="display:none;" id="unitid_' + sr + '">' + data[i].unitid + '</td>' +
                        '<td   id="unitname_' + sr + '">' + data[i].unitname + '</td>' +
                        // '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="10%"><option selected disabled value="" width="20%">Select</option> </select></td>'+
                        '<td   id="payment_type' + sr + '">' + data[i].paymenttype + '</td>' +
                        '<td  id="tamount_' + sr + '" style="text-align:right">' + tamt + '</td>' +
                        '<td ><button  class="doc_edit_data2 btn btn-xs btn-primary"   id=' + sr + ' ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button id="tab4_' + sr + '"  class="delete_plannex btn btn-xs btn-danger"    ><i class="fa fa-trash"></i></button>' +
                        '</tr>';
                    $("#expensivetbody").append(markup);
                    // $("#expensive").append(markup);

                    $('#totalexpenses').text(totalamt);



                    /*   markup = '<tr>'+
                       '<td style="display:none; id="sr_'+data[i].id+'">'+sr+'</td>'+
                       '<td style="display:none;" id="expeid_'+sr+'">'+data[i].expensid+'</td>'+
                       '<td style="display:none;" id="expesubacid_'+sr+'">'+data[i].expensiveid+'</td>'+
                       '<td width="30%"  id="expensivename_'+data[i].id+'">'+data[i].expensename+'</td>'+
                       '<td width="30%"  id="expessubaccname_'+data[i].id+'">'+data[i].subaccount+'</td>'+
                       '<td id="narro_"><input type="text" text id="narroation_'+sr+'" size="33%" value='+data[i].narration+' ></td>'+
                       '<td id="tqty_"><input type="text"  style="text-align:right;" class="qtydata" id="qty_'+sr+'" value='+data[i].qty+' size="5%"></td>'+
                       '<td id="trate_"><input type="text"  style="text-align:right;"   class="ratedata" id="rate_'+sr+'" value='+data[i].rate+' size="5%"></td>'+
                       '<td style="display:none;" id="unitid_'+sr+'">'+data[i].unit+'</td>'+
                       '<td  id="unitname_'+sr+'">'+data[i].unitname+'</td>'+
                       //  '<td id="getused_"><select   class="form-control input-sm unit" id="unit_'+sr+'" name="unit" value='+data[i].unit+' width="10%"><option selected disabled value="">Select</option> </select></td>'+
                       '<td id="tamount_"><input type="text"  class="getamtdata" style="text-align:right;" id="amount'+sr+'" value='+tamt+' size="6%"></td>'+
                       '</tr>';
                     
                       $("#expensive").append(markup); 
                        $('#amountdata').val(totalamt)*/
                    var html = '';
                    for (var j = 0; j < unitname.length; ++j) {
                        html += '<option value="' + unitid[j] + '" name="' + unitname[j] + '">' + unitname[j] + '</option>';
                    }
                    $('#unit_' + sr).html(html);
                    $("#unit_" + sr).val(data[i].unit).trigger('change');
                    $('#plannedexpenses_row_id').val(sr);
                }
                index = sr;

            }
        });
        $('.panel-tab a[href="#daywiseschedul"]').tab('show');
        $('.scenewisedetails').show();
        $('.artistschedule').show();
        $('.plannedexpenses').show();
        $('.daywiseschedul').show();
        $('#wait').hide();
        //    getaritsdata(); 
        // display_budgethead();
        $('schedulesheet_row_id').val(calldata);
        amtdata();
        addTimes();
        settimemodel();

    });

    /*---------delete  artist schedule  start-----------------*/

    $(document).on('click', '.delete_data', function() {
        var id1 = $("#save_update").val();
        var date = $('#date_' + id1).html();
        var proid = $('#projectid_' + id1).html();
        var unit = $('#unitdata_' + id1).html();
        var tdateAr = date.split('/');
        var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
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
                        url: baseurl + "settings/check_deletearitist",
                        dataType: "JSON",
                        data: {
                            id: id1,
                            date: date2,
                            proid: proid,
                            unit: unit,
                            table_name: 'artist_schedule',
                        },
                        success: function(data) {
                            if (data == true) {
                                swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                                $('.closehideshow').trigger('click');
                                show_master(); //call function show all product					

                            } else if (data == '500') {
                                errorTost("Data Can not Delete Because Avalible in Actual Schedule");
                            } else {
                                errorTost("Data Delete Failed");
                            }

                        }
                    });
                    return false;

                });

        }

    });
    /*---------delete  artist schedule  end-----------------*/

    $(document).on('click', '.closehideshow', function() {
        form_clear();
        var l1 = $('table#expensivedata').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        for (var j = 0; j < s; j++) {
            sr = j + 1;

            $("#narroation_" + sr).val('');
            $("#qty_" + sr).val('');
            $("#rate_" + sr).val('');
            $("#unit_" + sr).val('');
            $("#amount" + sr).val('');
        }
        $('.panel-tab a[href="#daywiseschedul"]').tab('show');
        $('.scenewisedetails').hide();
        $('.artistschedule').hide();
        $('.plannedexpenses').hide();
        $('.daywiseschedul').show();

    });
    /*-------------------- data show-----------------*/
    show_master();

    function show_master() {
        var where = '1';
        $.ajax({
            type: 'POST',
            url: baseurl + "settings/get_master_where",
            async: false,
            data: {
                table_name: 'artist_schedule',
                where: where,
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);

                var html = '';
                html += '<table id="myTable" class="table table-striped">' +
                    '<thead>' +
                    '<tr>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;"> Date</th>' +
                    '<th style="display:none;">Project Id</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Project Name</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">For Unit No</th>' +
                    '<th style="display:none;">location Id</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Location</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Projected Footage</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Shift time from</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Shift time to</th>' +

                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">No.of Camera</th>' +
                    '<th style="display:none;">Requirement</th>' +
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';

                for (i = 0; i < data.length; i++) {
                    var sr = i + 1;

                    if (data[i].date != "0000-00-00") {

                        var tdateAr = data[i].date.split('-');
                        date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0];

                    }


                    html += '<tr>' +
                        '<td id="date_' + data[i].id + '">' + date + '</td>' +
                        '<td  style="display:none;" id="projectid_' + data[i].id + '">' + data[i].projectid + '</td>' +
                        '<td id="projectname_' + data[i].id + '">' + data[i].projectname + '</td>' +
                        '<td  id="unitdata_' + data[i].id + '">' + data[i].unit + '</td>' +
                        '<td  style="display:none;" id="locationid_' + data[i].id + '">' + data[i].locationid + '</td>' +
                        '<td id="locationname_' + data[i].id + '">' + data[i].locationname + '</td>' +
                        '<td id="profotage_' + data[i].id + '">' + data[i].profotage + '</td>' +

                        '<td id="shiftfrom_' + data[i].id + '">' + data[i].shiftfrom + '</td>' +
                        '<td  id="shifto_' + data[i].id + '">' + data[i].shiftto + '</td>' +
                        '<td style="display:none;" id="camera_' + data[i].id + '">' + data[i].camera + '</td>' +
                        '<td style="display:none;" id="require_' + data[i].id + '">' + data[i].requirement + '</td>' +
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

    function getMasterSelect(table_name, selecter, where) {

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_master_artist",
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
                    name = data[i].artist;
                    id = data[i].pid;

                    html += '<option value="' + id + '">' + name + '</option>';
                }
                $(selecter).html(html);
            }
        });
    }

    /*--------------get Character From charecter_master-------------------*/
    $(document).on("change", ".peopletype", function(e) {
        e.preventDefault();

        var id1 = $(this).val();

        var peopletypename = $(".peopletype option:selected").text();

        var html = '';
        if (peopletypename == "Artist" || peopletypename == "Production") {
            var where = "peopletype=" + id1;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/get_aritistdata",
                dataType: "JSON",
                async: false,
                data: {

                    table_name: 'character_master',
                    where: where,
                    proid: proid,
                },
                success: function(data) {
                    var data1 = eval(data);
                    console.log("artistdarta" + data);
                    html = '';
                    if (data.length > 0) {

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

                    }

                    $('#character').html(html);

                }
            });
        } else {

            swal({
                title: "Data Not Allowed ?",
                text: "Select Type Data Not Allowed !!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
            $('#character').val(html).trigger('change');
            //$('#character').val('').trigger('change');
        }
    });
    $(document).on("change", "#character", function(e) {
        e.preventDefault();
        var id1 = $(this).val();
        var name = $(this).attr('name');
        var where = 'role_id=' + id1 + ' and proid=' + proid;

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_peopledata",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'lis_artist',
                where: where,
            },
            success: function(data) {
                var data1 = eval(data);
                console.log("artistdarta" + data);
                html = '';
                if (data.length > 0) {

                    var name = '';
                    //					if(table_name=="victim_age"){
                    //					html += '<option selected  value="" >Select Victim Age</option>';
                    //						}else{
                    html += '<option selected disabled value="" >Select</option>';
                    //						}
                    for (i = 0; i < data.length; i++) {
                        var id = '';
                        name = data[i].peoplename;
                        id = data[i].pid;

                        html += '<option value="' + id + '">' + name + '</option>';
                    }

                }
                $('#people').html(html);


            }
        });
    });
    /*---Blur Event Of Time Picker------------------*/
    $(document).on("blur", "#shifttototime", function(e) {
        e.preventDefault();
        var start = $('#shiftfromtime').val();
        var end = $('#shifttototime').val();
        /* var startdate = [];
         startdate = shifttime.split(":");     
         var Enddate = [];
         
          Enddate = shifttotime.split(":");         
           
   
             different = [];
             different[0]=parseFloat(Enddate[0])-parseFloat(startdate[0]);
            different[1]=parseFloat(Enddate[1])-parseFloat(startdate[1]);*/

        s = start.split(':');
        e = end.split(':');
        sec = e[2] - s[2];
        min = e[1] - s[1];
        hour_carry = 0;
        min_carry = 0;
        if (sec < 0) {
            sec += 60;
            min_carry += 1;
            console.log("sec" + sec);
        }
        if (min < 0) {
            console.log(min);
            min += 60;
            hour_carry += 1;
            console.log("min" + min);
        }
        if (min_carry == 1) {
            if (min == 0) {
                min += 60;
                hour_carry += 1;
                min = min - min_carry;
            } else {
                min = min - min_carry;
            }

            console.log(min);
        } else {
            //  min = e[1]-s[1];
        }
        if (hour_carry == 1) {
            hour = e[0] - s[0] - hour_carry;

            console.log(hour);
        } else {
            hour = e[0] - s[0];
        }
        $('#duration').val(hour + ":" + min + ":" + sec);
        // $('#duration').val(different[0]+":"+different[1]);
    });
    /*----------------Function Pannned Expensive------------------*/
    //display_budgethead();

    function display_budgethead() {
        $.ajax({

            type: "POST",
            url: baseurl + "settings/getexpensesdata",
            dataType: "JSON",
            async: false,
            data: {
                table_name: "expenses_master",

            },
            success: function(result) {


                var sr = 0;
                console.log('VISHAL' + result);
                var did = $('#save_update').val();
                for (i = 0; i < result.length; i++) {
                    sr = i + 1;

                    //  var sr=$('#actualdatalength').val();
                    if (did != '') {
                        var r1 = $('table#expensivedata').find('tbody').find('tr');
                        var r = r1.length;
                        var markup = "";
                        var flag = 1;
                        if (r != 0) {
                            for (var j = 0; j < r; j++) {
                                var expensiveid = $(r1[j]).find('td:eq(1)').html();
                                var exsubacid = $(r1[j]).find('td:eq(2)').html();
                                if (result[i].id == expensiveid && result[i].subaccid == exsubacid) {

                                    flag = 0;

                                }
                            }
                            if (flag == 1) {
                                index = index + 1;
                                markup = '<tr>' +
                                    '<td  style="display:none; id="sr_' + result[i].id + '">' + index + '</td>' +
                                    '<td style="display:none;"  id="expeid_' + index + '">' + result[i].id + '</td>' +
                                    '<td style="display:none;"  id="expesubacid_' + index + '">' + result[i].subaccid + '</td>' +
                                    '<td width="30%" id="expensivename_' + result[i].id + '">' + result[i].name + '</td>' +
                                    '<td width="30%" id="expessubaccname_' + result[i].id + '">' + result[i].subaccname + '</td>' +
                                    '<td id="narro_"><input type="text" id="narroation_' + index + '"  size="33%"></td>' +
                                    '<td id="tqty_"><input type="text" style=" text-align: right;" class="qtydata" text-align: right;"  id="qty_' + index + '" value="0" size="5%"></td>' +
                                    '<td id="trate_"><input type="text" style=" text-align: right;" class="ratedata" text-align: right;" id="rate_' + index + '" value="0" size="5%"></td>' +
                                    '<td style="display:none;" id="unitid_' + index + '">' + result[i].unit + '</td>' +
                                    '<td  id="unitname_' + index + '">' + result[i].unitname + '</td>' +
                                    // '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="10%"><option selected disabled value="" width="20%">Select</option> </select></td>'+
                                    '<td id="tamount_"><input type="text" style=" text-align: right;"  class="getamtdata" id="amount' + index + '" value="0" size="6%"></td>' +
                                    '</tr>';
                                $("#expensivetbody").append(markup);

                            }
                        }
                    } else {
                        markup = '<tr>' +
                            '<td style="display:none;" id="sr_' + result[i].id + '">' + sr + '</td>' +
                            '<td style="display:none;" id="expeid_' + sr + '">' + result[i].id + '</td>' +
                            '<td style="display:none;"  id="expesubacid_' + index + '">' + result[i].subaccid + '</td>' +
                            '<td width="30%" id="expensivename_' + result[i].id + '">' + result[i].name + '</td>' +
                            '<td width="30%" id="expessubaccname_' + result[i].id + '">' + result[i].subaccname + '</td>' +
                            '<td id="narro_"><input type="text" id="narroation_' + sr + '"  size="33%"></td>' +
                            '<td id="tqty_"><input type="text" style=" text-align: right;" class="qtydata" id="qty_' + sr + '" value="0" size="5%"></td>' +
                            '<td id="trate_"><input type="text" style=" text-align: right;" class="ratedata" id="rate_' + sr + '" value="0" size="5%"></td>' +
                            '<td style="display:none;" id="unitid_' + sr + '">' + result[i].unit + '</td>' +
                            '<td  id="unitname_' + sr + '">' + result[i].unitname + '</td>' +
                            // '<td id="getused_"><select   class="form-control input-sm unit" id="unit_'+sr+'" name="unit" width="10%"><option selected disabled value="">Select</option> </select></td>'+
                            '<td id="tamount_"><input type="text" style=" text-align: right;" class="getamtdata" id="amount' + sr + '" value="0" size="6%"></td>' +
                            '</tr>';
                        $("#expensivetbody").append(markup);

                    }

                }
            }

        });
        // amtdata();
    }

    function getaritsdata() {
        var project = $('#project').val();

        $.ajax({

            type: "POST",
            url: baseurl + "settings/getarutstdata",
            dataType: "JSON",
            async: false,
            data: {
                table_name: "lis_artist",
                project: project,
            },
            success: function(result) {

                // $("#callsheet").html('');  

                var markup = "";
                // var did = $('#plnnsave_update').val();
                var did = "";
                // did='39';

                for (i = 0; i < result.length; i++) {
                    var sr = i + 1;


                    if (did != '') {
                        console.log('hiii' + did);
                        var r1 = $('table#scheduledata').find('tbody').find('tr');
                        var r = r1.length;
                        //var markup="";
                        console.log(r);
                        var flag = 1;
                        if (r != 0) {
                            for (var j = 0; j < r; j++) {
                                var peopleid = $(r1[j]).find('td:eq(5)').html();
                                var roleid = $(r1[j]).find('td:eq(3)').html();

                                if (result[i].pid == peopleid && result[i].role_id == roleid) {

                                    console.log("flag" + flag);
                                    flag = 0;


                                }
                            }

                            if (flag == 1) {
                                calldata = calldata + 1;
                                markup = '<tr class="project_tab_add_row" id="tab3_' + calldata + '" >' +
                                    '<td  style="display:none; id="sr_' + calldata + '">' + result[i].id + '</td>' +
                                    '<td  style="display:none;" width="5%" id="peopletypeid_' + calldata + '">' + 2 + '</td>' +
                                    //'<td style="display:none;"  id="expeid_'+sr+'">'+result[i].id+'</td>'+
                                    '<td  width="5%" id="peopletype_' + calldata + '">' + result[i].type + '</td>' +
                                    '<td style="display:none;"  id="roleid_' + calldata + '">' + result[i].role_id + '</td>' +
                                    '<td style="width:10%" id="rolename_' + calldata + '">' + result[i].charectername + '</td>' +
                                    '<td style="display:none;"  id="peopleid_' + calldata + '">' + result[i].pid + '</td>' +
                                    '<td style="width:10%"  id="peoplename_' + calldata + '">' + result[i].peoplename + '</td>' + // last changes
                                    '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="shiftfromtime_' + calldata + '"  placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                                    '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control calltimeto" id="shifttotime_' + calldata + '" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                                    '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="duration_' + calldata + '" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                                    '<td   id="callremark" ><textarea  id="remarkdata_' + calldata + '"   ></textarea></td>' +
                                    '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="' + calldata + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="tab3_' + calldata + '"  ><i class="fa fa-trash"></i></button>' +
                                    '</tr>';
                                $("#callsheet").append(markup);
                                $('#schedulesheet_row_id').val(calldata);

                                var shifttime = $('#shifttime').val();
                                var startdate = [];
                                startdate = shifttime.split(":");
                                var different = [];
                                different[0] = parseFloat(startdate[0]);
                                different[2] = parseFloat(startdate[2]);
                                var end = startdate[1];
                                console.log("end data" + end);
                                if (end < 30) {
                                    different[0] = parseFloat(startdate[0]) - parseFloat(1);
                                    different[1] = (parseFloat(startdate[1]) + parseFloat(60)) - parseFloat(30);
                                    console.log("differt[0]" + different[0]);
                                    console.log("differt[1]" + different[1]);
                                } else {
                                    different[1] = parseFloat(startdate[1]) - parseFloat(30);
                                }

                                $('#shiftfromtime_' + sr).val(different[0] + ":" + different[1] + ":" + different[2]);

                                var shifttime_to = $('#shifttime_to').val();

                                $('#shifttotime_' + sr).val(shifttime_to);
                                /*  markup = '<tr>'+
                                  '<td  style="display:none; id="sr_'+sr+'">'+result[i].id+'</td>'+
                                  //'<td style="display:none;"  id="expeid_'+sr+'">'+result[i].id+'</td>'+
                                  '<td width="5%" id="peopletype_'+sr+'">'+result[i].type+'</td>'+
                                  '<td style="display:none;"  id="roleid_'+sr+'">'+result[i].role_id+'</td>'+
                                  '<td  id="rolename_'+sr+'">'+result[i].charectername+'</td>'+
                                  '<td style="display:none;"  id="peopleid_'+sr+'">'+result[i].pid+'</td>'+
                                  '<td  id="peoplename_'+sr+'">'+result[i].peoplename+'</td>'+// last changes
                                  '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="shiftfromtime_'+sr+'" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                                  '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="shifttotime_'+sr+'" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                                  '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="duration_'+sr+'" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>'+
                                 '<td width="30%" id="callremark"><textarea style=" text-align: right;" id="remarkdata_'+sr+'"  size="30%"></textarea></td>'+
                
                                  // '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="10%"><option selected disabled value="" width="20%">Select</option> </select></td>'+*/

                                // '</tr>';


                            }

                        }
                    } else {

                        markup = '<tr class="project_tab_add_row" id="tab3_' + sr + '" >' +
                            '<td  style="display:none; id="sr_' + sr + '">' + result[i].id + '</td>' +
                            //'<td style="display:none;"  id="expeid_'+sr+'">'+result[i].id+'</td>'+
                            '<td  style="display:none;" width="5%" id="peopletypeid_' + sr + '">' + 2 + '</td>' +
                            '<td  width="10%" id="peopletype_' + sr + '">' + result[i].type + '</td>' +
                            '<td style="display:none;"  id="roleid_' + sr + '">' + result[i].role_id + '</td>' +
                            '<td style="width:10%"   id="rolename_' + sr + '">' + result[i].charectername + '</td>' +
                            '<td style="display:none;"  id="peopleid_' + sr + '">' + result[i].pid + '</td>' +
                            '<td  width="15%" id="peoplename_' + sr + '">' + result[i].peoplename + '</td>' + // last changes
                            '<td id="fromshifttimedata_"><div class="input-group timepicker" > <input type="text" class="form-control" id="shiftfromtime_' + sr + '"  placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                            '<td id="fromshiftotimedata_"><div class="input-group timepicker" > <input type="text" class="form-control calltimeto" id="shifttotime_' + sr + '" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                            '<td id="duration_"><div class="input-group timepicker" > <input type="text" class="form-control" id="duration_' + sr + '" placeholder="hh:mm:ss"> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span></div></td>' +
                            '<td   id="callremark" ><textarea  id="remarkdata_' + sr + '"   ></textarea></td>' +
                            '<td><button  class="doc_edit_data1 btn btn-xs btn-primary"   id="' + sr + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="regional_delete_data1 btn btn-xs btn-danger"   id="tab3_' + sr + '"  ><i class="fa fa-trash"></i></button>' +
                            '</tr>';
                        $("#callsheet").append(markup);
                        var shifttime = $('#shifttime').val();
                        var shifttimeto = $('#shifttime_to').val();
                        var startdate = [];
                        startdate = shifttime.split(":");
                        var different = [];
                        different[0] = parseFloat(startdate[0]);
                        different[2] = parseFloat(startdate[2]);
                        var end = startdate[1];
                        console.log("end data" + end);
                        if (end < 30) {
                            different[0] = parseFloat(startdate[0]) - parseFloat(1);
                            different[1] = (parseFloat(startdate[1]) + parseFloat(60)) - parseFloat(30);
                            console.log("differt[0]" + different[0]);
                            console.log("differt[1]" + different[1]);
                        } else {
                            different[1] = parseFloat(startdate[1]) - parseFloat(30);
                        }

                        $('#shiftfromtime_' + sr).val(different[0] + ":" + different[1] + ":" + different[2]);
                        $('#shifttotime_' + sr).val(shifttimeto);

                    }
                    if (flag == 0) {
                        $('#schedulesheet_row_id').val(calldata);

                    } else {
                        $('#schedulesheet_row_id').val(sr);
                    }

                }
            }

        });
        caltimedata();
    }
    var rate = 0;
    var qty = 0;
    var totalamt = 0;

    /*---------get Amount -------------*/
    $(document).on("blur", ".ratedata", function(e) {
        e.preventDefault();
        var amt = $('#amountdata').val();
        var id = $(this).attr('id');
        id = id.split('_');
        rate = $(this).val();
        qty = $('#qty_' + id[1]).val();
        var total = parseInt(rate) * parseInt(qty);
        console.log('totalprice' + total)
        $('#amount' + id[1]).val(total);

        /*totalamt=parseInt(totalamt)+parseInt(total);
        $('#amountdata').val(totalamt);*/
        amtdata();
    });
    $(document).on("blur", ".qtydata", function(e) {
        e.preventDefault();

        var id = $(this).attr('id');
        id = id.split('_');
        qty = $(this).val();
        rate = $('#rate_' + id[1]).val();
        var total = parseInt(rate) * parseInt(qty);
        totalamt = parseInt(totalamt) + parseInt(total);

        $('#amount' + id[1]).val(total);
        console.log('totalprice' + total)
        amtdata();
        //amtdata();
        /*totalamt=parseInt(totalamt)+parseInt(total);
        $('#amountdata').val(totalamt);*/

        //  $('#amount'+sr).val(amt);

    });
    $(document).on("blur", ".amtdata", function(e) {
        e.preventDefault();



        /*totalamt=parseInt(totalamt)+parseInt(total);
        $('#amountdata').val(totalamt);*/
        //amtdata();
        //  $('#amount'+sr).val(amt);

    });

    function amtdata() {
        var amttotal = 0;
        var totalcase = 0;
        var totalcheque = 0;
        var planamtdata = 0;
        var amt = 0;
        var r1 = $('table#expensivedata').find('tbody').find('tr');
        var re = r1.length;
        console.log("re" + re);
        var sr = 0;
        if (re > 0) {
            for (var i = 0; i < re; i++) {

                sr = i + 1;
                console.log("sr" + sr);
                var paymenttype = $(r1[i]).find('td:eq(10)').html();
                // var planamt= $(r1[i]).find('td:eq(7)').html();
                amt = $(r1[i]).find('td:eq(11)').html();
                //  amt =$('#amount'+sr).html();

                console.log("str" + sr + "" + amt);
                amttotal = parseFloat(amttotal) + parseFloat(amt);
                //   planamtdata=parseInt(planamtdata)+parseInt(planamt);
                if (paymenttype == 'Cash') {
                    totalcase = parseFloat(totalcase) + parseFloat(amt);
                    totalcase = totalcase.toFixed(2);
                } else {
                    totalcheque = parseFloat(totalcheque) + parseFloat(amt);
                    totalcheque = totalcheque.toFixed(2);
                }
                //console.log("sr"+amttotal);

            }
            amttotal = amttotal.toFixed(2);
            $('#totalexpenses').text(amttotal);
            $('#totalcheque').text(totalcheque);
            $('#totalcaseexpenses').text(totalcase);
            //$('#totalplanamt').val(planamtdata);
        }
    }

    function caldata() {

        var r1 = $('table#expensivedata').find('tbody').find('tr');
        var r = r1.length;
        var r = parseInt(r) - 1;
        var sr = 0;
        for (var i = 0; i < r; i++) {
            sr = i + 1;
            var qty = $(r1[i]).find('td:eq(4)').html();
            var rate = $(r1[i]).find('td:eq(5)').html();
            var amt = qty * rate;

            $(document).on("blur", "#rate_" + sr, function(e) {
                e.preventDefault();

                var amt = parseFloat(qty) * parseFloat(rate);

                $('#amount' + sr).val(amt);
            });

        }
    }
    getMasterSelect("unitofmeasurement", ".unit", " status = '1'");

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
    /*------------click Event Of first Tab Next Button-----------*/
    $(document).on("blur", "#for_unit", function(e) {
        e.preventDefault();
        var for_unit = $("#for_unit").val();
        var forunitname = $("#for_unit").attr('name');
        $("#unitdata").html('Unit No :   ' + for_unit + "   ");

        // $('#yeardata').val(year);

        if (forunitname != "editdatayear") {
            checkdata();
        } else {

        }
        // checkdata();
    });

    function checkdata() {
        var date = $('#date').val();

        var forunitno = $('#for_unit').val();

        var tdateAr = date.split('/');
        var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
        $.ajax({

            type: "POST",
            url: baseurl + "settings/checkdataexist",
            dataType: "JSON",
            async: false,
            data: {
                table_name: "artist_schedule",
                date2: date2,
                projectid: proid,
                forunitno: forunitno,
            },
            success: function(result) {

                if (result == true) {

                } else {
                    swal({
                        title: "Data Already Exists ?",
                        text: "Please Enter Another data  !!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    });
                }
            }
        });
    }
    $(document).on("click", "#btnnext", function(e) {
        e.preventDefault();
        var date = $('#date').val();
        var forunitno = $('#for_unit').val();
        var project = $('#project').val();
        var tdateAr = date.split('/');
        var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        /* var date= $('#date').val();
          var projectid=$('#project').val();
          var forunitno=$('#for_unit').val();

          var tdateAr = date.split('/');
          var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];
          $.ajax({
            
              type : "POST",
              url  : baseurl+"settings/checkdataexist",
              dataType : "JSON",
              async : false,
              data : {           
                      table_name:"artist_schedule",
                      date2:date2,
                      projectid:projectid,
                      forunitno:forunitno,
                      },
              success: function(result){
                      if(result==true){
                         
                      }else{
                          swal({
                              title: "Data Already Exists ?",
                              text: "Please Enter Another data  !!",
                              type: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#DD6B55",
                              confirmButtonText: "Ok",
                              closeOnConfirm: false
                          });
                      }
              }
          });*/
        if (date == "" && project == null && forunitno == "") {
            swal({
                title: "Please Select Data",
                text: "Please Select Date And Project And For Unit No  !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else if (project == null && date == null) {
            swal({
                title: "Please Select Data",
                text: "Please Select Project && Date !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else if (project == null && forunitno == "") {
            swal({
                title: "Please Select Data",
                text: "Please Select Project && For Unit No !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else if (date == null && forunitno == "") {
            swal({
                title: "Please Select Data",
                text: "Please Select Date && For Unit No!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else if (date == null) {
            swal({
                title: "Please Select Data",
                text: "Please Select Date!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else if (project == null) {
            swal({
                title: "Please Select Data",
                text: "Please Select Project!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else if (forunitno == "") {
            swal({
                title: "Please Select Data",
                text: "Please Select For Unit No!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });

        } else {

            var date = $('#date').val();
            var project = $('#project').val();
            var location = $('#location').val();
            var projectft = $('#projected').val();
            var shift = $('#shifttime').val();

            var shiftto = $('#shifttime_to').val();
            var unit = $('#for_unit').val();
            var camera = $('#camrera').val();
            var requriment = $('#requirement').val();
            var tdateAr = date.split('/');
            var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

            var id = $('#save_update').val();

            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    id: id,
                    date: date2,
                    project: project,
                    location: location,
                    projectft: projectft,
                    shift: shift,
                    shiftto: shiftto,
                    unit: unit,
                    camera: camera,
                    requriment: requriment,
                    table_name: table_name,
                },
                success: function(data) {
                    $('#save_update').val(data);
                    if (data != true) {

                        $('#plannsave_update').val(data);
                    }

                }
            });




            $('.daywiseschedul').show();
            $('.artistschedule').hide();
            $('.plannedexpenses').hide();
            $('.scenewisedetails').show();
            $('.panel-tab a[href="#scenewisedetails"]').tab('show');
            var shifttime = $('#shifttime').val();
            var startdate = [];
            startdate = shifttime.split(":");
            var different = [];
            different[0] = parseFloat(startdate[0]);
            different[2] = parseFloat(startdate[2]);
            var end = startdate[1];
            console.log("end data" + end);
            if (end < 30) {
                different[0] = parseFloat(startdate[0]) - parseFloat(1);
                different[1] = (parseFloat(startdate[1]) + parseFloat(60)) - parseFloat(30);
                console.log("differt[0]" + different[0]);
                console.log("differt[1]" + different[1]);
            } else {
                different[1] = parseFloat(startdate[1]) - parseFloat(30);
            }

            $('#shiftfromtime').val(different[0] + ":" + different[1] + ":" + different[2]);
        }
    });
    /*------------click Event Of  Scene Wise Details Second Tab Next Button-----------*/
    $(document).on("click", "#scenenext", function(e) {
        e.preventDefault();
        $('.daywiseschedul').show();
        $('.scenewisedetails').show();
        $('.plannedexpenses').hide();
        $('.artistschedule').show();
        $('.panel-tab a[href="#artistschedule"]').tab('show');
        // var aid= $('#plannsave_update').val();

        var uid = $('#plannsave_update').val();
        // alert('uid'+uid);
        if (uid != "") {
            aid = uid;

            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: aid,
                    table_name: 'scenewisedetails',

                },
                success: function(data) {

                }
            });
        }
        var r1 = $('table#scene_wise').find('tbody').find('tr');
        var r = r1.length;

        var tr = "";

        for (var i = 0; i < r; i++) {
            var t = document.getElementById('scene_wise');
            var sceno = $(r1[i]).find('td:eq(1)').html();
            var description = $(r1[i]).find('td:eq(2)').html();
            var effect = $(r1[i]).find('td:eq(3)').html();
            var sub_location = $(r1[i]).find('td:eq(4)').html();
            var artist_name = $(r1[i]).find('td:eq(5)').html();
            var footage = $(r1[i]).find('td:eq(7)').html();
            var scene_remark = $(r1[i]).find('td:eq(8)').html();
            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    aid: aid,
                    sceno: sceno,
                    description: description,
                    effect: effect,
                    sub_location: sub_location,
                    artist_name: artist_name,
                    footage: footage,
                    scene_remark: scene_remark,
                    table_name: 'scenewisedetails',
                },
                success: function(data) {

                    // successTost("Data save Successfully");
                    //   myDeleteFunction();

                }
            });

        }
        var did = $('#save_artistdata').val();
        if (did == "") {
            getaritsdata();
        }




    });
    /*------------click Event Of Call time Second Tab Next Button ----------*/
    $(document).on("click", "#schedulenext", function(e) {
        e.preventDefault();
        $('.daywiseschedul').show();
        $('.scenewisedetails').show();
        $('.artistschedule').show();
        $('.plannedexpenses').show();
        $('.panel-tab a[href="#plannedexpenses"]').tab('show');

        //var aid= $('#plannsave_update').val();

        var uid = $('#plannsave_update').val();

        if (uid != "") {
            aid = uid;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: aid,
                    table_name: 'callsheet',

                },
                success: function(data) {

                }
            });
        }
        var l1 = $('table#scheduledata').find('tbody').find('tr');
        var s = l1.length;

        var sr = 0;
        for (var j = 0; j < s; j++) {
            sr = sr + 1;


            var t = document.getElementById('schedule');
            var peopletype = $(l1[j]).find('td:eq(1)').html();
            var charecter = $(l1[j]).find('td:eq(3)').html();
            var peopleid = $(l1[j]).find('td:eq(5)').html();
            var shfifrom = $("#shiftfromtime_" + sr).val();
            var shiftto = $("#shifttotime_" + sr).val();
            var duration = $("#duration_" + sr).val();
            var remark = $("#remarkdata_" + sr).val();
            //  alert(peopletype+""+charecter+""+peopleid+""+shfifrom+""+shiftto+""+duration+""+remark);
            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    aid: aid,
                    peopletype: peopletype,
                    charecter: charecter,
                    peopleid: peopleid,
                    shfifrom: shfifrom,
                    shiftto: shiftto,
                    duration: duration,
                    remark: remark,
                    table_name: 'callsheet',
                },
                success: function(data) {

                    // successTost("Data save Successfully");
                    //   myDeleteFunction();

                }
            });

        }
    });

    /*-----Planned Expenses Tab save Data-----------------*/
    $(document).on("click", "#plann_save", function(e) {
        e.preventDefault();
        var l1 = $('table#expensivedata').find('tbody').find('tr');
        var s = l1.length;
        $('#wait').show();

        var uid = $('#plannsave_update').val();
        if (uid != "") {
            aid = uid;
            $.ajax({
                type: "POST",
                url: baseurl + "settings/delete_master",
                dataType: "JSON",
                async: false,
                data: {
                    id: aid,
                    table_name: 'plannedexpenses',

                },
                success: function(data) {

                }
            });
        }
        var sr = 0;
        for (var j = 0; j < s; j++) {
            sr = j + 1;


            var t = document.getElementById('schedule');
            var accountid = $(l1[j]).find('td:eq(1)').html();
            var subaccid = $(l1[j]).find('td:eq(2)').html();
            var narroation = $(l1[j]).find('td:eq(5)').html();
            var qty = $(l1[j]).find('td:eq(6)').html();
            var rate = $(l1[j]).find('td:eq(7)').html();
            var paymentmode = $(l1[j]).find('td:eq(10)').html();

            $.ajax({
                type: "POST",
                url: baseurl + "settings/save_settings",
                dataType: "JSON",
                async: false,
                data: {
                    aid: aid,
                    accountid: accountid,
                    subaccid: subaccid,
                    narroation: narroation,
                    qty: qty,
                    rate: rate,
                    paymentmode: paymentmode,
                    unit: '',
                    amt: '',
                    table_name: 'plannedexpenses',
                },
                success: function(data) {



                }
            });

        }

        var uid = $('#save_update').val();
        if (uid > 0) {
            successTost("Data save Successfully");
        } else {
            successTost("Data Update Successfully");
        }
        $('#wait').hide();
        $('.closehideshow').trigger('click');

        show_master();
        form_clear();
    });
    /*-----Delete data in to database-----------------
    $(document).on('click','.delete_data',function(){
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
                url  : baseurl+"settings/delete_master",
                dataType : "JSON",
                data : { id:id1,
                         table_name:table_name,	},
                success: function(data){
                if(data == true){
                        swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                        $('.closehideshow').trigger('click');
                        show_master();	//call function show all product					
                    
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
    /*----------blur Event Of Date --------------------*/
    $(document).on("blur", "#date", function(e) {
        e.preventDefault();
        var date = $("#date").val(); //last changes 19-04-2019
        $("#datedata").html('Date :   ' + date + "    ");
    });
    $('.daywiseschedul').hide();
    $('.scenewisedetails').hide();
    $('.artistschedule').hide();
    $('.plannedexpenses').hide();

    /*---------prevous button-------*/
    $(document).on("click", "#previous", function(e) {
        e.preventDefault();
        // $('.daywiseschedul').show();
        // $('.scenewisedetails').show();
        $('.panel-tab a[href="#daywiseschedul"]').tab('show');
    });
    $(document).on("click", "#previous1", function(e) {
        e.preventDefault();
        //$('.scenewisedetails').show();
        //$('.daywiseschedul').show();

        //  $('.actualexpense').show();
        $('.panel-tab a[href="#scenewisedetails"]').tab('show');
    });
    $(document).on("click", "#previous2", function(e) {
        e.preventDefault();
        // $('.scenewisedetails').show();
        //$('.artistschedule').show();
        // $('.daywiseschedul').show();
        //  $('.plannedexpenses').show();	
        $('.panel-tab a[href="#artistschedule"]').tab('show');
    });
    $('.timepicker').datetimepicker({
        format: 'hh:mm:ss'
    });

    function getsettime() {
        var shifttime = $('#shifttime').val();
        var startdate = [];
        startdate = shifttime.split(":");
        different[1] = parseFloat(startdate[1]) - parseFloat(30);


        $('#duration').val(different[0] + ":" + different[1]);
    }

    /*------------submite of Plann Schedule Form-------*/
    $(document).on("submit", "#plannexpenses_form", function(e) {
        e.preventDefault();
        // $('#shifttime_to').val();
        var expenseaccount = $('#expenseaccount').val();
        var expenseaccountname = $("#expenseaccount option:selected").text();
        var subaccount = $('#subaccount').val();
        var subaccountname = $("#subaccount option:selected").text();
        var narrationdata = $('#narrationdata').val();
        var plannqty = $('#plannqty').val();
        var plannrate = $('#plannrate').val();
        var plann_amunt = $('#plann_amunt').val();
        var paymenttype = $("input[name='payment_type']:checked").val();
        // $('.payment_type').checked();
        var unitname = $('#uom').val();
        var unit = $('#planunitid').val();



        var row_id = $('#plannedexpenses_row_id').val();
        row_id = parseInt(row_id) + parseInt(1);
        var save_update = $('#plannesexpenses_save_update').val();

        // var dlt = 0;
        // var r1 = $('table#expensivedata').find('tbody').find('tr');
        // var r = r1.length;
        // for (var i = 0; i < r; i++) {

        // var expensesid = $(r1[i]).find('td:eq(1)').html();
        // var subaccountid= $(r1[i]).find('td:eq(2)').html();

        // if (save_update == "") {
        // if (expensesid == expenseaccount && subaccount == subaccountid) {
        // //dlt = parseInt(dlt) + parseInt(1);
        // } 
        // }
        // }
        // if(plann_amunt == '0' || plann_amunt ==""){
        // dlt = parseInt(dlt) + parseInt(2);
        // }
        // if (dlt > 0) {
        // if(dlt==1){
        // errorTost("Selected Expenses Account or Expenses Sub Account Already Entered !!!");
        // }else{
        // errorTost("Amount Should Not Be Zero Or Empty !!!");   
        // }var dlt = 0;

        // }
        // else if(save_update!=""){
        dlt = 0;
        if (plann_amunt == 0) {
            dlt = parseInt(dlt) + parseInt(1);
        } else if (plann_amunt == "") {
            dlt = parseInt(dlt) + parseInt(2);
        }
        if (dlt > 0) {
            if (dlt == 1) {
                errorTost("Amount Should Not Be Zero !!!");
            } else {
                errorTost("Amount Should Not Be  Empty !!!");
            }
            var dlt = 5;
        }
        if (dlt == 0) {
            if (save_update != "") {

                $("#expeid_" + save_update).html(expenseaccount);
                $("#expesubacid_" + save_update).html(subaccount);
                $("#expensivename_" + save_update).html(expenseaccountname);
                $("#expessubaccname_" + save_update).html(subaccountname);
                $("#narro_" + save_update).html(narrationdata);
                $("#tqty_" + save_update).html(plannqty);
                $("#trate_" + save_update).html(plannrate);
                $("#rate_" + save_update).html(plannrate);
                $("#unitid_" + save_update).html(unit);
                $("#unitname_" + save_update).html(unitname);
                $("#tamount_" + save_update).html(plann_amunt);
                $("#payment_type" + save_update).html(paymenttype);
                $('#plannesexpenses_save_update').val('');


            } else {

                markup = '<tr class="project_tab_add_row" id="tab4_' + row_id + '" >' +

                    '<td  style="display:none; id="sr_' + row_id + '">' + row_id + '</td>' +
                    '<td style="display:none;"  id="expeid_' + row_id + '">' + expenseaccount + '</td>' +
                    '<td style="display:none;"  id="expesubacid_' + row_id + '">' + subaccount + '</td>' +
                    '<td width="30%" id="expensivename_' + row_id + '">' + expenseaccountname + '</td>' +
                    '<td width="10%" id="expessubaccname_' + row_id + '">' + subaccountname + '</td>' +
                    '<td id="narro_' + row_id + '">' + narrationdata + '</td>' +
                    '<td  id="tqty_' + row_id + '" style="text-align:right">' + plannqty + '</td>' +
                    '<td  id="trate_' + row_id + '" style="text-align:right">' + plannrate + '</td>' +
                    '<td style="display:none;" id="unitid_' + row_id + '">' + unit + '</td>' +
                    '<td     id="unitname_' + row_id + '">' + unitname + '</td>' +
                    '<td    id="payment_type' + row_id + '">' + paymenttype + '</td>' +
                    // '<td id="getused_"><select   class="form-control input-sm unit" id="unit" name="unit" width="10%"><option selected disabled value="" width="20%">Select</option> </select></td>'+
                    '<td   id="tamount_' + row_id + '" style="text-align:right">' + plann_amunt + '</td>' +
                    '<td ><button  class="doc_edit_data2 btn btn-xs btn-primary"   id="' + row_id + '"  ><i class="fa fa-edit"></i></button>&nbsp;&nbsp;<button  class="delete_plannex btn btn-xs btn-danger"   id="del4_' + row_id + '"  ><i class="fa fa-trash"></i></button>' +
                    '</tr>';
                $("#expensivetbody").append(markup);
                $('#plannedexpenses_row_id').val(row_id);

            }
        }
        $('#model_linkdata').trigger('click');
        $('#expenseaccount').val('').trigger('change');
        $('#subaccount').val('').trigger('change');
        $('#narrationdata').val('');
        $('#planunitid').val('');
        $('#uom').val('');
        $('#plannqty').val('');
        $('#plannrate').val('');
        $('#plann_amunt').val('');
        //$('.payment_type').val('');
        $('#case').prop('checked', false);
        $('#cheque').prop('checked', false);

        $('#plannedexpensesmodel').modal('hide');

    });
    /*----------Edit Data Of Planned Expenses  Form--------------------*/

    $(document).on('click', '.doc_edit_data2', function(e) {
        e.preventDefault();
        $('#plannedexpensesmodel').modal('show');
        var row = $(this).attr('id');
        var expeid = $("#expeid_" + row).html();
        var expesubacid = $("#expesubacid_" + row).html();
        var narroation = $("#narro_" + row).html();
        var qty = $("#tqty_" + row).html();
        var rate = $("#trate_" + row).html();
        var amount = $("#tamount_" + row).html();
        var paymenttype = $("#payment_type" + row).html();

        if (paymenttype == "Case") {
            $('#case').prop('checked', true);
        } else {
            $('#cheque').prop('checked', true);
        }
        $('#expenseaccount').val(expeid).trigger('change');
        $('#subaccount').val(expesubacid).trigger('change');
        $('#narrationdata').val(narroation);
        $('#plannqty').val(qty);

        $('#plannrate').val(rate);
        $('#plann_amunt').val(amount);
        $('#plannesexpenses_save_update').val(row);



    });

    /*------------------Delete For Planned Expenses Form -------*/
    $(document).on('click', ".delete_plannex", function(e) {
        e.preventDefault();

        var save_update1 = $(this).attr('id');
        save_update1 = save_update1.split("_")[1];

        if (save_update1 != "") {
            $('#tab4_' + save_update1).remove();

            console.log('#tab4_' + save_update1);
            $('#plannesexpenses_save_update').val('');

        }
    });

    /*---------------change Event of Expense A/C------*/
    $(document).on("change", "#expenseaccount", function(e) {
        e.preventDefault();
        var expeid = $(this).val();

        getexpenssunac("expenses_subaccount", ".exsubaccount", "expenses_subaccount.expensesid=" + expeid + "");
        var exdata = "expenses_master.id=" + expeid;

        $.ajax({
            type: "POST",
            url: baseurl + "settings/get_unit_data",
            dataType: "JSON",
            async: false,
            data: {

                table_name: 'expenses_master',
                where: exdata,
            },
            success: function(data) {
                var data1 = eval(data);

                console.log(data);
                $('#uom').val(data[0].unitname);
                $('#planunitid').val(data1[0].unit);
                // $('#planunitname').val(data[0].unitname);




            }


        });
    });

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

                    name = data[i].name;
                    id = data[i].id;


                    html += '<option value="' + id + '" >' + name + '</option>';

                }
                $(selecter).html(html);
            }
        });
    }
    /*------Qty Blur Event ------------------*/
    $(document).on("blur", ".plannqty", function(e) {
        e.preventDefault();
        var tamount = 0;
        var plannqty = 0;
        var plannrate = 0;
        var plannqty = $('#plannqty').val();
        var plannrate = $('#plannrate').val();
        console.log(plannqty + "" + plannrate);
        tamount = parseFloat(plannqty) * parseFloat(plannrate);
        tamount = tamount.toFixed(2);
        $('#plann_amunt').val(tamount);
        amtdata();
    });
    $(document).on("blur", ".plannrate", function(e) {
        e.preventDefault();
        var tamount = 0;
        var plannqty = 0;
        var plannrate = 0;
        var plannqty = $('#plannqty').val();
        var plannrate = $('#plannrate').val();
        console.log(plannqty + "" + plannrate);
        tamount = parseFloat(plannqty) * parseFloat(plannrate);
        tamount = tamount.toFixed(2);
        $('#plann_amunt').val(tamount);
        amtdata();
    });
    /*----------get duration calculation------------------*/
    $(document).on("blur", ".calltimeto", function(e) {
        e.preventDefault();

        var id = $(this).attr('id');
        id = id.split('_');
        var end = $(this).val();
        console.log("end date" + end);
        var start = $('#shiftfromtime_' + id[1]).val();
        var end = $('#shifttotime_' + id[1]).val();
        if (end != "") {

            s = start.split(':');
            e = end.split(':');
            console.log("start" + s[0] + "end" + e[0]);


            var hour = 0;
            var sec = 0;
            var min = 0;
            sec = e[2] - s[2];
            min = e[1] - s[1];
            hour_carry = 0;
            min_carry = 0;
            if (sec < 0) {
                sec += 60;
                min_carry += 1;
                console.log("sec" + sec);
            }
            if (min < 0) {
                console.log(min);
                min = min + 60;
                hour_carry += 1;
                console.log("min" + min);
            }
            if (min_carry != 0) {
                console.log("mindata");
                if (min == 0) {
                    min += 60;
                    hour_carry += 1;
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
            console.log("hour carray" + hour_carry);
            console.log("min carray" + min_carry);
            if (hour > 0) {
                $('#duration_' + id[1]).val(hour + ":" + min + ":" + sec);
            } else {
                swal({
                    title: "Please Change the Value of Call Time to?",
                    text: "Please Enter Another data  !!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        } else {
            swal({
                title: "Please Enter Call Time to ?",
                // text: "Please Enter Another data  !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        }

    });
    $(document).on('click', '#model_linkdata', function(e) {
        e.preventDefault();
        amtdata();

    });

    function shiftimesmall() {
        var shiftimefrom = $('#shifttime').val();
        var shiftimeto = $('#shifttime_to').val();
        if (shiftimeto != "" && shiftimefrom != "") {
            if (shiftimefrom > shiftimeto || shiftimefrom == shiftimeto) {
                swal({
                    title: "Please Enter Shif Time To Greater than Shift Time From ?",
                    // text: "Please Enter Another data  !!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                displaytimeago();
                caltimedata();
                // $('#shifttototime').val(shiftimeto);
            }
        } else {
            swal({
                title: "Please Enter Shif Time To Or Shift Time From ?",
                // text: "Please Enter Another data  !!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        }
    }
    $(document).on("blur", "#shifttime", function(e) {
        e.preventDefault();
        shiftimesmall();
    });
    $(document).on("blur", "#shifttime_to", function(e) {
        e.preventDefault();
        shiftimesmall();
    });

    function displaytimeago() {

        var shifttime_to = $('#shifttime_to').val();
        $('#shifttototime').val(shifttime_to);
        var shifttime = $('#shifttime').val();
        var startdate = [];
        startdate = shifttime.split(":");
        var different = [];
        different[0] = parseFloat(startdate[0]);
        different[2] = parseFloat(startdate[2]);
        var end = startdate[1];
        console.log("end data" + end);
        if (end < 30) {
            different[0] = parseFloat(startdate[0]) - parseFloat(1);
            different[1] = (parseFloat(startdate[1]) + parseFloat(60)) - parseFloat(30);
            console.log("differt[0]" + different[0]);
            console.log("differt[1]" + different[1]);
        } else {
            different[1] = parseFloat(startdate[1]) - parseFloat(30);
        }
        var l1 = $('table#scheduledata').find('tbody').find('tr');
        var s = l1.length;
        var sr = 0;
        for (var i = 0; i < s; i++) {
            sr = sr + 1;
            $('#shiftfromtime_' + sr).val(different[0] + ":" + different[1] + ":" + different[2]);
            $('#shifttotime_' + sr).val(shifttime_to);

            var start = $('#shiftfromtime_' + sr).val();
            var end = $('#shifttotime_' + sr).val();


        }
        caltimedata();
    }

    function caltimedata() {

        var l1 = $('table#scheduledata').find('tbody').find('tr');
        var s = l1.length;
        var hour = 0;
        var min = 0;
        var sec = 0;
        var sr = 0;

        for (var j = 0; j < s; j++) {
            sr = sr + 1;

            var start = $('#shiftfromtime_' + sr).val();
            var end = $('#shifttotime_' + sr).val();
            console.log("sr" + sr + "strat" + start + "End" + end);
            if (end != "") {
                console.log("value of i" + i);
                s = start.split(':');
                e = end.split(':');
                var hour = 0;
                var sec = 0;
                var min = 0;
                sec = e[2] - s[2];
                min = e[1] - s[1];
                hour_carry = 0;
                min_carry = 0;
                if (sec < 0) {
                    sec += 60;
                    min_carry += 1;

                }
                if (min < 0) {

                    min = min + 60;
                    hour_carry += 1;

                }
                if (min_carry != 0) {

                    if (min == 0) {
                        min += 60;
                        hour_carry += 1;
                        min = min - min_carry;
                    } else {
                        min = min - min_carry;
                    }


                } else {
                    //min = e[1]-s[1];
                }
                if (hour_carry != 0) {
                    hour = e[0] - s[0] - hour_carry;


                } else {
                    hour = e[0] - s[0];
                }

                $('#duration').val(hour + ":" + min + ":" + sec);
            }
        }
        var l1 = $('table#scheduledata').find('tbody').find('tr');
        var l = l1.length;
        var row = 0;
        for (var k = 0; k < l; k++) {
            row = row + 1;
            console.log("row " + row);
            $('#duration_' + row).val(hour + ":" + min + ":" + sec);
        }
    }

    function addTimes() {

        var l1 = $('table#scene_wise').find('tbody').find('tr');
        var l = l1.length;
        var row = 0;
        var totalhour = 0;
        var totalmin = 0;
        var totalsec = 0;
        for (var k = 0; k < l; k++) {

            row = row + 1;
            console.log("row " + row);
            var planfotage = $(l1[k]).find('td:eq(7)').html();
            if (planfotage == '0' || planfotage == '') {

            } else {
                var times = planfotage.split(':');

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

            }
            console.log(totalhour);
            console.log(totalmin);
            console.log(totalsec);
            $('#plannedtotal').text(totalhour + ":" + totalmin + ":" + totalsec);
        }
    }
    $(document).on("click", "#scenemodel_link", function(e) {
        e.preventDefault();
        addTimes();

    });

    function settimemodel() {


        var shifttime = $('#shifttime').val();
        var shifttimeto = $('#shifttime_to').val();
        var startdate = [];
        startdate = shifttime.split(":");
        var different = [];
        different[0] = parseFloat(startdate[0]);
        different[2] = parseFloat(startdate[2]);
        var end = startdate[1];
        console.log("end data" + end);
        if (end < 30) {
            different[0] = parseFloat(startdate[0]) - parseFloat(1);
            different[1] = (parseFloat(startdate[1]) + parseFloat(60)) - parseFloat(30);
            console.log("differt[0]" + different[0]);
            console.log("differt[1]" + different[1]);
        } else {
            different[1] = parseFloat(startdate[1]) - parseFloat(30);
        }

        $('#shiftfromtime').val(different[0] + ":" + different[1] + ":" + different[2]);
        $('#shifttototime').val(shifttimeto);

        var start = $('#shiftfromtime').val();
        var end = $('#shifttototime').val();
        /* var startdate = [];
         startdate = shifttime.split(":");     
         var Enddate = [];
         
          Enddate = shifttotime.split(":");         
           
                   
             different = [];
             different[0]=parseFloat(Enddate[0])-parseFloat(startdate[0]);
            different[1]=parseFloat(Enddate[1])-parseFloat(startdate[1]);*/

        s = start.split(':');
        e = end.split(':');
        sec = e[2] - s[2];
        min = e[1] - s[1];
        hour_carry = 0;
        min_carry = 0;
        if (sec < 0) {
            sec += 60;
            min_carry += 1;
            console.log("sec" + sec);
        }
        if (min < 0) {
            console.log(min);
            min += 60;
            hour_carry += 1;
            console.log("min" + min);
        }
        if (min_carry == 1) {
            if (min == 0) {
                min += 60;
                hour_carry += 1;
                min = min - min_carry;
            } else {
                min = min - min_carry;
            }

            console.log(min);
        } else {
            //  min = e[1]-s[1];
        }
        if (hour_carry == 1) {
            hour = e[0] - s[0] - hour_carry;

            console.log(hour);
        } else {
            hour = e[0] - s[0];
        }
        $('#duration').val(hour + ":" + min + ":" + sec);
    }
    /*-------close model click event----------*/
    $(document).on("click", ".closemodel", function(e) {
        $('#schedulesheet_save_update').val('');
        $('#scene_no').val('');
        $(".artist_name").val('').multiselect('rebuild').trigger('change');
        $('#scene_description').val('');
        $('#effect').val('');
        $('#sub_location').val('');
        $('#artist_name').val('');
        $('#footage').val('');
        $('#screen_save_update').val('');
        $('#plannesexpenses_save_update').val('');
        $('#sceneremarks').text('');
        $('#sceneremarks').val('');
        $('#character').val('').trigger('change');
        $('#people').val('').trigger('change');
        $('#call').val('');
        //$('#shiftfromtime').val('');
        //$('#duration').val('');
        $('#remarks').val('');
        $('#expenseaccount').val('').trigger('change');
        $('#subaccount').val('').trigger('change');
        $('#narrationdata').val('');
        $('#planunitid').val('');
        $('#uom').val('');
        $('#plannqty').val('');
        $('#plannrate').val('');
        $('#plann_amunt').val('');
        //$('.payment_type').val('');
        $('#case').prop('checked', false);
        $('#cheque').prop('checked', false);
    });
    /*--------copy actual Schedual for Next Day----------*/
    $(document).on("submit", "#actualcopydata", function(e) {
        e.preventDefault();
        $('#wait1').show();
        console.log('from copy data');
        var date = $('#copytodate').val();
        var project = $('#project').val();
        var location = $('#location').val();
        var projectft = $('#projected').val();
        var shift = $('#shifttime').val();

        var shiftto = $('#shifttime_to').val();
        var unit = $('#for_unit').val();
        var camera = $('#camrera').val();
        var requriment = $('#requirement').val();
        var tdateAr = date.split('/');
        var date2 = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0];

        var id = '';

        $.ajax({

            type: "POST",
            url: baseurl + "settings/checkdataexist",
            dataType: "JSON",
            async: false,
            data: {
                table_name: "artist_schedule",
                date2: date2,
                projectid: project,
                forunitno: unit,
            },
            success: function(result) {

                if (result == true) {
                    $.ajax({
                        type: "POST",
                        url: baseurl + "settings/save_settings",
                        dataType: "JSON",
                        async: false,
                        data: {
                            id: id,
                            date: date2,
                            project: project,
                            location: location,
                            projectft: projectft,
                            shift: shift,
                            shiftto: shiftto,
                            unit: unit,
                            camera: camera,
                            requriment: requriment,
                            table_name: 'artist_schedule',
                        },
                        success: function(data) {
                            if (data > 0) {
                                var aid = data;

                                var l1 = $('table#scheduledata').find('tbody').find('tr');
                                var s = l1.length;
                                var sr = 0;
                                for (var j = 0; j < s; j++) {
                                    sr = sr + 1;


                                    var t = document.getElementById('schedule');
                                    var peopletype = $(l1[j]).find('td:eq(1)').html();
                                    var charecter = $(l1[j]).find('td:eq(3)').html();
                                    var peopleid = $(l1[j]).find('td:eq(5)').html();
                                    var shfifrom = $("#shiftfromtime_" + sr).val();
                                    var shiftto = $("#shifttotime_" + sr).val();
                                    var duration = $("#duration_" + sr).val();
                                    var remark = $("#remarkdata_" + sr).val();
                                    //  alert(peopletype+""+charecter+""+peopleid+""+shfifrom+""+shiftto+""+duration+""+remark);
                                    $.ajax({
                                        type: "POST",
                                        url: baseurl + "settings/save_settings",
                                        dataType: "JSON",
                                        async: false,
                                        data: {
                                            aid: aid,
                                            peopletype: peopletype,
                                            charecter: charecter,
                                            peopleid: peopleid,
                                            shfifrom: shfifrom,
                                            shiftto: shiftto,
                                            duration: duration,
                                            remark: remark,
                                            table_name: 'callsheet',
                                        },
                                        success: function(data) {

                                            // successTost("Data save Successfully");
                                            //   myDeleteFunction();

                                        }
                                    });

                                }
                                //RAVI
                                var l1 = $('table#expensivedata').find('tbody').find('tr');
                                var s = l1.length;
                                var sr = 0;
                                for (var j = 0; j < s; j++) {

                                    var t = document.getElementById('schedule');
                                    //var  aid = $(l1[j]).find('td:eq(1)').html();
                                    var expensiveid = $(l1[j]).find('td:eq(1)').html();
                                    var narration = $(l1[j]).find('td:eq(5)').html();
                                    var qty = $(l1[j]).find('td:eq(6)').html();
                                    var rate = $(l1[j]).find('td:eq(7)').html();
                                    var amount = $(l1[j]).find('td:eq(11)').html();
                                    var unitid = $(l1[j]).find('td:eq(8)').html();
                                    var status = '1';
                                    var subaccountid = $(l1[j]).find('td:eq(2)').html();
                                    var payment_type = $(l1[j]).find('td:eq(10)').html();

                                    //alert(expensiveid+""+narration+""+qty+""+rate+""+amount);
                                    $.ajax({
                                        type: "POST",
                                        url: baseurl + "settings/save_settings",
                                        dataType: "JSON",
                                        async: false,
                                        data: {
                                            aid: aid,
                                            accountid: expensiveid,
                                            narroation: narration,
                                            qty: qty,
                                            rate: rate,
                                            amt: amount,
                                            unit: unitid,
                                            status: status,
                                            subaccid: subaccountid,
                                            paymentmode: payment_type,
                                            table_name: 'plannedexpenses',
                                        },
                                        success: function(data) {

                                            /* RAVI
                                            'aid' => $this->input->post('aid'),
                                            				'expensiveid' => $this->input->post('accountid'),
                                            				'subaccountid' => $this->input->post('subaccid'),
                                            				'narration' => $this->input->post('narroation'),
                                            				'qty' => $this->input->post('qty'),
                                            				'rate' => $this->input->post('rate'),
                                            				'unit' => $this->input->post('unit'),
                                            				'paymenttype' => $this->input->post('paymentmode'),
                                            				'amount' => $this->input->post('amt'),
                                            				
                                            */
                                            //alert(aid + ' ' + data);

                                            // successTost("Data save Successfully");
                                            //   myDeleteFunction();

                                        }
                                    });

                                }
                                //RAVI
                                successTost("Copy Actual Schedule Successfully");

                            } else {
                                errorTost("Data Cannot Save");
                            }
                        }
                    });
                } else {

                    swal({
                        title: "Data Already Exists ?",
                        text: "Please Enter Another data  !!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    });


                }

            }
        });
        $('#wait1').hide();
        $('#copynextschedual').modal('hide');
        $('.closehideshow').trigger('click');
        form_clear();
        show_master(); //call function show all product					

    });

});