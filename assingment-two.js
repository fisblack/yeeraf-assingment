const modulation = length => {
  Array
    .from({ length }, (_, i) => i + 1)
    .forEach(number => {
      (number % 3 === 0 && number % 5 === 0) ? console.log('ThreeFive') : number % 3 === 0 ? console.log('Three') : number % 5 === 0 ? console.log('Five') : console.log(number)
    })
}

modulation(15)