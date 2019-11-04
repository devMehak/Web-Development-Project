$(document).ready(function(){
  $("#hidden").hide();
  $("#show").click(function(){
    $("#hidden").show(1500);
  });
});
var seatCount = 5;
function c() {
  if(seatCount == 0){alert("Your seat is not booked as there are no avaiable seats")}
    else{
      var user = document.getElementById("usname").value;
  var email = document.getElementById("email2").value;
  var phone = document.getElementById("phone").value;
  alert("Seat Booked Successfuly \n" + user + "\n" + email +"\n"+ phone + "\n");
  console.log(user);
    seatCount--;
    document.getElementById("seatCount").textContent =  seatCount;
    document.getElementById("usname").value = " ";
    document.getElementById("email2").value = " ";
    document.getElementById("phone").value = " ";

    }
	
}
document.getElementById("seatCount").textContent =  seatCount;
