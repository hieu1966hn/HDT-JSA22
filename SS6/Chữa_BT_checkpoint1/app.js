///// Bài 1
// function findEven(number) {
//   if (number >= 4 && number <= 20) { // &&: Chỉ trả về true khi các điều kiện tương ứng đều true. Còn lại trả về false
//     for (let i = 0; i <= number; i = i + 2) {
//       console.log(i);
//     }


//   }
// }

// findEven(6); // 0, 2,4,6


/////// Bài 2

// const h1 = document.getElementById("header");// Câu lệnh lấy ra thẻ nào có id là ... và gán vào biến h1


/*
Phương thức: TenThe.addEventListener("sự kiện", function(){
  /// hành động tương ứng......
})

*/
// Đổi màu chữ thẻ khi hover vào
// h1.addEventListener("mouseover", function () {
//   h1.style.color = "red";
// })


// // Trả về màu chữ nguyên vẹn khi di chuột ra
// h1.addEventListener("mouseleave", function () {
//   h1.style.color = "black";
// })



//////// Bài 03

// function numberOneTriangle() {
//   // hàng tăng dần từ 1 -> 5
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//       document.write("1")
//     }
//     document.write("</br>");
//   }
// }


// numberOneTriangle();


/*
for( box1, box2, box3){
  // coder ...
}

Mô tả:
- box1; nơi truyền vào giá trị ban đầu (option)_ và chỉ chạy trong lần lặp đầu tiên
- box2: Nơi nhập vào điều kiện dừng của vòng lặp (bắt buộc)
- box3: Nơi nhập vào câu lệnh thực hiện cuối cùng của vòng lặp
*/

for (let i = 0; i <= 10; i++) {
  //  Code bên trong for
  console.log(i);
}

// Hiển dự đoán kết quả là gì?
// Lần lặp đầu tiên: Khai báo biến i =0 -> Kiểm tra điều kiện (Đ)-> chạy code bên trong for -> chạy câu lệnh ở box3 -> quay lại bước kiểm tra điều kiện
                                         // (S) -> Kết thúc vòng lặp