function solution(array, commands) {
    let answer = [];
    // let sliceArray = array.slice(commands[0][0]-1,commands[0][1])
    // sliceArray.sort((a,b)=>a-b)
    // answer.push(sliceArray[commands[0][2]-1])
    // console.log(answer)
    
    for(let i=0;i<commands.length;i++) {
        let sliceArray = array.slice(commands[i][0]-1,commands[i][1])
        sliceArray.sort((a,b)=>a-b)
        answer.push(sliceArray[commands[i][2]-1])
    }
    return answer
}