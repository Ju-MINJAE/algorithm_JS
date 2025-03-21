function solution(m, n, puddles) {
    let arr = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    arr[1][1] = 1;

    // 물 웅덩이 표시 (x, y) → (y, x)로 변환
    for (let [x, y] of puddles) {
        arr[y][x] = -1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if ((i === 1 && j === 1) || arr[i][j] === -1) continue; // 시작점과 물 웅덩이 건너뛰기

            if (arr[i - 1][j] > 0) arr[i][j] = (arr[i][j] + arr[i - 1][j]) % 1000000007;
            if (arr[i][j - 1] > 0) arr[i][j] = (arr[i][j] + arr[i][j - 1]) % 1000000007;
        }
    }
    
    return arr[n][m] === -1 ? 0 : arr[n][m]; // 목적지가 웅덩이면 0 반환
}
