function solution(bridge_length, weight, truck_weights) {
    // Array.from
    const cur_bridge = Array.from({ length: bridge_length }, () => 0);
    // const cur_bridge = Array(bridge_length).fill(0);
    let cur_weight = 0;
    let answer = 0;
    
    while(cur_bridge.length > 0) {
        answer++;
        
        cur_weight -= cur_bridge.shift();
        
        if(truck_weights.length > 0) {
            if(cur_weight + truck_weights[0] <= weight) {
                const t = truck_weights.shift();
                cur_bridge.push(t);
                cur_weight += t;
            } else {
                cur_bridge.push(0)
            }
        }
    }
    
    return answer;
}