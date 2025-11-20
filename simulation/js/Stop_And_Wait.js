

var x, y;
var X, Y;
var flag = 0;
var count = 0;
var x1, y1, a1, b1, x2, y2, aa, bb, x4, y4, a4, b4, x5, y5, a5, b5;

function setup() {
    var canvas = createCanvas(800, 600);
    canvas.parent('sketch-holder');
    x = 400;
    y = 0;
    X = 2;
    Y = 1;
    a = 800;
    b = 200;
    A = -2;
    B = 1;
    x1 = 400;
    y1 = 0;
    a1 = 800;
    b1 = 200;
    x2 = 400;
    y2 = 0;
    a2 = 800;
    b2 = 200;
    x3 = 400;
    y3 = 0;
    a3 = 800;
    b3 = 200;
    x4 = 400;
    y4 = 0;
    x5 = 400;
    y5 = 0;
    a5 = 800;
    b5 = 200;
    x6 = 400;
    y6 = 0;
    a6 = 800;
    b6 = 200;

    arr = [1, 0, 0, 0, 0];
    label = createElement('h3', 'Frames :');
    label.parent('sketch-holder');
    label.position(210, 148);
    button1 = createButton('1');
    button1.parent('sketch-holder');
    button1.style('font-size', '17px');
    button1.style('color', 'black');
    button1.style('background-color', '#bae8e8');
    button1.position(320, 165);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.parent('sketch-holder');
    button2.style('font-size', '17px');
    button2.style('color', 'black');
    button2.style('background-color', '#bae8e8');
    button2.position(340, 165);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.parent('sketch-holder');
    button3.style('font-size', '17px');
    button3.style('color', 'black');
    button3.style('background-color', '#bae8e8');
    button3.position(360, 165);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.parent('sketch-holder');
    button4.style('font-size', '17px');
    button4.style('color', 'black');
    button4.style('background-color', '#bae8e8');
    button4.position(380, 165);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.parent('sketch-holder');
    button5.style('font-size', '17px');
    button5.style('color', 'black');
    button5.style('background-color', '#bae8e8');
    button5.position(400, 165);
    button5.mousePressed(f5);

    inp = createInput('').attribute('placeholder', 'for e.g 3');
    inp.parent('sketch-holder');
    inp.position(222, 410);
    inp.size(200);
    button = createButton("Submit");
    button.parent('sketch-holder');
    button.position(430, 410);
    button.mousePressed(frames);
    button.style('background-color', '#bae8e8');

    button6 = createButton("Reset");
    button6.parent('sketch-holder');
    button6.position(222, 470);
    button6.style('background-color', '#bae8e8');
    button6.mousePressed(reset);
}

let tq_y = 0;       // starting y-coordinate
let tq_speed = 1;   // speed of movement
let tq_active = false; // flag to control drawing
let tq_stopY = 500;  // default stop (timeout)
let ack2Lost = false;
let frame4Lost = false;
let canClick = true;  // new flag to control user clicks


function startTimeQuantum(stopY = 500) {
    tq_y = 0;
    tq_active = true;
    tq_stopY = stopY;   // stop at given Y
    canClick = false;
}

function reset() {
    window.location.reload();
}

function drawTimerLine() {
    // Permanent vertical line
    stroke('black');
    strokeWeight(2);
    line(380, 0, 380, 500);

    // Arrow heads at top and bottom
    fill('black');
    triangle(375, 10, 385, 10, 380, 0);     // top arrow
    triangle(375, 490, 385, 490, 380, 500); // bottom arrow

    // Vertical "TIMER" text
    push();
    translate(365, 250);   // move to center beside line
    rotate(HALF_PI);       // rotate text
    noStroke();
    fill('black');
    textSize(20);
    textStyle(BOLD);       // make it bold
    textAlign(CENTER, CENTER);
    text("TIMER", 0, 0);
    pop();
}



function overwrite() {
    // document.querySelector(".right").style.display = "none";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;

    var millisecondsToWait = 8000;
    setTimeout(function () {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
        button5.disabled = false;
        bluish();
    }, millisecondsToWait);
}


function bluish() {
    button1.style('background-color', '#bae8e8');
    button2.style('background-color', '#bae8e8');
    button3.style('background-color', '#bae8e8');
    button4.style('background-color', '#bae8e8');
    button5.style('background-color', '#bae8e8');

}


function wrongclick() {
    Swal.fire({
        backdrop: false,
        target: '#sketch-holder',
        width: '370px',
        timer: 5000,
        position: 'center',
        customClass: {
            container: 'position-absolute',
            popup: "swal2-popup"
        },
        text: "Wrong frame selected",

    });
}

