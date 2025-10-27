function solution(today, terms, privacies) {
    const answer = [];
    
    const dateToDay = (dateStr) => {
        const [year, month, day] = dateStr.split(".").map(Number);
        return year * 12 * 28 + month * 28 + day;
    }
    
    const todayDays = dateToDay(today);
    
    for(let i = 0; i < privacies.length; i++) {
        let [date, type] = privacies[i].split(" ");
        
        for(let j = 0; j < terms.length; j++) {
            let [termType, months] = terms[j].split(" ");
            
            if(termType === type) {
                const collectedDays = dateToDay(date);
                const expiryDays = collectedDays + (parseInt(months) * 28);
                
                if(todayDays >= expiryDays) {
                    answer.push(i + 1);
                }
                break;
            }
        }
    }
    
    return answer;
}