function an_com(gioBatDauAnCom) {
  console.log(`Gio bat dau an com: ${new Date().getSeconds()}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(gioBatDauAnCom + 2);
      console.log(`Gio an com xong: ${new Date().getSeconds()}`);
    }, 2000);
  });
}

function xem_TV(gioBatDauXemTV) {
  console.log(`Gio bat dau xem TV: ${new Date().getSeconds()}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(gioBatDauXemTV + 1);
      console.log(`Gio xem TV xong: ${new Date().getSeconds()}`);
    }, 1000);
  });
}

function di_dao(gioBatDauDiDao) {
  console.log(`Gio bat dau di dao: ${new Date().getSeconds()}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(gioBatDauDiDao + 2);
      console.log(`Gio di dao xong: ${new Date().getSeconds()}`);
    }, 2000);
  });
}

function di_ngu() {
  console.log(`Di ngu ZzzzzzZ`);
}
const gioBatDau = 20;

// an_com(gioBatDau)
//   .then((gioAnComXong) => {
//     return xem_TV(gioAnComXong);
//   })
//   .then((gioXemTVXong) => {
//     return di_dao(gioXemTVXong);
//   })
//   .then((gioDiDaoXong) => {
//     return di_ngu();
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((error) => {
//     error;
//   });

// An com va xem tv cung luc, xong di ngu:
// Promise.all([an_com(gioBatDau), xem_TV(gioBatDau)])
//   .then((gioXemTVXong) => {
//     return di_ngu();
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((error) => {
//     error;
//   });

// An com xong, xem tv va di dao cung luc, xong sau do di ngu
// an_com(gioBatDau)
//   .then((gioAnComXong) => {
//     return Promise.all([xem_TV(gioAnComXong), di_dao(gioAnComXong)]);
//   })
//   .then((finishTime) => {
//     console.log("Lay gio tu promise: ", finishTime);
//     return di_ngu();
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((error) => {
//     error;
//   });

// async function doSomething() {
//   const gioAnComXong = await an_com(18);
//   console.log(gioAnComXong);
// }
// doSomething();

// an_com => xem_TV => di_ngu
// async function con_tho() {
//   const gioAnComXong = await an_com(gioBatDau);
//   await xem_TV(gioAnComXong);
//   di_ngu();
// }
// try {
//   con_tho();
// } catch (error) {
//   console.log(error);
// }

// Execution Queue <= Job Queue (Promise,...) <= Task Queue/Callback Queue (setTimeOut,...)
