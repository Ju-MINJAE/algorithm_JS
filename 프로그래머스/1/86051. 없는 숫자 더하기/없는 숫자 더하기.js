function solution(numbers) {
    const numSort = numbers.sort((a,b)=>a-b);
    // console.log(numSort);
    let answer = 45;
    
    for(let i=0;i<numSort.length;i++) {
        answer -= numSort[i];
    }
    return answer;
}