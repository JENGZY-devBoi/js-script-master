// // Variable
let number1 = 1;

// String intorapotion
console.log(`This is string literal ${number1}`);


// ================
// ARRAY
// ================

// * function
const arr0 = ['jeng', 'nui', 'tong', 'bew'];

arr0[0];

arr0.push('woon');

// arr0.reverse();
console.log(arr0.slice(1, -1))




//* map
const arr1 = ['banna', 'apple', 'carrot', 'orange'];


// เติม s ให้ทุกตัวใน array
const fruit1 = arr1.map((item) => {
    const text = item + 's';
    return text;
})
console.log(fruit1);


// เติมตัวเลข
const fruit2 = arr1.map((item, index) => {
    const text = `${index + 1} ${item}`;
    return text;
});
console.log(fruit2);




//* filter
const arr2 = [1, 2, 3, 4, 5]


// filter ค่าใน array ที่มากกว่า 3
const num1 = arr2.filter((item) => {
    if (item > 3) {
        return item
    }
});
console.log(num1);


// filter ค่าใน array น้อยกว่าเท่ากับ 3
const num2 = arr2.filter((item) => item <= 3);
console.log(num2);



//* reduce
const arr3 = [10, 20 ,30, 40];

const sum = arr3.reduce((acc, curr) => {
    return curr + acc;
}, 0);

console.log(sum);




// ================
// OBJECT
// ================
const user = {
    lastname: 'saisrikaew',
    age: 21,
    verify: true
}

// user.firstname = 'prissana'
// user[test]
user?.firstname


delete user.lastname;

console.log(user)