let squareSize = document.getElementById("squareSize");
let container = document.querySelector(".container");
let label = document.getElementById("label1");

// display the starting grid size value when loading the page
label.textContent = `Grid size: ${squareSize.value}`; 
generateGrid(squareSize.value);

// display the new grid size value when moving the slider
squareSize.addEventListener("change", function(){ 
    label.textContent = `Grid size: ${squareSize.value}`;
    generateGrid(squareSize.value);
})

function generateGrid(size) {

    // remove all the existing squares
    document.querySelectorAll(".square").forEach(el => el.remove());

    // generate new squares
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.flexBasis =  100/size + "%";
            container.appendChild(square);
        }
    }

    // give the new squares the change color event
    let squares = document.querySelectorAll(".square");
    squares.forEach(el => el.addEventListener("mouseover", changeColor));
}

// function changeColor(e) {
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     e.target.style.backgroundColor = "#" + randomColor;
//     console.log(e.target.style.backgroundColor)
// }

function changeColor(e) {
    let currColor = window.getComputedStyle(e.target).backgroundColor;
    let rgbValues = currColor.slice(4).slice(0, -1).split(", ");
    let valueR = rgbValues[0] - 25.5;
    let valueG = rgbValues[1] - 25.5;
    let valueB = rgbValues[1] - 25.5;

    e.target.style.backgroundColor =  `rgb(${valueR},${valueG},${valueB})`;
}