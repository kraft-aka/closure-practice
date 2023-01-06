// closures
// const prompt = require('prompt');
// prompt.start();

function createCalcFunc(n) {
  return function () {
    // let number = prompt.get(['number'], function(err,result) {
    //   console.log(number)
    //});
    return 1000 * n;
  };
}

const calc = createCalcFunc(50);
calc();

// incremets number
function incrementNumber(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = incrementNumber(1);
//console.log(addOne(100))

// decrements number
function decrementNumber(n) {
  return function (num) {
    return n - num;
  };
}

const minusOne = decrementNumber(100);
//console.log(minusOne(50))

// generate urls
function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const com = urlGenerator("com");
const de = urlGenerator("de");

// console.log(com('google'));
// console.log(com('amazon'));

// console.log(de('spiegel'));
// console.log(de('ebay'));

const person1 = {
  name: "John Doe",
  age: 25,
  position: "Backend Developer",
  avatar: "( ͡❛ ‿‿ ͡❛)",
};
const person2 = {
  name: "Bob Joe",
  age: 35,
  position: "UX Designer",
  avatar: "( ͡~ ‿‿ ͡°)✌",
};

// binds
function bind(cxt, fn) {
  return function (...args) {
    fn.apply(cxt, args);
  };
}

// logs person's data
function logPerson() {
  console.log(
    `Person ${this.name}, ${this.age}, ${this.position}, ${this.avatar}`
  );
}

// bind(person1, logPerson)()
// bind(person2, logPerson)()

// logs perosn's data without closure
function logNames(obj) {
  const { name, age, position, avatar } = obj;
  return `${name} ${age} ${position} ${avatar}`;
}

console.log(logNames(person1));
