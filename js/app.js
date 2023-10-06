let result;
let className = "box p-2 square mx-2 d-inline-flex justify-content-center align-items-center ";

for (let i = 0; i < 100; i++) {
  const n = i + 1;

  const fizz = n % 3;
  const buzz = n % 5;

  if (fizz === 0 && buzz === 0) {
    console.log("FizzBuzz");
    result = "FizzBuzz";
    className = className + "bg-danger";
  } else if (buzz === 0) {
    console.log("Buzz");
    result = "Buzz";
    className = className + "bg-warning";
  } else if (fizz === 0) {
    console.log("Fizz");
    result = "Fizz";
    className = className + "bg-success";
  } else {
    console.log(n);
    result = n;
    className = className + "bg-primary";
  }

  let div = document.getElementById("container");
  let paragraph = document.createElement("p");
  paragraph.classList = className;
  paragraph.innerHTML = result;
  div.append(paragraph);

  className = "box p-2 square mx-2 d-inline-flex justify-content-center align-items-center ";
}
