// Table booking
var bookBtn = document.querySelector(".submitBtn");

const openWhatsapp = () => {
  const mNumber = "+6376165199";
  const name = document.getElementById("inputName").value;

  const email = document.getElementById("inputEmail").value;

  const date = document.getElementById("inputDate").value;

  const time = document.getElementById("inputTime").value;

  const totalGuest = document.getElementById("inputPeopleNum").value;

  const message = document.getElementById("textArea").value;
  if (!name && !date && !time && !totalGuest) {
    alert("Please Fill the required fields");
    return;
  }
  const url = `https://wa.me/${mNumber}?text=
  Name : ${name}%0a
  Email : ${email}%0a
 
  Date : ${date}%0a
  Time : ${time}%0a
  No.of guests : ${totalGuest}%0a
  Message : ${message}%0a`;

  window.open(url, "_blank").focus();
};

bookBtn.addEventListener("click", openWhatsapp);
