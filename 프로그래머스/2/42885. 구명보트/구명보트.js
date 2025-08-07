function solution(people, limit) {
    people = people.sort((a,b)=>a-b);
    let cnt = 0;
    
    while(people.length) {
        if(people[0] + people.at(-1) <= limit) {
            people.pop();
            people.shift();
            cnt++;
        } else {
            people.pop();
            cnt++;
        }
    }
    return cnt;
}