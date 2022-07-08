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

const h1 = document.getElementById("header");// Câu lệnh lấy ra thẻ nào có id là ... và gán vào biến h1


/*
Phương thức: TenThe.addEventListener("sự kiện", function(){
  /// hành động tương ứng......
})

*/
// Đổi màu chữ thẻ khi hover vào
h1.addEventListener("mouseover", function () {
  h1.style.color = "red";
})


// Trả về màu chữ nguyên vẹn khi di chuột ra
h1.addEventListener("mouseleave", function () {
  h1.style.color = "black";
})