count = 0;

function f1() {
    if (!canClick) {
        console.log("Wait for timeout before retransmitting...");
        return;  // ignore the click
    }
    if (!(arr[0])) {
        wrongclick();
        button1.disabled = true;
        button1.style('background-color', 'red');
        flag = 0;
    } else if (arr[0] == 2) { } else {

        button1.style('background-color', 'green');
        count += 1;
        arr[0] = 2;
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7)) {
            overwrite();
            startTimeQuantum(460);
        }

    }
};


function f2() {
    if (!canClick) {
        console.log("Wait for timeout before retransmitting...");
        return;  // ignore the click
    }
    if (!(arr[1])) {
        wrongclick();
        button2.style('background-color', 'red');
        flag = 0;
    } else if (arr[1] == 2) { } else {
        button2.style('background-color', 'green');
        count += 1;
        arr[1] = 2;
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7)) {
            overwrite();
            if(count==2)
            {startTimeQuantum(500);}
            if(count==3)
            {startTimeQuantum(460);}
        }
    }
};

function f3() {
    if (!canClick) {
        console.log("Wait for timeout before retransmitting...");
        return;  // ignore the click
    }
    if (!(arr[2])) {
        wrongclick();
        button3.style('background-color', 'red');
        flag = 0;
    } else if (arr[2] == 2) { } else {
        button3.style('background-color', 'green');
        count += 1;
        arr[2] = 2;
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7)) {
            overwrite();
            startTimeQuantum(460);
            popupMessage("Wrong frame selected. Please select again.");

        }
    }
};

function f4() {
    if (!canClick) {
        console.log("Wait for timeout before retransmitting...");
        return;  // ignore the click
    }
    if (!(arr[3])) {
        wrongclick();
        button4.style('background-color', 'red');
        flag = 0;
    } else if (arr[3] == 2) { } else {
        button4.style('background-color', 'green');
        count += 1;
        arr[3] = 2;
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7)) {
            overwrite();
            if(count==5)
            {startTimeQuantum(500);}
            if(count==6)
            {startTimeQuantum(460);}

        }
    }

};

function f5() {
    if (!canClick) {
        console.log("Wait for timeout before retransmitting...");
        return;  // ignore the click
    }
    if (!(arr[4])) {
        wrongclick();
        button5.style('background-color', 'red');
        flag = 0;
    } else if (arr[0] == 2) { } else {
        button5.style('background-color', 'green');
        count += 1;
        arr[4] = 2;
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7)) {
            overwrite();
            startTimeQuantum(460);
        }
    }

};

cnt1 = 0;
cnt2 = 0;
cnt3 = 0;
cnt4 = 0;
cnt5 = 0;
cnt6 = 0;
cnt7 = 0;
ack2 = 0; //for lost ack
frame4 = 0; //for lost frame 4

function coloursq1() {
    stroke('white');
    fill('red');
    square(5, 150, 35);

}

function coloursq4() {
    stroke('white');
    fill(255, 204, 0);
    square(5, 200, 35);

}

function lines() {
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 500);
    line(798, 0, 798, 500);
    //line(380,460,390,460); to check position of ack
    line(400, 2, 410, 2)
    line(400, 420, 410, 420)
    line(400, 500, 410, 500)
    drawTimerLine();
}
let inp;


function myInputEvent() {


    if (inp.value() != "7") {
        Swal.fire({
            backdrop: false,
            target: '#sketch-holder',
            width: '370px',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: "Oops...",
            text: "Wrong answer, Please Try Again.",
            icon: "error",
        });
    }
    if (inp.value() == "7") {
        Swal.fire({
            backdrop: false,
            target: '#sketch-holder',
            width: '370px',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: "Correct answer",
            icon: "success",
        });
    }
}

function texts() {

    strokeWeight(1);
    fill(0);
    textSize(20);
    text('Reciever', 720, 550);
    text('Sender', 400, 550);
    text('represents a normal frame sent', 50, 175);
    text('represents an ACK', 50, 225);
    fill('blue');
    text('How many total frames are transmitted?', 10, 320);

}

function frames() {
    Swal.fire({

        backdrop: false,
        target: '#sketch-holder',
        width: '390px',
        position: 'center',
        customClass: {
            container: 'position-absolute',
            popup: "swal2-popup"
        },
        icon: "warning",
        text: 'First complete the simulation process and then enter the value.'

    })
}




