function solution(s) {
    let answer = 0;
    const len = s.length;
    
    if(len % 2 === 1) return 0;

    for (let i = 0; i < len; i++) {
        const str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let isCorrect = true;
        
        for(let n of str) {
            // console.log(n);
            if(n === "{" || n === "(" || n === "[") {
                stack.push(n);
                // console.log(stack);
            } else {
                let lastStr = stack.pop();
                if (lastStr === "(" && n === ")") continue;
                if (lastStr === "{" && n === "}") continue;
                if (lastStr === "[" && n === "]") continue;
              	isCorrect = false;
                break;
            };
        }
        if (isCorrect) answer++;
    }
    return answer;
}