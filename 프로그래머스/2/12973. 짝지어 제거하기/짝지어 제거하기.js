function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== stack[stack.length - 1]) stack.push(s[i]);
        else  stack.pop();

        // console.log(stack);
    }

    return stack.length ? 0 : 1;
}