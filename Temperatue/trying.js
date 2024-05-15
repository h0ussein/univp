



const number = document.getElementById("numbers");
const toce = document.getElementById("toce");
const tofeh = document.getElementById("tofeh");
const result = document.getElementById("result");

let tem;


function convert(){


if(tofeh.checked){
    tem= Number(number.value);
    tem = tem * 9 / 5 + 32;
    result.textContent = tem + " ℉" ;

}
else if(toce.checked) {
    tem = Number(number.value);
    tem = (tem -32) * 9 / 5 ;
    result.textContent = tem + " ℃" ;

}
else {
    result.textContent = "Please select a temperature type!";
}
}
