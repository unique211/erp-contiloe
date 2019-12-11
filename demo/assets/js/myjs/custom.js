$(document).ready(function() {
    $('#example').DataTable();

    $('.select2').select2({
        selectOnClose: true
    });

    $(".formhideshow").hide();
    $(".tablehideshow").show();
    $(".btnhideshow").show();

    $(".btnhideshow").click(function() {

        $(".formhideshow").show();
        $(".tablehideshow").hide();
        $(".btnhideshow").hide();
        $("#pro_name").show();

    });

    $(".closehideshow").click(function() {
        $("#pro_name").hide();
        $(".btnhideshow").show();

        $(".tablehideshow").show();
        $(".formhideshow").hide();

    });



    $(".formhideshow1").hide();
    $(".tablehideshow1").show();
    $(".btnhideshow1").show();

    $(".btnhideshow1").click(function() {

        $(".formhideshow1").show();
        $(".tablehideshow1").hide();
        $(".btnhideshow1").hide();
    });

    $(".closehideshow1").click(function() {
        $(".btnhideshow1").show();
        $(".tablehideshow1").show();
        $(".formhideshow1").hide();

    });


});