let menu;
let price;
let sum = 0;
let suma = 0;
let count1 = 0;
let count2 = 0;

function add1(menu, price) {
  if (menu == "a") { 
    suma += parseInt(price);
    count1++;
  }
  let a = document.getElementById('mainName1').innerText;
  let b = document.getElementById('mainPrice1').innerText;
  let msg1 = a +" : "+ b;
  document.querySelector("#msg1").innerHTML = msg1;
  sum = suma;
  document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }

  function sub1(menu, price) {
  if (menu == "a" && suma >= 0)
    suma -= parseInt(price);
    count1--;
    if(count1 < 0) {
      count1 = 0;
    }
  else if(count1 == 0){
    document.querySelector("#msg1").innerHTML = "";
  }
  sum = suma;
  if(suma >= 0){
    document.querySelector("#total").innerHTML = "합계 = " + sum + "원";
  }
  if(suma < 0) {
    suma = 0;
  }
}


function reset() {
  suma = 0;
  sumb = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;


   document.querySelector("#msg1").innerHTML = "";
   document.querySelector("#msg2").innerHTML = "";
   document.querySelector("#msg3").innerHTML = "";
   document.querySelector("#msg4").innerHTML = "";
   document.querySelector("#total").innerHTML = "";
}
