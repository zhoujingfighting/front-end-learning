"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// axios.get('http://gitlab.tpt.com/api/v4/projects?private_token=h1GA2qtQVxV4hneGxJJV')
// 	.then(res => console.log(res))
var quickSort = function (arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    if (start >= end) {
        return;
    }
    var pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    var pivot = arr[pivotIndex];
    swap(arr, pivotIndex, end);
    var i = start - 1;
    for (var index = start; index < end; index++) {
        if (arr[index] <= pivot) {
            i++;
            swap(arr, i, index);
        }
    }
    i++;
    swap(arr, i, end);
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
    return arr;
};
var swap = function (arr, i, j) {
    if (i !== j) {
        var index = arr[i];
        arr[i] = arr[j];
        arr[j] = index;
    }
};
console.log(quickSort([10, 7, 4, 3, 2, 6567, 34, 6, 3]));
