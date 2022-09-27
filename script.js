const createDivs = (size) => {
    const sketchPad = document.querySelector('.sketchPad');
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < 400; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "blue";
        sketchPad.insertAdjacentElement("beforeend", square);
    }
}

createDivs(20)