async function getData() {
  console.log("Loading Covid Data...");
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Loaded Data Successfully!");
    })
    .catch((error) => console.log(error));
}

// async function main() {
//   console.log("Loading Covid Data...");
//   await getData();
//   console.log("Loaded Data Successfully!");
// }

// main();

getData();

// Gọi API (https://api.covid19api.com/summary) để lấy data covid và xuất ra thống kê như sau (Console.log) Làm bài 2 cách promise/ async await

// Đang lấy dữ liệu, xin vui lòng chờ...
// Đã lấy dữ liệu thành công, đang xuất thống kê:
// Dữ liệu Covid hôm nay:
// Nhiễm mới: 483124 - Số người chết mới: 2415 - Tổng số người chết: 6207172
// Quốc Gia có số lượng tổng cộng người chết nhiều nhất là: VietNam (123434 người)
// Quốc Gia có số lượng người mắc mới trong ngày nhiều nhất là: Brazil (123123 người)
