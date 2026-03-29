function solution(priorities, location) {
    let answer = 0;
    let arr = [];
    
    for(let i=0;i<priorities.length; i++) {
        arr.push(i);    
    }
    
    while(priorities.legnth !== 0) {
        let maxValue = Math.max(...priorities);
        
        if(priorities[0] < maxValue) {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            answer++;
            priorities.shift();
            
            if(arr.shift() === location) return answer;
        }
    }
}