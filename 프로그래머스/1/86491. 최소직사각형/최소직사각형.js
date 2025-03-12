function solution(sizes) {
    let mw=0,mh=0;
    
    sizes.forEach((size)=> {
        size.sort((a,b)=>a-b);
        const [w,h] = size;
        if(mw<w) mw = w;
        if(mh<h) mh= h;
    })
    return mw*mh
}