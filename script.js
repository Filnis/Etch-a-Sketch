console.log("hello");

let squareSize = document.getElementById("squareSize");
let container = document.querySelector(".container");

// display the starting grid size value when loading the page
document.getElementById("sliderValue").textContent = squareSize.value;
generateGrid(squareSize.value);

// display the new grid size value when moving the slider
squareSize.addEventListener("change", function(){ 
    document.getElementById("sliderValue").textContent = squareSize.value;
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
            square.style.flexBasis = Math.floor(100/size)-0.2 + "%";
            container.appendChild(square);
        }
    }

    // give the new squares the change color event
    let squares = document.querySelectorAll(".square");
    squares.forEach(el => el.addEventListener("mouseover", changeColor));
}

function changeColor(e) {
    e.target.style.backgroundColor = "red"
}