//shift method

let arr =[2,4,6,8,10]


for(let i=0; i<arr.length-1;i++){


var j=arr[i+1];

console.log("Remove first element:"+ j);

}


//unshift method




let array = [2, 4, 6, 8, 10];
let newElement = 1;

function addElementToStart(array, newElement) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }

    array[0] = newElement;

    return array;
}

addElementToStart(array, newElement);

console.log("Add First element :"+ array); 
