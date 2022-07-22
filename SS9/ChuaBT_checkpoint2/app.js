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

let smartPhones = [
  { name: 'iphone', price: 649 },
  { name: 'Galaxy S6', price: 576 },
  { name: 'Galaxy Note 5', price: 489 }
];

function returnPrice() { // từ đầu tiên của chữ cái thứ 2 phải được viết hoa (Quy tắc đặt tên: camel case)
  //// C1
  for (let key of smartPhones) { // for .key.. of:  Hiểu là đại diện cho từng phần tử của mảng
    console.log(`${key.name}: `, key.price);
  }

  //// C2
  // for (let i = 0; i < smartPhones.length; i++) {
  //   console.log(smartPhones[i].price);
  // }
}


returnPrice();