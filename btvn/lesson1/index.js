// //b1 Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

// function reverse (s) {
//     return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
// }
// let oldString = "abcedf";
// let reverseString = reverse(oldString);
// console.log(reverseString);




// //b2 Viết một function xoá các phần từ trùng lặp trong một mảng các số:

// function delDuplicate(arr) {
//     let newArr = []
//     newArr = arr.filter(function (item) {
//       return newArr.includes(item) ? '' : newArr.push(item)
//     })
//     return newArr
//   }
//   console.log(delDuplicate([1, 2, 3, 5, 4, 2, 6, 4]))


//b3 Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:

function maxDuplicateelement(array){
    array.sort();
    console.log(array)
    let max =[0,0];
    let count = 1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] === array[i-1]) ++count; 
        else{
             if (max[1] < count){ 
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "value: "+max[0] + ";" +"count:"+max[1]);
}
let array = [ 1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3 ];

maxDuplicateelement(array);



