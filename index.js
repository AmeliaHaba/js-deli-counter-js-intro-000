const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  const lineUp = `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
  return lineUp;
}
const nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return 'There is nobody waiting to be served!'
  const firstPersonInLine = katzDeliLine.shift();
  return `Currently serving ${firstPersonInLine}.`
}
const currentLine = (katzDeliLine) => {
  if (katzDeliLine.length === 0) return 'The line is currently empty.';

  // Approach 0: for loop with int
  let peopleWithNumbers = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    peopleWithNumbers.push(`${i+1}. ${katzDeliLine[i]}`);
  }

  // Approach 1: for loop with of
  // let peopleWithNumbers = [];
  // for (const person of katzDeliLine) {
  //   peopleWithNumbers.push(`${peopleWithNumbers.length+1}. ${person}`);
  // }

  // Approach 2: map
  // const peopleWithNumbers = katzDeliLine.map((element, number) => `${number+1}. ${element}`);

  // Approach 3: forEach
  // katzDeliLine.forEach((element, number) => {
    // peopleWithNumbers.push(`${number+1}. ${element}`);
  // });

  return `The line is currently: ${peopleWithNumbers.join(", ")}`
}
