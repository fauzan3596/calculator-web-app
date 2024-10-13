let display = document.querySelector("#display");

let btn0 = document.querySelector("#zero");
let btn1 = document.querySelector("#one");
let btn2 = document.querySelector("#two");
let btn3 = document.querySelector("#three");
let btn4 = document.querySelector("#four");
let btn5 = document.querySelector("#five");
let btn6 = document.querySelector("#six");
let btn7 = document.querySelector("#seven");
let btn8 = document.querySelector("#eight");
let btn9 = document.querySelector("#nine");

let btnPlus = document.querySelector("#plus");
let btnMin = document.querySelector("#minus");
let btnMul = document.querySelector("#times");
let btnDiv = document.querySelector("#divide");

let btnEqu = document.querySelector("#equal");
let btnAC = document.querySelector("#all-clear");
let btnDec = document.querySelector("#decimal");

let isCalculated = false; /* variabel untuk menentukan apakah display akan direfresh ketika
                             sudah melakukan perhitungan */
let isDecimal = false; // variabel untuk membuat . hanya dapat diketik sekali di setiap angkanya

// function untuk menampilkan angka ketika button angka ditekan 
function pressNumber(number) {
    if (display.value === '0' || isCalculated == true) {
        display.value = number;
        isCalculated = false;
    } else {
        display.value = display.value + number;
    }
}

btn0.addEventListener("click", function () {
    pressNumber(btn0.value);
})

btn1.addEventListener("click", function () {
    pressNumber(btn1.value);
})

btn2.addEventListener("click", function () {
    pressNumber(btn2.value);
})

btn3.addEventListener("click", function () {
    pressNumber(btn3.value);
})

btn4.addEventListener("click", function () {
    pressNumber(btn4.value);
})

btn5.addEventListener("click", function () {
    pressNumber(btn5.value);
})

btn6.addEventListener("click", function () {
    pressNumber(btn6.value);
})

btn7.addEventListener("click", function () {
    pressNumber(btn7.value);
})

btn8.addEventListener("click", function () {
    pressNumber(btn8.value);
})

btn9.addEventListener("click", function () {
    pressNumber(btn9.value);
})

// function untuk menjalankan operasi perhitungan ketika button operator ditekan 
function pressOperator(operator) {
    let lastChar = display.value[display.value.length - 1];
    switch (lastChar) {
        case "+":
            break;
        case "-":
            break;
        case "*":
            break;
        case "/":
            break;
        default:
            display.value = display.value + operator;
            break;
    }
    isCalculated = false; /* tidak merefresh display ketika ingin melanjutkan perhitungan setelah selesai
                             melakukan suatu perhitungan */
    isDecimal = false;
}

btnPlus.addEventListener("click", function () {
    pressOperator(btnPlus.value);
})

btnMin.addEventListener("click", function () {
    pressOperator(btnMin.value);
})

btnMul.addEventListener("click", function () {
    pressOperator(btnMul.value);
})

btnDiv.addEventListener("click", function () {
    pressOperator(btnDiv.value);
})

// membuat bilangan decimal hanya dapat ditekan sekali 
btnDec.addEventListener("click", function () {
    if (isCalculated) {
        display.value = "0.";
        isCalculated = false;
        isDecimal = true;
    }
    else if (!isDecimal) {
        display.value += ".";
        isDecimal = true;
    }
})

btnAC.addEventListener("click", function () {
    display.value = 0;
    isCalculated = false;
    isDecimal = false;
})

btnEqu.addEventListener("click", function () {
    display.value = eval(display.value);
    isCalculated = true;
})
