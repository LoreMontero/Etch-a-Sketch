// const slider = document.querySelector('#slider');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
const sketchPad = document.querySelector('.sketchPad');
// const colorMode = document.querySelector('#colorChoice');
const modes = document.querySelectorAll('.mode');
const canvas = document.querySelector('.painting');
let paintColor = "black";

const createDivs = (size) => {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < 4096; i++) {
        let square = document.createElement('div');
        square.classList.add('painting');
        sketchPad.insertAdjacentElement('beforeend', square);
    }
}
createDivs(20);

modes.forEach(item => {
    item.addEventListener('click', event => {
        item.style.backgroundColor = 'rgb(76, 225, 68)';
    });
});

const painting = document.querySelectorAll('.painting');
painting.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = `${paintColor}`;
    });
});

clear.addEventListener('click', event => {
    sketchPad.style.backgroundColor = 'blue';
});

eraser.addEventListener('click', event => {
    paintColor = "white";
});

rainbow.addEventListener('click', event => {
    
});