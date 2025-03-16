function solution(s){
    const str = s.toUpperCase();
    const arr = str.split('')
    let Pcnt =0,Ycnt = 0;
    
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === 'P') Pcnt +=1;
        if(arr[i] === 'Y') Ycnt +=1;
        
        console.log(Pcnt,Ycnt)
    }
    return Pcnt === Ycnt ? true : false;
}