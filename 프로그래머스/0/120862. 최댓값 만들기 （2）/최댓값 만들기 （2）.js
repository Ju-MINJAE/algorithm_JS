function solution(numbers) {
    let answer = -Infinity;
    for(let i=0;i<numbers.length-1;i++) {
        for(let j=i+1;j<numbers.length;j++) {
            if(numbers[i] * numbers[j] > answer) {
                answer = numbers[i] * numbers[j]
            }
        }
    }
    return answer;
}