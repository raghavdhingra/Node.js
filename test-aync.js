// NORMAL FUNCTION

const fun1 = () => {
  setTimeout(() => {
    return 1;
  }, 2000);
};

const fun2 = () => {
  let val = 0;
  console.log(val);
  val = fun1();
  console.log(val);
};

fun2();

// CALLBACK FUNCTION

const fun1 = (request, callback) => {
  console.log(request);
  setTimeout(() => {
    return callback("hey", "yo");
  }, 1000);
  console.log("end");
};

const fun2 = () => {
  fun1("yo", (x, y) => {
    console.log(x);
    console.log(y);
  });
  console.log("END");
};

fun2();

const func1 = (t) => {
  setTimeout(() => {
    return console.log(t);
  }, 1000);
};

const func2 = (t, callback) => {
  setTimeout(() => {
    callback(t);
  }, 2000);
};

func2("yo", func1);

// PROMISES

// const fun2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hey1");
//       const err = true;
//       if (!err) resolve({ data: "Some data", status: 200 });
//       else reject({ error: "Something Wrong Happened", status: 500 });
//     }, 2000);
//   });
// };

// fun2()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ASYNC / AWAIT
// const fun0 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hey");
//       let err = false;
//       if (!err) resolve();
//       else reject("some error");
//     }, 1000);
//   });
// };
// function fun2() {
//   setTimeout(() => {
//     console.log("fun2");
//   }, 2000);
// }
// async function fun1() {
//   console.log("start");
//   fun0()
//     .catch((err) => console.log(err))
//     .then(() => {
//       console.log("end");
//     });
// }

// fun1();
