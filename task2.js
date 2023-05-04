
// JS Task 2

function QuickSort(arr){
    if (arr.length < 2){
       return arr;
    }
    var pivotValue = arr[arr.length - 1]; //  Step-1
    var leftArray = [];  //  Step-2
    var rightArray = [];  //  Step-2
    for (var i = 0; i < arr.length - 1; i++){
       if (arr[i] < pivotValue){
        leftArray.push(arr[i]);  //left array for small numbers
       }
       else{
        rightArray.push(arr[i]); //right array for larg numbers
       }
    } 
    return [QuickSort(leftArray), pivotValue ,QuickSort(rightArray)];
 }
 var arr = [3, 0, 2, 5, -1 ,4 ,1 ,10 ,23 ,15 ,20 ,12];
 result= QuickSort(arr);
//  console.log(result);
document.write(result);
