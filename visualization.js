// visualization.js

function changeSize(array, newSize) {
    // Change the size of bars
    for (let i = 0; i < array.length; i++) {
        array[i] = newSize; // You might want to adjust this based on your requirements
    }
    visualizeBars(array);
}
