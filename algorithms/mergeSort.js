

function mergeSortHelper(array) {
    mergeSort(array, 0, array.length - 1)
}


function mergeSort(array, lo, hi) {
    if (lo >= hi)
        return;

    let mid = lo + (hi - lo) / 2;

    mergeSort(array, lo, mid);
    mergeSort(array, mid + 1, hi);

    let aux = [];
    let i = lo;
    let j = mid + 1;
    let k = 0;

    while (i <= mid || j <= hi) {
        if (j > hi)
            aux[k++] = array[i++];
        else if (i > mid)
            aux[k++] = array[j++];
        else if (array[i] < array[j])
            aux[k++] = array[i++];
        else
            aux[k++] = array[j++];
    }

    console.log(aux);

    for (i = lo; i <= hi; i++) {
        array[i] = aux[i - lo];
    }
}
let array = [5, 4, 3, 2, 1];
mergeSortHelper(array);

console.log(array);
