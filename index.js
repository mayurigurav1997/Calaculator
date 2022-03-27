const div1 = document.createElement("div");
div1.className = "container";
//attach div1 element to the document body
document.body.appendChild(div1);

//created heading for calculator
const heading = document.createElement("h1");
heading.innerHTML = "Calculator";
heading.id = "title";
div1.appendChild(heading);

// created description of calculator
const p1 =document.createElement("p");
p1.innerHTML = "This calculator is made by Mayuri";
p1.id = "description";
div1.appendChild(p1);

//created calculator container
const div2 = document.createElement("div");
div2.className = "calculator";
div1.appendChild(div2);

// Creating input display
const input1 = document.createElement("input");
input1.id = "screen";
input1.name = "screen";
input1.type = "text";
// input1.type =  text;
div2.appendChild(input1);

//Adding the table to cal caontainer
const table1 = document.createElement("table");
div2.appendChild(table1);

const tr1 = table1.insertRow();
const tr2 = table1.insertRow();
const tr3 = table1.insertRow();
const tr4 = table1.insertRow();
const tr5 = table1.insertRow();

const td1 = tr1.insertCell();
const td2 = tr1.insertCell();
const td3 = tr1.insertCell();
const td4 = tr1.insertCell();

const td5 = tr2.insertCell();
const td6 = tr2.insertCell();
const td7 = tr2.insertCell();
const td8 = tr2.insertCell();

const td9 = tr3.insertCell();
const td10 = tr3.insertCell();
const td11 = tr3.insertCell();
const td12 = tr3.insertCell();

const td13 = tr4.insertCell();
const td14 = tr4.insertCell();
const td15 = tr4.insertCell();
const td16 = tr4.insertCell();

const td17 = tr5.insertCell();
const td18 = tr5.insertCell();
const td19 = tr5.insertCell();
const td20 = tr5.insertCell();

const btn1 = document.createElement("button");
btn1.innerText = "(";
td1.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.innerText = ")";
td2.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.innerText = "C";
btn3.id = "clear";
td3.appendChild(btn3);

const btn4 = document.createElement("button");
btn4.innerText = "%";
td4.appendChild(btn4);

const btn5 = document.createElement("button");
btn5.innerText = "7";
td5.appendChild(btn5);

const btn6 = document.createElement("button");
btn6.innerText = "8";
td6.appendChild(btn6);

const btn7 = document.createElement("button");
btn7.innerText = "9";
td7.appendChild(btn7);

const btn8 = document.createElement("button");
btn8.innerText = "X";
td8.appendChild(btn8);

const btn9 = document.createElement("button");
btn9.innerText = "4";
td9.appendChild(btn9);

const btn10 = document.createElement("button");
btn10.innerText = "5";
td10.appendChild(btn10);

const btn11 = document.createElement("button");
btn11.innerText = "6";
td11.appendChild(btn11);

const btn12 = document.createElement("button");
btn12.innerText = "-";
btn12.id = "subtract";
td12.appendChild(btn12);

const btn13 = document.createElement("button");
btn13.innerText = "1";
td13.appendChild(btn13);

const btn14 = document.createElement("button");
btn14.innerText = "2";
td14.appendChild(btn14);

const btn15 = document.createElement("button");
btn15.innerText = "3";
td15.appendChild(btn15);

const btn16 = document.createElement("button");
btn16.innerText = "+";
btn16.id = "add";
td16.appendChild(btn16);

const btn17 = document.createElement("button");
btn17.innerText = "0";
td17.appendChild(btn17);

const btn18 = document.createElement("button");
btn18.innerText = ".";
td18.appendChild(btn18);

const btn19 = document.createElement("button");
btn19.innerText = "/";
td19.appendChild(btn19);

const btn20 = document.createElement("button");
btn20.innerText = "=";
btn20.id = "equal";
td20.appendChild(btn20);


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

document.write("deis")