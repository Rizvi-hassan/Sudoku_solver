let find_missing = (arr) => {
    let val = [];
    for (let i = 1; i <= 9; i++) {
        if (arr.indexOf(i) === -1) {
            val.push(i)
        }
    }
    return val
}

let check_col = (val, col, values) => {
    for (let i = 0; i < 9; i++) {
        if (val === values[i][col]) {
            return true;
        }
    }
    return false;
}

let check_row = (val, row, values) => {
    for (let i = 0; i < 9; i++) {
        if (val === values[row][i]) {
            return true;
        }
    }
    return false;
}

let check_box = (val, row, col, values) => {
    row = parseInt(row / 3) * 3;
    col = parseInt(col / 3) * 3;
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if (values[i][j] === val) {
                return true;
            }
        }
    }
    return false;
}

export let row_Prob = (values) => {
    console.log('\n Row prob\n')
    for (let i = 0; i < 9; i++) {
        console.log('row: '+i)
        let emptyCount = 0;
        for (let j = 0; j < 9; j++) {
            emptyCount = (values[i][j] === 0) ? emptyCount + 1 : emptyCount;
        }
        // console.log("values: "+values)
        console.log('empty: '+emptyCount)
        if (emptyCount <= 6) {
            console.log('row: '+i)
            let nos = find_missing(values[i])
            let index = []
            for (let j = 0; j < 9; j++) {
                if (values[i][j] === 0) {
                    index.push(j)
                }
            }
            let prob = {}
            let occr = {}
            console.log("nos: " + nos)
            console.log("index: " + index)
            for (let k in index) {
                prob[index[k]] = []
            }
            for (let k in nos) {
                occr[nos[k]] = []
            }
            for (let k in prob) {
                for (let j in nos) {
                    if (!(check_col(nos[j], parseInt(k), values) || check_box(nos[j], i, parseInt(k), values))) {
                        prob[k].push(nos[j])
                        occr[nos[j]].push(parseInt(k))
                    }
                }
            }
            for (let m = 0; m< emptyCount; m++) {
                for (let l in prob) { console.log(l + " :" + prob[l] + " lngt: " + prob[l].length) }
                for (let l in occr) {console.log(l + " :" + occr[l] + " lngt: " + occr[l].length)}
                for (let k in prob) {
                    if (prob[k].length === 1) {
                        let digit = prob[k][0];
                        values[i][parseInt(k)] = digit;
                        document.getElementById(`r${i+1}c${parseInt(k)+1}`).value = digit;
                        delete prob[k]
                        delete occr[digit]
                        for (let l in prob) { prob[l] = prob[l].filter((val) => { return !(val === digit) }) }
                    }
                }
                for (let k in occr){
                    if (occr[k].length === 1){
                        let digit = parseInt(k);
                        let index = occr[k][0];
                        values[i][index] = digit;
                        document.getElementById(`r${i+1}c${index+1}`).value = digit;
                        delete prob[index]
                        delete occr[k]
                        for (let l in occr) { occr[l] = occr[l].filter((val) => { return !(val === index) }) }
                    }
                }
            }
        }
    }
}

