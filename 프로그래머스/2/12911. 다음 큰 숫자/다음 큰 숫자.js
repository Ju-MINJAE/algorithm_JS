function count1(n) {
    return n.toString(2).split('').filter(bin => bin === '1').length;
}

function solution(n) {
    const nCnt1 = count1(n);
    let next = n + 1;

    while (count1(next) !== nCnt1) {
        next++;
    }

    return next;
}
