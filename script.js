//calcula a idade atual

const today = new Date();
const birthday = new Date ("1997/02/17");
const year = today.getFullYear();
const myAge = Math.floor(Math.abs(today - birthday) / 1000 / 60 / 60 / 24 / 365);
 document.getElementById("age").innerHTML = myAge;