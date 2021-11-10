function findDifference(a, b) {
    let res1 = 1
        ,res2 = 1;

    for(let elem1 of a){
        res1 *= elem1;
    }

    for(let elem2 of b){
        res2 *=elem2;
    }

    return res1 > res2 ? res1 - res2 : res2 - res1 ;
}