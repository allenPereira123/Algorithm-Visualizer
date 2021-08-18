import { quickSortHelper } from './algorithms/quickSort.js'
import { insertionSort } from './algorithms/insertionSort.js'
import { selectionSort } from './algorithms/selectionSort.js'
import { bubbleSort } from './algorithms/bubbleSort.js'
import { enableAllButtons } from './algorithms/enableButtons.js'

let sizeInput = document.getElementById('size');
let sortingVizualizer = document.querySelector('.sorting-visualization');
let bubbleSortBtn = document.getElementById('bubble')
let selectionSortBtn = document.getElementById('selection')
let insertionSortBtn = document.getElementById('insertion')
let quickSortBtn = document.getElementById('quick')
let generateArrayBtn = document.getElementById('random');
let speedInput = document.getElementById('speed');
let resetBtn = document.getElementById('reset');
let prevArray = [];
let array = [];



resetBtn.addEventListener('click', resetArray);

generateArrayBtn.addEventListener('click', () => {
    enableAllButtons();
    generateArray();
})

sizeInput.addEventListener('change', generateArray);

bubbleSortBtn.addEventListener('click', () => {

    if (+speedInput.value > 0) {
        disableAllButtons();
        bubbleSort(array, +speedInput.value)
    }

});

selectionSortBtn.addEventListener('click', () => {

    if (+speedInput.value > 0) {
        disableAllButtons();
        selectionSort(array, +speedInput.value);
    }

});

insertionSortBtn.addEventListener('click', () => {

    if (+speedInput.value > 0) {
        disableAllButtons()
        insertionSort(array, +speedInput.value);
    }

});

quickSortBtn.addEventListener('click', () => {

    if (+speedInput.value > 0) {

        quickSortHelper(array, +speedInput.value + .1);
        disableAllButtons();
    }

})
// clears array before adding new elements
function clearArray() {
    let array = document.querySelectorAll('.bars');

    for (let i = 0; i < array.length; i++) {
        sortingVizualizer.removeChild(array[i]);
    }
}


function resetArray() {
    clearArray();
    array = [];
    let size = +sizeInput.value;
    let bars = document.querySelectorAll('.bars');

    enableAllButtons();

    for (let i = 0; i < size; i++) {
        let element = document.createElement('div');
        element.classList.add('bars');
        let height = prevArray[i];

        let heightStr = height + 'px';

        element.style.height = heightStr;
        element.innerText = size > 30 ? '' : height;


        sortingVizualizer.appendChild(element);

        array.push(height);
    }


}

// generates new random elements based on amount of elements selected
export function generateArray() {

    clearArray();
    array = [];
    let size = +sizeInput.value;
    let bars = document.querySelectorAll('.bars');

    enableAllButtons();

    for (let i = 0; i < size; i++) {
        let element = document.createElement('div');
        element.classList.add('bars');
        let height = generateRandomHeight();

        let heightStr = height + 'px';

        element.style.height = heightStr;
        element.innerText = size > 30 ? '' : height;


        sortingVizualizer.appendChild(element);

        array.push(height);
    }

    prevArray = [...array];

}

// generates psuedo random numbers between a range
function generateRandomHeight() {
    const maxHeight = window.innerHeight * .8 - 10;

    return Math.floor(Math.random() * (maxHeight - 20) + 20);
}

function disableAllButtons() {
    bubbleSortBtn.disabled = true;
    selectionSortBtn.disabled = true;
    insertionSortBtn.disabled = true;
    quickSortBtn.disabled = true;
    speedInput.disabled = true;
    sizeInput.disabled = true;
}



generateArray();





