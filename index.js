function greet(name) {
  const greetpromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetpromise;
}

const suzie = greet("Suzie");
console.log(suzie);
