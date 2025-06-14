function solution(k, tangerine) {
    let answer = 0;
    const countMap = {};
    for (const t of tangerine) {
        countMap[t] = (countMap[t] || 0) + 1;
    }

    const freqArray = Object.values(countMap).sort((a,b)=>b-a);
    // console.log(freqArray);

    for(let i=0;i<freqArray.length;i++) {
        answer += 1;
        k -= freqArray[i];
        if(k <= 0) break;
    }
    return  answer;
}