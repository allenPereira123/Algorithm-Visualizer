import { enableAllButtons } from './enableButtons.js'
import { generateArray } from '../script.js'
let reset = document.getElementById('reset');
let random = document.getElementById('random');
let timerID = 0;

reset.addEventListener('click', () => {
    clearTimeout(timerID);
    enableAllButtons();
})

random.addEventListener('click', () => {
    clearTimeout(timerID);
    enableAllButtons();
    generateArray();

})


let animationArray = [];

export function quickSortHelper(array, speed) {
    animationArray = [];
    console.log('quicksort array ' + array);
    quickSort(array, 0, array.length - 1);
    animation(speed);
    console.log('quicksort ' + array);
}




function quickSort(array, left, right) {

    if (left >= right) {
        animationArray.push({ a: left, b: null, pivot: null, sorted: true, swap: false, baseCase: true })
    }
    // Only proceed if left is less than right
    if (left < right) {
        // Find the position of pivot
        let sortedPos = partition(array, left, right);

        // Recursively call left and right subarray to the pivot
        quickSort(array, left, sortedPos - 1);
        quickSort(array, sortedPos + 1, right);
    }
}


function partition(array, left, right) {
    let pivot = array[right];

    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            animationArray.push({ a: i, b: j, pivot: right, sorted: false, swap: true, baseCase: false })
            swap(array, i, j);
        }
        else {
            animationArray.push({ a: i, b: j, pivot: right, sorted: false, swap: false, baseCase: false })
        }
    }

    swap(array, i + 1, right);
    animationArray.push({ a: i + 1, b: right, pivot: right, sorted: true, swap: true, baseCase: false })

    return i + 1; // Return the pivot's final resting position
}

// Helper function to swap elements at 2 different array indices
function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

function animation(speed) {
    let array = document.querySelectorAll('.bars');
    console.log(speed);
    let ms = 0;


    for (let i = 0; i < animationArray.length; i++) {

        timerID = setTimeout(() => {
            if (!animationArray[i].baseCase && animationArray[i].sorted !== true) {

                setTimeout(() => {
                    let b = animationArray[i].b;
                    let pivot = animationArray[i].pivot;

                    array[b].classList.add('active');
                    array[pivot].classList.add('active');


                }, 300 / speed)

                setTimeout(() => {
                    let b = animationArray[i].b;
                    let pivot = animationArray[i].pivot

                    array[b].classList.remove('active');
                    array[pivot].classList.remove('active');

                }, 700 / speed)
            }

            if (animationArray[i].swap === true) {
                setTimeout(() => {
                    array[animationArray[i].a].classList.add('swap');
                    array[animationArray[i].b].classList.add('swap');
                    swapValues(array, animationArray[i].a, animationArray[i].b);
                }, 1000 / speed)

                setTimeout(() => {
                    array[animationArray[i].a].classList.remove('swap');
                    array[animationArray[i].b].classList.remove('swap');
                }, 1400 / speed)

            }

            if (animationArray[i].sorted && animationArray[i].swap === false) {
                setTimeout(() => {
                    array[animationArray[i].a].classList.add('sorted');

                }, 1000 / speed)
            }

            else if (animationArray[i].sorted) {
                setTimeout(() => {
                    array[animationArray[i].a].classList.add('sorted');

                }, 1800 / speed)
            }

            if (i === animationArray.length - 1) {
                setTimeout(() => {
                    for (let k = 0; k < array.length; k++) {
                        array[k].classList.remove('sorted')
                    }

                    setTimeout(enableAllButtons, 500);

                }, 1500 / speed)
            }



        }, ms / speed)
        ms += 2200 / speed;
    }
}

function swapValues(array, a, b) {
    let tempHeight = array[a].style.height;
    let tempValue = array[a].innerText;
    array[a].style.height = array[b].style.height;
    array[a].innerText = array[b].innerText;
    array[b].style.height = tempHeight;
    array[b].innerText = tempValue;
}

