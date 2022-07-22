// function con_tho_an_co() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("con tho an co, uong bia");
//       resolve(7);
//     }, 3000);
//   });
// }

// function di_xem_phim(gioBatDauXemPhim) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("di xem phim");
//       resolve(gioBatDauXemPhim + 1);
//     }, 2000);
//   });
// }

// function di_hotel() {
//   console.log("di hotel");
// }

// con_tho_an_co()
//   .then((gioAnCoXong) => {
//     console.log(`an co xong luc ${gioAnCoXong}h`);
//     return di_xem_phim(gioAnCoXong); //gioAnCoXong == gio bat dau xem phim
//   })
//   .then((gioXemPhimXong) => {
//     console.log(`xem phim xong luc ${gioXemPhimXong}h`);
//     di_hotel();
//   })
//   .catch((error) => console.log(error));

// BTVN:
// Callback:
// function con_tho_an_co(hdSauKhiAnCo) {
//   setTimeout(() => {
//     console.log("con tho an co");
//     hdSauKhiAnCo();
//   }, 1000);
// }

// function con_tho_di_xem_phim(hdSauKhiXemPhim) {
//   setTimeout(() => {
//     console.log("con tho di xem phim");
//     hdSauKhiXemPhim();
//   }, 2000);
// }

// function con_tho_di_dao() {
//   setTimeout(() => {
//     console.log("con tho di dao");
//   }, 1000);
// }

// con_tho_an_co(() => con_tho_di_xem_phim(con_tho_di_dao));

// Promise:
// const gioBatDauDi = 19;
function con_tho_an_co(gioBatDauDi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`con tho an co luc ${gioBatDauDi}h`);
      resolve(gioBatDauDi + 1); // Tra ve gioAnXong
    }, 1000);
  });
}

function con_tho_di_xem_phim(gioBatDauXemPhim) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("con tho di xem phim");
      resolve(gioBatDauXemPhim + 2); // Tra ve gioXemPhimXong
    }, 2000);
  });
}

function con_tho_di_dao(gioBatDauDiDao) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("con tho di dao");
      resolve(gioBatDauDiDao + 1);
    }, 1000);
  });
}

con_tho_an_co(19)
  .then((gioAnXong) => {
    console.log(`con tho an xong luc ${gioAnXong}h`);
    return con_tho_di_xem_phim(gioAnXong); // gioAnXong = gioBatDauXemPhim
  })
  .then((gioXemPhimXong) => {
    console.log(`con tho xem phim xong luc ${gioXemPhimXong}h`);
    return con_tho_di_dao(gioXemPhimXong); // gioXemPhimXong = gioBatDauDiDao
  })
  .then((gioDiDaoXong) => {
    console.log(`con tho di dao xong luc ${gioDiDaoXong}h`);
    console.log(`Tong thoi gian cua tho: ${gioDiDaoXong - 19}h`);
  })
  .catch((error) => {
    console.log(error);
  });
