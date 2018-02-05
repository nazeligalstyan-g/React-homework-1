//------------ Extra 1: filter ??

// const isBigger = function(value, index,arr){
//     if(value>5) {
//         return true;
//     }
//     return false;
// };
//
// function filter(array, callback){
//
//     let result =[];
//     for(let i=0; i<array.length; i++){
//         if (callback(array[i], i, array)){
//             result.push(array[i]);
//         }
//     }
//     return result;
//
// }
//
//
// console.log( filter([1,20,30, 2, 4, 1, 2, 50, 10], isBigger));


//------------ Extra 2: filter

//------------ Ex1 2: Given two objects. Write a function shallowCompare(a, b) that performs shallow compare between object a and b.
// shallowCompare must iterate on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.

// const shallowCompare = function(a, b){
//     aValues = [];
//     bValues = [];
//     for(let key in a){
//         aValues.push(a[key]);
//     }
//     for(let key in b){
//         bValues.push(b[key]);
//     }
//     debugger;
//
//     if( aValues.forEach(function(el){
//         return el*1;}) === bValues.forEach(function(el){return el;}) ){
//         return true;
//     }else{
//         return false;
//     }
// };
//
// console.log(shallowCompare({a:5, s: 10, d:100}, {d:5, k:1200}));



//const a = { a: '1' };
//const b = { a: '1', b: '2' };
//shallowCompare(a, b); // false



///////////////////////////////EX-s

function shallowCompare(obj1, obj2){
    const values1 = [];
    const values2 = [];
    let  result;
    for(let key in obj1){
        values1.push(obj1[key]);
    }
    for(let key in obj2){
        values2.push(obj2[key]);
    }
    if(values1.length !== values2.length){
        return;
    }else{
        for(let i=0; i<values1.length; i++){
            if(values1[i] === values2[i]){

                result = true;
            }else{

                result = false;
            }
        }
    }
    console.log(result);
}

shallowCompare({a:10, b: 30}, {j:10, o:30});



