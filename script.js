let row = 200;
let col = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i=0; i < row; i++) {
    let addresscol = document.createElement("div");
    addresscol.setAttribute("class", "address-col")
    addresscol.innerText = i + 1;
    addressColCont.appendChild(addresscol);
}

for (let i=0; i < col; i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class" , "address-row")
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressRow);
}

for (let i = 0; i < row; i++) {
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for (let j = 0; j < col; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay(cell, i, j);
    }
    cellsCont.appendChild(rowCont);
}

function addListenerForAddressBarDisplay(cell, i, j) {
    cell.addEventListener ("click", (e) => {
        let rowId = i + 1;
        let colId = String.fromCharCode(65 + j);
        addressBar.value = `${colId}${rowId}`;
    })
}