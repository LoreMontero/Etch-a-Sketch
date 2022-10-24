// const slider = document.querySelector('#slider');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
const sketchPad = document.querySelector('.sketchPad');
const colorMode = document.querySelector('#colorChoice');
const modes = document.querySelectorAll('.mode');
const canvas = document.querySelector('.painting');

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

const randomNumber = () => Math.floor(Math.random() * 256);
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

modes.forEach(item => {
    item.addEventListener('click', event => {
        item.style.backgroundColor = 'rgb(8, 116, 238)';
    });
});

const painting = document.querySelectorAll('.painting');

colorMode.addEventListener('click', event => {
    painting.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "black";
        });
    });
});

clear.addEventListener('click', event => {
    painting.forEach(item => {
        item.style.backgroundColor = "white"; 
    });
});

eraser.addEventListener('click', event => {
    painting.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "white";
        });
    });
});

rainbow.addEventListener('click', event => {
    painting.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });
});