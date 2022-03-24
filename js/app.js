// GENERAL
const circuits = document.querySelector('.main-container'),
      bomb = document.querySelector('.bomb-wrapper');

let mins = 1;
let secs = mins * 60;

// CIRCUIT A
const btn_a = document.querySelector('.circuit_a #btn-a'),
      btn_b = document.querySelector('.circuit_a #btn-b'),
      btn_c = document.querySelector('.circuit_a #btn-c'),
      btn_d = document.querySelector('.circuit_a #btn-d'),
      // Connectors
      connector_y1 = document.querySelector('.circuit_a #connector02'),
      connector_x1 = document.querySelector('.circuit_a #connector03'),
      connector_x2 = document.querySelector('.circuit_a #connector04'),
      connector_x3 = document.querySelector('.circuit_a #connector01'),
      connector_w1 = document.querySelector('.circuit_a #connector09'),
      connector_w2 = document.querySelector('.circuit_a #connector06'),
      connector_v1 = document.querySelector('.circuit_a #connector10'),
      connector_v2 = document.querySelector('.circuit_a #connector07'),
      connector_v3 = document.querySelector('.circuit_a #connector05'),
      connector_b1 = document.querySelector('.circuit_a #connector08'),
      connector_b2 = document.querySelector('.circuit_a #connector11'),
      connector_b3 = document.querySelector('.circuit_a #connector12'),
      connector_b4 = document.querySelector('.circuit_a #connector13'),
      // Display
      display = document.querySelector('.circuit_a .display');


let gate_v1 = 0
let gate_v2 = 0
let gate_v3 = 0

let gate_w1 = 0
let gate_w2 = 0

let gate_x1 = 0
let gate_x2 = 0
let gate_x3 = 0

let gate_y1 = 0


// CIRCUIT B
const cb_btn_a = document.querySelector('.circuit_b #btn-a'),
      cb_btn_b = document.querySelector('.circuit_b #btn-b'),
      cb_btn_c = document.querySelector('.circuit_b #btn-c'),
      cb_btn_d = document.querySelector('.circuit_b #btn-d'),
      cb_btn_e = document.querySelector('.circuit_b #btn-e'),
      cb_btn_f = document.querySelector('.circuit_b #btn-f'),
      cb_btn_g = document.querySelector('.circuit_b #btn-g'),
      cb_btn_h = document.querySelector('.circuit_b #btn-h'),
      
      // Connectors
      cb_connector_w1 = document.querySelector('.circuit_b #connector01'),
      cb_connector_w2 = document.querySelector('.circuit_b #connector02'),
      cb_connector_w3 = document.querySelector('.circuit_b #connector03'),

      cb_connector_v1 = document.querySelector('.circuit_b #connector04'),
      cb_connector_v2 = document.querySelector('.circuit_b #connector05'),
      cb_connector_v3 = document.querySelector('.circuit_b #connector06'),
      cb_connector_v4 = document.querySelector('.circuit_b #connector07'),
      cb_connector_v5 = document.querySelector('.circuit_b #connector08'),

      cb_connector_b1 = document.querySelector('.circuit_b #connector10'),
      cb_connector_b2 = document.querySelector('.circuit_b #connector11'),
      cb_connector_b22 = document.querySelector('.circuit_b #connector12'),
      cb_connector_b3 = document.querySelector('.circuit_b #connector13'),
      cb_connector_b33 = document.querySelector('.circuit_b #connector14'),
      cb_connector_b4 = document.querySelector('.circuit_b #connector15'),
      cb_connector_b5 = document.querySelector('.circuit_b #connector16'),
      cb_connector_b6 = document.querySelector('.circuit_b #connector17'),
      cb_connector_b7 = document.querySelector('.circuit_b #connector18'),
      cb_connector_b8 = document.querySelector('.circuit_b #connector19'),
      cb_connector_b88 = document.querySelector('.circuit_b #connector09'),
      // Display
      cb_display = document.querySelector('.circuit_b .display');


let cb_gate_v1 = 0
let cb_gate_v2 = 0
let cb_gate_v3 = 0
let cb_gate_v4 = 0
let cb_gate_v5 = 0

let cb_gate_w1 = 0
let cb_gate_w2 = 0
let cb_gate_w3 = 0


