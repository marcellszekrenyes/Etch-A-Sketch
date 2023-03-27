
const container = document.querySelector('#container');
const resetButton = document.querySelector('#resetButton');
let counter = 0;
resetButton.addEventListener('click', gridCreator);


function gridCreator() {
    let gridSize;

    while (true) {
        gridSize = prompt("What should be the size of the grid? Pick a number from 1 to 100");
        if (gridSize <= 0 || gridSize > 100) {
            alert("I said from 1 to 100!")
        } else {
            break;
        }
    }

    resetGrid();

    const disposableContainer = document.createElement('div');
    disposableContainer.setAttribute('id', 'dispContainer');
    container.appendChild(disposableContainer);

    for (let i = 0; i < gridSize; i++) {
         const gridLine = document.createElement('div');
         gridLine.classList.add('gridLines');
         for (let i = 0; i < gridSize; i++) {
             const gridElement = document.createElement('div');
             gridElement.classList.add('gridElement');
             gridLine.appendChild(gridElement);
         }
         disposableContainer.appendChild(gridLine);
     }
}

function resetGrid() {
    const disposableCopy = document.getElementById('dispContainer');
    if (counter > 0) {
        disposableCopy.remove();
    }
    counter++;
}