function solution(s) {
    let strings = ['zero','one','two','three','four','five','six','seven','eight','nine']
    var answer = s;
    
    for(let i=0;i<strings.length;i++) {
        let arr = answer.split(strings[i])
        answer = arr.join(i)
        console.log(answer)
    }
    return Number(answer);
}