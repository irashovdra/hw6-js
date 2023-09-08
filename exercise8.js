let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
if (firstName.length > 4 && lastName.length > 5) {
  console.log(firstName.length + lastName.length);
} else {
  console.log("ОЙ! Не вдалося виконати умову");
}
