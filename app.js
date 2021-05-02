//jshint esversion:7
let button = document.querySelector('button');
let name = document.querySelector("#exampleInputIcon3");
let message = document.querySelector("#usermessage");
let mail = document.querySelector("#email");
let select = document.querySelector("#usertime");
let loading = document.querySelector("gvfgv");
let time = 0;
function myNewFunction(sel) {
   let option = (sel.options[sel.selectedIndex].text);
   if (option == "1 Day") {
     time = 1 * 24 * 60;
   } else if (option == "3 Day") {
     time = 3 * 24 * 60;
   } else if (option == "1 Week") {
     time = 7 * 24 * 60;
   } else if (option == "2 Week") {
     time = 7 * 24 * 60 * 2;
   } else if (option == "1 Month") {
     time = 30 * 24 * 60;
   } else if (option == "2 Month") {
     time = 30 * 24 * 60 * 2;
   } else if (option == "6 Month") {
     time = 30 * 24 * 60 * 6;
   } else if (option == "1 Year") {
     time = 30 * 24 * 60 * 12;
   }
}
function modal() {
document.getElementById("invi_bttn").click();
  message.value = "";
   loading.style.display = "none";

   button.style.display = "block";
}
function submitter() {
  // button.addEventListener('click', () => {
    button.style.display = "none";
  
    loading.style.display = "block";
  
    console.log(name.value);
    console.log(message.value);
    console.log(mail.value);
    myNewFunction(select);
    console.log(time);
    let data = {
      name: name.value,
      message: message.value,
      mail: mail.value,
      time: time
    };
  

    fetch("https://fsazqj.deta.dev/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        modal();
      });
}