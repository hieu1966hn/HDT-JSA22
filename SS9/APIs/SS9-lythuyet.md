API là gì? Công dụng của API?

// API - aplication program interface: Một cách để client tương tác với server

// Server-Database: Nó là nơi lưu trữ dữ liệu và cung cấp API cho client gọi tới
// Client: Gọi API

// Method- phương thức mặc định của "fetch" là GET
fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
.then((response) => response.json())
.then((data) => {
console.log(data)
})
