// var name = prompt("Masukan nama kamu");
// document.getElementById("nama").innerText = name;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 5000);

function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var email = document.forms["message-form"]["email"].value;
  var nomorhp = document.forms["message-form"]["nomor"].value;
  var date = document.forms["message-form"]["birth-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if (
    name == "" ||
    date == "" ||
    gender == "" ||
    messages == "" ||
    email == "" ||
    nomorhp == ""
  ) {
    alert("Input tidak boleh kosong");
    return false;
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-nomor").innerText = nomorhp;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;
  return false;
}
