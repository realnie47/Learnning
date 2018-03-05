// 1.常量
// ES5
{
  Object.defineProperty(window,"PI2",{
    value: 3.1415926,
    writable: false
  })
  console.log(PI2);
}
// ES6
{
  const PI = 3.1415926;
  console.log(PI);
}

// 2.作用域