let dbArray = ['1','2','3','4','5','6','7','8','9','10'];
let userOptionsArr = [];
const userOptionsMaxLenght = 5;
let correctAnswer = '';

export const getRandomIndex = (length) => Math.floor(Math.random() * length);

export const getRandomItem = (arr) => arr[getRandomIndex(arr.length)];

export const shuffleArr = (arr) => arr.sort(() => Math.random() - 0.5);

export const findCorrectAnswer = (arr) => {
  correctAnswer = arr[getRandomIndex(arr.length)];
  return correctAnswer;
}

export const pushCorrectOption = (correct, arr) => {
  arr.push(correct);
  return arr;
}

export const fillAnArray = (arr, maxLength) => {
  let resultArr = [];

  while (resultArr.length < maxLength) {
    const item = getRandomItem(arr);
    
    if ( !resultArr.includes(item) ) {
      resultArr.push(item)
    }
  }
  
  return shuffleArr(resultArr);
}

export const getArrOfUserOptions = () => {
  findCorrectAnswer(dbArray);
  pushCorrectOption(correctAnswer, userOptionsArr);
  fillAnArray(userOptionsArr, userOptionsMaxLenght)
}

getArrOfUserOptions()
