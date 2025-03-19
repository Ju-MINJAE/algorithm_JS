function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i=0;i<n;i++) {
        const binaray = (arr1[i] | arr2[i]).toString(2).padStart(n, '0')
        // console.log(binaray)
        let row = [];
        for(let j=0;j<n;j++) {
            if(binaray[j]==='1') row.push('#');
            else row.push(' ');
        }
        answer.push(row.join(''))
        // console.log(answer)
    }
    return answer
}