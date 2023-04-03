import "./styles.css";

export default function App() {
  const firstArray = [0, 4, -1, 0, 3];
  const secondArray = [0, -2, 5, 0, 3];
  function solution(firstArray, secondArray) {
    const firstArrayLength = firstArray.length;
    
    let count = 0;
    //Calculate the sum of array
    let sumFirstArray = firstArray.reduce((acc, val) => acc + val, 0);
    let sumSecondArray = secondArray.reduce((acc, val) => acc + val, 0);

    let leftA = 0;
    let leftB = 0;

    // Run the loop for every values in arrays
    for (let i = 0; i < firstArrayLength - 1; i++) {
      //Check and compare the values
      leftA += firstArray[i];
      leftB += secondArray[i];
      sumFirstArray -= firstArray[i];
      sumSecondArray -= secondArray[i];

      // Checking for equal values from both arrays
      if (
        leftA === sumFirstArray &&
        leftB === sumSecondArray &&
        leftA === leftB
      ) {
        count++;
      }
    }
    return count;
  }
  return <div className="App">{solution(firstArray, secondArray)}</div>;
}
