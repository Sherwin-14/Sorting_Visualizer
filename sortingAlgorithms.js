// sortingAlgorithms.js

async function randomizeArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    visualizeBars(array);
}
// Insertion Sort
async function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;

        await new Promise(resolve => setTimeout(() => {
            visualizeBars(array);
            resolve();
        }, 100));
    }
}
// Selection Sort
async function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]];

        await new Promise(resolve => setTimeout(() => {
            visualizeBars(array);
            resolve();
        }, 100));
    }
}
// Bubble Sort
async function bubbleSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                await new Promise(resolve => setTimeout(() => {
                    visualizeBars(array);
                    resolve();
                }, 100));
            }
        }
    }
}

// Visulaing bars

async function visualizeBars(array) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (const value of array) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 5}px`; // Adjust the height based on the value
        container.appendChild(bar);
    }
}

// Merge Sort
async function mergeSort(array, start = 0, end = array.length - 1) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        await mergeSort(array, start, mid);
        await mergeSort(array, mid + 1, end);
        await merge(array, start, mid, end);
    }
}

async function merge(array, start, mid, end) {
    let left = array.slice(start, mid + 1);
    let right = array.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k++] = left[i++];
        } else {
            array[k++] = right[j++];
        }
    }

    while (i < left.length) {
        array[k++] = left[i++];
    }

    while (j < right.length) {
        array[k++] = right[j++];
    }

    await new Promise(resolve => setTimeout(() => {
        visualizeBars(array);
        resolve();
    }, 100));
}

// Quick Sort
async function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pi = await partition(array, low, high);
        await quickSort(array, low, pi - 1);
        await quickSort(array, pi + 1, high);
    }
}

async function partition(array, low, high) {
    let pivot = array[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    await new Promise(resolve => setTimeout(() => {
        visualizeBars(array);
        resolve();
    }, 100));

    return (i + 1);
}

// Shell Sort
async function shellSort(array) {
    for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j;

            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }

            array[j] = temp;
        }

        await new Promise(resolve => setTimeout(() => {
            visualizeBars(array);
            resolve();
        }, 100));
    }
}

