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

export function bubbleSort(heightArray, speed) {
    let swaps = heightArray.map(value => 0);
    let animationArray = [];

    for (let i = 0; i < heightArray.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < heightArray.length - i - 1; j++) {
            let sorted = (j + 1 === heightArray.length - i - 1) ? true : false;
            if (heightArray[j] > heightArray[j + 1]) {
                swaps[i]++;
                swapped = true;

                animationArray.push({ a: j, b: j + 1, swap: true, sorted: sorted })
                swap(heightArray, j, j + 1)
                swapped = true;
            }
            else
                animationArray.push({ a: j, b: j + 1, swap: false, sorted: sorted })
        }

        if (!swapped)
            break;


    }

    swaps = swaps.filter(swaps => swaps != 0)
    console.log(swaps.length);
    animation(animationArray, speed, swaps);
}

function swap(array, current, next) {
    let temp = array[current];
    array[current] = array[next];
    array[next] = temp;
}

function animation(animationArray, speed, swaps) {

    let array = document.querySelectorAll('.bars');
    let ms = 0;

    console.log(array);

    console.log(animationArray);

    if (swaps.length > 0) {
        for (let i = 0; i < animationArray.length; i++) {

            timerID = setTimeout(() => {
                setTimeout(() => {
                    array[animationArray[i].a].classList.add('active');
                    array[animationArray[i].b].classList.add('active');
                }, 300 / speed)

                setTimeout(() => {
                    array[animationArray[i].a].classList.remove('active');
                    array[animationArray[i].b].classList.remove('active');
                }, 800 / speed)

                if (animationArray[i].swap === true) {
                    setTimeout(() => {
                        swapValues(array, animationArray[i].a, animationArray[i].b)
                    }, 1200 / speed)
                }

                if (animationArray[i].sorted === true) {
                    setTimeout(() => {
                        array[animationArray[i].b].classList.add('sorted');
                    }, 1500 / speed)
                }

                if (i + 1 === animationArray.length) {
                    setTimeout(() => {
                        for (let k = 0; k < array.length; k++) {
                            array[k].classList.add('sorted');
                        }

                        array[0].classList.add('sorted');
                    }, 1550 / speed)

                    setTimeout(() => {
                        for (let k = 0; k < array.length; k++) {
                            array[k].classList.remove('sorted');
                        }

                        enableAllButtons();
                    }, 2500 / speed)
                }
            }, ms / speed)
            ms += 2000 / speed;
        }
    }
    else {

        for (let i = 0; i < animationArray.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    array[animationArray[i].a].classList.add('active');
                    array[animationArray[i].b].classList.add('active');
                }, 300 / speed)

                setTimeout(() => {
                    array[animationArray[i].a].classList.remove('active');
                    array[animationArray[i].b].classList.remove('active');
                }, 800 / speed)

                if (i + 1 === animationArray.length) {
                    setTimeout(() => {
                        for (let k = 0; k < array.length; k++) {
                            array[k].classList.add('sorted');
                        }
                        array[0].classList.add('sorted');
                    }, 1550 / speed)

                    setTimeout(() => {
                        for (let k = 0; k < array.length; k++) {
                            array[k].classList.remove('sorted');
                        }

                        enableAllButtons();
                    }, 2500 / speed)
                }

            }, ms / speed)
            ms += 2000 / speed;
        }
    }
}


function swapValues(array, index1, index2) {

    let tempText = array[index1].innerText;
    let tempHeight = array[index1].style.height;
    array[index1].innerText = array[index2].innerText;
    array[index1].style.height = array[index2].style.height;
    array[index2].innerText = tempText;
    array[index2].style.height = tempHeight;

}



