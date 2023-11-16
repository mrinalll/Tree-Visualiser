function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function parent(index) {
  return Math.floor((index - 1) / 2);
}

function leftChild(index) {
  return 2 * index + 1;
}

function rightChild(index) {
  return 2 * index + 2;
}

function makeHeap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    while (k > 0 && arr[k] > arr[parent(k)]) {
      swap(arr, parent(k), k);
      k = parent(k);
    }
  }
  return arr;
}

function reheapifyDown(arr, length) {
  let index = 0;
  let isHeap = false;

  while (!isHeap && leftChild(index) < length) {
    let bigChildIndex;
    if (rightChild(index) >= length) {
      bigChildIndex = leftChild(index);
    } else {
      bigChildIndex = arr[leftChild(index)] > arr[rightChild(index)] ? leftChild(index) : rightChild(index);
    }

    if (arr[index] < arr[bigChildIndex]) {
      swaps.push([index, bigChildIndex]);
      console.log('reheapifying', index, bigChildIndex);
      swap(arr, index, bigChildIndex);
      index = bigChildIndex;
    } else {
      isHeap = true;
    }
  }
}
