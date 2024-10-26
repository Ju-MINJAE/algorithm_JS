function solution(land) {
    const n = land.length;
    const m = land[0].length;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const oilCntCol = new Array(m).fill(0); 
    const visited = Array.from(Array(n), () => Array(m).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                let cnt = 0;
                const queue = [[i, j]];
                visited[i][j] = true;
                const columnsInRegion = new Set(); 

                while (queue.length > 0) {
                    const [y, x] = queue.shift();
                    cnt += 1;
                    columnsInRegion.add(x); 

                    for (let k = 0; k < 4; k++) {
                        const nx = x + dx[k];
                        const ny = y + dy[k];

                        if (nx >= 0 && ny >= 0 && nx < m && ny < n && land[ny][nx] === 1 && !visited[ny][nx]) {
                            queue.push([ny, nx]);
                            visited[ny][nx] = true;
                        }
                    }
                }

                columnsInRegion.forEach(col => {
                    oilCntCol[col] += cnt;
                });
            }
        }
    }

    return Math.max(...oilCntCol); // 최댓값 반환
}
