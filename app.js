// // var desire =  [2, 3, 5, 7, 8, 9, 10];
var numbers = [5, 7, 9, 8, 10, 3, 2]; // 2,3,5,7,8,9,10
document.getElementById('top').innerHTML = numbers;
// console.log(numbers);
// ------- For Ascending Order ------------
function ascending() {
    for (var i = 1; i <= numbers.length; i++ ) { // 2 <= 7 | run 7 times
        for (var j = 0; j < numbers.length-1; j++) { // 0 < 6 | run 6 times
    
            if ( numbers[j] > numbers[j+1]) { // 9 > 2
    
                         // indexNumber/khnJanaH   deleting            adding
                numbers.splice( j,                    0,         numbers[j+1],numbers[j])
    
                numbers.splice(j+2 , 2);
    
                console.log(numbers);
    
            }
        }
    
    }
    
    document.getElementById('box1').innerHTML = numbers;
}
// console.log(numbers); // no change in array 
// ------- For Descending Order ------------
function descending() {
    for (var i = 1; i <= numbers.length; i++ ) { // 2 <= 7 | run 7 times
        for (var j = 0; j < numbers.length-1; j++) { // 0 < 6 | run 6 times
    
            if ( numbers[j] < numbers[j+1]) { // 9 > 2
    
                         // indexNumber/khnJanaH   deleting            adding
                numbers.splice( j,                    0,         numbers[j+1],numbers[j])
    
                numbers.splice(j+2 , 2);
    
                console.log(numbers);
    
            }
        }
    
    }
    
    document.getElementById('box2').innerHTML = numbers;
}