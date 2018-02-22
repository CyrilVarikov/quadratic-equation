  var equation = '232 * x^2 - 867658424 * x + 772682780178192';
  var arr = equation.split(' ');

  var a, b, c;
  a = arr[0];
  if (arr[3] === '-') {
    b = -arr[4];
  } else {
    b = arr[4];
  }
  if (arr[arr.length - 2] === '-') {
    c = -arr[arr.length - 1];
  } else {
    c = arr[arr.length - 1];
  }
  console.log(a, b, c);
  var Discriminant = (b * b) - 4 * a * c;
  var x , y;
  x = (-b + Math.sqrt(Discriminant)) / (2 * a);
  y = (-b - Math.sqrt(Discriminant)) / (2 * a);
  var rootEquat = [];
  x = Math.round(x);
  y = Math.round(y);
  if (x < y) {
    rootEquat.push(x * 10 / 10);
    rootEquat.push(y * 10 / 10);
    // return rootEquat;
  } else {
    rootEquat.push(y);
    rootEquat.push(x);
    // return rootEquat;
  }
  console.log(rootEquat);