function verification(){
    // A - FIRST LEVEL
    if (btn_a.innerHTML == 1 || btn_b.innerHTML == 1){
        gate_v1 = 0
    } else {
        gate_v1 = 1
    }

    if (btn_b.innerHTML == 1 && btn_c.innerHTML == 1){
        gate_v2 = 1
    } else {
        gate_v2 = 0
    }

    if (btn_c.innerHTML == 1 && btn_d.innerHTML == 1) {
        gate_v3 = 1
    } else if (btn_c.innerHTML == 0 && btn_d.innerHTML == 0){
        gate_v3 = 1
    } else {
        gate_v3 = 0
    }

    // A - SECOND LEVEL
    if (gate_v1 == 1 || gate_v2 == 1){
        gate_w1 = 1
    } else if (gate_v1 == 1 && gate_v2 == 1) {
        gate_w1 = 0
    } else {
        gate_w1 = 0
    }

    if (gate_v2 == 1 || gate_v3 == 1){
        gate_w2 = 1
    } else if (gate_v2 == 1 && gate_v3 == 1) {
        gate_w2 = 1
    } else {
        gate_w2 = 0
    }

    // A - THIRD LEVEL
    if (btn_a.innerHTML == 1 || gate_w1 == 1){
        gate_x1 = 0
    } else if (btn_a.innerHTML == 1 && gate_w1 == 1){
        gate_x1 = 0
    } else {
        gate_x1 = 1
    }

    if (gate_v2 == 1 && gate_w2 == 1) {
        gate_x2 = 1
    } else {
        gate_x2 = 0
    }

    if (gate_w2 == 1 && gate_v3 == 1){
        gate_x3 = 1
    } else if (gate_w2 == 0 && gate_v3 == 0){
        gate_x3 = 1
    } else {
        gate_x3 = 0
    }

    // A - FOURTH LEVEL
    if (gate_x2 == 1){
        gate_y1 = 0
    } else {
        gate_y1 = 1
    }

    // -------------------------------

    // B - FIRST LEVEL
    if (cb_btn_a.innerHTML == 1 && cb_btn_b.innerHTML == 1){
        cb_gate_v1 = 1
    } else {
        cb_gate_v1 = 0
    }

    if (cb_btn_b.innerHTML == 1 && cb_btn_c.innerHTML == 1){
        cb_gate_v2 = 1
    } else {
        cb_gate_v2 = 0
    }

    if (cb_btn_c.innerHTML == 1 && cb_btn_d.innerHTML == 0) {
        cb_gate_v3 = 1
    } else if (cb_btn_c.innerHTML == 0 && cb_btn_d.innerHTML == 01){
        cb_gate_v3 = 1
    } else {
        cb_gate_v3 = 0
    }

    if (cb_btn_e.innerHTML == 1 && cb_btn_f.innerHTML == 1) {
        cb_gate_v4 = 1
    } else if (cb_btn_e.innerHTML == 0 && cb_btn_f.innerHTML == 0){
        cb_gate_v4 = 1
    } else {
        cb_gate_v4 = 0
    }

    if (cb_btn_g.innerHTML == 1 || cb_btn_h.innerHTML == 1){
        cb_gate_v5 = 1
    } else if (cb_btn_g.innerHTML == 1 && cb_btn_h.innerHTML == 1) {
        cb_gate_v5 = 1
    } else {
        cb_gate_v5 = 0 
    }

    // B - SECOND LEVEL
    if (cb_gate_v1 == 1 && cb_gate_v2 == 1){
        cb_gate_w1 = 1
    } else {
        cb_gate_w1 = 0
    }

    if (cb_gate_v3 == 1 && cb_gate_v4 == 1){
        cb_gate_w2 = 1
    } else {
        cb_gate_w2 = 0
    }

    if (cb_gate_v5 == 1 && cb_btn_h.innerHTML == 1){
        cb_gate_w3 = 0
    } else if (cb_gate_v5 == 1 || cb_btn_h.innerHTML == 1) {
        cb_gate_w3 = 1
    } else {
        cb_gate_w3 = 0
    }

    connections()
}

