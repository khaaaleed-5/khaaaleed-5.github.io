


function myFunction() {
  let text;
  let person = prompt("Please enter your name:");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + " We hope you like our website :)" ;
  }
  document.getElementById("demo").innerHTML = text;
}