function solution(progresses, speeds) {
    const answer = [];
    const days = [];
    
    for(let i=0;i<progresses.length;i++){
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
        
        // console.log(days);
    }
    while(days.length > 0) {
        let count = 1;
        
        for(let i=1;i<=days.length;i++) {
            // console.log(answer, days);
            if(days[0] >= days[i]) {
                count++;
                continue;
            }
            answer.push(count);
            days.splice(0,count);
            break;
        }
    }
    
    return answer;
}