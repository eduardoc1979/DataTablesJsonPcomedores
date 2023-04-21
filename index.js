
function testGS(){

const url = "https://script.google.com/macros/s/AKfycbw3oH-M_q8EGcNIieb2_2y1HMHWo9JdhnIIdgaqE-7IzUlvQ9A7ZcbcyNjoNsExCQh-ow/exec"
fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;

    });
}

document.getElementById("btn").addEventListener("click",testGS);