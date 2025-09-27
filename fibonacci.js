//Iterative solution

function fibs(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;   
}

console.log(fibs(8));

//Recursive solution

function fibsRec(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    let arrPrevious = fibsRec(n - 1);
    let sum = arrPrevious[arrPrevious.length - 1] + arrPrevious[arrPrevious.length - 2];
    return arrPrevious.concat(sum);
}
    
console.log(fibsRec(8));
