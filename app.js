const body = document.body;
const colorSwitch = document.querySelector(".color");
const btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener("click", function(){
    let color1 = getRandomColor ();
    let color2 = getRandomColor ();
    let color3 = getRandomColor ();

    colorString = `rgb(${color1}, ${color2}, ${color3})`;

    body.style.backgroundColor = colorString;
    colorSwitch.innerHTML = colorString;
})

function getRandomColor () {
    return Math.floor(Math.random() * 256);
}