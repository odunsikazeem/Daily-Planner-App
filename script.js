
$(document).ready(function() {

var today = dayjs();
var now = today.format("dddd,MMMM D");
$("#currentDay").text(now);
 var currentHour = today.format("HH");
 $(".my-row").each(function() {
    var myRow = $(this).data("hour");
    if (currentHour == myRow) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");
    } else if (currentHour < myRow) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > myRow) {
        $(this).removeClass("future");
        $(this).addClass("past");
    } 
 })

 $(".saveBtn").click(function (event) {
    event.preventDefault();
    var time = $(this).parent().data("hour");
    var value = $(this).siblings(".time-block").val();
    $(".response").text("Appointment added to Local Storage");
    setTimeout(() => {
    $(".response").text("");   
    }, 5000);
    localStorage.setItem(time,value);
});

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));

});