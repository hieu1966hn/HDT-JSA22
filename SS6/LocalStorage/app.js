/*
LocalStorage là gì?
- Hệ thống lưu trữ dữ liệu cục bộ trên máy tính cụ thể như sau:
- Lưu trữ dữ liệu cục bộ trên máy client (máy người dùng - hay có thể hiểu là máy chúng ta)
thông qua Javascript
- Cách lưu trữ: lưu trữ dưới dang: key - value
+ key: khóa
+ value: giá trị

VD: Khóa: tiền
    Giá trị: 50tr


Cú pháp:
- setItem: Đặt khóa-giá trị lên LS (LocalStorage)
- getItem: Lấy khóa - giá trị đi kèm về nơi đang lập trình.



Chú ý: LS chỉ lưu trữ dữ liệu dưới dạng là String (chuỗi) => các KDL khác
muốn lưu trữ trên LS phải => Ép kiểu về dạng String
*/

// let Dai = {
//   name: "Nguyễn Đức Quốc Đại",
//   age: 16,
//   address: "Thanh Hóa",
//   hobbies: "Đá bóng, xem phim"
// }

///// Lưu trữ thông tin Đại lên LS như sau:
//// C1: sử dụng cú pháp (ưu tiên dùng)
// localStorage.setItem("dai", JSON.stringify(Dai));



//// C2: Sử dụng cú pháp  sau
// localStorage.dai = JSON.stringify(Dai);


///// Lấy dữ liệu về máy với câu lệnh sau:
let dataDai = JSON.parse(localStorage.getItem("dai"));
console.log("dataDai: ", dataDai);



//// Update hobbies dai
dataDai.hobbies = "Đá bóng, xem phim, đi bơi"
console.log(dataDai);

localStorage.setItem("dai", JSON.stringify(dataDai));


////// Xóa sở thích (hobbies) và thêm thuộc tính là teacher: "Thầy Hiếu"
dataDai = JSON.parse(localStorage.getItem("dai"));
console.log("dataDai: ", dataDai);

//// xóa sở thích: 
delete dataDai.hobbies;

//// Thêm teacher vào
dataDai.teacher = "Thầy Hiếu"
console.log(dataDai);

//// Cập nhật mới trên localStorage
localStorage.setItem("dai", JSON.stringify(dataDai));




