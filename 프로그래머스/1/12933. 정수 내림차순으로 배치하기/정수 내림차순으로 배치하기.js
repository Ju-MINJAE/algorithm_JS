function solution(n) {
    const a = n.toString();
    const arr = a.split("");
    arr.sort((a,b)=> b-a);
    return Number(arr.join(""));
    
}