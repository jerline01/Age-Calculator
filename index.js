
$("button").on("click", function (){
  var enteredDate = prompt("Please enter your Date of Birth (DD/MM/YYYY)");
  var current = prompt("Enter the current Date (DD/MM/YYYY)");

  var birthDate = enteredDate.slice(0,2);
  var birthMonth = enteredDate.slice(3,5);
  var birthYear = enteredDate.slice(6,10);

  var currentDate = current.slice(0,2);
  var currentMonth = current.slice(3,5);
  var currentYear = current.slice(6,10);

  // year calculation
  var inYears = (currentYear - birthYear);

  // month calcultion
  if (currentMonth < birthMonth) {

    var inMonths = (Number(currentMonth) + 12) - Number(birthMonth) ;

    // date calculation
      if (currentDate < birthDate) {
        var monthDays = prompt("Enter the total number of days for the previous month of the current month");
        var inDays = ( Number(monthDays) ) - Number(birthDate) ;
        $("h2").text("You are " + (inYears - 1) + " years " + (inMonths - 1) + " months " + (inDays + Number(currentDate)) + " days old." );
      } else if (currentDate > birthDate || currentDate === birthDate) {
        var ageInDays = (Number(currentDate) - Number(birthDate));
        $("h2").text("You are " + (inYears - 1) + " years " + inMonths + " months " + ageInDays + " days old." );
      }


  } else if (currentMonth > birthMonth) {

      var remainingMonths = Number(currentMonth) - Number(birthMonth);

      // date calculation
      if (currentDate < birthDate) {
        var monthDays = prompt("Enter the total number of days for the previous month of the current month");
        var remainingDays = ( Number(monthDays) ) - Number(birthDate) ;
        $("h2").text("You are " + inYears + " years " + (remainingMonths - 1) + " months " + (remainingDays + Number(currentDate)) + " days old." )
      } else if (currentDate > birthDate || currentDate === birthDate) {
        $("h2").text("You are " + inYears + " years " + remainingMonths + " months " + (Number(currentDate) - Number(birthDate)) + " days old." )
      }

  } else if (currentMonth === birthMonth) {

      if (currentDate < birthDate) {
        var monthDays = prompt("Enter the total number of days for the previous month of the current month");
        var remainingDays = ( Number(monthDays) ) - Number(birthDate) ;
        $("h2").text("You are " + (inYears - 1) + " years " + 11 + " months " + (remainingDays + Number(currentDate)) + " days old." )
      } else if (currentDate > birthDate || currentDate === birthDate) {
        $("h2").text("You are " + inYears + " years " + (Number(currentDate) - Number(birthDate)) + " days old." )
      }

  }

});
