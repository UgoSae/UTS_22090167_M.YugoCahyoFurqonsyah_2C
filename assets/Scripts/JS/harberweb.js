$(document).ready(function () {
    $("#btnsearch").click(function(e) {
        var txtInput = $("srchInv").val();
        $("#infoinvaccr").html("Nama Anda : " + txtInput);
        $.ajax({
            type: "POST",
            urk: "/assets/scripts/ajax/getcurl.php",
            data: "",
            Success: function (response) {
                $("#infoinvaccr").html("<br/>Response<br/>" + response);
            }
        });
    });
});
