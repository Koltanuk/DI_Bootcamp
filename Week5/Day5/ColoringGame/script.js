document.addEventListener('DOMContentLoaded', () => {
    const colors = [
        'red', 'orangered', 'orange', 'yellow', 'yellowgreen', 'lightgreen',
        'green', 'turquoise', 'cyan', 'lightskyblue', 'dodgerblue', 'blue',
        'darkblue', 'indigo', 'darkmagenta', 'violet', 'lightpink', 'lightgray',
        'gray', 'black', 'white'
    ];
    const palette = document.querySelector('.palette');
    const drawingGrid = document.querySelector('.drawing-grid');
    let selectedColor = '';

    // Create color palette
    colors.forEach(color => {
        const colorSquare = document.createElement('div');
        colorSquare.style.backgroundColor = color;
        colorSquare.addEventListener('click', () => {
            selectedColor = color;
        });
        palette.appendChild(colorSquare);
    });

    // Create drawing grid
    for (let i = 0; i < 60; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.addEventListener('mousedown', () => {
            if (selectedColor) {
                gridSquare.style.backgroundColor = selectedColor;
            }
        });
        gridSquare.addEventListener('mouseover', (e) => {
            if (e.buttons === 1 && selectedColor) {
                gridSquare.style.backgroundColor = selectedColor;
            }
        });
        drawingGrid.appendChild(gridSquare);
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    const button = document.getElementById('button');
    button.addEventListener("click", function(){
        for (fill_block of fill_blocks){
            fill_block.style.backgroundColor = "white";
        }
    });
});

