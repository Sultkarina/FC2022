function countColleagues (x) {
    let onwork =x.filter(user => user ===true);
    return onwork.length;
}


console.log(countColleagues([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));