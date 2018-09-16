/**
 * Created by svetlanailina on 11.09.18.
 */
function getdetails(){
    var name = $('#name').val();
    var rno = $('#rno').val();
    $.ajax({
        type: "POST",
        url: "details.php",
        data: {fname:name, id:rno},
        success : function (data) {

            $("#msg").html("Получны данные по Ajax " + rno + " is " + data);
        },
        error: function (){
            alert("Error");
        }

    });
}