export let col_Prob = (values) => {
    console.log('\ncolumns prob\n')
    for (let i = 0; i < 9; i++) {
        console.log('col: '+i)
        let col = []
        let emptyCount = 0;
        for (let j = 0; j < 9; j++) {
            col.push(values[j][i])
            emptyCount = (values[j][i] === 0) ? emptyCount + 1 : emptyCount;
        }
        console.log('empty: '+emptyCount)
        if (emptyCount <= 6) {
            let nos = find_missing(col)
            let index = []
            for (let j = 0; j < 9; j++) {
                if (values[j][i] === 0) {
                    index.push(j);
                }
            }
            let prob = {};
            let occr = {};
            console.log("nos: " + nos)
            console.log("index: " + index)
            for (let k in index) {
                prob[index[k]] = []
            }
            for (let k in nos) {
                occr[nos[k]] = []
            }
            for (let k in prob) {
                for (let j in nos) {
                    if (!(check_row(nos[j], parseInt(k), values) || check_box(nos[j], parseInt(k), i, values))) {
                        prob[k].push(nos[j])
                        occr[nos[j]].push(parseInt(k))
                    }
                }
            }
            for (let m = 0; m< emptyCount; m++) {
                for (let l in prob) { console.log(l + " :" + prob[l] + " lngt: " + prob[l].length) }
                for (let l in occr) {console.log(l + " :" + occr[l] + " lngt: " + occr[l].length)}
                for (let k in prob) {
                    if (prob[k].length === 1) {
                        let digit = prob[k][0];
                        values[parseInt(k)][i] = digit;
                        document.getElementById(`r${parseInt(k)+1}c${i+1}`).value = digit;
                        delete prob[k]
                        delete occr[digit]
                        for (let l in prob) { prob[l] = prob[l].filter((val) => { return !(val === digit) }) }
                    }
                }
                for (let k in occr){
                    if (occr[k].length === 1){
                        let digit = parseInt(k)
                        let index = occr[k][0]
                        values[index][i] = digit;
                        document.getElementById(`r${index+1}c${i+1}`).value = digit;
                        delete prob[index]
                        delete occr[k]
                        for (let l in occr) { occr[l] = occr[l].filter((val) => { return !(val === index) }) }
                    }
                }
            }
        }
    }
}

export let box_Prob = (values) => {
    for (let k = 0; k < 9; k++) {
        let [r, c] = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]][k];
        let emptyCount = 0;
        console.log("r: "+r +" c:"+ c)
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                emptyCount = (values[i][j] === 0) ? emptyCount + 1 : emptyCount;
            }
        }
        console.log(emptyCount)
        if (emptyCount <= 7) {
            let nos = []
            let box = []
            for (let i = r; i < r + 3; i++) {
                box = box.concat(values[i].slice(c, c + 3))
            }
            console.log("box: "+box)
            nos = find_missing(box)
            let index = [];
            for (let i = r; i < r + 3; i++) {
                for (let j = c; j < c + 3; j++) {
                    if (values[i][j] === 0) {
                        index.push([i, j])
                    }
                }
            }
            let prob = {}
            let occr = {}
            console.log("nos: " + nos)
            console.log("index: " + index)
            for (let i in index) {
                prob[index[i]] = []
            }
            for (let k in nos) {
                occr[nos[k]] = []
            }
            for (let i in prob){
                for (let j in nos){
                    if (! (check_row(nos[j], parseInt(i[0]), values) || check_col(nos[j], parseInt(i[2]), values) ) ) {
                        prob[i].push(nos[j]);
                        occr[nos[j]].push(i.split(','))
                    }
                }
            }
            for (let m = 0; m < emptyCount; m++){
                for (let i in prob) { console.log(i + " :" + prob[i] + " lngt: " + prob[i].length) }
                for (let i in occr) {console.log(i + " :" + occr[i] + " lngt: " + occr[i].length)}
                for (let i in prob){
                    if (prob[i].length === 1){
                        let digit = prob[i][0];
                        values[parseInt(i[0])][parseInt(i[2])] = digit;
                        document.getElementById(`r${parseInt(i[0])+1}c${parseInt(i[2])+1}`).value = digit;
                        delete prob[i]
                        delete occr[digit]
                        for (let i in prob) {prob[i] = prob[i].filter((val) => { return !(val === digit) })}
                        break
                    }
                }
                for (let i in occr){
                    if (occr[i].length === 1){
                        let digit = parseInt(i)
                        let [row, col] = occr[i][0]
                        values[parseInt(row)][parseInt(col)] = digit;
                        document.getElementById(`r${parseInt(row)+1}c${parseInt(col)+1}`).value = digit;
                        delete prob[[row, col]]
                        delete occr[k]
                        for (let i in occr) {occr[i] = occr[i].filter( (val) =>{ return !(val === [row, col])})}
                        break
                    }
                }
            }
        }
    }
}

// let values = [
//     [1, 2, 5, 0, 0, 0, 0, 0, 0],
//     [3, 4, 6, 0, 7, 0, 0, 0, 0],
//     [8, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 5, 0, 8, 0],
//     [0, 0, 7, 0, 2, 3, 0, 0, 0],
//     [0, 0, 0, 0, 4, 6, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]

// box_Prob(values)