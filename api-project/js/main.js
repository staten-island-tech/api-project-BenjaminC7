import "../styles/style.css";
function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}

const suzie = greet("Suzie");
console.log(suzie);
suzie.then((result) => {
  console.log(result);
});
