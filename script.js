///Modal
$("#modalopen").click(function () {
    $("#myModal").show();
});
$("#close").click(function () {
    $("#myModal").hide();
});
///Count characters
$("#comment").keyup(function () {
    setInterval(countCharacter, 1000);
});
function countCharacter() {
    let x = $("#comment").val();
    let result = x.length;
    $("#p1").html(`${result}`);
}
///Hide and show password
var count = 0;
function showHidePass() {
    count++;
    if (count % 2 != 0) {
        $("#in4").attr("type", "text");
    } else {
        $("#in4").attr("type", "password");
    }
}
function showHideConPass(){
    count++;
    if (count % 2 != 0) {
        $("#in5").attr("type", "text");
    } else {
        $("#in5").attr("type", "password");
    }
}
// Hide and show login password
function showHidePassL(){
    count++;
    if (count % 2 != 0) {
        $("#inpass").attr("type", "text");
    } else {
        $("#inpass").attr("type", "password");
    }
}