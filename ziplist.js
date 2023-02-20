// ATTEMPT 1: 21:48
// ATTEMPT 2: 4:41


const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

function zipList(list1, list2) {
  let i = 0;
  const combined = [];

  while (i < list1.length) {
    combined.push(list1[i]);
    combined.push(list2[i]);
    i++;
  }
  return combined;
}

const zipListCombined = zipList(listOne, listTwo);
console.log(zipListCombined);

function zipListTheSimpleWay(list1, list2) {
  let combinedUnderscore = _.zip(list1, list2);
  combinedUnderscore = _.flatten(combinedUnderscore, 1);
  return combinedUnderscore;
}

const simpleWayCombined = zipListTheSimpleWay(listTwo, listTwo);
console.log(simpleWayCombined);
