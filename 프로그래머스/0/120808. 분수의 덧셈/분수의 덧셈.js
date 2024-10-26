function solution(numer1, denom1, numer2, denom2) {    
    const answer = [];
    
    const numerator = numer1 * denom2 + numer2 * denom1;
    const denominator = denom1 * denom2;
    
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(numerator, denominator);
    
    answer[0] = numerator / divisor;
    answer[1] = denominator / divisor;
    
    return answer;
}
