
export const maxRepetation = (values) => {
    let data = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (values[i][j] !== 0) {
                data[values[i][j]] += 1;
            }
        }
    }
    let rValue = []
    for (let i in data) {
        if (data[i] !== 9 && data[i] >= 2) {
            rValue.push(parseInt(i))
        }
    }
    return rValue;
}

const colCheck = (col, no, values) => {
    for (let i = 0; i < 9; i++) {
        if (parseInt(values[i][col]) === parseInt(no)) {
            return true;
        }
    }
    return false;
}

const rowCheck = (row, no, values) => {
    for (let i = 0; i < 9; i++) {
        if (parseInt(values[row][i]) === parseInt(no)) {
            return true;
        }
    }
    return false;
}

export const elimination = (c, values) => {
    for (let k = 0; k <= 6; k += 3) { // to iterate thorught row of boxes ( three in number: 0, 3, 6)
        let occurance = []
        for (let i = k; i < k + 3; i++) { // to iterate thorugh individual rows of a row of boxes
            for (let j = 0; j < 9; j++) {
                if (values[i][j] === c) {
                    occurance.push([i, j])
                    break
                }
            }
        }
        console.log('occurance',occurance)
        if (occurance.length === 2) {
            let [r1, c1, r2, c2] = [occurance[0][0], occurance[0][1], occurance[1][0], occurance[1][1]];
            let r3 = [k, k + 1, k + 2].filter((value) => { return ([r1, r2].indexOf(value) !== -1) ? false : true; })[0];
            let c3 = [0, 3, 6].filter((value) => { return ([parseInt(c1 / 3) * 3, parseInt(c2 / 3) * 3].indexOf(value) !== -1) ? false : true; })[0];
            let ct = []
            for (let i = c3; i < c3 + 3; i++) {
                if (values[r3][i] === 0) {
                    if (!colCheck(i, c, values)) {
                        ct.push(i)
                    }
                }
            }
            console.log("count: ",ct)
            if (ct.length === 1) {
                values[r3][ct[0]] = c;
                document.getElementById(`r${r3+1}c${ct[0]+1}`).value = c
                // for (let i = 0; i < 9; i++) { console.log(values[i]) }
                console.log(c+" at "+r3+ ct[0])
                return 
            }
            else { continue; }
        }
    }

    // to check column wise
    for(let k = 0; k <= 6; k+= 3){
        let occurance = [];
        for (let i = k; i< k+ 3; i++){
            for (let j = 0; j < 9; j++){
                if (values[j][i] === c){
                    occurance.push([j, i]);
                    break;
                }
            }
        }
        if (occurance.length === 2){
            let [r1, c1, r2, c2] = [occurance[0][0], occurance[0][1], occurance[1][0], occurance[1][1]];
            let r3 = [0, 3, 6].filter((value) =>{return ([parseInt(r1 / 3) * 3, parseInt(r2 / 3) * 3].indexOf(value) !== -1) ? false : true; })[0];
            let c3 = [k, k + 1, k + 2].filter((value) => { return ([c1, c2].indexOf(value) !== -1) ? false : true; })[0];
            
            let ct = []
            for (let i = r3; i< r3+3; i++){
                if (values[i][c3] === 0){
                    if(! rowCheck(i, c, values)){
                        ct.push(i)
                    }
                }
            }
            if(ct.length === 1){
                values[ct[0]][c3] = c;
                document.getElementById(`r${ct[0]+1}c${c3+1}`).value = c
                // for (let i = 0; i < 9; i++) { console.log(values[i]) }
                console.log(c+" at "+ct[0]+ c3)
                return 
            }
            else{continue; }
        }
    }
}

// let values = [
//     [1, 1, 2, 3, 5, 6, 7, 8, 9],
//     [1, 2, 0, 0, 0, 4, 0, 4, 0],
//     [1, 2, 0, 0, 0, 0, 0, 0, 0],
//     [1, 2, 4, 0, 5, 0, 0, 4, 0],
//     [1, 2, 0, 0, 0, 5, 0, 0, 0],
//     [1, 2, 0, 5, 0, 0, 0, 0, 0],
//     [1, 2, 0, 0, 0, 0, 0, 0, 0],
//     [1, 2, 0, 5, 0, 0, 0, 4, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]



// let values = [
//     [1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// elimination(values)
