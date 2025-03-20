function solution(numbers) {
    numbers.sort((a,b)=>{
        const ab = String(a) + String(b);
        const ba = String(b) + String(a);
        return ba.localeCompare(ab)
    })
    console.log(numbers)
    if (numbers[0] === 0) return "0";
    return numbers.join('')
}