function draw() {

    background(color('#fffffe'));
    strokeWeight(4);

    coloursq1();
    coloursq4();
    texts();
    textSize(15);

    lines();
    textSize(15);
    stroke('black');
    fill(400);


    strokeWeight(4);
    stroke('black');
    if (count == 1) { cnt1 = 1; }
    if (count == 2) { cnt2 = 1; }
    if (count == 3) { cnt3 = 1; }
    if (count == 4) { cnt4 = 1; }
    if (count == 5) { cnt5 = 1; }
    if (count == 6) { cnt6 = 1; }
    if (count == 7) { cnt7 = 1; }

    if (cnt1 == 1) {

        if (x <= 5000) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);

            x = x + X; //400  1
            y = y + Y; //0    0.1
            if (x <= 1000) {
                text('1', 380, 15);
                stroke('red');
                line(x, y, 400, 0);
                if (x <= 770) {
                    xx = x;
                    yy = y;
                } else {
                    xx = 770;
                    yy = 185;
                }
                fill('red');
                square(xx, yy, 30);
                fill(400);
                textSize(19);
                text('1', xx + 8.5, yy + 19);

            }
            fill('white');
            if (x >= 950) {

                if (a >= 400) {
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('A1', 775, 230);
                    a = a + A;
                    b = b + B;
                    stroke(255, 204, 0);
                    line(a, b, 800, 200);
                    if (a >= 430) {
                        aa = a - 30;
                        bb = b;
                    } else {
                        aa = 400;
                        bb = 382.5;
                    }
                    fill(255, 204, 0)
                    square(aa, bb, 30);
                    fill(400)
                    textSize(18);
                    text('A1', aa + 3, bb + 19);

                }
                fill(400)
                if (a == 400) {
                    arr = [0, 1, 0, 0, 0];

                }
            }
        }
