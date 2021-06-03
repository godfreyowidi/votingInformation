$(document).ready(function() {
  //const first = prompt("First Name");
  //const last = prompt("Last Name");
  const age = parseInt(prompt("Age"));


  //if (first, last != isString);
  //alert("Please enter a valid name!")

  if (age <= 18) {
    $("#for_minors").show();
  //} else if (age === 21) {
  //  alert("You should get more information before you proceed");
  } else {
    $("#for_adults").show();
  }
}); 