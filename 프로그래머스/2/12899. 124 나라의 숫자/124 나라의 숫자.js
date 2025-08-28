function solution(n) {
    const arr_124 = ["1","2","4"];
    let answer = "";

    while(n>0) {
        let remainder = n%3;
        n = Math.floor(n/3);
        
        if(remainder === 0) {
            remainder = 3
            n = n-1;
        } 
        answer = arr_124[remainder - 1] + answer;
    }
    return answer;
}