// Time Quantum Line
if (tq_active) {
    let progress = constrain(tq_y / tq_stopY, 0, 1);

    // Stage colors
    let col1 = color('#00cc66'); // green
    let col2 = color('#ffcc00'); // yellow
    let col3 = color('#ff6600'); // orange-red

    let currentCol;
    if (progress < 0.5) {
        // Stage 1: green → yellow
        currentCol = lerpColor(col1, col2, progress / 0.5);
    } else {
        // Stage 2: yellow → orange-red
        currentCol = lerpColor(col2, col3, (progress - 0.5) / 0.5);
    }

    stroke(currentCol);
    strokeWeight(10);
    line(385, 0, 385, tq_y);

    tq_y += tq_speed;

            // reset when it reaches bottom
            if (tq_y >= tq_stopY) {
                tq_active = false;
                canClick = true;
                // check losses
                if (ack2Lost) {
                    Swal.fire({
                        backdrop: false,
                        target: '#sketch-holder',
                        width: '370px',
                        position: 'center',
                        customClass: {
                            container: 'position-absolute',
                            popup: "swal2-popup"
                        },
                        icon: "info",
                        text: "Timeout happens! \n Retransmit Frame 2"
                    });
                    ack2Lost = false; // reset
                }

                if (frame4Lost) {
                    Swal.fire({
                        backdrop: false,
                        target: '#sketch-holder',
                        width: '370px',
                        position: 'center',
                        customClass: {
                            container: 'position-absolute',
                            popup: "swal2-popup"
                        },
                        icon: "info",
                        text: "Timeout happens! \n Retransmit Frame 4"
                    });
                    frame4Lost = false; // reset
                }
            }

            strokeWeight(5);
        }

    }

    if (cnt2 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        if (x <= 5000) {

            x1 = x1 + X; //400  1
            y1 = y1 + Y; //0    0.1
            if (x1 <= 1000) {
                text('2', 380, 15);
                stroke('red');
                line(x1, y1, 400, 0);
                if (x1 <= 770) {
                    xx = x1;
                    yy = y1;
                } else {
                    xx = 770;
                    yy = 185;
                }
                fill('red');
                square(xx, yy, 30);
                fill(400);
                textSize(19);
                text('2', xx + 8.5, yy + 19);
            }
            fill('white');
            if (x1 >= 950) {

                if (a1 >= 600) {
                    a1 = a1 + A;
                    b1 = b1 + B;
                }
                if (cnt3 != 1) {
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('A2', 772, 230);
                    stroke(255, 204, 0);
                    line(a1, b1, 800, 200);
                    if (a1 >= 630) {
                        aa = a1 - 30;
                        bb = b1;
                    } else {
                        aa = 600;
                        bb = 282.5;
                    }
                    fill(255, 204, 0)
                    square(aa, bb, 30);
                    fill(400);
                    textSize(18);
                    text('A2', aa + 3, bb + 19);
                }

                if (a1 == 600) {
                    arr = [0, 1, 0, 0, 0];
                    ack2 = 1;
                    ack2Lost = true;   // <--- mark that ACK2 was lost
                    let countdown = 5; // starting number

                    /*Swal.fire({
                        backdrop: false,
                        target: '#sketch-holder',
                        width: '370px',
                        position: 'center',
                        allowOutsideClick: false, // prevent closing by clicking outside
                        allowEscapeKey: false,   // prevent closing by escape
                        showConfirmButton: false, // hide OK button
                        customClass: {
                            container: 'position-absolute',
                            popup: "swal2-popup"
                        },
                        title: "ACK 2 Lost!",
                        html: `Waiting for timeout... <br><b>${countdown}</b>`,
                        icon: "warning",
                        didOpen: () => {
                            const content = Swal.getHtmlContainer().querySelector("b");
                            const timerInterval = setInterval(() => {
                                countdown--;
                                content.textContent = countdown;
                                if (countdown <= 0) {
                                    clearInterval(timerInterval);
                                    Swal.close(); // auto-close after reaching 0
                                }
                            }, 1000);
                        }
                    });*/
                }

            }
        }
    }

    if (ack2 == 1) {
        stroke('#f9f4ef');
        fill('red');
        textSize(20);
        text('Lost', 545, 295);
    }

    if (cnt3 == 1) {
        ack2 = 0;
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        if (x2 <= 5000) {

            x2 = x2 + X; //400  1
            y2 = y2 + Y; //0    0.1
            if (x2 <= 1000) {
                text('2', 380, 15);
                stroke('red');
                line(x2, y2, 400, 0);
                if (x2 <= 770) {
                    xx = x2;
                    yy = y2;
                } else {
                    xx = 770;
                    yy = 185;
                }
                fill('red');
                square(xx, yy, 30);
                fill(400);
                textSize(19);
                text('2', xx + 8.5, yy + 19);
            }
            fill('white');
            if (x2 >= 950) {

                if (a2 >= 400) {
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('A2', 772, 230);
                    a2 = a2 + A;
                    b2 = b2 + B;
                    stroke(255, 204, 0);
                    line(a2, b2, 800, 200);
                    if (a2 >= 430) {
                        aa = a2 - 30;
                        bb = b2;
                    } else {
                        aa = 400;
                        bb = 382.5;
                    }
                    fill(255, 204, 0)
                    square(aa, bb, 30);
                    fill(400)
                    textSize(18);
                    text('A2', aa + 3, bb + 19);
                }
                fill(400)

                if (a2 == 400) {
                    arr = [0, 0, 1, 0, 0];

                }
            }
        }
    }
    if (cnt4 == 1) {
        if (x3 <= 5000) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);

            x3 = x3 + X; //400  1
            y3 = y3 + Y; //0    0.1
            if (x3 <= 1000) {
                text('3', 380, 15);
                stroke('red');
                line(x3, y3, 400, 0);
                if (x3 <= 770) {
                    xx = x3;
                    yy = y3;
                } else {
                    xx = 770;
                    yy = 185;
                }
                fill('red');
                square(xx, yy, 30);
                fill(400);
                textSize(19);
                text('3', xx + 8.5, yy + 19);
            }
            fill('white');
            if (x3 >= 950) {

                if (a3 >= 400) {
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('A3', 772, 230);
                    a3 = a3 + A;
                    b3 = b3 + B;
                    stroke(255, 204, 0);
                    line(a3, b3, 800, 200);
                    if (a3 >= 430) {
                        aa = a3 - 30;
                        bb = b3;
                    } else {
                        aa = 400;
                        bb = 382.5;
                    }
                    fill(255, 204, 0)
                    square(aa, bb, 30);
                    fill(400)
                    textSize(18);
                    text('A3', aa + 3, bb + 19);
                }
                fill(400)

                if (a3 == 400) {
                    arr = [0, 0, 0, 1, 0];

                }
            }
        }
    }
    if (cnt5 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);

        if (cnt6 != 1) {
            if (x4 <= 600) {
                x4 = x4 + X; //400  1
                y4 = y4 + Y;
            } //0    0.1
            text('4', 380, 18);
            stroke('red');
            line(x4, y4, 400, 0);
            if (x4 <= 570) {
                xx = x4;
                yy = y4;
            } else {
                xx = 570;
                yy = 85;
            }
            fill('red');
            square(xx, yy, 30);
            fill(400);
            textSize(19);
            text('4', xx + 8.5, yy + 19);
            if (x4 == 600) {
                arr = [0, 0, 0, 1, 0];
                frame4 = 1;
                frame4Lost = true;  // <--- mark that Frame4 was lost
                let countdown = 10; // starting countdown value

                /*Swal.fire({
                    backdrop: false,
                    target: '#sketch-holder',
                    width: '370px',
                    position: 'center',
                    allowOutsideClick: false, // prevent closing by clicking outside
                    allowEscapeKey: false,   // prevent closing by ESC
                    showConfirmButton: false, // hide OK button
                    customClass: {
                        container: 'position-absolute',
                        popup: "swal2-popup"
                    },
                    title: "Frame 4 Lost!",
                    html: `Waiting for timeout... <br><b>${countdown}</b>`,
                    icon: "error",
                    didOpen: () => {
                        const content = Swal.getHtmlContainer().querySelector("b");
                        const timerInterval = setInterval(() => {
                            countdown--;
                            content.textContent = countdown;
                            if (countdown <= 0) {
                                clearInterval(timerInterval);
                                Swal.close(); // close automatically at 0
                            }
                        }, 1000);
                    }
                });*/
            }

        }
    }

    if (frame4 == 1) {
        stroke('#f9f4ef');
        fill('red');
        textSize(20);
        text('Lost', 585, 155);
    }

    if (cnt6 == 1) {
        frame4 = 0;
        if (x5 <= 5000) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);

            x5 = x5 + X; //400  1
            y5 = y5 + Y; //0    0.1
            if (x5 <= 1000) {
                text('4', 380, 15);
                stroke('red');
                line(x5, y5, 400, 0);
                if (x5 <= 770) {
                    xx = x5;
                    yy = y5;
                } else {
                    xx = 770;
                    yy = 185;
                }
                fill('red');
                square(xx, yy, 30);
                fill(400);
                textSize(19);
                text('4', xx + 8.5, yy + 19);
            }
            fill('white');
            if (x5 >= 950) {

                if (a5 >= 400) {
                    a5 = a5 + A;
                    b5 = b5 + B;
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('A4', 772, 230);
                    stroke(255, 204, 0);
                    line(a5, b5, 800, 200);
                    if (a5 >= 430) {
                        aa = a5 - 30;
                        bb = b5;
                    } else {
                        aa = 400;
                        bb = 382.5;
                    }
                    fill(255, 204, 0)
                    square(aa, bb, 30);
                    fill(400)
                    textSize(18);
                    text('A4', aa + 3, bb + 19);
                }
                fill(400)
                if (a5 == 400) {
                    arr = [0, 0, 0, 0, 1];
                }
            }
        }
    }

    if (cnt7 == 1) {
        if (x6 <= 5000) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);

            x6 = x6 + X; //400  1
            y6 = y6 + Y; //0    0.1
            if (x6 <= 1000) {
                text('5', 380, 15);
                stroke('red');
                line(x6, y6, 400, 0);
                if (x6 <= 770) {
                    xx = x6;
                    yy = y6;
                } else {
                    xx = 770;
                    yy = 185;
                }
                fill('red');
                square(xx, yy, 30);
                fill(400);
                textSize(19);
                text('5', xx + 8.5, yy + 19);
            }
            fill('white');
            if (x6 >= 950) {

                if (a6 >= 400) {
                    a6 = a6 + A;
                    b6 = b6 + B;
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('A5', 772, 230);
                    stroke(255, 204, 0);
                    line(a6, b6, 800, 200);
                    if (a6 >= 430) {
                        aa = a6 - 30;
                        bb = b6;
                    } else {
                        aa = 400;
                        bb = 382.5;
                    }
                    fill(255, 204, 0)
                    square(aa, bb, 30);
                    fill(400)
                    textSize(18);
                    text('A5', aa + 3, bb + 19);

                }
                fill(400)

                if (a6 == 400) {
                    arr = [0, 0, 0, 0, 0];
                    Swal.fire({

                        backdrop: false,
                        target: '#sketch-holder',
                        width: '390px',
                        position: 'center',
                        customClass: {
                            container: 'position-absolute',
                            popup: "swal2-popup"
                        },
                        icon: "info",
                        text: 'Input the total numbers of frames transmitted.'

                    })
                    button.mousePressed(myInputEvent);
                }
            }
        }
    }
};