function func(s, a, b) {

    if (s.match(/^$/)) {
        return -1;
    }

    var i = s.length -1;
    var aIndex = -1;
    var bIndex = -1;

    while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
        let substr = s.substring(i, i + 1);
            
        if (substr == a) {
            aIndex = i;
        }
        if (substr == b) {
            bIndex = i;
        }
        i--;
    }
    
    if (aIndex != -1 && bIndex != -1) {
        return Math.max(aIndex, bIndex);
    } else if (aIndex == -1 && bIndex == -1) {
        return -1;
    }   
    return aIndex != -1 ? aIndex : bIndex;
 }
