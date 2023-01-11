function greet(name) {
  const greetpromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetpromise;
}

const suzie = greet("Suzie");
suzie.then((result) => {
  console.log(result);
});
