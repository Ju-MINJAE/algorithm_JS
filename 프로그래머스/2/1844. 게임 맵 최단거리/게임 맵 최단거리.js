function solution(maps) {
    const visited = Array(maps.length).fill(0).map(() => Array(maps[0].length).fill(0));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const q = [];
    q.push([0, 0]);
    visited[0][0] = 1;

    while (q.length) {
        const [y, x] = q.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx < 0 || ny < 0 || ny >= maps.length || nx >= maps[0].length || maps[ny][nx] === 0) continue;
            if (visited[ny][nx]) continue;

            q.push([ny, nx]); 
            visited[ny][nx] = visited[y][x] + 1; 
        }
    }

    return visited[maps.length - 1][maps[0].length - 1] || -1;
}
