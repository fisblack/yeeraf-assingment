const sumForResult = (arr, sum) => {
  let match = []
  arr.forEach((elemFirst, index) => {
    arr.slice(index + 1).forEach((elemSec, key) => {
      elemFirst + elemSec === sum ? match.push(`${index},${key + index + 1}`) : ""
    })
  })

  console.log(match.length ? match : "no output")
}

sumForResult([2, 7, 11, 15], 9)
sumForResult([3, 2, 4], 6)
sumForResult([3, 1, 2, 3], 6)
sumForResult([3, 2], 3)
