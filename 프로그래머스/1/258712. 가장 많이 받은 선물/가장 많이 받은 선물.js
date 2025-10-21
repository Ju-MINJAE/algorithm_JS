function solution(friends, gifts) {
    const giftCount = {};
    friends.forEach(friend => {
        giftCount[friend] = { 
            given: 0, 
            received: 0, 
            giftIndex: 0,
            giveTo: {},
            nextMonth: 0 
        };
    });
    
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(" ");
        giftCount[giver].given++;
        giftCount[receiver].received++;
        giftCount[giver].giveTo[receiver] = (giftCount[giver].giveTo[receiver] || 0) + 1;
        // console.log(giftCount);
    });
   
    friends.forEach(friend => {
        giftCount[friend].giftIndex = giftCount[friend].given - giftCount[friend].received;
    });
    
    for(let i=0; i < friends.length; i++) {
        for(let j =i+1; j<friends.length; j++) {
            const A = friends[i];
            const B = friends[j];
            // console.log(A, B);
            
            const AtoB = giftCount[A].giveTo[B] || 0;
            const BtoA = giftCount[B].giveTo[A] || 0;
            console.log(AtoB, BtoA);
            
            if(AtoB > BtoA) {
                giftCount[A].nextMonth++;
            } else if(BtoA > AtoB) {
                giftCount[B].nextMonth++;
            } else { // AtoB === BtoA
                if(giftCount[A].giftIndex > giftCount[B].giftIndex) {
                    giftCount[A].nextMonth++;
                } else if(giftCount[B].giftIndex > giftCount[A].giftIndex) {
                    giftCount[B].nextMonth++;
                }
                // 선물지수(giftIndex)도 동일하면 주고받지 않음.
            }
        }
    }
    
    return Math.max(...friends.map(f => giftCount[f].nextMonth));
}