function connections() {
    // V Connections
    if (gate_v1 == 1){
        connector_v1.classList.add("teste");
    } else {
        connector_v1.classList.remove("teste");
    }

    if (gate_v2 == 1){
        connector_v2.classList.add("teste");
    } else {
        connector_v2.classList.remove("teste");
    }

    if (gate_v3 == 1){
        connector_v3.classList.add("teste");
    } else {
        connector_v3.classList.remove("teste");
    }

    // W Connections
    if (gate_w1 == 1){
        connector_w1.classList.add("teste");
    } else {
        connector_w1.classList.remove("teste");
    }

    if (gate_w2 == 1){
        connector_w2.classList.add("teste");
    } else {
        connector_w2.classList.remove("teste");
    }

    // x Connections
    if (gate_x1 == 1){
        connector_x1.classList.add("teste");
    } else {
        connector_x1.classList.remove("teste");
    }

    if (gate_x2 == 1){
        connector_x2.classList.add("teste");
    } else {
        connector_x2.classList.remove("teste");
    }

    if (gate_x3 == 1){
        connector_x3.classList.add("teste");
    } else {
        connector_x3.classList.remove("teste");
    }

    // Y Connections
    if (gate_y1 == 1){
        connector_y1.classList.add("teste");
    } else {
        connector_y1.classList.remove("teste");
    }

    // Display
    if (gate_x1 == 1 && gate_y1 == 1 && gate_x3 == 1){
        display.style.background = "green"
        display.innerHTML = "OK"
        stopCountdown()
    } else {
        display.style.background = "gray"
        display.innerHTML = "----"
        stopCountdown()
    }

    // -------------------------------

    // V Connections_b
    if (cb_gate_v1 == 1){
        cb_connector_v1.classList.add("cb_teste");
    } else {
        cb_connector_v1.classList.remove("cb_teste");
    }

    if (cb_gate_v2 == 1){
        cb_connector_v2.classList.add("cb_teste");
    } else {
        cb_connector_v2.classList.remove("cb_teste");
    }

    if (cb_gate_v3 == 1){
        cb_connector_v3.classList.add("cb_teste");
    } else {
        cb_connector_v3.classList.remove("cb_teste");
    }

    if (cb_gate_v4 == 1) {
        cb_connector_v4.classList.add("cb_teste")
    } else {
        cb_connector_v4.classList.remove("cb_teste")
    }

    if (cb_gate_v5 == 1) {
        cb_connector_v5.classList.add("cb_teste")
    } else {
        cb_connector_v5.classList.remove("cb_teste")
    }


    // W Connections_b
    if (cb_gate_w1 == 1){
        cb_connector_w1.classList.add("cb_teste");
    } else {
        cb_connector_w1.classList.remove("cb_teste");
    }

    if (cb_gate_w2 == 1){
        cb_connector_w2.classList.add("cb_teste");
    } else {
        cb_connector_w2.classList.remove("cb_teste");
    }

    if (cb_gate_w3 == 1){
        cb_connector_w3.classList.add("cb_teste");
    } else {
        cb_connector_w3.classList.remove("cb_teste");
    }
    
    // Display
    if (cb_gate_w1 == 1 && cb_gate_w2 == 1 && cb_gate_w3 == 1){
        cb_display.style.background = "green"
        cb_display.innerHTML = "OK"
        stopCountdown()
    } else {
        cb_display.style.background = "gray"
        cb_display.innerHTML = "-----"
        stopCountdown()
    }
}

btn_a.addEventListener("click" , () =>{
    if (btn_a.innerHTML == 0) {
        btn_a.innerHTML = 1;
        connector_b1.classList.add("teste");
    } else {
        btn_a.innerHTML = 0;
        connector_b1.classList.remove("teste");
    }
    verification()
})

btn_b.addEventListener("click" , () =>{
    if (btn_b.innerHTML == 0) {
        btn_b.innerHTML = 1;
        connector_b2.classList.add("teste");
    } else {
        btn_b.innerHTML = 0;
        connector_b2.classList.remove("teste");
    }
    verification()
})

btn_c.addEventListener("click" , () =>{
    if (btn_c.innerHTML == 0) {
        btn_c.innerHTML = 1;
        connector_b3.classList.add("teste");
    } else {
        btn_c.innerHTML = 0;
        connector_b3.classList.remove("teste");
    }
    verification()
})

btn_d.addEventListener("click" , () =>{
    if (btn_d.innerHTML == 0) {
        btn_d.innerHTML = 1;
        connector_b4.classList.add("teste");
    } else {
        btn_d.innerHTML = 0;
        connector_b4.classList.remove("teste");
    }
    verification()
})

