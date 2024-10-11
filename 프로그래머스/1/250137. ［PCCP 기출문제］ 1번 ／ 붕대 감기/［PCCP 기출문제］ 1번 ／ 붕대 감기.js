function solution(bandage, health, attacks) {
    //  bandage [시간, 회복량, 추가 체력]
    //  health 최대 체력
    //  attacks [몬스터 공격 시간, 피해량]
    
    let curHP = health; //30
    let healTime =0 ;
    const lastAttack = attacks[attacks.length-1][0]; //11
    console.log(attacks[0][0])
    for(let i=1;i<=lastAttack;i++) {
        if(i === attacks[0][0]) {
            curHP -= attacks[0][1]
            attacks.shift();
            healTime = 0
            if(curHP<=0) {
                curHP = -1;
                break;
            }
        } else {
            if(curHP+bandage[1] >= health) curHP = health;
            else curHP += bandage[1]
            healTime++;
            
            if(healTime === bandage[0]) {
                healTime = 0;
                curHP + bandage[2] >health? curHP = health : curHP += bandage[2]
            }
        }
    }
    return curHP
}