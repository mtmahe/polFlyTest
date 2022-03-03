/**
 * Prompt: Implement a function that validates that the input Vehicles
 * have the expected minimum @param expectedYear and total cost is
 * @param expectedCost. Do not include vehicles with type `Trailer` in
 * either of these calculations.
 * You can assume the following shape of Vehicles below and that all
 * numbers will be sensible integers.
 * interface Vehicle {
 *   type: 'Truck' | 'Trailer' | 'Tractor'
 *   year: number
 *   value: number
 * }
 *
 * @param {Vehicle[]} input
 * @param {number} expectedCost The expected sum cost of all vehicles passed in
 * @param {number} expectedOldestYear The expected minimum year of all vehicles passed in
 * @return {boolean} A boolean indicating whether input matches expected{Cost,Year}
 */
function isValid (input, expectedCost, expectedOldestYear) {
  let inputLen = input.length;
  let totalCost = 0;
  let oldestYear = 3000;

  for (let i = 0; i < inputLen; i++) {
    if (input[i].type != 'Trailer') {
      if (input[i].year < oldestYear) oldestYear = input[i].year;
      totalCost += input[i].value;
    }
  }

  if (totalCost == expectedCost && oldestYear == expectedOldestYear) {
    return true
  }

  return false
}

/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid () {
  // My assumptions: Vehicles[] will not be empty and will contain at least 1 Truck or Tractor

  // Does it work with 1 valid vehicle?
  const first = [
    {type: 'Truck', year: 1990, value: 500}
  ]
  
  if (isValid(first, 500, 1990)) {
    console.log("First test passed")
  } else {
    console.log("First test failed")
  }

  // Check if working with 2 valid vehilces
  const second = [
    {type: 'Truck', year: 1990, value: 500}, 
    {type: 'Tractor', year: 1985, value: 200}
  ]

  if (isValid(second, 700, 1985)) {
    console.log("Second test passed")
  } else {
    console.log("Second test failed")
  }

  // Does it ignore the trailer?
  const third = [
    {type: 'Truck', year: 1990, value: 500}, 
    {type: 'Tractor', year: 1985, value: 200},
    {type: 'Trailer', year: 1970, value: 1000}
  ]

  if (isValid(third, 700, 1985)) {
    console.log("Third test passed")
  } else {
    console.log("Third test failed")
  }

  const fourth = []

  if (isValid(fourth, 0, 3000)) {
    console.log("Third test passed")
  } else {
    console.log("Third test failed")
  }  
  
}

testIsValid()