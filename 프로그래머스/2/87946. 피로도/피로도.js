function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false)
    let maxVisited = 0;
    
    function dfs(k,cnt) {
        for(let i=0;i<dungeons.length;i++) {
        if(!visited[i] && k>= dungeons[i][0]) {
            visited[i] = true;
            dfs(k-dungeons[i][1],cnt+1)
            visited[i] = false;
        }
    }
        if(maxVisited < cnt) maxVisited=cnt
    }
    
    dfs(k,0)
    
    return maxVisited
}