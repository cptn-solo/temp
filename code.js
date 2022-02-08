function func(s, a, b) {

    if (s.match(/^$/)) {
        return -1;
    }
    
    let i = s.length -1;
    let aIndex = -1;
    let bIndex = -1;

    while ((aIndex == -1) && (bIndex == -1) && (i>0)) {
        if (s.substring(i,i + 1) == a && s.substring(i, i + 1)==b) {
            aIndex = i;
            bIndex = i;
        }
        i = i -1;
    }

    if (aIndex != -1) {
        if (bIndex == -1){
            return aIndex;
        }
        else if  (bIndex != -1) {
            return bIndex;
        }else{
            return Math.max(aIndex, bIndex);;
        }
    }
}
