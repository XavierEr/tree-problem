function solution(A) {
  let solutions = [];

  for (let i = 0, length = A.length; i < length; i++) {

    const treeChopped = A.splice(i, 1)[0];

    if (checkSolution(A)) {
      solutions.push(A);
    }
    A.splice(i, 0, treeChopped);
  }
  return solutions.length;
}

function checkSolution(solution) {
  for (let i = 0, length = solution.length; i < length; i++) {
    const currentTreeHeight = solution[i];

    if (i !== 0) {
      const previousTreeHeight = solution[i - 1];

      if (currentTreeHeight < previousTreeHeight) {
        return false
      }
    }
  }
  return true;
}
console.log(solution([3, 4, 5, 4])); // 2
console.log(solution([4, 5, 2, 3, 4])); // 0