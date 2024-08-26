

let myarray = ['z','g','f','c','a','i','b'];


function sortingArray(myarray) {
    for (var i = 0; i < myarray.length - 1; i++) {
        for (var j = i + 1; j < myarray.length; j++) {
            if (myarray[i] > myarray[j]) {
                let temp = myarray[i];
                myarray[i] = myarray[j];
                myarray[j] = temp;
            }
        }
    }
    return myarray; 
}


let sortedArray = sortingArray(myarray);

console.log(sortedArray); 