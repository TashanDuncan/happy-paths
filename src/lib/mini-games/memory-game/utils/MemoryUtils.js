const shuffleArray = (arr) => {
  const updatedArr = [...arr];
  for (let i = updatedArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = updatedArr[i];
    updatedArr[i] = updatedArr[j];
    updatedArr[j] = temp;
  }
  return updatedArr;
};

const markSolved = (arr, peekArr) => {
  let updatedArr = [...arr];
  updatedArr = updatedArr.map((cell) => {
    if (cell.key === peekArr[0] || cell.key === peekArr[1]) {
      cell.solved = true;
    }

    return cell;
  });
  return updatedArr;
};

export { shuffleArray, markSolved };
