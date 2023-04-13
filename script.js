const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");
let squaresPerSide = 16;

//Creates the entire grid
createGrid = () => {
    let numberOfCells = squaresPerSide * squaresPerSide;
    grid.style.setProperty("grid-template-columns", `repeat(${squaresPerSide}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${squaresPerSide}, 1fr)`);
    for (let i = 0; i < numberOfCells; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
}

//Allows user to choose grid size
updateGrid = () =>  {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 1fr)`);
    for (let i = 0; i < (userInput.value * userInput.value); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid();
});

createGrid();
