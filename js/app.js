let result;

for (let i = 0; i < 100; i++) {
  const n = i + 1;

  const fizz = n % 3;
  const buzz = n % 5;

  if (fizz === 0 && buzz === 0) {
    console.log("BuzzFizz");
    result = "BuzzFizz";
  } else if (buzz === 0) {
    console.log("Buzz");
    result = "Buzz";
  } else if (fizz === 0) {
    console.log("Fizz");
    result = "Fizz";
  } else {
    console.log(n);
    result = n;
  }

  let div = document.getElementById("container");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = result;
  div.append(paragraph);
}
