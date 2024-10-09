function solution(s) {
    const nums = s.split(" ").sort((a,b)=>a-b)
    return `${nums[0]} ${nums[nums.length-1]}`
}