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


export function selectionSort(heightArray, speed) {
    let minIndexArray = [];

    for (let i = 0; i < heightArray.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < heightArray.length; j++) {
            if (heightArray[j] < heightArray[minIndex]) {
                minIndex = j;
            }
        }

        let temp = heightArray[minIndex];
        heightArray[minIndex] = heightArray[i];
        heightArray[i] = temp;

        minIndexArray.push(minIndex);

    }


    animation(minIndexArray, speed)

}

function animation(minIndexArray, speed) {
    let array = document.querySelectorAll('.bars');

    if (array.length === 1) {
        setTimeout(() => {
            array[0].classList.add('sorted');
        }, 500)

        setTimeout(() => {
            array[0].classList.remove('sorted');

            setTimeout(enableAllButtons, 500);
        }, 2000)
    }

    let ms = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            timerID = setTimeout(() => {
                setTimeout(() => {
                    array[j].classList.add('active');
                }, 200 / speed)

                setTimeout(() => {
                    array[j].classList.remove('active');
                }, 700 / speed)

                if (j === array.length - 1) {
                    setTimeout(() => {
                        array[minIndexArray[i]].classList.add('swap');
                        array[i].classList.add('swap');
                    }, 900 / speed)


                    setTimeout(() => {
                        let tempText = array[minIndexArray[i]].innerText;
                        let tempHeight = array[minIndexArray[i]].style.height;
                        array[minIndexArray[i]].innerText = array[i].innerText;
                        array[minIndexArray[i]].style.height = array[i].style.height;
                        array[i].innerText = tempText;
                        array[i].style.height = tempHeight;
                    }, 1100 / speed)


                    setTimeout(() => {
                        array[minIndexArray[i]].classList.remove('swap');
                        array[i].classList.remove('swap');
                        array[i].classList.add('sorted');
                    }, 1700 / speed)

                    if (i === array.length - 2 && j === array.length - 1) {
                        setTimeout(() => {
                            array[array.length - 1].classList.add('sorted')
                            setTimeout(() => {
                                array.forEach(element => {
                                    element.classList.remove('active');
                                    element.classList.remove('sorted');
                                    element.classList.remove('swap');

                                    setTimeout(enableAllButtons, 500);

                                })
                            }, 2000 / speed)
                        }, 1900 / speed)
                    }
                }
            }, ms / speed)
            ms += 2000 / speed;
        }



    }
}