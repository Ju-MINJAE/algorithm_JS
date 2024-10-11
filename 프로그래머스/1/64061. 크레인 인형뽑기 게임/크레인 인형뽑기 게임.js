// moves 길이만큼 반복
// (반복문) moves[i]열로 이동
// 0이 아닌 수를 result에 추가, board에서 0으로 변경
// result 배열에서 i번째 원소와 i+1번째 원소를 비교
// 같은 횟수 cnt를 리턴

function solution(board, moves) {
    let result = [];
    let cnt = 0;
    
    for (let i=0;i<moves.length;i++) {
        let move = moves[i] - 1;
        for (let j=0;j<board.length;j++) {
            if (board[j][move] !== 0) {
                let picked = board[j][move];
                board[j][move] = 0; 
                if (result.length > 0 && result[result.length - 1] === picked) {
                    result.pop();
                    cnt += 2;
                } else {
                    result.push(picked);
                }
                break;
            }
        }
    }
    return cnt;
}