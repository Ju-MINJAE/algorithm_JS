function solution(phone_number) {
 let masked_number = phone_number
        .split('')
        .map((char, index) => index < phone_number.length - 4 ? '*' : char) 
        .join('');
    return masked_number;
}