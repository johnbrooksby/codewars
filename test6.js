function f(n) {
    // If the box is used twice you get 3n out
    n = (.5 * n) + n
    // n = n * (3/2)
    return n
  }

  console.log(f(f(2)))