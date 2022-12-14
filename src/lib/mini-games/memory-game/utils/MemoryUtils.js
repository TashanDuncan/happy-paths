const makeRepeatedArr = (size) => {
  const length = size * size;

  return [...Array(length).keys()].map((_, key) => {
    const val =
      key === length * 0.5
        ? length * 0.5 - 1
        : key > length * 0.5
        ? length - key - 1
        : key;

    console.log(`${key} - ${val}`);

    return {
      key,
      val,
      img: `linear-gradient(#e66465, #9198e5)`,
      solved: false,
    };
  });
};

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

export { makeRepeatedArr, shuffleArray, markSolved };