cb_btn_a.addEventListener("click" , () =>{
    if (cb_btn_a.innerHTML == 0) {
        cb_btn_a.innerHTML = 1;
        cb_connector_b1.classList.add("cb_teste");
    } else {
        cb_btn_a.innerHTML = 0;
        cb_connector_b1.classList.remove("cb_teste");
    }
    verification()
})

cb_btn_b.addEventListener("click" , () =>{
    if (cb_btn_b.innerHTML == 0) {
        cb_btn_b.innerHTML = 1;
        cb_connector_b2.classList.add("cb_teste");
        cb_connector_b22.classList.add("cb_teste");

    } else {
        cb_btn_b.innerHTML = 0;
        cb_connector_b2.classList.remove("cb_teste");
        cb_connector_b22.classList.remove("cb_teste");
    }
    verification()
})

cb_btn_c.addEventListener("click" , () =>{
    if (cb_btn_c.innerHTML == 0) {
        cb_btn_c.innerHTML = 1;
        cb_connector_b3.classList.add("cb_teste");
        cb_connector_b33.classList.add("cb_teste");
    } else {
        cb_btn_c.innerHTML = 0;
        cb_connector_b3.classList.remove("cb_teste");
        cb_connector_b33.classList.remove("cb_teste");
    }
    verification()
})

cb_btn_d.addEventListener("click" , () =>{
    if (cb_btn_d.innerHTML == 0) {
        cb_btn_d.innerHTML = 1;
        cb_connector_b4.classList.add("cb_teste");
    } else {
        cb_btn_d.innerHTML = 0;
        cb_connector_b4.classList.remove("cb_teste");
    }
    verification()
})

cb_btn_e.addEventListener("click" , () =>{
    if (cb_btn_e.innerHTML == 0) {
        cb_btn_e.innerHTML = 1;
        cb_connector_b5.classList.add("cb_teste");
    } else {
        cb_btn_e.innerHTML = 0;
        cb_connector_b5.classList.remove("cb_teste");
    }
    verification()
})

cb_btn_f.addEventListener("click" , () =>{
    if (cb_btn_f.innerHTML == 0) {
        cb_btn_f.innerHTML = 1;
        cb_connector_b6.classList.add("cb_teste");
    } else {
        cb_btn_f.innerHTML = 0;
        cb_connector_b6.classList.remove("cb_teste");
    }
    verification()
})

cb_btn_g.addEventListener("click" , () =>{
    if (cb_btn_g.innerHTML == 0) {
        cb_btn_g.innerHTML = 1;
        cb_connector_b7.classList.add("cb_teste");
    } else {
        cb_btn_g.innerHTML = 0;
        cb_connector_b7.classList.remove("cb_teste")
    }
    verification()
})

cb_btn_h.addEventListener("click" , () => {
    if (cb_btn_h.innerHTML == 0) {
        cb_btn_h.innerHTML = 1
        cb_connector_b8.classList.add("cb_teste")
        cb_connector_b88.classList.add("cb_teste")
    } else {
        cb_btn_h.innerHTML = 0;
        cb_connector_b8.classList.remove("cb_teste")
        cb_connector_b88.classList.remove("cb_teste")
    }
    verification()
})

// ===============================================================================
function startup(){
    var counter = 5;
    setInterval( function(){
        counter--;
    
        if(counter >= 0){
            id = document.getElementById("start-counter");
            id.innerHTML = counter;
        }
    
        if(counter == 0){
            popup = document.querySelector('#info-popup');
            popup.style.visibility = "hidden";
            circuits.style.visibility = "visible";
            bomb.style.visibility = "visible";
            countdown();
        }
    }, 1000)
}

// ===================== COUNTER
function countdown() {
    const myTimeout = setTimeout('Decrement()', 60);
}

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");

        if (seconds < 59) {
            seconds.innerHTML = (secs < 10 ? '0' + secs : secs);
        }

        else {
            minutes.innerHTML = getminutes();
            seconds.innerHTML = getseconds();
        }

        if (mins < 0) {
            alert('A bomba Explodiu!');
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }

        else {
            secs--;
            myTimeout = setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    mins = Math.floor(secs / 60);
    return (mins < 10 ? '0' + mins : mins);
}

function getseconds() {
    secs_b = secs - Math.round(mins * 60);
    return (secs_b < 10 ? '0' + secs_b : secs_b)
}

function stopCountdown(){
    if (display.innerHTML == "OK" && cb_display.innerHTML == "OK"){
        clearTimeout(myTimeout);
        alert("Você desarmou a Bomba!")
    }
}