const slider = document.querySelector('#slider');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
const sketchPad = document.querySelector('.sketchPad');
const square = document.createElement('div');

const createDivs = (size) => {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < 4096; i++) {
        
        square.classList.add('painting');
        square.style.backgroundColor = "white";
        sketchPad.insertAdjacentElement("beforeend", square);
    }
}

createDivs(20);

sketchPad.addEventListener('click', (e) => {
    square.style.backgroundColor = "black"
})