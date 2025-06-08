function solution(n) {
    let answer = 0;
    
    for(let i=1;i<=n;i++) {
        let sum = 0;
        
        for(let j=i;j<=n;j++) {
            sum += j;
            if(sum === n) {
                answer += 1;
                break;
            } else if(sum > n) {
                // 효율성 테스트에서 탈락하여 추가
                break;
            }
        }
    }
    
    return answer;
}