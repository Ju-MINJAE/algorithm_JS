function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);

    for (let j = 0; j < n; j++) {
        if (!visited[j]) {
            dfs(j);
            answer += 1;
        }
    }

    function dfs(i) {
        visited[i] = true;
        for (let k = 0; k < n; k++) {
            if (computers[i][k] === 1 && !visited[k]) dfs(k);
        }
    }

    return answer;
}
