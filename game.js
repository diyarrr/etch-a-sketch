const div = document.getElementsByClassName("box");
const button = document.querySelector("button");
const container = document.querySelector(".container");

function createGrid(x) {
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            const div = document.createElement("div");
            div.style.height = 960 / x + "px";
            div.style.width = 960 / x + "px";
            div.classList.add("box");
            container.append(div);
        }
    }
}

createGrid(16);

for(let i = 0; i < div.length; i++) {
    div[i].addEventListener("mouseover", function(e) {
        div[i].style.backgroundColor = "black";
    });
}

button.addEventListener("click", function(e) {

    let gridNum = prompt("Enter the number of grid");
    if(gridNum > 100) {
        alert("You can enter maximum 100");
    }else{
        removeAndSetUp(gridNum);
        for(let i = 0; i < div.length; i++) {
            div[i].addEventListener("mouseover", function(e) {
                div[i].style.backgroundColor = "black";
            });
        }
    }
})


// Removes and also creates new grid
function removeAndSetUp(x) {
    removeGrid();
    createGrid(x);
}

// Removing the existing grid
function removeGrid() {
    const div = document.getElementsByClassName("box");
    while(div[0]) {
        div[0].parentNode.removeChild(div[0]);
    }
}


