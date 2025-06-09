function solution(n) {
    const nArr = n.toString().split("");
    // console.log(nArr);
    const reArr = nArr.reverse();
    // console.log(reArr.map(Number))
    return reArr.map(Number);
}