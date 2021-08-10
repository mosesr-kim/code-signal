function makeArrayConsecutive2(statues) {
  let smallestNumber = statues[0];
  let biggestNumber = statues[0];
  let boxes = 0;
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] < smallestNumber) {
      smallestNumber = statues[i];
    }
    if (statues[i] > biggestNumber) {
      biggestNumber = statues[i];
    }
  }
  for (let i = 0; i < biggestNumber - smallestNumber; i++) {
    if (!statues.includes(smallestNumber + i)) {
      boxes++;
    }
  }
  return boxes;
}
