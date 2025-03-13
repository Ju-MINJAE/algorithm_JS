function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    
    for (let k = 0; k < goal.length; k++) {
        if (i < cards1.length && cards1[i] === goal[k]) {
            i++;
        } else if (j < cards2.length && cards2[j] === goal[k]) {
            j++;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}
