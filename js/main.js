
function checkbox() {

    let checkbox_apple = document.getElementById("apple");
    let checkbox_pen = document.getElementById("pen");
    let chbox_text1 = document.getElementById("chbox_text1");
    let chbox_text2 = document.getElementById("chbox_text2");
    if (checkbox_apple.checked === true) {
        chbox_text1.style.display = "inline-block";
   } else {
        chbox_text1.style.display = "none";
    }
    if (checkbox_pen.checked === true) {
        chbox_text2.style.display = "inline-block";
    } else {
        chbox_text2.style.display = "none";
    }
}

function btn_color() {
    console.log("favcolor: ", document.getElementById('favcolor').value);
    alert("favcolor: " + document.getElementById('favcolor').value);
}


function btn_date() {
    let date_bday = document.getElementById('birthday').value;

    alert(date_bday);
}

function btn_dateTime() {
    let date_bdayTime = document.getElementById('birthdaytime').value;

    alert(date_bdayTime);
}

function btn_email() {
    let msg = document.getElementById('email').value;

    alert(msg);
}

function btn_file() {
    alert("File: " + document.getElementById('myfile').value);
}

function btn_hide() {
    alert("First name: " + document.getElementById('custId').value + " " + document.getElementById('fname').value);
}

function btn_month() {
    alert(document.getElementById('month').value);
}

function btn_num() {
    alert(document.getElementById('quantity').value);
}

function btn_pwd() {
    alert("Username: " + document.getElementById('username').value +"\n" +  "Password: " + document.getElementById('pwd').value)
}

function btn_radio() {
    alert(document.querySelector('input[name="fav_language"]:checked').value);
}

function btn_range() {
    alert(document.getElementById('vol').value);
}

function myFunction(myValue){
    document.getElementById("currentValue").innerHTML = myValue;
}

function btn_reset() {
    alert("Firstname: " + document.getElementById('f_name').value +"\n" +  "Lastname: " + document.getElementById('l_name').value)
}

function btn_tel() {
    alert(document.getElementById('phone').value);
}







