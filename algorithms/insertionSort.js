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

let swapCount = [];

export function insertionSort(heightArray, speed) {
    console.log(heightArray);

    for (let i = 0; i < heightArray.length - 1; i++)
        swapCount.push(0);

    for (let i = 0; i < heightArray.length - 1; i++) {
        let compareIndex = i;
        for (let j = compareIndex + 1; compareIndex >= 0; j--) {
            if (heightArray[j] < heightArray[compareIndex]) {
                swapCount[i]++;
                let temp = heightArray[j];
                heightArray[j] = heightArray[compareIndex]
                heightArray[compareIndex] = temp;
            }
            else
                break;
            compareIndex--;
        }
    }

    animations(speed);
}

function animations(speed) {
    let array = document.querySelectorAll('.bars');

    let numComparisons = swapCount.map(value => value + 1);

    if (array.length === 1) {
        timerID = setTimeout(() => {
            setTimeout(() => {
                array[0].classList.add('sorted');
            }, 500 / speed)

            setTimeout(() => {
                array[0].classList.remove('sorted');

                setTimeout(enableAllButtons, 500);
            }, 2000 / speed)
        }, 500 / speed)
    }

    if (numComparisons[numComparisons.length - 1] === array.length) {
        numComparisons[numComparisons.length - 1] = array.length - 1
    }

    numComparisons[0] = 1;

    numComparisons = numComparisons.map((value, index) => {
        if (value > index + 1) {
            return index + 1;
        }
        return value;
    })

    numComparisons[0] = 1;

    let ms = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let compareIndex = i;
        for (let j = compareIndex + 1; numComparisons[i] > 0; j--) {

            numComparisons[i]--;
            let comparison = numComparisons[i];
            timerID = setTimeout(() => {
                console.log('j = ' + j);
                console.log('num comparsions ' + comparison)
                setTimeout(() => {
                    array[j].classList.add('active');
                    array[j - 1].classList.add('active');
                }, 300 / speed)

                setTimeout(() => {
                    array[j].classList.remove('active');
                    array[j - 1].classList.remove('active');
                }, 800 / speed)


                if (swapCount[i] > 0) {
                    swapCount[i]--;
                    setTimeout(() => {

                        //array[j].classList.add('swap');
                        //array[j - 1].classList.add('swap');

                        let tempText = array[j].innerText;
                        let tempHeight = array[j].style.height;
                        array[j].innerText = array[j - 1].innerText;
                        array[j].style.height = array[j - 1].style.height;
                        array[j - 1].innerText = tempText;
                        array[j - 1].style.height = tempHeight;

                        /*setTimeout(() => {
                            array[j].classList.remove('swap');
                            array[j - 1].classList.remove('swap')

                        }, 600 / speed)*/

                    }, 1200 / speed)
                }
                /*if  (comparison === 0) {
                     setTimeout(() => {
                         for (let k = 0; k <= i + 1; k++) {
                             array[k].classList.add('sorted')
                         }
                     }, 2000 / speed)
 
                     if (!(comparison === 0 && i === array.length - 2))
                         setTimeout(() => {
                             for (let k = 0; k <= i + 1; k++) {
                                 array[k].classList.remove('sorted')
                             }
                         }, 2500 / speed * speed)
                 }*/

                if (comparison === 0 && i === array.length - 2) {

                    setTimeout(() => {
                        for (let k = 0; k <= array.length; k++) {
                            array[k].classList.add('sorted')
                        }
                    }, 1800 / speed);

                    setTimeout(() => {
                        for (let k = 0; k <= array.length; k++) {
                            array[k].classList.remove('sorted')
                        }


                    }, 2800 / speed);

                    setTimeout(enableAllButtons, 2800 / speed);
                }
            }, ms / speed)
            ms += 2700 / speed
            compareIndex--;
        }
    }
}

