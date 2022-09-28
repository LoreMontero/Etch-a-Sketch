const slider = document.querySelector('#slider');


const createDivs = (size) => {
    const sketchPad = document.querySelector('.sketchPad');
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < 4096; i++) {
        let square = document.createElement('div');
        square.classList.add('painting')
        square.style.backgroundColor = "white";
        sketchPad.insertAdjacentElement("beforeend", square);
    }
}

createDivs(20);
