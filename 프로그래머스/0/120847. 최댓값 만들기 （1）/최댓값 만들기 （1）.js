function solution(numbers) {
    let sortArray = numbers.sort((a,b)=>b-a);
    return sortArray[0]*sortArray[1];
}