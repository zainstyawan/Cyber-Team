function hack() {
    let text = "> Hacking target...\n> Bypassing security...\n> Accessing database...\n> DONE!";
    alert(text);
}

let i = 0;
let txt = "> Connecting to server...";
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();