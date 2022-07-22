/// chữa Bài tập checkpoint 2

////// Bài 1:

// function student(name, age, address) {

//   return {
//     "name": name,
//     // khóa : giá trị
//     "age": age,
//     "address": address,
//   }

// }

// console.log(student("Hiếu", 25, "Hà Nội"));


//// Bài 02: 

// let smartPhones = [
//   { name: 'iphone', price: 649 },
//   { name: 'Galaxy S6', price: 576 },
//   { name: 'Galaxy Note 5', price: 489 }
// ];

// function returnPrice() { // từ đầu tiên của chữ cái thứ 2 phải được viết hoa (Quy tắc đặt tên: camel case)
//   //// C1
//   for (let key of smartPhones) { // for .key.. of:  Hiểu là đại diện cho từng phần tử của mảng
//     console.log(`${key.name}: `, key.price);
//   }

//   //// C2
//   // for (let i = 0; i < smartPhones.length; i++) {
//   //   console.log(smartPhones[i].price);
//   // }
// }


// returnPrice();


///// Bài 03; Chuyển các hàm dưới đây => ES6 (Arrow Function)
function foo1(x, y, z) {
  console.log(x, y, z);
}

const foo_1 = (x, y, z) => {
  console.log(x, y, z);
}

foo_1(1, 2, 3)
// => Biến foo_1 chứa hàm. Dô được khai báo với cú pháp "const" => foo_1 là 1 hàm vĩnh cửu

/////Tương tự với các hàm dưới
// --------------------------
function foo2() {
  alert("Hello")
}
function foo3(a, b) {
  let m = a + b * 100
  return m;
}

const foo_3 = (a, b) => {
  let m = a + b * 100
  return m;
}
