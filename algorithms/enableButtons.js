function enableAllButtons() {
    let bubbleSortBtn = document.getElementById('bubble')
    let selectionSortBtn = document.getElementById('selection')
    let insertionSortBtn = document.getElementById('insertion')
    let quickSortBtn = document.getElementById('quick')
    let speedInputBtn = document.getElementById('speed');
    let sizeInput = document.getElementById('size');

    bubbleSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    quickSortBtn.disabled = false;
    speedInputBtn.disabled = false;
    sizeInput.disabled = false;

}

export { enableAllButtons }