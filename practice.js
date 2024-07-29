function countsort(array){
    let countrange = (Math.max(...array) + 1)
    let count = Array(countrange).fill(0);
    //counting
    for(let i = 0; i < array.length; i++){
        count[array[i]] += 1;
    }
    console.log("occuence: ", count);
    //cumulative
    for(let i = 0; i < count.length - 1; i++){
        count[i + 1] += count[i];
    }
    console.log("cumulatve: ", count);
    // in cumulative (running sum) , value held at an index is the last position of that value in sorted ersion of array
    // idex of value in sorted array will be count[value] - 1

    //we iterate from end (work backwords) of original array and decrement value of count cumuative
    let sortedarray = Array(array.length).fill(0);
    for(let i = array.length - 1; i >= 0; i--){
        count[array[i]]--;
        sortedarray[count[array[i]]] = array[i];
    }
    console.log(sortedarray);
}

let array = [3, 5, 6, 8, 6, 9, 1];

countsort(array);