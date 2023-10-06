
for (let i = 0; i < 100; i++) {
    const n = i + 1

    const fizz = n % 3
    const buzz = n % 5

    if (fizz === 0 && buzz === 0) {
        console.log('BuzzFizz')
    } else if (buzz === 0) {
        console.log('Buzz')
    } else if (fizz === 0) {
        console.log('Fizz')
    } else {
        console.log(n)
    }

}