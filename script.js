let assignTime = document.getElementsByClassName("t")
let messagetime = document.getElementById("food1")
function clocktime() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let AMPM = "";
    //console.log(hrs);
    //console.log(min);
    //console.log(sec);
    //console.log(assignTime);
    if (hrs > 12) {
        hrs = hrs - 12;
        AMPM = "PM"
    }
    else {
        AMPM = "AM"
    }
    assignTime[1].innerText = `${hrs} \n hrs`
    assignTime[2].innerText = `${min} \n mins`
    assignTime[3].innerText = `${sec} \n sec`
    assignTime[4].innerText = `${AMPM}`

    if (hrs >= 7 && AMPM === 'AM') {
        messagetime.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    }
    else if (hrs < 4 && hrs >= 12 && AMPM === 'PM') {
        messagetime.innerHTML = "LETS HAVE SOME LUNCH !!";
    }
    else if (hrs >= 4 && hrs <= 8 && AMPM === 'PM') {
        messagetime.innerHTML = "STOP VAWNING,GET SOME TEA... ITS JUST EVENING!";
    }
    else if (hrs >= 8 && hrs <= 12 && AMPM === 'PM') {
        messagetime.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
    else {
        messagetime.innerHTML = 'GOO YAAR'
    }

}
setInterval(() => {
    clocktime();
}, 1000)

//-----------2nd function use-----------------------------------
let inputValue = document.getElementsByClassName('b');
let bad = document.getElementById('Bad');
let imgShow = document.getElementById('bal');

function callFunction() {

    let time = new Date();
    let hrs = time.getHours();
    const small = inputValue[0].options[inputValue[0].value]
    const small1 = inputValue[1].options[inputValue[1].value]
    const small2 = inputValue[2].options[inputValue[2].value]
    const small3 = inputValue[3].options[inputValue[3].value]
    console.log(small);
    console.log(small1);
    console.log(small2);
    console.log(small3);
    alt1.innerHTML = `Wake Up Time:${small.text}`
    alt2.innerHTML = `Lunch Time:${small1.text}`
    alt3.innerHTML = `Nap Time:${small2.text}`
    alt4.innerHTML = `Night Time:${small3.text}`
    console.log(alt1);
    console.log(alt2);
    console.log(alt3);

    if (parseInt(inputValue[0].value) === hrs) {
        bad.innerText = 'GOOD MORNING !! WAKE UP!!';
        imgShow.src = "./mrng.svg"


    }
    else if (parseInt(inputValue[1].value) === hrs) {
        bad.innerText = 'GOOD AFTERNOON!! TAKE SOME SLEEP!!';
        imgShow.src = "./lunchimg.svg";
    }
    else if (parseInt(inputValue[2].value) === hrs) {
        bad.innerText = 'GOOD EVENING!!';
        imgShow.src = "./goodevening.png";
    }
    else if (parseInt(inputValue[3].value) === hrs) {
        bad.innerText = 'GOOD NIGHT!!';
        imgShow.src = "./night.svg";
    }
}

