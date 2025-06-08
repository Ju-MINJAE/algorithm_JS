function solution(n, works) {
    // works의 합이 n보다 작은 경우(테스트 케이스 #3) 예외 처리
    if(works.reduce((a,b)=> a+b) <= n) return 0;
    
    let works2 = works.sort((a,b) => b-a);
    while(n>0) {
        let maxValue = works2[0];
        
        for(let i=0;i<works2.length;i++) {
            
            if(works2[i]>=maxValue) {
                works2[i] -= 1;
                n -= 1;
            }
            if(n === 0) break;
        }
    }
    return  works2.reduce((a,b) => a+b*b,0)
}